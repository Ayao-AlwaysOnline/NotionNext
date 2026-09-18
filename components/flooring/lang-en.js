/**
 * Industrial Flooring · English copy
 * All English text lives here. To edit copy, edit only this file.
 * Image slugs map to public/images/flooring/<slug>.webp and <slug>-card.webp
 */
const L = {
  code: 'en',

  nav: [
    { id: 'hero',    label: 'Overview' },
    { id: 'cat',     label: 'Products' },
    { id: 'cases',   label: 'Applications' },
    { id: 'spec',    label: 'Specs' },
    { id: 'show',    label: 'Series' },
    { id: 'safety',  label: 'Fire Safety' },
    { id: 'install', label: 'Install' },
    { id: 'contact', label: 'Contact' }
  ],

  crossSite: {
    label: 'Our Businesses',
    items: [
      { label: 'Seaportcy — Main Site', href: '/' },
      { label: 'SeaportcyStudios',      href: '/studios' },
      { label: 'Packaging Solutions',   href: '/packaging' }
    ]
  },

  langLabel: 'Language',

  hero: {
    eyebrow: 'Industrial Flooring',
    t1: 'Factory floors, ',
    t2: 'laid right the first time',
    sub1: 'Exposed-lock / Hidden-lock / Open-grid drainage — three systems. No adhesive, no curing, no downtime. ',
    subHL: 'Class B₁ fire rated',
    sub2: '. Replace a single tile instead of the whole floor. Lay it today, drive a forklift on it today.',
    cta1: 'Request a quote',
    cta2: 'Browse products',
    metrics: [
      { v: 'B₁(C-s1)',     k: 'GB 8624-2012 fire rated' },
      { v: '5–7 mm',       k: 'Full thickness range' },
      { v: 'Exposed / Hidden', k: 'Two locking systems' },
      { v: 'Any colour',   k: 'Custom colour matching' }
    ]
  },

  catTitle: { a: 'Start with the ', hl: 'locking system', b: ', then pick the spec' },
  catLead: 'Exposed-lock tiles show their interlocking teeth — easiest to align and re-lay. Hidden-lock tiles stay perfectly flush — nothing traps dirt. Tiles and trims are NOT interchangeable between the two systems. Choose the lock, then the size, thickness, texture and colour.',

  specOptions: [
    { k: 'Size',      v: ['500 × 500 mm', '600 × 600 mm'], note: 'Two standard sizes; other sizes can be tooled' },
    { k: 'Thickness', v: ['5', '5.5', '6', '6.5', '7'],    note: 'mm; 6.5 mm is the fire-test spec' },
    { k: 'Lock',      v: ['Exposed', 'Hidden'],            note: 'Determines assembly and whether the surface stays flush' },
    { k: 'Texture',   v: ['Leather', 'Diamond', 'Smooth steel plate', 'Coin'], note: 'Per the factory texture list' },
    { k: 'Colour',    v: ['Green', 'Blue', 'Grey', 'Yellow', 'Red'], note: 'Any colour — send us a sample' }
  ],

  catLabel: 'Switch series',
  detailBtn: 'View details →',
  caseBtn: 'View case →',

  cats: [
    { id: 'p1', label: 'Exposed Lock', cols: 4, cards: [
      { img: '01-mingkou-green-grid-set', kind: 'Exposed Lock', t: 'Exposed · Green Grid',
        tag: 'Exposed · Full set', h: 'Green grid tile + yellow trim',
        sp: 'Teeth lock in plain sight — you can see and feel every joint close.|Best for|: workshops that re-arrange layouts often',
        kv: [['Lock','Exposed (visible teeth)'],['Size','500 × 500 / 600 × 600 mm'],['Thickness','5 – 7 mm'],['Surface','Grid'],['Colour','Any — custom matching'],['Assembly','Interlocking teeth, visible from above']] },
      { img: '04-mingkou-green-diamond-front', kind: 'Exposed Lock', t: 'Exposed · Green Diamond',
        tag: 'Exposed · Diamond', h: 'Green exposed-lock tile',
        sp: 'Saw-tooth tabs along the edge, clearly visible from above.|Surface|: fine diamond studs for grip',
        kv: [['Lock','Exposed'],['Size','500 × 500 mm'],['Thickness','5.5 / 6.5 mm'],['Surface','Diamond'],['Colour','Any'],['Feature','Diamond studs — grip in wet or oily areas']] },
      { img: '06-mingkou-grey-leather-front', kind: 'Exposed Lock', t: 'Exposed · Grey Leather',
        tag: 'Exposed · Leather', h: 'Grey exposed-lock tile',
        sp: 'Dark grey hides grime; leather grain gives a solid underfoot feel.|Best for|: machining and assembly bays',
        kv: [['Lock','Exposed'],['Size','500 × 500 mm'],['Thickness','5 / 7 mm'],['Surface','Leather grain'],['Colour','Any'],['Feature','Hides dirt, comfortable grain']] },
      { img: '05-mingkou-green-diamond-back', kind: 'Exposed Lock', t: 'Exposed · Back Structure',
        tag: 'Exposed · Underside', h: 'Egg-crate stiffening ribs',
        sp: 'Diamond lattice ribs spread point loads across the whole tile.|Result|: no sinking, no denting',
        kv: [['Lock','Exposed'],['Structure','Diamond lattice stiffening ribs'],['Function','Spreads point loads across the tile'],['Result','Will not sink or dent under load']] }
    ]},
    { id: 'p2', label: 'Hidden Lock', cols: 4, cards: [
      { img: '07-ankou-green-leather-front', kind: 'Hidden Lock', t: 'Hidden · Green Leather',
        tag: 'Hidden · Flush surface', h: 'Green hidden-lock tile',
        sp: 'Every clasp sits under the tile — |absolutely nothing protrudes|. Joints stay flush and clean',
        kv: [['Lock','Hidden (flush surface)'],['Size','500 × 500 / 600 × 600 mm'],['Thickness','5 – 7 mm'],['Surface','Leather grain'],['Colour','Any — custom matching'],['Assembly','Loop clasps interlock underneath']] },
      { img: '09-ankou-grey-leather-front', kind: 'Hidden Lock', t: 'Hidden · Grey Leather',
        tag: 'Hidden · Leather', h: 'Grey hidden-lock tile',
        sp: 'Loop clasps are only visible from the side.|Best for|: areas where appearance matters',
        kv: [['Lock','Hidden'],['Size','500 × 500 mm'],['Thickness','6 / 6.5 mm'],['Surface','Leather grain'],['Colour','Any'],['Feature','Loop clasps visible only from the edge']] },
      { img: '11-ankou-set-blue-yellow', kind: 'Hidden Lock', t: 'Hidden · Mixed Colour Set',
        tag: 'Hidden · Full set', h: 'Blue & yellow trim + blue corner',
        sp: 'Trim sits flat and finishes flush with the tile face.|Mixed colours|: trim and corners can be different colours',
        kv: [['Lock','Hidden'],['Set','Green tile + blue/yellow trim + blue corner'],['Option','Trim and corners in different colours'],['Function','Colour-code walkways, work zones, hazard areas']] },
      { img: '10-ankou-grey-leather-back', kind: 'Hidden Lock', t: 'Hidden · Back Structure',
        tag: 'Hidden · Underside', h: 'Ribs + loop clasp points',
        sp: 'Lattice ribs carry the load; loop clasps around the edge lock the tiles.|Design|: load-bearing and locking are separate',
        kv: [['Lock','Hidden'],['Structure','Lattice ribs + loop clasp points around the edge'],['Design','Load-bearing and locking are separate systems'],['Result','Flush surface that still takes heavy loads']] }
    ]},
    { id: 'p3', label: 'Drainage', cols: 3, cards: [
      { img: '16-drain-yellow-grid', kind: 'Drainage', t: 'Drainage · Open Grid',
        tag: 'Drainage · Open grid', h: 'Yellow open-grid drainage tile',
        sp: 'Fully open lattice — water and oil drain straight through.|Used in|: wash bays, wet areas, pool surrounds, kitchens',
        kv: [['Category','Drainage (separate product family)'],['Lock','Hidden'],['Size','500 × 500 mm'],['Thickness','6.5 mm'],['Surface','Open diamond grid'],['Function','Water and oil drain through — no pooling, no slipping']] },
      { img: '18-drain-edge-corner', kind: 'Drainage', t: 'Drainage · Edge & Corner',
        tag: 'Drainage · Edging', h: 'Channel trim + radiused corner',
        sp: 'Trim has slotted channels to guide water; corner is a quarter round.|Function|: clean edge transition, no trip hazard',
        kv: [['Category','Drainage accessories'],['Trim','Slotted drainage channels'],['Corner','Quarter-round'],['Function','Edge transition, no trip hazard'],['Colour','Trim and corner can differ']] },
      { img: '17-drain-yellow-grid-back', kind: 'Drainage', t: 'Drainage · Back Structure',
        tag: 'Drainage · Underside', h: 'Support structure',
        sp: 'Open grid that still carries load.|Result|: stands up, still drains',
        kv: [['Category','Drainage'],['Structure','Open lattice + support ribs'],['Function','Open area with load capacity'],['Note','Requires a drainage fall or channel underneath']] }
    ]},
    { id: 'p4', label: 'Trims & Corners', cols: 3, cards: [
      { img: '20-edge-mingkou-yellow-front', kind: 'Trims · Exposed only', t: 'Trim · Exposed Lock',
        tag: 'Exposed only', h: 'Exposed-lock edge trim',
        sp: 'Edge profile is a |square-tooth channel| that mates with exposed-lock tiles. Will not fit hidden-lock tiles',
        kv: [['Category','Trim (exposed-lock only)'],['Edge','Square-tooth channel'],['Compatibility','Exposed-lock tiles only'],['Length','Segmented, cut to your perimeter'],['Note','Not interchangeable with hidden-lock']] },
      { img: '22-corner-mingkou-yellow-front', kind: 'Trims · Exposed only', t: 'Corner · Exposed Lock',
        tag: 'Exposed only', h: 'Exposed-lock corner piece',
        sp: 'Separate block that caps where two trims meet.|Function|: stops lifting and trip edges',
        kv: [['Category','Trim (exposed-lock only)'],['Shape','Separate corner block'],['Install','Caps the trim junction'],['Function','No lifting, no trip hazard']] },
      { img: '24-edge-ankou-blue-front', kind: 'Trims · Hidden only', t: 'Trim · Hidden Lock',
        tag: 'Hidden only', h: 'Hidden-lock edge trim',
        sp: 'Edge profile is a |row of loop clasps| that hooks onto hidden-lock tiles. Finishes flush with the surface',
        kv: [['Category','Trim (hidden-lock only)'],['Edge','Loop clasps'],['Compatibility','Hidden-lock tiles only'],['Length','Segmented, cut to your perimeter'],['Note','Finishes flush with the tile face']] },
      { img: '26-corner-ankou-blue-front', kind: 'Trims · Hidden only', t: 'Corner · Hidden Lock',
        tag: 'Hidden only', h: 'Hidden-lock corner piece',
        sp: 'Separate blue corner, can be a different colour from the trim.|Mixed colours|: use it to mark zones',
        kv: [['Category','Trim (hidden-lock only)'],['Colour','Can differ from the trim'],['Function','Zone marking'],['Install','Press in — no adhesive, no screws']] },
      { img: '27-edge-ankou-green-segmented', kind: 'Trims · Universal', t: 'Trim · Segmented',
        tag: 'Universal', h: 'Segmented edge trim',
        sp: 'Trims join segment by segment to match your perimeter.|Made to order|: not sold as fixed 500/600 mm units',
        kv: [['Category','Trim'],['Format','Segmented lengths'],['Length','Assembled to your perimeter'],['Note','Not a fixed 500 / 600 mm part number']] },
      { img: '28-corner-ankou-yellow-back', kind: 'Trims · Universal', t: 'Corner · Underside',
        tag: 'Universal', h: 'Corner piece, underside',
        sp: 'Loop clasp points and stiffening ribs are visible from below.|Install|: pressed in last — no adhesive, no fixings',
        kv: [['Category','Trim'],['Underside','Loop clasp points and stiffening ribs'],['Install','Pressed in last'],['Note','No adhesive or fixings; single tiles replaceable']] }
    ]}
  ],

  cases: { title: { a: 'Where it ', hl: 'gets used' }, lead: 'From machining bays to underground car parks — same locking system, different spec for each environment.', items: [
    { img: '01-mingkou-green-grid-set', kind: 'Production', t: 'Machining & Assembly Bay',
      rec: 'Exposed lock · Diamond · 6.5 mm', sp: 'Teeth in plain sight for easy alignment; ribs take forklift loads',
      kv: [['Recommended','Exposed lock · Diamond · 6.5 mm'],['Why','Teeth stay visible so layouts re-arrange fastest; lattice ribs resist forklift loads'],['Size advice','Lay full 500 × 500 mm tiles to minimise cutting'],['Edging','Exposed-lock trim + yellow corner pieces'],['Key requirement','Level substrate, no voids underneath']] },
    { img: '16-drain-yellow-grid', kind: 'Wash / Wet area', t: 'Wash Bays & Wet Work Areas',
      rec: 'Drainage · Open grid', sp: 'Water falls straight through — no pooling, no slipping',
      kv: [['Recommended','Drainage tile · Open grid · Hidden lock'],['Why','Fully open lattice lets water and oil drain away — no standing water, no slip risk'],['Size advice','500 × 500 mm across the whole working radius'],['Edging','Channel trim (slotted) + radiused corner'],['Key requirement','Drainage fall or channel must exist underneath']] },
    { img: '07-ankou-green-leather-front', kind: 'Plant room / Car park', t: 'Switch Rooms & Underground Car Parks',
      rec: 'Hidden lock · 6.5 mm (fire-tested)', sp: 'Flush surface traps no dirt; mixed colours for zoning',
      kv: [['Recommended','Hidden lock · Leather grain · 6.5 mm (fire-test spec)'],['Why','Perfectly flush with nothing protruding to trap dirt; Class B₁ fire rated'],['Size advice','Zone by cabinet or parking bay; 600 × 600 mm reduces joints'],['Edging','Hidden-lock trim + mixed-colour corners for zone marking'],['Key requirement','Choose smooth surface where oil and dirt must wipe clean']] }
  ]},

  spec: { title: 'Specifications', lead1: 'Standard specifications below. Special sizes, thicknesses and colours can be customised per project — ', leadHL: 'any colour', lead2: '.',
    head: ['Model','Size mm','Thickness mm','Weight / tile','Lock','Surface'],
    rows: [
      ['Standard','500 × 500','5 / 7','1.32 / 1.5 kg','Exposed / Hidden','Leather grain'],
      ['Smooth steel plate','500 × 500','6','1.6 kg','Hidden','Smooth steel plate'],
      ['Workshop grade','500 × 500','5.5 / 6.5','1.56 / 1.85 kg','Exposed / Hidden','Diamond'],
      ['Heavy duty','500×500 / 600×600','6.5','2.0 / 2.8 kg','Hidden','Diamond'],
      ['Drainage tile','500 × 500','6.5','—','Hidden','Open grid'],
      ['Exposed-lock trim / corner','Matches tile','—','—','Exposed only','Square-tooth channel'],
      ['Hidden-lock trim / corner','Matches tile','—','—','Hidden only','Loop clasps'],
      ['Drainage trim / corner','Matches tile','—','—','Drainage set','Slotted channels']
    ]},

  show: { title: { a: 'Browse by ', hl: 'lock × spec', b: '' },
    lead1: 'Every item opens a full spec sheet and matching photos. ', leadHL: 'Drag to scroll', lead2: '.',
    tip: '← Drag to scroll · click any card for details →' },

  slides: [
    { img: '01-mingkou-green-grid-set', tag: 'Exposed · Full set', h: 'Green grid + yellow trim', sp: 'Teeth visible, easy alignment',
      t: 'Exposed · Green Grid', kv: [['Lock','Exposed (visible teeth)'],['Size','500 × 500 / 600 × 600 mm'],['Thickness','5 – 7 mm'],['Surface','Grid'],['Colour','Any — custom matching'],['Assembly','Interlocking teeth, visible from above'],['Best for','Workshops that re-arrange layouts']] },
    { img: '04-mingkou-green-diamond-front', tag: 'Exposed', h: 'Green diamond', sp: 'Anti-slip studs, visible teeth',
      t: 'Exposed · Green Diamond', kv: [['Lock','Exposed'],['Size','500 × 500 mm'],['Thickness','5.5 / 6.5 mm'],['Surface','Diamond'],['Feature','Diamond studs — grip in wet or oily areas'],['Best for','Machining and oily zones']] },
    { img: '06-mingkou-grey-leather-front', tag: 'Exposed', h: 'Grey leather grain', sp: 'Hides dirt, visible teeth',
      t: 'Exposed · Grey Leather', kv: [['Lock','Exposed'],['Size','500 × 500 mm'],['Thickness','5 / 7 mm'],['Surface','Leather grain'],['Feature','Hides dirt, comfortable grain'],['Best for','Assembly areas, offices, showrooms']] },
    { img: '05-mingkou-green-diamond-back', tag: 'Exposed · Underside', h: 'Lattice stiffening ribs', sp: 'Spreads point loads',
      t: 'Exposed · Back Structure', kv: [['Lock','Exposed'],['Structure','Diamond lattice stiffening ribs'],['Function','Spreads point loads across the tile'],['Result','Will not sink or dent under load']] },
    { img: '07-ankou-green-leather-front', tag: 'Hidden', h: 'Green leather grain', sp: 'Perfectly flush, traps no dirt',
      t: 'Hidden · Green Leather', kv: [['Lock','Hidden (flush surface)'],['Size','500 × 500 / 600 × 600 mm'],['Thickness','5 – 7 mm'],['Surface','Leather grain'],['Assembly','Loop clasps interlock underneath'],['Best for','Areas where appearance matters']] },
    { img: '09-ankou-grey-leather-front', tag: 'Hidden', h: 'Grey leather grain', sp: 'Side-only clasps, flat face',
      t: 'Hidden · Grey Leather', kv: [['Lock','Hidden'],['Size','500 × 500 mm'],['Thickness','6 / 6.5 mm'],['Surface','Leather grain'],['Feature','Loop clasps visible only from the edge'],['Best for','Plant rooms, car parks, clean areas']] },
    { img: '11-ankou-set-blue-yellow', tag: 'Hidden · Full set', h: 'Blue & yellow trim + blue corner', sp: 'Trim and corners in different colours',
      t: 'Hidden · Mixed Colour Set', kv: [['Lock','Hidden'],['Set','Green tile + blue/yellow trim + blue corner'],['Option','Trim and corners in different colours'],['Function','Colour-code walkways, work zones, hazard areas']] },
    { img: '10-ankou-grey-leather-back', tag: 'Hidden · Underside', h: 'Ribs + loop clasp points', sp: 'Load and lock are separate',
      t: 'Hidden · Back Structure', kv: [['Lock','Hidden'],['Structure','Lattice ribs + loop clasp points'],['Design','Load-bearing and locking are separate systems'],['Result','Flush surface that still takes heavy loads']] },
    { img: '16-drain-yellow-grid', tag: 'Drainage', h: 'Yellow open grid', sp: 'Drains straight through',
      t: 'Drainage · Open Grid', kv: [['Category','Drainage (separate product family)'],['Lock','Hidden'],['Size','500 × 500 mm'],['Thickness','6.5 mm'],['Surface','Open diamond grid'],['Function','Water and oil drain through'],['Best for','Wash bays, wet areas, pool surrounds, kitchens']] },
    { img: '18-drain-edge-corner', tag: 'Drainage · Edging', h: 'Channel trim + radiused corner', sp: 'No trip edge',
      t: 'Drainage · Edge & Corner', kv: [['Category','Drainage accessories'],['Trim','Slotted drainage channels'],['Corner','Quarter-round'],['Function','Edge transition, no trip hazard'],['Colour','Trim and corner can differ']] },
    { img: '20-edge-mingkou-yellow-front', tag: 'Exposed only', h: 'Exposed-lock trim (square teeth)', sp: 'Mates with exposed-lock tiles',
      t: 'Trim · Exposed Lock', kv: [['Category','Trim (exposed-lock only)'],['Edge','Square-tooth channel'],['Compatibility','Exposed-lock tiles only'],['Length','Segmented, cut to your perimeter'],['Note','Not interchangeable with hidden-lock']] },
    { img: '24-edge-ankou-blue-front', tag: 'Hidden only', h: 'Hidden-lock trim (loop clasps)', sp: 'Hooks onto hidden-lock tiles',
      t: 'Trim · Hidden Lock', kv: [['Category','Trim (hidden-lock only)'],['Edge','Loop clasps'],['Compatibility','Hidden-lock tiles only'],['Length','Segmented, cut to your perimeter'],['Note','Finishes flush with the tile face']] }
  ],

  safety: { title: { a: 'Class B₁ fire rated, ', hl: 'independently tested' },
    lead: 'Tested by NOA Testing & Certification Group. Combustion performance reaches Class B₁(C-s1) of GB 8624-2012, China\u2019s national fire-safety standard for building materials. The laboratory holds both CNAS and CMA accreditation.',
    nums: [
      { v: '6.7',  unit: '', k: 'Critical heat flux CHF (kW/m²)', n1: 'Standard requires ≥ 4.5', n2: ' — 49% above requirement' },
      { v: '220',  unit: '', k: 'Smoke production (limit ≤ 750)', n1: 'Only 29% of the limit', n2: ' — meets s1, the lowest smoke class' },
      { v: '<150', unit: '', k: 'Flame tip height (mm)', n1: 'Passes both surface and edge ignition', n2: '' }
    ],
    badge: '✦ Combustion performance meets Class B₁(C-s1) of GB 8624-2012',
    note: 'The fire test covers the 500×500×6.5 mm specification only. Other thicknesses can be submitted for testing on request. The full test report is available on request.' },

  install: { title: { a: 'Four steps, ', hl: 'no contractor needed' },
    lead: 'No adhesive, no curing time. A typical workshop bay can be laid and put into service the same day.',
    steps: [
      { n: '01', h: 'Prepare the substrate', sp: 'Level the floor, sweep it clean' },
      { n: '02', h: 'Align and join', sp: 'Line up the clasps and click tiles together' },
      { n: '03', h: 'Press home', sp: 'Tap with a rubber mallet until it clicks' },
      { n: '04', h: 'Finish the edges', sp: 'Fit trim around the perimeter' }
    ]},

  cta: { eyebrow: 'Get a Quote', h: 'Tell us about your floor',
    p: 'Area · Current floor condition · Equipment used — we will recommend a specification and quote',
    btn: 'Request a quote / sample' },

  contact: { eyebrow: 'Contact', title: 'Get in touch', sub: 'Pick whichever is easiest — we usually reply the same working day.',
    items: [
      { k: 'Email',             v: 'seaportcy.info@gmail.com', href: 'mailto:seaportcy.info@gmail.com' },
      { k: 'WhatsApp',          v: '+852 9057 4053',           href: 'https://wa.me/85290574053' },
      { k: 'Website',           v: 'seaportcy.com',            href: 'https://seaportcy.com' },
      { k: 'Phone',             v: '+86 153 7771 8690',        href: 'tel:+8615377718690' },
      { k: 'WeChat',            v: '15377718690',              copy: 'Click to copy', isCopy: true },
      { k: 'Location',          v: 'Dongguan, Guangdong, China' }
    ]},

  ui: {
    back: 'Back',
    gallery: 'More photos',
    consult: 'Ask about this'
  },

  footer: {
    brand: 'Seaportcy',
    brandEm: 'always growing with you',
    dev: 'Designed and Developed by SeaportcyStudios'
  },

  desc: {
    'Exposed · Green Grid': 'Exposed-lock teeth sit right on the tile edge, so alignment is visible at a glance — that is the whole point. If you need to re-arrange the layout, you lift and re-click. No cutting the floor up and starting again.',
    'Exposed · Green Diamond': 'Saw-tooth tabs along the edge and diamond studs on the face. In areas with cutting fluid or oil it is markedly safer underfoot than a smooth surface.',
    'Exposed · Grey Leather': 'Dark grey hides grime and the leather grain feels solid underfoot. Suits assembly bays and walk-through areas that need to stay presentable.',
    'Exposed · Back Structure': 'The diamond lattice ribs are where the load capacity actually comes from — they spread the point load of a forklift or machine across the whole tile. That is why it does not sink or dent.',
    'Hidden · Green Leather': 'Loop clasps sit entirely beneath the tile, so the face is perfectly flat with nothing protruding. Joints stay flush — no dirt traps, no trip edges.',
    'Hidden · Grey Leather': 'Same flush surface, with loop clasps visible only from the edge. Use it in plant rooms, car parks and clean areas where appearance matters.',
    'Hidden · Mixed Colour Set': 'Trims and corners can be specified in different colours — use them to separate walkways, work zones and hazard areas. Cheaper than painting the floor and far more durable than tape.',
    'Hidden · Back Structure': 'Load-bearing and locking are two separate systems: lattice ribs take the compression, loop clasps around the edge do the interlocking. That is how it stays flush and still takes heavy loads.',
    'Drainage · Open Grid': 'A separate product family, not a standard tile. The whole tile is an open lattice, so water and oil fall straight through — no standing water means no slipping. Wash bays, wet areas, pool surrounds and commercial kitchens.',
    'Drainage · Edge & Corner': 'Drainage tiles use a dedicated slotted channel trim and a quarter-round corner. Trim and corner can be different colours, and the edge transitions cleanly with no trip hazard.',
    'Drainage · Back Structure': 'Open does not mean weak. The underside keeps a support rib structure, so it takes foot traffic and trolleys while still draining. A fall or channel underneath is recommended.',
    'Trim · Exposed Lock': 'The edge profile is a square-tooth channel that only mates with exposed-lock tiles. Hidden-lock tiles will not fit — always order trim to match the tile system.',
    'Corner · Exposed Lock': 'Corners are where two trims meet, and the most likely place for lifting. The exposed-lock system uses a separate corner block to cap the junction so nothing lifts or catches a foot.',
    'Trim · Hidden Lock': 'The edge profile is a row of loop clasps that only mates with hidden-lock tiles. Once fitted it finishes flush with the tile face.',
    'Corner · Hidden Lock': 'A separate corner for the hidden-lock system, finishing flush with the tile face. It can be a different colour from the trim — an easy way to mark out functional zones.',
    'Trim · Segmented': 'Trims are assembled segment by segment to match your perimeter — they are not fixed 500 / 600 mm part numbers. Send us the floor dimensions and we will work out the segment count.',
    'Corner · Underside': 'The underside shows the loop clasp points and the stiffening structure. Corners are pressed in last, with no adhesive or fixings; to replace a localised area you simply lever it up.',
    'Machining & Assembly Bay': 'Machining bays see cutting fluid and swarf, so grip is the deciding factor — diamond texture. Where layouts change often, choose exposed lock; for heavy loads, go to 6.5 mm.',
    'Wash Bays & Wet Work Areas': 'In these areas the priority is drainage, not load capacity. The drainage tile is fully open so water and oil fall through; the trim has slotted channels and the corner is quarter-round to remove the trip edge. A drainage fall or channel must exist underneath.',
    'Switch Rooms & Underground Car Parks': 'Plant rooms and car parks have explicit fire requirements. Hidden lock gives a flush surface that traps no dirt, and trim plus corners can be colour-matched to mark out zones. 6.5 mm is the specification covered by the B₁ fire test.'
  }
};
export default L;
