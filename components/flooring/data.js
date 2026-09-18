/**
 * 工业地面 · 数据聚合
 * 语言无关的部分（图库分组、图片路径）在这里；文案在 lang-*.js
 */
import zh from './lang-zh';
import en from './lang-en';
import ja from './lang-ja';

export const LANGS = { zh, en, ja };

/** 根据语言取文案，未翻译的语言回退中文 */
export function pickLang(code) {
  const c = String(code || '').toLowerCase();
  if (c.startsWith('ja')) return ja;
  if (c.startsWith('zh')) return zh;
  if (c.startsWith('en')) return en;
  return zh;
}

/** 图片路径。card=true 取 760px 卡片档，否则 1200px 全尺寸档 */
export function img(slug, card) {
  return '/images/flooring/' + slug + (card ? '-card' : '') + '.webp';
}

/** 同类图片分组：点开灯箱后可左右翻看 */
export const GAL = {
  '01-mingkou-green-grid-set':        ['01-mingkou-green-grid-set','02-mingkou-corner-detail','03-mingkou-set-back','06-mingkou-grey-leather-front','20-edge-mingkou-yellow-front','22-corner-mingkou-yellow-front'],
  '04-mingkou-green-diamond-front':   ['04-mingkou-green-diamond-front','05-mingkou-green-diamond-back','01-mingkou-green-grid-set','06-mingkou-grey-leather-front','20-edge-mingkou-yellow-front'],
  '06-mingkou-grey-leather-front':    ['06-mingkou-grey-leather-front','01-mingkou-green-grid-set','04-mingkou-green-diamond-front','20-edge-mingkou-yellow-front','22-corner-mingkou-yellow-front'],
  '05-mingkou-green-diamond-back':    ['05-mingkou-green-diamond-back','04-mingkou-green-diamond-front','10-ankou-grey-leather-back','03-mingkou-set-back'],
  '07-ankou-green-leather-front':     ['07-ankou-green-leather-front','08-ankou-green-leather-front-b','09-ankou-grey-leather-front','24-edge-ankou-blue-front','26-corner-ankou-blue-front'],
  '09-ankou-grey-leather-front':      ['09-ankou-grey-leather-front','10-ankou-grey-leather-back','07-ankou-green-leather-front','24-edge-ankou-blue-front','26-corner-ankou-blue-front'],
  '11-ankou-set-blue-yellow':         ['11-ankou-set-blue-yellow','12-ankou-set-back','13-ankou-set-mirror','14-ankou-corner-detached','15-ankou-set-yellow-edge','24-edge-ankou-blue-front','26-corner-ankou-blue-front'],
  '10-ankou-grey-leather-back':       ['10-ankou-grey-leather-back','09-ankou-grey-leather-front','05-mingkou-green-diamond-back','25-edge-ankou-blue-back'],
  '16-drain-yellow-grid':             ['16-drain-yellow-grid','17-drain-yellow-grid-back','18-drain-edge-corner','19-drain-edge-corner-back','28-corner-ankou-yellow-back'],
  '18-drain-edge-corner':             ['18-drain-edge-corner','19-drain-edge-corner-back','16-drain-yellow-grid','17-drain-yellow-grid-back','28-corner-ankou-yellow-back'],
  '17-drain-yellow-grid-back':        ['17-drain-yellow-grid-back','16-drain-yellow-grid','19-drain-edge-corner-back','18-drain-edge-corner'],
  '20-edge-mingkou-yellow-front':     ['20-edge-mingkou-yellow-front','21-edge-mingkou-yellow-back','22-corner-mingkou-yellow-front','23-corner-mingkou-yellow-back','01-mingkou-green-grid-set','02-mingkou-corner-detail'],
  '24-edge-ankou-blue-front':         ['24-edge-ankou-blue-front','25-edge-ankou-blue-back','26-corner-ankou-blue-front','27-edge-ankou-green-segmented','11-ankou-set-blue-yellow','07-ankou-green-leather-front'],
  '22-corner-mingkou-yellow-front':   ['22-corner-mingkou-yellow-front','23-corner-mingkou-yellow-back','20-edge-mingkou-yellow-front','21-edge-mingkou-yellow-back','02-mingkou-corner-detail'],
  '26-corner-ankou-blue-front':       ['26-corner-ankou-blue-front','24-edge-ankou-blue-front','27-edge-ankou-green-segmented','11-ankou-set-blue-yellow'],
  '27-edge-ankou-green-segmented':    ['27-edge-ankou-green-segmented','24-edge-ankou-blue-front','26-corner-ankou-blue-front','28-corner-ankou-yellow-back'],
  '28-corner-ankou-yellow-back':      ['28-corner-ankou-yellow-back','23-corner-mingkou-yellow-back','27-edge-ankou-green-segmented','19-drain-edge-corner-back']
};

/** 取某个 slug 的同类图；没有登记就只返回它自己 */
export function gallery(slug) {
  return GAL[slug] || [slug];
}
