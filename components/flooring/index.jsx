'use client';
import { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import { pickLang, img, gallery } from './data';
import CSS from './flooringCss';

const LANGS_UI = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' }
];

/** 把 '普通|高亮|普通' 渲染成带 .hl 的富文本 */
function Rich({ text }) {
  const parts = String(text == null ? '' : text).split('|');
  return <>{parts.map((p, i) => (i % 2 === 1 ? <b key={i} className='hl'>{p}</b> : p))}</>;
}

/** 锚点滚动：用 scrollIntoView 而非 hash，避免污染 URL */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function FlooringPage({ siteInfo }) {
  const [lang, setLang] = useState('zh');
  const [tab, setTab] = useState('p1');
  const [detail, setDetail] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [contact, setContact] = useState(false);
  const [cpMounted, setCpMounted] = useState(false);
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [wxCopied, setWxCopied] = useState(false);

  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const movedRef = useRef(0);
  const pillRef = useRef(null);
  const lksRef = useRef(null);
  const cpRef = useRef(null);
  const ctaRef = useRef(null);
  const rafRef = useRef(null);

  const L = useMemo(() => pickLang(lang), [lang]);

  /* ---------- 语言：SSR 渲染中文，客户端在绘制前切到用户语言（不闪） ---------- */
  useLayoutEffect(() => {
    let code = null;
    try { code = window.localStorage.getItem('flooring-lang'); } catch (e) { /* 隐私模式 */ }
    if (code !== 'zh' && code !== 'en' && code !== 'ja') {
      const n = (navigator.language || navigator.userLanguage || '').toLowerCase();
      code = n.indexOf('zh') === 0 ? 'zh' : (n.indexOf('ja') === 0 ? 'ja' : 'en');
    }
    setLang(code);
  }, []);

  /* 标题随语言变化：SSR 给的是中文，切语言后在客户端改写。
     格式沿用站点惯例「页面名 | 站点名」。 */
  useEffect(() => {
    // 与哥其它站点的标题格式一致：站点名在前，用全角竖线分隔
    document.title = 'Seaportcy丨' + L.ui.pageTitle;
  }, [L]);

  const chooseLang = (code) => {
    setLang(code);
    try { window.localStorage.setItem('flooring-lang', code); } catch (e) { /* ignore */ }
  };

  /* ---------- 滚动：Hero 离开视口后左右块上滑脱离 ---------- */
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      setScrolled(hero.getBoundingClientRect().bottom < 140);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---------- 锚点导航：滚动高亮 + 指示器滑动 ---------- */
  useEffect(() => {
    const ids = L.nav.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = ids.indexOf(e.target.id);
          if (i >= 0) setActive(i);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [L]);

  /* 指示器就位 */
  useEffect(() => {
    const pill = pillRef.current;
    const box = lksRef.current;
    if (!pill || !box) return;
    const links = box.querySelectorAll('.lk');
    const a = links[active];
    if (!a) return;
    pill.style.width = a.offsetWidth + 'px';
    pill.style.transform = 'translateX(' + a.offsetLeft + 'px)';
    pill.classList.add('ready');
  }, [active, L]);

  useEffect(() => {
    const onResize = () => {
      const pill = pillRef.current;
      const box = lksRef.current;
      if (!pill || !box) return;
      const a = box.querySelectorAll('.lk')[active];
      if (!a) return;
      pill.style.width = a.offsetWidth + 'px';
      pill.style.transform = 'translateX(' + a.offsetLeft + 'px)';
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);

  /* ---------- 滚动入场 ---------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    root.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang, tab]);

  /* ---------- 轮播：鼠标拖拽 + 惯性投影吸附 ---------- */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let down = false, sx = 0, sl = 0, moved = 0, lastX = 0, lastT = 0, vel = 0;
    let raf = null, timer = null;

    const stop = () => { if (raf) cancelAnimationFrame(raf); if (timer) clearTimeout(timer); raf = null; timer = null; };

    const animate = (dur, onFrame, onDone) => {
      const t0 = performance.now();
      let done = false;
      const finish = () => {
        if (done) return; done = true;
        if (raf) cancelAnimationFrame(raf); if (timer) clearTimeout(timer);
        raf = null; timer = null;
        if (onDone) onDone();
      };
      const step = (now) => {
        if (done) return;
        let p = (now - t0) / dur;
        if (!isFinite(p) || p < 0) p = 0;
        if (p > 1) p = 1;
        const e = 1 - Math.pow(1 - p, 3);
        onFrame(e);
        if (p < 1) raf = requestAnimationFrame(step); else finish();
      };
      raf = requestAnimationFrame(step);
      timer = setTimeout(finish, dur + 150);
    };

    const slideLeft = (s) => s.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);

    const flick = (v) => {
      const slides = Array.prototype.slice.call(track.querySelectorAll('.slide'));
      if (!slides.length) { track.style.scrollSnapType = ''; return; }
      const raw = Math.max(-3.4, Math.min(3.4, v));
      const projected = track.scrollLeft - raw * 330;
      let target = null, bd = 1e9;
      slides.forEach((s) => {
        const Lf = slideLeft(s); const d = Math.abs(Lf - projected);
        if (d < bd) { bd = d; target = Lf; }
      });
      target = Math.max(0, Math.min(maxScroll(), target));
      const start = track.scrollLeft;
      const dist = Math.abs(target - start);
      if (dist < 1) { track.style.scrollSnapType = ''; return; }
      const dur = Math.min(940, 320 + dist * 0.52);
      animate(dur, (p) => { track.scrollLeft = start + (target - start) * p; },
        () => { track.style.scrollSnapType = ''; });
    };

    const onDown = (e) => {
      moved = 0; movedRef.current = 0;
      if (e.pointerType && e.pointerType !== 'mouse') return;
      stop();
      down = true; sx = e.clientX; sl = track.scrollLeft;
      lastX = e.clientX; lastT = performance.now(); vel = 0;
      track.style.scrollSnapType = 'none';
      track.classList.add('drag');
    };
    const onMove = (e) => {
      if (!down) return;
      const now = performance.now();
      const dx = e.clientX - sx;
      moved = Math.max(moved, Math.abs(dx)); movedRef.current = moved;
      track.scrollLeft = sl - dx;
      const dt = now - lastT;
      if (dt > 0) { vel = (e.clientX - lastX) / dt; lastX = e.clientX; lastT = now; }
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      track.classList.remove('drag');
      flick(vel);
    };

    track.addEventListener('pointerdown', onDown);
    track.addEventListener('pointermove', onMove);
    track.addEventListener('pointerup', onUp);
    track.addEventListener('pointercancel', onUp);
    track.addEventListener('pointerleave', onUp);
    return () => {
      stop();
      track.removeEventListener('pointerdown', onDown);
      track.removeEventListener('pointermove', onMove);
      track.removeEventListener('pointerup', onUp);
      track.removeEventListener('pointercancel', onUp);
      track.removeEventListener('pointerleave', onUp);
    };
  }, []);

  /* 轮播点击（区分拖拽） */
  const onTrackClick = (e) => {
    const track = trackRef.current;
    if (!track || movedRef.current > 6) return;
    const s = e.target.closest('.slide');
    if (!s) return;
    openDetail(s.dataset.slide);
  };

  /* ---------- 详情 / 灯箱 / 联系面板 ---------- */
  const openDetail = (key) => {
    const found = findCard(key);
    if (found) setDetail(found);
  };
  const findCard = (key) => {
    if (!key) return null;
    const all = [];
    L.cats.forEach((c) => c.cards.forEach((cd) => all.push(cd)));
    L.slides.forEach((s) => all.push(s));
    L.cases.items.forEach((c) => all.push(c));
    return all.find((x) => x.img === key) || null;
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (lightbox) { setLightbox(null); return; }
      if (detail) { setDetail(null); return; }
      if (contact) { closeContact(); }
    };
    if (lightbox || detail || contact) {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [lightbox, detail, contact]);

  /* 联系面板：从按钮位置展开成 80% 屏幕 */
  useEffect(() => {
    const g = cpRef.current;
    if (!g) return;
    if (contact) {
      const btn = ctaRef.current;
      const r = btn ? btn.getBoundingClientRect() : null;
      const W = window.innerWidth, H = window.innerHeight;
      const tw = Math.min(W * 0.8, 1360), th = H * 0.8;
      g.style.transition = 'none';
      g.style.transform = 'none';   // CSS 里有 translate(-50%,-50%)，用 left/top 定位时必须清掉
      g.style.left = (r ? r.left : W * 0.1) + 'px';
      g.style.top = (r ? r.top : H * 0.1) + 'px';
      g.style.width = (r ? r.width : tw) + 'px';
      g.style.height = (r ? r.height : th) + 'px';
      g.style.borderRadius = (r ? r.height / 2 : 40) + 'px';
      g.style.opacity = '0';
      void g.offsetWidth;
      g.style.transition = '';
      requestAnimationFrame(() => {
        g.style.left = ((W - tw) / 2) + 'px';
        g.style.top = ((H - th) / 2) + 'px';
        g.style.width = tw + 'px';
        g.style.height = th + 'px';
        g.style.borderRadius = '62px';
        g.style.opacity = '1';
      });
    } else {
      g.style.opacity = '0';
      g.style.borderRadius = '34px';
      const t = setTimeout(() => {
        g.style.transition = 'none';
        g.style.transform = 'none';
        g.style.left = '50%'; g.style.top = '50%';
        g.style.width = '0px'; g.style.height = '0px';
        void g.offsetWidth;
        g.style.transition = '';
      }, 380);
      return () => clearTimeout(t);
    }
  }, [contact]);

  const openContact = () => { setCpMounted(true); setContact(true); };
  const closeContact = () => {
    setContact(false);
    setTimeout(() => setCpMounted(false), 430);
  };

  const copyWx = () => {
    const txt = '15377718690';
    const done = () => { setWxCopied(true); setTimeout(() => setWxCopied(false), 1600); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(done, done);
    } else { done(); }
  };

  /* ---------- 渲染 ---------- */
  const lb = lightbox;
  return (
    <div id='flooring' ref={rootRef} data-lang={lang}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ===== 导航：三块独立玻璃胶囊（左 · 中 · 右）=====
           左右块放在 <nav> 外面，样式与中间完全一致但互不相连。
           这样它们不参与 nav 的 flex 计算，窄屏也不会被压缩换行。 */}
      <div className={'navside left' + (scrolled ? ' scrolled' : '')}>
        <div className='navdrop'>
          <span className='navdropbtn'><span className='txt'>{L.crossSite.label}</span><i>▾</i></span>
          <div className='navdropmenu'>
            {L.crossSite.items.map((it) => (
              <a key={it.href} href={it.href}>{it.label}</a>
            ))}
          </div>
        </div>
      </div>

      <nav id='nav' className={scrolled ? 'scrolled' : ''}>
        <span className='lg'>
          <img className='mark' src='/images/flooring/seaportcy.png'
            alt='Seaportcy' width='50' height='50' />
          <i className='lgtext'>SEAPORTCY</i>
        </span>
        <div className='lks' ref={lksRef}>
          <span className='pill' ref={pillRef} />
          {L.nav.map((n, i) => (
            <a key={n.id} href={'#' + n.id} data-t={n.label}
              className={'lk' + (i === active ? ' on' : '')}
              onClick={(e) => { e.preventDefault(); setActive(i); scrollToId(n.id); }}>
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      <div className={'navside right' + (scrolled ? ' scrolled' : '')}>
        <div className='navdrop'>
          <span className='navdropbtn'><span className='txt'>{L.langLabel}</span><i>▾</i></span>
          <div className='navdropmenu'>
            {LANGS_UI.map((x) => (
              <button key={x.code} className={lang === x.code ? 'on' : ''}
                onClick={() => chooseLang(x.code)}>{x.label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Hero ===== */}
      <header className='hero' id='hero'>
        {/* Hero 架构完全照搬 packaging 站（proxio 主题）的做法：
            ① 容器高度写死 + overflow:hidden
            ② 图片是 <img>，绝对定位 + width/height 100% + object-fit:cover
            ③ 底部 1/3 渐变遮罩淡出到页面底色
            ④ 文字层单独绝对定位铺满，与图片层互不影响 */}
        <img className='herobg' src={img('05-mingkou-green-diamond-back')} alt='' />
        <div className='herofade' />
        <div className='in'><div className='wrap'>
          <span className='eyebrow rv'>{L.hero.eyebrow}</span>
          <h1 className='rv'>{L.hero.t1}<br /><span className='grad'>{L.hero.t2}</span></h1>
          <p className='sub rv'><Rich text={L.hero.sub1 + '|' + L.hero.subHL + '|' + L.hero.sub2} /></p>
          <div className='btns rv'>
            <a className='btn' href='#' onClick={(e) => { e.preventDefault(); openContact(); }}>
              {L.hero.cta1}<span className='ic'>↗</span></a>
            <a className='btn ghost' href='#cat'
              onClick={(e) => { e.preventDefault(); scrollToId('cat'); }}>
              {L.hero.cta2}<span className='ic'>↓</span></a>
          </div>
          <div className='metarow rv'>
            {L.hero.metrics.map((m, i) => (
              <div key={i}><strong>{m.v}</strong><span>{m.k}</span></div>
            ))}
          </div>
        </div></div>
      </header>

      {/* ===== 分类 ===== */}
      <section id='cat'><div className='wrap'>
        <div className='rv'><span className='eyebrow'>Categories</span>
          <h2 className='big'>{L.catTitle.a}<span className='grad'>{L.catTitle.hl}</span>{L.catTitle.b}</h2>
          <p className='lead'>{L.catLead}</p></div>

        <div className='glass specopts rv'>
          {L.specOptions.map((r, i) => (
            <div className='specrow' key={i}>
              <span className='sk'>{r.k}</span>
              {r.v.map((v, j) => <span className='sv' key={j}>{v}</span>)}
              <span className='sn'>{r.note}</span>
            </div>
          ))}
        </div>

        {L.cats.map((c) => (
          <div className={'pane' + (tab === c.id ? ' on' : '')} id={c.id} key={c.id}>
            <div className={'g' + c.cols}>
              {c.cards.map((cd) => (
                <article className='glass card rv pcard' tabIndex={0} key={cd.img}
                  data-slide={cd.img}
                  onClick={() => setDetail(cd)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDetail(cd); } }}>
                  <div className='im'><img src={img(cd.img, true)} alt={cd.h} loading='lazy' decoding='async' /></div>
                  <div className='bd'><span className='tagline'>{cd.tag}</span><h3>{cd.h}</h3>
                    <div className='sp'><Rich text={cd.sp} /></div>
                    <span className='go'>{L.detailBtn}</span></div>
                </article>
              ))}
            </div>
          </div>
        ))}

        <p className='tabhint'>{L.catLabel}</p>
        <div className='tabs rv'>
          {L.cats.map((c) => (
            <button key={c.id} className={'tab' + (tab === c.id ? ' on' : '')}
              onClick={() => setTab(c.id)}><span>{c.label}</span></button>
          ))}
        </div>
      </div></section>

      {/* ===== 案例 ===== */}
      <section id='cases'><div className='wrap'>
        <div className='rv'><span className='eyebrow'>Applications</span>
          <h2 className='big'>{L.cases.title.a}<span className='grad'>{L.cases.title.hl}</span></h2>
          <p className='lead'>{L.cases.lead}</p></div>
        <div className='g3' style={{ marginTop: 56 }}>
          {L.cases.items.map((c) => (
            <article className='glass card rv casecard' tabIndex={0} key={c.img}
              onClick={() => setDetail(c)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDetail(c); } }}>
              <div className='im'><img src={img(c.img, true)} alt={c.t} loading='lazy' decoding='async' /></div>
              <div className='bd'><span className='tagline'>{c.kind}</span><h3>{c.t}</h3>
                <div className='sp'><b className='hl'>{c.rec}</b><br />{c.sp}</div>
                <span className='go'>{L.caseBtn}</span></div>
            </article>
          ))}
        </div>
      </div></section>

      {/* ===== 规格参数 ===== */}
      <section id='spec'><div className='wrap'>
        <div className='rv'><span className='eyebrow'>Specifications</span>
          <h2 className='big'>{L.spec.title}</h2>
          <p className='lead'>{L.spec.lead1}<b className='hl'>{L.spec.leadHL}</b>{L.spec.lead2}</p></div>
        <div className='glass tblwrap rv' style={{ marginTop: 52 }}><div className='tblscroll'><table>
          <thead><tr>{L.spec.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
          <tbody>
            {L.spec.rows.map((r, i) => (
              <tr key={i}>{r.map((c, j) => <td key={j} className={j === 1 || j === 2 || j === 3 ? 'num' : ''}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table></div></div>
      </div></section>

      {/* ===== 系列展示（轮播） ===== */}
      <section id='show'><div className='wrap'>
        <div className='rv'><span className='eyebrow'>Series Showcase</span>
          <h2 className='big'>{L.show.title.a}<span className='grad'>{L.show.title.hl}</span>{L.show.title.b}</h2>
          <p className='lead'>{L.show.lead1}<b className='hl'>{L.show.leadHL}</b>{L.show.lead2}</p></div>
        <div className='rail rv'>
          <div className='track' id='track' ref={trackRef} onClick={onTrackClick}>
            {L.slides.map((s) => (
              <article className='slide' key={s.img} data-slide={s.img}>
                <div className='im'><img src={img(s.img, true)} alt={s.h} loading='lazy' decoding='async' /></div>
                <div className='bd'><span className='tagline'>{s.tag}</span><h3>{s.h}</h3>
                  <div className='sp'>{s.sp}</div><span className='go'>{L.detailBtn}</span></div>
              </article>
            ))}
          </div>
          <p className='railtip'>{L.show.tip}</p>
        </div>
      </div></section>

      {/* ===== 安全性能 ===== */}
      <section id='safety'><div className='wrap'>
        <div className='rv'><span className='eyebrow'>Fire Safety</span>
          <h2 className='big'>{L.safety.title.a}<span className='grad'>{L.safety.title.hl}</span></h2>
          <p className='lead'>{L.safety.lead}</p></div>
        <div className='ev rv' style={{ marginTop: 60 }}>
          {L.safety.nums.map((n, i) => (
            <div className='glass' key={i}
              style={{ padding: '36px 30px', borderRadius: 'var(--r-xl)', position: 'relative' }}>
              <div className='evn'>{n.v}</div>
              <div className='evl'>{n.k}<br /><b className='hl'>{n.n1}{n.n2}</b></div>
            </div>
          ))}
        </div>
        <div className='rv' style={{ marginTop: 42 }}>
          <span className='badge'>{L.safety.badge}</span>
          <p style={{ color: 'var(--tx4)', fontSize: '12.5px', marginTop: 18 }}>{L.safety.note}</p>
        </div>
      </div></section>

      {/* ===== 铺装 ===== */}
      <section id='install'><div className='wrap'>
        <div className='rv'><span className='eyebrow'>Installation</span>
          <h2 className='big'>{L.install.title.a}<span className='grad'>{L.install.title.hl}</span></h2>
          <p className='lead'>{L.install.lead}</p></div>
        <div className='g4 rv' style={{ marginTop: 56 }}>
          {L.install.steps.map((s, i) => (
            <div className='glass card' key={i}>
              <div className='step'>
                <div className='no'>{s.n}</div>
                <h3>{s.h}</h3>
                <p>{s.sp}</p>
              </div>
            </div>
          ))}
        </div>
      </div></section>

      {/* ===== CTA ===== */}
      <section id='contact' className='cta'><div className='in'>
        <span className='eyebrow'>{L.cta.eyebrow}</span>
        <h2>{L.cta.h}</h2>
        <p>{L.cta.p}</p>
        <a className='btn' href='#' ref={ctaRef}
          onClick={(e) => { e.preventDefault(); openContact(); }}>
          {L.cta.btn}<span className='ic'>↗</span></a>
      </div></section>

      <footer><div className='wrap'>
        <span className='fbrand'>{L.footer.brand} <em>{L.footer.brandEm}</em></span>
        <a className='devby' href='https://seaportcy.com/studios' target='_blank' rel='noopener'>{L.footer.dev}</a>
      </div></footer>

      {/* ===== 详情面板 ===== */}
      {detail && (
        <div className='detail on'>
          <div className='dbar'>
            <button className='dback' onClick={() => setDetail(null)}><span>←</span> {L.ui.back}</button>
            <span className='dbart'>{detail.t}</span>
          </div>
          <div className='dbody'>
            <div className='dhero'><img src={img(detail.img)} alt={detail.h} /></div>
            <div className='wrap dcontent'>
              <span className='eyebrow'>{detail.kind || 'Product'}</span>
              <h2 className='big'>{detail.t}</h2>
              <p className='lead'>{L.desc[detail.t] || ''}</p>
              <div className='glass dspecwrap'><table><tbody>
                {(detail.kv || []).map((row, i) => (
                  <tr key={i}><td>{row[0]}</td><td dangerouslySetInnerHTML={{ __html: row[1] }} /></tr>
                ))}
              </tbody></table></div>
              <h3 className='dsub'>{L.ui.gallery}</h3>
              <div className='gal'>
                {gallery(detail.img).map((g) => (
                  <div className='gitem' key={g} onClick={() => setLightbox({ list: gallery(detail.img), i: gallery(detail.img).indexOf(g) })}>
                    <img src={img(g, true)} alt='' loading='lazy' decoding='async' />
                  </div>
                ))}
              </div>
              <div className='dcta'>
                <a className='btn' href='#' onClick={(e) => { e.preventDefault(); setDetail(null); openContact(); }}>
                  {L.ui.consult}<span className='ic'>↗</span></a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== 灯箱 ===== */}
      {lb && (
        <div className='lbox on' onClick={(e) => { if (e.target.hasAttribute('data-lclose')) setLightbox(null); }}>
          <div className='lveil' data-lclose />
          <button className='lx' data-lclose><span>✕</span></button>
          <button className='larrow lprev' onClick={() => setLightbox({ list: lb.list, i: (lb.i - 1 + lb.list.length) % lb.list.length })}><span>‹</span></button>
          <button className='larrow lnext' onClick={() => setLightbox({ list: lb.list, i: (lb.i + 1) % lb.list.length })}><span>›</span></button>
          <figure className='lfig'><img src={img(lb.list[lb.i])} alt='' /></figure>
          <div className='lcap'>{(lb.i + 1) + ' / ' + lb.list.length}</div>
        </div>
      )}

      {/* ===== 联系面板 ===== */}
      <div className={'cpanel' + (contact ? ' on' : '')}
        style={{ display: cpMounted ? 'block' : 'none' }}>
        <div className='veil' onClick={closeContact} />
        <div className='cpglass' ref={cpRef}>
          <button className='cpclose' onClick={closeContact}><span>✕</span></button>
          <div className='cpin'>
            <span className='cp-eyebrow'>{L.contact.eyebrow}</span>
            <h2 className='cp-title'>{L.contact.title}</h2>
            <p className='cp-sub'>{L.contact.sub}</p>
            <div className='cp-grid'>
              {L.contact.items.map((it, i) => {
                if (it.isCopy) {
                  return (
                    <div className='cp-item' key={i} role='button' tabIndex={0}
                      onClick={copyWx}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copyWx(); } }}>
                      <span className='cp-k'>{it.k}</span>
                      <span className='cp-v'>{it.v}<em className='cp-copy'>{wxCopied ? '已复制' : it.copy}</em></span>
                    </div>
                  );
                }
                if (it.href) {
                  const ext = it.href.indexOf('http') === 0;
                  return (
                    <a className='cp-item' key={i} href={it.href}
                      {...(ext ? { target: '_blank', rel: 'noopener' } : {})}>
                      <span className='cp-k'>{it.k}</span><span className='cp-v'>{it.v}</span>
                    </a>
                  );
                }
                return (
                  <div className='cp-item' key={i}>
                    <span className='cp-k'>{it.k}</span><span className='cp-v'>{it.v}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
