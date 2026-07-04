const controlsConfig = [
  { key: 'brightness', label: '亮度', min: -100, max: 100, value: 0 },
  { key: 'contrast', label: '对比度', min: -100, max: 100, value: 0 },
  { key: 'saturation', label: '饱和度', min: -100, max: 100, value: 0 },
  { key: 'sharpness', label: '锐化', min: 0, max: 100, value: 0 },
  { key: 'denoise', label: '降噪', min: 0, max: 100, value: 0 },
  { key: 'whitening', label: '美白', min: 0, max: 100, value: 0 },
  { key: 'skinSmooth', label: '磨皮', min: 0, max: 100, value: 0 },
  { key: 'faceSlim', label: '瘦脸', min: 0, max: 100, value: 0 },
  { key: 'softGlow', label: '柔光', min: 0, max: 100, value: 0 },
];

const presets = {
  reset: {
    brightness: 0,
    contrast: 0,
    saturation: 0,
    sharpness: 0,
    denoise: 0,
    whitening: 0,
    skinSmooth: 0,
    faceSlim: 0,
    softGlow: 0,
  },
  portrait: {
    brightness: 8,
    contrast: 6,
    saturation: 8,
    sharpness: 16,
    denoise: 18,
    whitening: 32,
    skinSmooth: 42,
    faceSlim: 28,
    softGlow: 0,
  },
  wedding: {
    brightness: 12,
    contrast: 8,
    saturation: 6,
    sharpness: 10,
    denoise: 16,
    whitening: 45,
    skinSmooth: 48,
    faceSlim: 18,
    softGlow: 36,
  },
  oldPhoto: {
    brightness: 16,
    contrast: 22,
    saturation: 10,
    sharpness: 34,
    denoise: 36,
    whitening: 0,
    skinSmooth: 0,
    faceSlim: 0,
    softGlow: 10,
  },
  clarityBoost: {
    brightness: 4,
    contrast: 14,
    saturation: 4,
    sharpness: 48,
    denoise: 14,
    whitening: 0,
    skinSmooth: 0,
    faceSlim: 0,
    softGlow: 0,
  },
  cleanDenoise: {
    brightness: 5,
    contrast: -4,
    saturation: 2,
    sharpness: 8,
    denoise: 58,
    whitening: 4,
    skinSmooth: 14,
    faceSlim: 0,
    softGlow: 8,
  },
  transparentBright: {
    brightness: 18,
    contrast: 8,
    saturation: 8,
    sharpness: 16,
    denoise: 16,
    whitening: 12,
    skinSmooth: 8,
    faceSlim: 0,
    softGlow: 10,
  },
  warmLight: {
    brightness: 10,
    contrast: 6,
    saturation: 14,
    sharpness: 8,
    denoise: 8,
    whitening: 6,
    skinSmooth: 6,
    faceSlim: 0,
    softGlow: 20,
  },
  coolClean: {
    brightness: 8,
    contrast: 10,
    saturation: -8,
    sharpness: 18,
    denoise: 10,
    whitening: 8,
    skinSmooth: 4,
    faceSlim: 0,
    softGlow: 4,
  },
  dramaticContrast: {
    brightness: -4,
    contrast: 34,
    saturation: 10,
    sharpness: 26,
    denoise: 6,
    whitening: 0,
    skinSmooth: 0,
    faceSlim: 0,
    softGlow: 0,
  },
  idPhotoClean: {
    brightness: 12,
    contrast: 6,
    saturation: 2,
    sharpness: 18,
    denoise: 22,
    whitening: 24,
    skinSmooth: 24,
    faceSlim: 8,
    softGlow: 0,
  },
  productPolish: {
    brightness: 16,
    contrast: 18,
    saturation: 8,
    sharpness: 36,
    denoise: 10,
    whitening: 0,
    skinSmooth: 0,
    faceSlim: 0,
    softGlow: 0,
  },
  foodFresh: {
    brightness: 8,
    contrast: 12,
    saturation: 24,
    sharpness: 18,
    denoise: 8,
    whitening: 0,
    skinSmooth: 0,
    faceSlim: 0,
    softGlow: 6,
  },
  backlightRescue: {
    brightness: 24,
    contrast: -6,
    saturation: 8,
    sharpness: 12,
    denoise: 14,
    whitening: 8,
    skinSmooth: 6,
    faceSlim: 0,
    softGlow: 12,
  },
  indoorYellowFix: {
    brightness: 12,
    contrast: 6,
    saturation: -10,
    sharpness: 14,
    denoise: 18,
    whitening: 14,
    skinSmooth: 10,
    faceSlim: 0,
    softGlow: 4,
  },
  nightNoiseClean: {
    brightness: 6,
    contrast: 18,
    saturation: 6,
    sharpness: 18,
    denoise: 46,
    whitening: 0,
    skinSmooth: 0,
    faceSlim: 0,
    softGlow: 2,
  },
  skinToneClean: {
    brightness: 8,
    contrast: 2,
    saturation: 4,
    sharpness: 8,
    denoise: 20,
    whitening: 26,
    skinSmooth: 34,
    faceSlim: 4,
    softGlow: 6,
  },
  faceDetailEnhance: {
    brightness: 4,
    contrast: 12,
    saturation: 4,
    sharpness: 34,
    denoise: 8,
    whitening: 8,
    skinSmooth: 10,
    faceSlim: 10,
    softGlow: 0,
  },
  softPortraitGlow: {
    brightness: 12,
    contrast: -2,
    saturation: 6,
    sharpness: 6,
    denoise: 26,
    whitening: 18,
    skinSmooth: 30,
    faceSlim: 8,
    softGlow: 26,
  },
  momentsBright: {
    brightness: 16,
    contrast: 8,
    saturation: 12,
    sharpness: 14,
    denoise: 10,
    whitening: 10,
    skinSmooth: 8,
    faceSlim: 0,
    softGlow: 8,
  },
  avatarPop: {
    brightness: 10,
    contrast: 16,
    saturation: 8,
    sharpness: 30,
    denoise: 10,
    whitening: 14,
    skinSmooth: 18,
    faceSlim: 14,
    softGlow: 4,
  },
  travelVivid: {
    brightness: 8,
    contrast: 14,
    saturation: 26,
    sharpness: 24,
    denoise: 8,
    whitening: 4,
    skinSmooth: 4,
    faceSlim: 0,
    softGlow: 4,
  },
};

const defaultTools = {
  mosaic: {
    enabled: false,
    preset: 'custom',
    size: 18,
    shape: 'rect',
    style: 'pixelate',
    color: '#111827',
    pattern: 'grid',
    region: null,
  },
  text: {
    layers: [],
    activeLayerId: null,
    nextLayerId: 1,
    defaults: {
      preset: 'custom',
      fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif',
      size: 48,
      color: '#ffffff',
      bold: false,
      italic: false,
      effect: 'shadow',
    },
  },
};

const mosaicPresets = {
  privacy: { size: 24, shape: 'rect', style: 'pixelate', color: '#111827', pattern: 'grid' },
  softBlur: { size: 30, shape: 'ellipse', style: 'blur', color: '#111827', pattern: 'grid' },
  darkMask: { size: 18, shape: 'rect', style: 'solid', color: '#111827', pattern: 'grid' },
  comicDots: { size: 20, shape: 'ellipse', style: 'pattern', color: '#f97316', pattern: 'dots' },
};

const textPresets = {
  weddingTitle: {
    fontFamily: 'Songti SC, SimSun, serif',
    size: 72,
    color: '#fff7ed',
    bold: true,
    italic: false,
    effect: 'shadow',
  },
  posterGlow: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    size: 84,
    color: '#93c5fd',
    bold: true,
    italic: false,
    effect: 'glow',
  },
  simpleCaption: {
    fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif',
    size: 42,
    color: '#ffffff',
    bold: false,
    italic: false,
    effect: 'shadow',
  },
  stamp: {
    fontFamily: 'Kaiti SC, KaiTi, serif',
    size: 68,
    color: '#ef4444',
    bold: true,
    italic: false,
    effect: 'outline',
  },
};

const stylePresets = {
  blueSky: {
    label: '蓝天白云',
    controls: {
      brightness: 8,
      contrast: 12,
      saturation: 16,
      sharpness: 18,
      denoise: 8,
      whitening: 12,
      skinSmooth: 10,
      faceSlim: 0,
      softGlow: 8,
    },
  },
  cyanYouth: {
    label: '青色青春',
    controls: {
      brightness: 10,
      contrast: 4,
      saturation: 10,
      sharpness: 8,
      denoise: 12,
      whitening: 26,
      skinSmooth: 26,
      faceSlim: 8,
      softGlow: 12,
    },
  },
  warmFilm: {
    label: '暖阳胶片',
    controls: {
      brightness: 6,
      contrast: 10,
      saturation: 8,
      sharpness: 6,
      denoise: 10,
      whitening: 12,
      skinSmooth: 18,
      faceSlim: 0,
      softGlow: 24,
    },
  },
  premiumGray: {
    label: '高级灰',
    controls: {
      brightness: 2,
      contrast: 16,
      saturation: -18,
      sharpness: 14,
      denoise: 8,
      whitening: 10,
      skinSmooth: 12,
      faceSlim: 0,
      softGlow: 4,
    },
  },
  sweetPink: {
    label: '甜美樱花',
    controls: {
      brightness: 12,
      contrast: 2,
      saturation: 8,
      sharpness: 4,
      denoise: 14,
      whitening: 34,
      skinSmooth: 34,
      faceSlim: 8,
      softGlow: 22,
    },
  },
  cyberNight: {
    label: '赛博夜景',
    controls: {
      brightness: -4,
      contrast: 24,
      saturation: 22,
      sharpness: 20,
      denoise: 12,
      whitening: 8,
      skinSmooth: 8,
      faceSlim: 0,
      softGlow: 18,
    },
  },
  forestFresh: {
    label: '森林清新',
    controls: {
      brightness: 8,
      contrast: 6,
      saturation: 14,
      sharpness: 12,
      denoise: 10,
      whitening: 16,
      skinSmooth: 16,
      faceSlim: 0,
      softGlow: 10,
    },
  },
  vintageRetro: {
    label: '复古港风',
    controls: {
      brightness: 0,
      contrast: 18,
      saturation: 10,
      sharpness: 16,
      denoise: 6,
      whitening: 8,
      skinSmooth: 10,
      faceSlim: 0,
      softGlow: 8,
    },
  },
  classicBw: {
    label: '经典黑白',
    controls: {
      brightness: 2,
      contrast: 22,
      saturation: -100,
      sharpness: 18,
      denoise: 8,
      whitening: 8,
      skinSmooth: 8,
      faceSlim: 0,
      softGlow: 0,
    },
  },
};

const collageLayouts = {
  'travel-memory': {
    label: '旅行记忆海报',
    type: 'poster',
    width: 1200,
    height: 1800,
    gap: 0,
    minImages: 1,
    background: ['#dff8ff', '#fef3c7', '#f97316'],
    slots: [
      {
        x: 0.1,
        y: 0.18,
        width: 0.8,
        height: 0.58,
        shape: 'ellipse',
        radius: 46,
        shadow: 'rgba(14, 116, 144, 0.28)',
        tint: ['rgba(255, 255, 255, 0.02)', 'rgba(14, 165, 233, 0.18)'],
        innerStroke: 'rgba(255, 255, 255, 0.72)',
      },
    ],
    poster: {
      eyebrow: 'TRAVEL MEMORY',
      title: '把风景装进海报',
      subtitle: '点击照片拖动位置，滚轮缩放，让主体自然落在画面中心',
      align: 'left',
      textColor: '#0f172a',
      accentColor: '#0284c7',
      decorations: 'travel',
    },
  },
  'product-launch': {
    label: '新品发布海报',
    type: 'poster',
    width: 1200,
    height: 1600,
    gap: 0,
    minImages: 1,
    background: ['#111827', '#312e81', '#7c3aed'],
    slots: [
      {
        x: 0.16,
        y: 0.22,
        width: 0.68,
        height: 0.48,
        shape: 'square',
        radius: 34,
        shadow: 'rgba(0, 0, 0, 0.42)',
        tint: ['rgba(255, 255, 255, 0.08)', 'rgba(124, 58, 237, 0.2)'],
        innerStroke: 'rgba(255, 255, 255, 0.42)',
      },
    ],
    poster: {
      eyebrow: 'NEW ARRIVAL',
      title: '新品质感海报',
      subtitle: '光晕、相框和渐变背景会一起衬托主体',
      align: 'center',
      textColor: '#ffffff',
      accentColor: '#c4b5fd',
      decorations: 'product',
    },
  },
  'festival-greeting': {
    label: '节日祝福海报',
    type: 'poster',
    width: 1200,
    height: 1800,
    gap: 0,
    minImages: 1,
    background: ['#7f1d1d', '#dc2626', '#f59e0b'],
    slots: [
      {
        x: 0.12,
        y: 0.2,
        width: 0.76,
        height: 0.5,
        shape: 'circle',
        radius: 80,
        shadow: 'rgba(127, 29, 29, 0.38)',
        tint: ['rgba(255, 247, 237, 0.04)', 'rgba(251, 191, 36, 0.2)'],
        innerStroke: 'rgba(254, 243, 199, 0.76)',
      },
    ],
    poster: {
      eyebrow: 'BEST WISHES',
      title: '温暖节日祝福',
      subtitle: '柔和暖光和圆角相框让照片更融入节日氛围',
      align: 'center',
      textColor: '#fff7ed',
      accentColor: '#fde68a',
      decorations: 'festival',
    },
  },
  'magazine-cover': {
    label: '极简杂志封面',
    type: 'poster',
    width: 1200,
    height: 1700,
    gap: 0,
    minImages: 1,
    background: ['#f8fafc', '#e2e8f0', '#cbd5e1'],
    slots: [
      {
        x: 0.12,
        y: 0.24,
        width: 0.76,
        height: 0.58,
        shape: 'rectangle',
        radius: 18,
        shadow: 'rgba(15, 23, 42, 0.18)',
        tint: ['rgba(255, 255, 255, 0)', 'rgba(15, 23, 42, 0.08)'],
        innerStroke: 'rgba(15, 23, 42, 0.14)',
      },
    ],
    poster: {
      eyebrow: 'PHOTO MAGAZINE',
      title: '极简视觉封面',
      subtitle: '留白排版与细边框突出照片本身',
      align: 'left',
      textColor: '#0f172a',
      accentColor: '#475569',
      decorations: 'magazine',
    },
  },
  'portrait-studio': {
    label: '人像写真海报',
    type: 'poster',
    width: 1200,
    height: 1800,
    gap: 0,
    minImages: 1,
    background: ['#fff1f2', '#fbcfe8', '#c084fc'],
    slots: [
      {
        x: 0.14,
        y: 0.16,
        width: 0.72,
        height: 0.62,
        shape: 'ellipse',
        radius: 120,
        shadow: 'rgba(190, 24, 93, 0.24)',
        tint: ['rgba(255, 255, 255, 0.08)', 'rgba(244, 114, 182, 0.18)'],
        innerStroke: 'rgba(255, 255, 255, 0.78)',
      },
    ],
    poster: {
      eyebrow: 'PORTRAIT STUDIO',
      title: '自然写真封面',
      subtitle: '柔和粉紫光影，适合人像和自拍照片',
      align: 'center',
      textColor: '#831843',
      accentColor: '#db2777',
      decorations: 'portrait',
    },
  },
  'food-promo': {
    label: '美食种草海报',
    type: 'poster',
    width: 1200,
    height: 1600,
    gap: 0,
    minImages: 1,
    background: ['#431407', '#ea580c', '#facc15'],
    slots: [
      {
        x: 0.12,
        y: 0.14,
        width: 0.76,
        height: 0.56,
        shape: 'circle',
        radius: 56,
        shadow: 'rgba(67, 20, 7, 0.4)',
        tint: ['rgba(255, 247, 237, 0.04)', 'rgba(251, 146, 60, 0.22)'],
        innerStroke: 'rgba(254, 243, 199, 0.72)',
      },
    ],
    poster: {
      eyebrow: 'FOOD RECOMMEND',
      title: '今日美味种草',
      subtitle: '暖橙氛围增强食欲，适合餐饮和美食分享',
      align: 'left',
      textColor: '#fff7ed',
      accentColor: '#fde68a',
      decorations: 'food',
    },
  },
  'event-promo': {
    label: '活动宣传海报',
    type: 'poster',
    width: 1200,
    height: 1700,
    gap: 0,
    minImages: 1,
    background: ['#020617', '#1d4ed8', '#06b6d4'],
    slots: [
      {
        x: 0.1,
        y: 0.2,
        width: 0.8,
        height: 0.5,
        shape: 'rectangle',
        radius: 26,
        shadow: 'rgba(2, 6, 23, 0.46)',
        tint: ['rgba(34, 211, 238, 0.08)', 'rgba(37, 99, 235, 0.22)'],
        innerStroke: 'rgba(125, 211, 252, 0.58)',
      },
    ],
    poster: {
      eyebrow: 'EVENT PROMO',
      title: '活动即将开始',
      subtitle: '动感蓝色视觉，适合演出、聚会和发布会',
      align: 'center',
      textColor: '#ecfeff',
      accentColor: '#67e8f9',
      decorations: 'event',
    },
  },
  'cinema-story': {
    label: '电影质感海报',
    type: 'poster',
    width: 1200,
    height: 1800,
    gap: 0,
    minImages: 1,
    background: ['#030712', '#111827', '#92400e'],
    slots: [
      {
        x: 0.08,
        y: 0.12,
        width: 0.84,
        height: 0.66,
        shape: 'rectangle',
        radius: 14,
        shadow: 'rgba(0, 0, 0, 0.54)',
        tint: ['rgba(0, 0, 0, 0.06)', 'rgba(245, 158, 11, 0.18)'],
        innerStroke: 'rgba(251, 191, 36, 0.32)',
      },
    ],
    poster: {
      eyebrow: 'CINEMA STORY',
      title: '电影感视觉海报',
      subtitle: '暗调、暖光和高对比适合夜景与街拍',
      align: 'left',
      textColor: '#fef3c7',
      accentColor: '#f59e0b',
      decorations: 'cinema',
    },
  },
  'course-share': {
    label: '课程分享海报',
    type: 'poster',
    width: 1200,
    height: 1600,
    gap: 0,
    minImages: 1,
    background: ['#eff6ff', '#dbeafe', '#93c5fd'],
    slots: [
      {
        x: 0.15,
        y: 0.18,
        width: 0.7,
        height: 0.46,
        shape: 'square',
        radius: 38,
        shadow: 'rgba(37, 99, 235, 0.2)',
        tint: ['rgba(255, 255, 255, 0.1)', 'rgba(59, 130, 246, 0.14)'],
        innerStroke: 'rgba(255, 255, 255, 0.82)',
      },
    ],
    poster: {
      eyebrow: 'COURSE SHARE',
      title: '知识分享封面',
      subtitle: '清爽蓝白布局，适合课程、教程和笔记分享',
      align: 'left',
      textColor: '#1e3a8a',
      accentColor: '#2563eb',
      decorations: 'course',
    },
  },
  'recruit-poster': {
    label: '招聘宣传海报',
    type: 'poster',
    width: 1200,
    height: 1700,
    gap: 0,
    minImages: 1,
    background: ['#172554', '#4338ca', '#a855f7'],
    slots: [
      {
        x: 0.13,
        y: 0.2,
        width: 0.74,
        height: 0.48,
        shape: 'ellipse',
        radius: 28,
        shadow: 'rgba(30, 64, 175, 0.4)',
        tint: ['rgba(255, 255, 255, 0.06)', 'rgba(168, 85, 247, 0.2)'],
        innerStroke: 'rgba(221, 214, 254, 0.58)',
      },
    ],
    poster: {
      eyebrow: 'WE ARE HIRING',
      title: '加入我们',
      subtitle: '商务蓝紫色视觉，适合招聘、公告和团队宣传',
      align: 'center',
      textColor: '#ffffff',
      accentColor: '#ddd6fe',
      decorations: 'recruit',
    },
  },
  'two-vertical': {
    label: '两张竖拼',
    width: 1200,
    height: 1600,
    gap: 18,
    slots: [
      { x: 0, y: 0, width: 1, height: 0.5 },
      { x: 0, y: 0.5, width: 1, height: 0.5 },
    ],
  },
  'two-horizontal': {
    label: '两张横拼',
    width: 1600,
    height: 900,
    gap: 18,
    slots: [
      { x: 0, y: 0, width: 0.5, height: 1 },
      { x: 0.5, y: 0, width: 0.5, height: 1 },
    ],
  },
  'three-feature': {
    label: '三张主次拼',
    width: 1200,
    height: 1600,
    gap: 18,
    slots: [
      { x: 0, y: 0, width: 1, height: 0.62 },
      { x: 0, y: 0.62, width: 0.5, height: 0.38 },
      { x: 0.5, y: 0.62, width: 0.5, height: 0.38 },
    ],
  },
  'three-vertical': {
    label: '三张竖排拼图',
    width: 900,
    height: 1600,
    gap: 16,
    slots: Array.from({ length: 3 }, (_, index) => ({
      x: 0,
      y: index / 3,
      width: 1,
      height: 1 / 3,
    })),
  },
  'three-horizontal': {
    label: '三张横排拼图',
    width: 1600,
    height: 900,
    gap: 16,
    slots: Array.from({ length: 3 }, (_, index) => ({
      x: index / 3,
      y: 0,
      width: 1 / 3,
      height: 1,
    })),
  },
  'three-side-feature': {
    label: '三张侧主图',
    width: 1400,
    height: 1000,
    gap: 16,
    slots: [
      { x: 0, y: 0, width: 0.62, height: 1 },
      { x: 0.62, y: 0, width: 0.38, height: 0.5 },
      { x: 0.62, y: 0.5, width: 0.38, height: 0.5 },
    ],
  },
  'four-grid': {
    label: '四宫格拼图',
    width: 1200,
    height: 1200,
    gap: 16,
    slots: [
      { x: 0, y: 0, width: 0.5, height: 0.5 },
      { x: 0.5, y: 0, width: 0.5, height: 0.5 },
      { x: 0, y: 0.5, width: 0.5, height: 0.5 },
      { x: 0.5, y: 0.5, width: 0.5, height: 0.5 },
    ],
  },
  'four-vertical': {
    label: '四张竖排拼图',
    width: 900,
    height: 1600,
    gap: 14,
    slots: Array.from({ length: 4 }, (_, index) => ({
      x: 0,
      y: index / 4,
      width: 1,
      height: 0.25,
    })),
  },
  'four-horizontal': {
    label: '四张横排拼图',
    width: 1600,
    height: 900,
    gap: 14,
    slots: Array.from({ length: 4 }, (_, index) => ({
      x: index / 4,
      y: 0,
      width: 0.25,
      height: 1,
    })),
  },
  'four-feature': {
    label: '四张主次拼图',
    width: 1400,
    height: 1000,
    gap: 16,
    slots: [
      { x: 0, y: 0, width: 0.58, height: 1 },
      { x: 0.58, y: 0, width: 0.42, height: 1 / 3 },
      { x: 0.58, y: 1 / 3, width: 0.42, height: 1 / 3 },
      { x: 0.58, y: 2 / 3, width: 0.42, height: 1 / 3 },
    ],
  },
  'five-feature': {
    label: '五张主图拼图',
    width: 1200,
    height: 1600,
    gap: 14,
    slots: [
      { x: 0, y: 0, width: 1, height: 0.5 },
      { x: 0, y: 0.5, width: 0.5, height: 0.25 },
      { x: 0.5, y: 0.5, width: 0.5, height: 0.25 },
      { x: 0, y: 0.75, width: 0.5, height: 0.25 },
      { x: 0.5, y: 0.75, width: 0.5, height: 0.25 },
    ],
  },
  'five-grid': {
    label: '五张错落拼图',
    width: 1200,
    height: 1200,
    gap: 14,
    slots: [
      { x: 0, y: 0, width: 0.5, height: 0.5 },
      { x: 0.5, y: 0, width: 0.5, height: 0.33 },
      { x: 0.5, y: 0.33, width: 0.5, height: 0.34 },
      { x: 0, y: 0.5, width: 0.5, height: 0.5 },
      { x: 0.5, y: 0.67, width: 0.5, height: 0.33 },
    ],
  },
  'six-grid': {
    label: '六宫格拼图',
    width: 1200,
    height: 1800,
    gap: 14,
    slots: Array.from({ length: 6 }, (_, index) => ({
      x: (index % 2) * 0.5,
      y: Math.floor(index / 2) / 3,
      width: 0.5,
      height: 1 / 3,
    })),
  },
  'six-horizontal': {
    label: '六张横向拼图',
    width: 1800,
    height: 1200,
    gap: 12,
    slots: Array.from({ length: 6 }, (_, index) => ({
      x: (index % 3) / 3,
      y: Math.floor(index / 3) * 0.5,
      width: 1 / 3,
      height: 0.5,
    })),
  },
  'six-feature': {
    label: '六张主次拼图',
    width: 1200,
    height: 1600,
    gap: 14,
    slots: [
      { x: 0, y: 0, width: 1, height: 0.42 },
      { x: 0, y: 0.42, width: 0.5, height: 0.29 },
      { x: 0.5, y: 0.42, width: 0.5, height: 0.29 },
      { x: 0, y: 0.71, width: 1 / 3, height: 0.29 },
      { x: 1 / 3, y: 0.71, width: 1 / 3, height: 0.29 },
      { x: 2 / 3, y: 0.71, width: 1 / 3, height: 0.29 },
    ],
  },
  'nine-grid': {
    label: '九宫格拼图',
    width: 1200,
    height: 1200,
    gap: 12,
    slots: Array.from({ length: 9 }, (_, index) => ({
      x: (index % 3) / 3,
      y: Math.floor(index / 3) / 3,
      width: 1 / 3,
      height: 1 / 3,
    })),
  },
  'nine-vertical': {
    label: '九张竖版拼图',
    width: 1200,
    height: 1800,
    gap: 10,
    slots: Array.from({ length: 9 }, (_, index) => ({
      x: (index % 3) / 3,
      y: Math.floor(index / 3) / 3,
      width: 1 / 3,
      height: 1 / 3,
    })),
  },
};

const state = {
  documents: [],
  activeDocumentId: null,
  nextDocumentId: 1,
  renderTimer: null,
  canvasInteraction: null,
  activeTool: null,
  textSelectionRange: null,
  pendingTextHistorySnapshot: null,
  pendingTextHistoryLabel: null,
  pendingTextHistoryId: null,
  suppressNextTextCanvasCreate: false,
  pendingCollageTrim: null,
};

const previewCanvas = document.getElementById('previewCanvas');
const previewContext = previewCanvas.getContext('2d', { willReadFrequently: true });
const canvasCard = document.querySelector('.canvas-card');
const controlsElement = document.getElementById('controls');
const rightPanel = document.querySelector('.right-panel');
const emptyState = document.getElementById('emptyState');
const fileName = document.getElementById('fileName');
const imageMeta = document.getElementById('imageMeta');
const documentTabs = document.getElementById('documentTabs');
const saveButton = document.getElementById('saveButton');
const toast = document.getElementById('toast');
const adjustToolButton = document.getElementById('adjustToolButton');
const textToolButton = document.getElementById('textToolButton');
const mosaicToolButton = document.getElementById('mosaicToolButton');
const historyToolButton = document.getElementById('historyToolButton');
const adjustToolPanel = document.getElementById('adjustToolPanel');
const textToolPanel = document.getElementById('textToolPanel');
const mosaicToolPanel = document.getElementById('mosaicToolPanel');
const historyToolPanel = document.getElementById('historyToolPanel');
const mosaicToggle = document.getElementById('mosaicToggle');
const mosaicPreset = document.getElementById('mosaicPreset');
const mosaicShape = document.getElementById('mosaicShape');
const mosaicStyle = document.getElementById('mosaicStyle');
const mosaicSize = document.getElementById('mosaicSize');
const mosaicSizeValue = document.getElementById('mosaicSizeValue');
const mosaicColor = document.getElementById('mosaicColor');
const mosaicPattern = document.getElementById('mosaicPattern');
const clearMosaicRegion = document.getElementById('clearMosaicRegion');
const textEditorFrame = document.getElementById('textEditorFrame');
const textDragHandle = document.getElementById('textDragHandle');
const textDeleteButton = document.getElementById('textDeleteButton');
const textContent = document.getElementById('textContent');
const textPreset = document.getElementById('textPreset');
const textFont = document.getElementById('textFont');
const textEffect = document.getElementById('textEffect');
const textSize = document.getElementById('textSize');
const textSizeValue = document.getElementById('textSizeValue');
const textColor = document.getElementById('textColor');
const textBold = document.getElementById('textBold');
const textItalic = document.getElementById('textItalic');
const historyUndoButton = document.getElementById('historyUndoButton');
const historyList = document.getElementById('historyList');
const posterToggleButton = document.getElementById('posterToggleButton');
const posterOptions = document.getElementById('posterOptions');
const sceneToggleButton = document.getElementById('sceneToggleButton');
const sceneOptions = document.getElementById('sceneOptions');
const qualityToggleButton = document.getElementById('qualityToggleButton');
const qualityOptions = document.getElementById('qualityOptions');
const toneToggleButton = document.getElementById('toneToggleButton');
const toneOptions = document.getElementById('toneOptions');
const repairToggleButton = document.getElementById('repairToggleButton');
const repairOptions = document.getElementById('repairOptions');
const portraitDetailToggleButton = document.getElementById('portraitDetailToggleButton');
const portraitDetailOptions = document.getElementById('portraitDetailOptions');
const socialToggleButton = document.getElementById('socialToggleButton');
const socialOptions = document.getElementById('socialOptions');
const collageToggleButton = document.getElementById('collageToggleButton');
const collageOptions = document.getElementById('collageOptions');
const styleToggleButton = document.getElementById('styleToggleButton');
const styleOptions = document.getElementById('styleOptions');
const themeModeSelect = document.getElementById('themeModeSelect');
const systemThemeQuery = window.matchMedia?.('(prefers-color-scheme: light)');
const themeStorageKey = 'image-enhancer-theme-mode';

const sliderElements = new Map();
const valueElements = new Map();
const toolInputs = [
  adjustToolButton,
  textToolButton,
  mosaicToolButton,
  historyToolButton,
  mosaicToggle,
  mosaicPreset,
  mosaicShape,
  mosaicStyle,
  mosaicSize,
  mosaicColor,
  mosaicPattern,
  clearMosaicRegion,
  textDeleteButton,
  textContent,
  textPreset,
  textFont,
  textEffect,
  textSize,
  textColor,
  textBold,
  textItalic,
  historyUndoButton,
];

function readStoredThemeMode() {
  try {
    const storedMode = localStorage.getItem(themeStorageKey);
    return ['system', 'dark', 'light'].includes(storedMode) ? storedMode : 'system';
  } catch {
    return 'system';
  }
}

function resolveThemeMode(mode) {
  if (mode === 'light' || mode === 'dark') return mode;
  return systemThemeQuery?.matches ? 'light' : 'dark';
}

function applyThemeMode(mode = readStoredThemeMode()) {
  const safeMode = ['system', 'dark', 'light'].includes(mode) ? mode : 'system';
  const resolvedTheme = resolveThemeMode(safeMode);
  document.body.dataset.themeMode = safeMode;
  document.body.dataset.theme = resolvedTheme;
  if (themeModeSelect) {
    themeModeSelect.value = safeMode;
  }
}

function saveThemeMode(mode) {
  try {
    localStorage.setItem(themeStorageKey, mode);
  } catch {
    // Ignore storage failures; the current session can still switch themes.
  }
  applyThemeMode(mode);
}

function handleSystemThemeChange() {
  if (document.body.dataset.themeMode === 'system') {
    applyThemeMode('system');
  }
}

function setActiveTool(tool) {
  if (tool !== 'text') {
    commitTextEditorChanges();
  }
  state.activeTool = tool;
  adjustToolButton.classList.toggle('active', tool === 'adjust');
  textToolButton.classList.toggle('active', tool === 'text');
  mosaicToolButton.classList.toggle('active', tool === 'mosaic');
  historyToolButton.classList.toggle('active', tool === 'history');
  adjustToolPanel.classList.toggle('active', tool === 'adjust');
  textToolPanel.classList.toggle('active', tool === 'text');
  mosaicToolPanel.classList.toggle('active', tool === 'mosaic');
  historyToolPanel.classList.toggle('active', tool === 'history');
  if (tool) {
    previewCanvas.dataset.tool = tool;
  } else {
    delete previewCanvas.dataset.tool;
  }
  updateTextEditorOverlay();
  if (getActiveDocument()) {
    renderPreview();
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function getActiveDocument() {
  return state.documents.find((doc) => doc.id === state.activeDocumentId) || null;
}

function isCollageDocument(doc) {
  return doc?.type === 'collage';
}

function isPosterDocument(doc) {
  if (!isCollageDocument(doc)) return false;
  return collageLayouts[doc.collage.layoutName]?.type === 'poster';
}

function clonePlainObject(value) {
  return JSON.parse(JSON.stringify(value));
}

function cloneCollageState(collage) {
  if (!collage) return collage;
  return {
    ...clonePlainObject({
      layoutName: collage.layoutName,
      activeSlotIndex: collage.activeSlotIndex,
    }),
    slots: (collage.slots || []).map((slot) => ({
      ...clonePlainObject({
        sourceName: slot.sourceName,
        sourceMeta: slot.sourceMeta,
        scale: slot.scale,
        offsetX: slot.offsetX,
        offsetY: slot.offsetY,
      }),
      image: slot.image,
    })),
  };
}

function createPosterHistorySnapshot(doc) {
  if (!doc?.tools) return null;
  const snapshot = {
    type: doc.type,
    values: clonePlainObject(doc.values),
    tools: clonePlainObject(doc.tools),
    grayscale: doc.grayscale,
    styleMode: doc.styleMode,
    styleModes: clonePlainObject(doc.styleModes || []),
  };
  if (isCollageDocument(doc)) {
    snapshot.collage = cloneCollageState(doc.collage);
  }
  return snapshot;
}

function restorePosterHistorySnapshot(doc, snapshot) {
  if (!doc || !snapshot) return;
  doc.values = clonePlainObject(snapshot.values);
  doc.tools = clonePlainObject(snapshot.tools);
  if (snapshot.collage) {
    doc.collage = cloneCollageState(snapshot.collage);
  }
  doc.grayscale = snapshot.grayscale;
  doc.styleMode = snapshot.styleMode || 'none';
  doc.styleModes = clonePlainObject(snapshot.styleModes || []);
  state.textSelectionRange = null;
  state.pendingTextHistorySnapshot = null;
  state.pendingTextHistoryLabel = null;
  state.pendingTextHistoryId = null;
  syncControlsFromDocument(doc);
  syncToolControlsFromDocument(doc);
  updateTextEditorOverlay();
}

function pushPosterEditHistory(doc, label, beforeSnapshot) {
  if (!doc || !beforeSnapshot) return null;
  const afterSnapshot = createPosterHistorySnapshot(doc);
  const snapshotReplacer = (key, value) => (key === 'image' ? undefined : value);
  if (JSON.stringify(beforeSnapshot, snapshotReplacer) === JSON.stringify(afterSnapshot, snapshotReplacer)) return null;
  if (!Array.isArray(doc.effectHistory)) doc.effectHistory = [];
  if (!doc.nextHistoryId) doc.nextHistoryId = 1;
  const entry = {
    id: doc.nextHistoryId++,
    type: 'edit',
    name: 'edit',
    label,
    beforeSnapshot,
    afterSnapshot,
  };
  doc.effectHistory.push(entry);
  renderHistoryPanel(doc);
  return entry;
}

function upsertPendingTextHistory(label = '编辑文字') {
  const doc = getActiveDocument();
  if (!doc || !state.pendingTextHistorySnapshot) return;

  if (state.pendingTextHistoryId) {
    const entry = doc.effectHistory.find((item) => item.id === state.pendingTextHistoryId);
    if (entry) {
      entry.afterSnapshot = createPosterHistorySnapshot(doc);
      entry.label = state.pendingTextHistoryLabel || label;
      renderHistoryPanel(doc);
      return;
    }
    state.pendingTextHistoryId = null;
  }

  const entry = pushPosterEditHistory(doc, state.pendingTextHistoryLabel || label, state.pendingTextHistorySnapshot);
  if (entry) {
    state.pendingTextHistoryId = entry.id;
  }
}

function flushPendingTextHistory(label = '编辑文字') {
  const doc = getActiveDocument();
  if (!doc || !state.pendingTextHistorySnapshot) return;
  upsertPendingTextHistory(label);
  state.pendingTextHistorySnapshot = null;
  state.pendingTextHistoryLabel = null;
  state.pendingTextHistoryId = null;
  renderHistoryPanel(doc);
}

function isTextLayerEmpty(layer) {
  return !layer || !String(layer.plainText || '').trim();
}

function discardEmptyPendingTextLayer(doc, suppressNextTextCreate = false) {
  const layer = getActiveTextLayer(doc);
  if (
    !doc?.tools?.text ||
    state.pendingTextHistoryLabel !== '新增文字' ||
    !isTextLayerEmpty(layer)
  ) {
    return false;
  }

  if (state.pendingTextHistoryId) {
    const historyIndex = doc.effectHistory.findIndex((entry) => entry.id === state.pendingTextHistoryId);
    if (historyIndex !== -1) doc.effectHistory.splice(historyIndex, 1);
  }

  doc.tools.text.layers = doc.tools.text.layers.filter((item) => item.id !== layer.id);
  doc.tools.text.activeLayerId = null;
  state.textSelectionRange = null;
  state.pendingTextHistorySnapshot = null;
  state.pendingTextHistoryLabel = null;
  state.pendingTextHistoryId = null;
  if (suppressNextTextCreate) {
    state.suppressNextTextCanvasCreate = true;
  }
  hideTextEditorOverlay();
  syncToolControlsFromDocument(doc);
  renderHistoryPanel(doc);
  renderPreview();
  return true;
}

function commitTextEditorChanges(label = '编辑文字', suppressNextTextCreate = false) {
  const doc = getActiveDocument();
  if (doc?.tools?.text && getActiveTextLayer(doc) && textEditorFrame.classList.contains('visible')) {
    syncActiveTextLayerFromEditor();
  }
  if (discardEmptyPendingTextLayer(doc, suppressNextTextCreate)) return true;
  flushPendingTextHistory(label);
  return false;
}

function getSnapshotTextLayers(snapshot) {
  return snapshot?.tools?.text?.layers || [];
}

function createLayerMap(layers) {
  return new Map(layers.map((layer) => [layer.id, layer]));
}

function isSameTextLayer(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function applyTextHistoryInverse(doc, entry) {
  if (!doc?.tools?.text || !entry.beforeSnapshot || !entry.afterSnapshot) return false;

  const beforeLayers = getSnapshotTextLayers(entry.beforeSnapshot);
  const afterLayers = getSnapshotTextLayers(entry.afterSnapshot);
  const beforeMap = createLayerMap(beforeLayers);
  const afterMap = createLayerMap(afterLayers);
  const currentLayers = doc.tools.text.layers || [];
  let nextLayers = currentLayers.map((layer) => clonePlainObject(layer));
  let touchedTextLayer = false;

  const addedIds = afterLayers
    .filter((layer) => !beforeMap.has(layer.id))
    .map((layer) => layer.id);
  if (addedIds.length > 0) {
    const addedIdSet = new Set(addedIds);
    nextLayers = nextLayers.filter((layer) => !addedIdSet.has(layer.id));
    touchedTextLayer = true;
  }

  beforeLayers.forEach((beforeLayer) => {
    const afterLayer = afterMap.get(beforeLayer.id);
    const currentIndex = nextLayers.findIndex((layer) => layer.id === beforeLayer.id);

    if (!afterLayer) {
      if (currentIndex === -1) {
        nextLayers.push(clonePlainObject(beforeLayer));
      }
      touchedTextLayer = true;
      return;
    }

    if (!isSameTextLayer(beforeLayer, afterLayer)) {
      if (currentIndex === -1) {
        nextLayers.push(clonePlainObject(beforeLayer));
      } else {
        nextLayers[currentIndex] = clonePlainObject(beforeLayer);
      }
      touchedTextLayer = true;
    }
  });

  if (!touchedTextLayer) return false;

  const beforeOrder = beforeLayers.map((layer) => layer.id);
  const currentOrder = nextLayers.map((layer) => layer.id);
  nextLayers.sort((left, right) => {
    const leftIndex = beforeOrder.includes(left.id) ? beforeOrder.indexOf(left.id) : currentOrder.indexOf(left.id) + beforeOrder.length;
    const rightIndex = beforeOrder.includes(right.id) ? beforeOrder.indexOf(right.id) : currentOrder.indexOf(right.id) + beforeOrder.length;
    return leftIndex - rightIndex;
  });

  doc.tools.text.layers = nextLayers;
  if (!nextLayers.some((layer) => layer.id === doc.tools.text.activeLayerId)) {
    doc.tools.text.activeLayerId = null;
  }
  doc.tools.text.nextLayerId = Math.max(1, ...nextLayers.map((layer) => layer.id)) + 1;
  state.textSelectionRange = null;
  state.pendingTextHistorySnapshot = null;
  state.pendingTextHistoryLabel = null;
  state.pendingTextHistoryId = null;
  syncToolControlsFromDocument(doc);
  updateTextEditorOverlay();
  return true;
}

function createDefaultTools() {
  return {
    mosaic: { ...defaultTools.mosaic },
    text: {
      layers: [],
      activeLayerId: null,
      nextLayerId: 1,
      defaults: { ...defaultTools.text.defaults },
    },
  };
}

function getActiveTextLayer(doc = getActiveDocument()) {
  if (!doc?.tools?.text?.layers) return null;
  return doc.tools.text.layers.find((layer) => layer.id === doc.tools.text.activeLayerId) || null;
}

function getTextControlSource(doc) {
  return getActiveTextLayer(doc) || doc?.tools?.text?.defaults || defaultTools.text.defaults;
}

function createTextLayer(doc, point) {
  const defaults = doc.tools.text.defaults;
  const layer = {
    id: doc.tools.text.nextLayerId++,
    html: '',
    plainText: '',
    x: point.x,
    y: point.y,
    width: 36,
    preset: defaults.preset,
    fontFamily: defaults.fontFamily,
    size: defaults.size,
    color: defaults.color,
    bold: defaults.bold,
    italic: defaults.italic,
    effect: defaults.effect,
  };

  doc.tools.text.layers.push(layer);
  doc.tools.text.activeLayerId = layer.id;
  state.textSelectionRange = null;
  return layer;
}

function selectTextLayer(doc, layerId) {
  doc.tools.text.activeLayerId = layerId;
  state.textSelectionRange = null;
  syncToolControlsFromDocument(doc);
  updateTextEditorOverlay();
  renderPreview();
}

function deleteActiveTextLayer() {
  const doc = getActiveDocument();
  const textTool = doc?.tools?.text;
  if (!textTool?.activeLayerId) return false;

  const beforeSnapshot = createPosterHistorySnapshot(doc);
  const nextLayers = textTool.layers.filter((layer) => layer.id !== textTool.activeLayerId);
  if (nextLayers.length === textTool.layers.length) return false;

  textTool.layers = nextLayers;
  textTool.activeLayerId = null;
  state.textSelectionRange = null;
  hideTextEditorOverlay();
  syncToolControlsFromDocument(doc);
  renderPreview();
  pushPosterEditHistory(doc, '删除文字', beforeSnapshot);
  showToast('已删除文字框');
  return true;
}

function syncActiveTextLayerFromEditor() {
  const doc = getActiveDocument();
  const layer = getActiveTextLayer(doc);
  if (!layer) return;

  layer.html = textContent.innerHTML;
  layer.plainText = textContent.innerText.trim();
  schedulePreviewRender();
}

function isSelectionInsideTextEditor() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
    return Boolean(state.textSelectionRange);
  }

  const range = selection.getRangeAt(0);
  return textContent.contains(range.commonAncestorContainer);
}

function getTextEditorSelectionRange() {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
    const range = selection.getRangeAt(0);
    if (textContent.contains(range.commonAncestorContainer)) {
      state.textSelectionRange = range.cloneRange();
      return range;
    }
  }
  return state.textSelectionRange;
}

function saveTextEditorSelection() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  if (selection.isCollapsed) {
    if (textContent.contains(selection.anchorNode)) {
      state.textSelectionRange = null;
    }
    return;
  }

  const range = selection.getRangeAt(0);
  if (textContent.contains(range.commonAncestorContainer)) {
    state.textSelectionRange = range.cloneRange();
  }
}

function applyInlineTextStyle(updates) {
  if (!getActiveTextLayer()) return false;
  if (!isSelectionInsideTextEditor()) return false;

  const selection = window.getSelection();
  const range = getTextEditorSelectionRange();
  if (!range) return false;
  const span = document.createElement('span');
  if (updates.color) {
    span.dataset.color = updates.color;
  }
  if (updates.size) {
    span.dataset.size = String(updates.size);
  }
  if (updates.fontFamily) {
    span.dataset.fontFamily = updates.fontFamily;
  }
  if (typeof updates.bold === 'boolean') {
    span.dataset.bold = String(updates.bold);
  }
  if (typeof updates.italic === 'boolean') {
    span.dataset.italic = String(updates.italic);
  }

  span.appendChild(range.extractContents());
  range.insertNode(span);
  selection.removeAllRanges();
  const nextRange = document.createRange();
  nextRange.selectNodeContents(span);
  selection.addRange(nextRange);

  refreshEditorInlineStyles();
  syncActiveTextLayerFromEditor();
  return true;
}

function getTextLayerBounds(layer, canvasWidth, canvasHeight) {
  const lines = (layer.plainText || textContent.innerText || '输入文字').split(/\r?\n/).length;
  const scaledSize = Math.max(10, Math.round(layer.size * Math.min(canvasWidth, canvasHeight) / 1000));
  const canvasRect = previewCanvas.getBoundingClientRect();
  const minWidthPercent = canvasRect.width > 0 ? (180 / canvasRect.width) * 100 : 28;
  const minHeightPercent = canvasRect.height > 0 ? (62 / canvasRect.height) * 100 : 8;
  const textHeightPercent = (scaledSize * Math.max(1, lines) * 1.45 / canvasHeight) * 100;
  const widthPercent = Math.min(78, Math.max(22, minWidthPercent, layer.width || 36));
  const heightPercent = Math.min(36, Math.max(8, minHeightPercent, textHeightPercent + 3));
  const hitPaddingX = Math.max(1.2, widthPercent * 0.03);
  const hitPaddingY = Math.max(1, heightPercent * 0.035);

  return {
    left: layer.x - widthPercent / 2 - hitPaddingX,
    right: layer.x + widthPercent / 2 + hitPaddingX,
    top: layer.y - heightPercent / 2 - hitPaddingY,
    bottom: layer.y + heightPercent / 2 + hitPaddingY,
  };
}

function findTextLayerAtPoint(doc, point) {
  const layers = doc.tools.text.layers || [];
  const canvasSize = getDocumentCanvasSize(doc);
  for (let index = layers.length - 1; index >= 0; index -= 1) {
    const bounds = getTextLayerBounds(layers[index], canvasSize.width, canvasSize.height);
    if (
      point.x >= bounds.left &&
      point.x <= bounds.right &&
      point.y >= bounds.top &&
      point.y <= bounds.bottom
    ) {
      return layers[index];
    }
  }
  return null;
}

function getDocumentCanvasSize(doc) {
  if (isPosterDocument(doc) || isCollageDocument(doc)) {
    const layout = collageLayouts[doc.collage.layoutName];
    return {
      width: layout?.width || 1,
      height: layout?.height || 1,
    };
  }
  return {
    width: doc?.image?.naturalWidth || 1,
    height: doc?.image?.naturalHeight || 1,
  };
}

function createDocument(result, image) {
  return {
    id: state.nextDocumentId++,
    type: 'image',
    sourceName: result.name,
    image,
    meta: result,
    values: { ...presets.reset },
    effectHistory: [],
    nextHistoryId: 1,
    tools: createDefaultTools(),
    grayscale: false,
    styleMode: 'none',
    styleModes: [],
  };
}

function createCollageDocument(layoutName, items) {
  const layout = collageLayouts[layoutName];
  const sourceNames = items.map((item) => item.result.name);
  const slots = layout.slots.map((_slot, index) => {
    const item = items[index] || null;
    return {
      image: item?.image || null,
      sourceName: item?.result.name || `空位 ${index + 1}`,
      sourceMeta: item?.result || null,
      scale: 1,
      offsetX: 0,
      offsetY: 0,
    };
  });

  return {
    id: state.nextDocumentId++,
    type: 'collage',
    sourceName: `${layout.label} ${sourceNames.length}张`,
    meta: {
      extension: 'PNG',
      path: sourceNames.join(' / '),
      size: items.reduce((total, item) => total + (item.result.size || 0), 0),
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    },
    values: { ...presets.reset },
    effectHistory: [],
    nextHistoryId: 1,
    tools: createDefaultTools(),
    grayscale: false,
    styleMode: 'none',
    styleModes: [],
    collage: {
      layoutName,
      activeSlotIndex: 0,
      slots,
    },
  };
}

function loadDocument(result) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(createDocument(result, image));
    image.onerror = () => reject(new Error(result.name));
    image.src = result.dataUrl;
  });
}

function loadCollageItem(result) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve({ result, image });
    image.onerror = () => reject(new Error(result.name));
    image.src = result.dataUrl;
  });
}

function getPosterSourceItemFromDocument(doc) {
  if (!doc) return null;

  if (doc.type === 'image' && doc.image) {
    return {
      image: doc.image,
      result: doc.meta,
    };
  }

  if (isPosterDocument(doc)) {
    const activeSlot = doc.collage.slots[doc.collage.activeSlotIndex];
    const slot = activeSlot?.image ? activeSlot : doc.collage.slots.find((item) => item.image);
    if (!slot?.image) return null;
    return {
      image: slot.image,
      result: slot.sourceMeta || {
        name: slot.sourceName || '当前海报图片',
        path: slot.sourceName || '当前海报图片',
        size: 0,
      },
    };
  }

  return null;
}

function createCollageItemFromImageDocument(doc) {
  if (!doc?.image) return null;
  return {
    image: doc.image,
    result: doc.meta,
  };
}

function createCollageItemFromSlot(slot) {
  if (!slot?.image) return null;
  return {
    image: slot.image,
    result: slot.sourceMeta || {
      name: slot.sourceName || '当前拼图图片',
      path: slot.sourceName || '当前拼图图片',
      size: 0,
    },
  };
}

function getCurrentCollageItems() {
  const activeDocument = getActiveDocument();
  if (isCollageDocument(activeDocument)) {
    return activeDocument.collage.slots
      .map(createCollageItemFromSlot)
      .filter(Boolean);
  }

  const activeItem = activeDocument?.type === 'image'
    ? createCollageItemFromImageDocument(activeDocument)
    : getPosterSourceItemFromDocument(activeDocument);
  const otherItems = state.documents
    .filter((doc) => doc.id !== state.activeDocumentId && doc.type === 'image')
    .map(createCollageItemFromImageDocument)
    .filter(Boolean);

  return activeItem ? [activeItem, ...otherItems] : otherItems;
}

function getSelectionLayoutNameForCount(count) {
  const candidates = ['two-vertical', 'three-feature', 'four-grid', 'five-grid', 'six-grid', 'nine-grid'];
  return candidates.find((name) => collageLayouts[name].slots.length >= count) || 'nine-grid';
}

function isCollageTrimPending(doc) {
  return Boolean(
    state.pendingCollageTrim &&
    isCollageDocument(doc) &&
    doc.id === state.pendingCollageTrim.documentId
  );
}

function shouldShowCollageDeleteButtons(doc) {
  return isCollageDocument(doc) && !isPosterDocument(doc);
}

function createCollageDocumentFromItems(layoutName, items) {
  const collageDocument = createCollageDocument(layoutName, items);
  replaceActiveDocument(collageDocument);
  setActiveTool(null);
  syncUiWithActiveDocument();
  return collageDocument;
}

function finishPendingCollageTrimIfReady(doc) {
  if (!isCollageTrimPending(doc)) return false;
  const { targetLayoutName, targetSlotCount } = state.pendingCollageTrim;
  const items = getCurrentCollageItems();
  if (items.length > targetSlotCount) return false;

  state.pendingCollageTrim = null;
  createCollageDocumentFromItems(targetLayoutName, items);
  const layout = collageLayouts[targetLayoutName];
  showToast(`已应用${layout.label}`);
  return true;
}

function getCollageDeleteButtonAtPoint(doc, point) {
  if (!shouldShowCollageDeleteButtons(doc)) return -1;
  const layout = collageLayouts[doc.collage.layoutName];
  if (!layout) return -1;

  for (let index = 0; index < layout.slots.length; index += 1) {
    if (!doc.collage.slots[index]?.image) continue;
    const button = getCollageDeleteButtonMetrics(layout.slots[index]);
    const distance = Math.hypot(point.x - button.centerX, point.y - button.centerY);
    if (distance <= button.radius) return index;
  }

  return -1;
}

function getCollageDeleteButtonMetrics(layoutSlot) {
  return {
    centerX: Math.max(4.5, Math.min(95.5, (layoutSlot.x + layoutSlot.width) * 100 - 4)),
    centerY: Math.max(4.5, Math.min(95.5, layoutSlot.y * 100 + 4)),
    radius: 3.8,
  };
}

function deletePendingCollageImage(slotIndex) {
  const doc = getActiveDocument();
  if (!isCollageTrimPending(doc)) return false;
  const slot = doc.collage.slots[slotIndex];
  if (!slot?.image) return false;

  doc.collage.slots.splice(slotIndex, 1);
  doc.collage.slots.push({
    image: null,
    sourceName: `空位 ${doc.collage.slots.length + 1}`,
    sourceMeta: null,
    scale: 1,
    offsetX: 0,
    offsetY: 0,
  });
  doc.collage.activeSlotIndex = Math.min(doc.collage.activeSlotIndex, doc.collage.slots.length - 1);
  if (!finishPendingCollageTrimIfReady(doc)) {
    updateImageMeta(doc);
    renderPreview();
    const { targetSlotCount } = state.pendingCollageTrim;
    showToast(`已删除一张，请保留 ${targetSlotCount} 张图片`);
  }
  return true;
}

function resetCollageSlot(slot, index) {
  slot.image = null;
  slot.sourceName = `空位 ${index + 1}`;
  slot.sourceMeta = null;
  slot.scale = 1;
  slot.offsetX = 0;
  slot.offsetY = 0;
}

function deleteCollageImage(slotIndex) {
  const doc = getActiveDocument();
  if (!isCollageDocument(doc) || isPosterDocument(doc)) return false;
  if (isCollageTrimPending(doc)) {
    return deletePendingCollageImage(slotIndex);
  }

  const slot = doc.collage.slots[slotIndex];
  if (!slot?.image) return false;

  resetCollageSlot(slot, slotIndex);
  doc.collage.activeSlotIndex = slotIndex;
  updateCollageDocumentSourceMeta(doc);
  updateImageMeta(doc);
  renderPreview();
  showToast('已删除当前格子的图片');
  return true;
}

function cloneCollageSlotForMove(slot) {
  if (!slot?.image) return null;
  return {
    image: slot.image,
    sourceName: slot.sourceName,
    sourceMeta: slot.sourceMeta,
    scale: slot.scale || 1,
    offsetX: slot.offsetX || 0,
    offsetY: slot.offsetY || 0,
  };
}

function moveCollageImageToSlot(doc, sourceSlotIndex, targetSlotIndex, sourceSnapshot) {
  if (!isCollageDocument(doc) || isPosterDocument(doc) || isCollageTrimPending(doc)) return false;
  if (sourceSlotIndex === targetSlotIndex) return false;

  const sourceSlot = doc.collage.slots[sourceSlotIndex];
  const targetSlot = doc.collage.slots[targetSlotIndex];
  const sourceItem = sourceSnapshot || cloneCollageSlotForMove(sourceSlot);
  if (!sourceItem?.image || !sourceSlot || !targetSlot) return false;
  const targetItem = cloneCollageSlotForMove(targetSlot);

  targetSlot.image = sourceItem.image;
  targetSlot.sourceName = sourceItem.sourceName;
  targetSlot.sourceMeta = sourceItem.sourceMeta;
  targetSlot.scale = sourceItem.scale || 1;
  targetSlot.offsetX = sourceItem.offsetX || 0;
  targetSlot.offsetY = sourceItem.offsetY || 0;

  if (targetItem?.image) {
    sourceSlot.image = targetItem.image;
    sourceSlot.sourceName = targetItem.sourceName;
    sourceSlot.sourceMeta = targetItem.sourceMeta;
    sourceSlot.scale = targetItem.scale || 1;
    sourceSlot.offsetX = targetItem.offsetX || 0;
    sourceSlot.offsetY = targetItem.offsetY || 0;
  } else {
    resetCollageSlot(sourceSlot, sourceSlotIndex);
  }

  doc.collage.activeSlotIndex = targetSlotIndex;
  updateCollageDocumentSourceMeta(doc);
  updateImageMeta(doc);
  renderPreview();
  showToast(targetItem?.image ? '已交换两张拼图图片' : '已将图片移动到目标空位');
  return true;
}

function getCollageFillSlotIndexes(doc, preferredSlotIndex = null) {
  if (!isCollageDocument(doc) || isPosterDocument(doc)) return [];
  const emptyIndexes = doc.collage.slots
    .map((slot, index) => (slot.image ? -1 : index))
    .filter((index) => index !== -1);

  if (!Number.isInteger(preferredSlotIndex)) {
    return emptyIndexes;
  }

  const validPreferredIndex = preferredSlotIndex >= 0 && preferredSlotIndex < doc.collage.slots.length;
  if (!validPreferredIndex) return emptyIndexes;
  return [
    preferredSlotIndex,
    ...emptyIndexes.filter((index) => index !== preferredSlotIndex),
  ];
}

function updateCollageDocumentSourceMeta(doc) {
  if (!isCollageDocument(doc)) return;
  const layout = collageLayouts[doc.collage.layoutName];
  const filledSlots = doc.collage.slots.filter((slot) => slot.image);
  const sourceNames = filledSlots.map((slot) => slot.sourceName).filter(Boolean);
  const totalSize = filledSlots.reduce((total, slot) => total + (slot.sourceMeta?.size || 0), 0);

  doc.sourceName = `${layout?.label || '拼图'} ${filledSlots.length}张`;
  doc.meta = {
    ...doc.meta,
    extension: 'PNG',
    path: sourceNames.join(' / '),
    size: totalSize,
    modifiedAt: new Date().toISOString(),
  };
}

function fillCollageSlotsWithItems(doc, items, preferredSlotIndex = null) {
  if (!isCollageDocument(doc) || isPosterDocument(doc) || items.length === 0) return 0;
  const slotIndexes = getCollageFillSlotIndexes(doc, preferredSlotIndex);
  if (slotIndexes.length === 0) return 0;

  const fillCount = Math.min(items.length, slotIndexes.length);
  for (let index = 0; index < fillCount; index += 1) {
    const slot = doc.collage.slots[slotIndexes[index]];
    const item = items[index];
    slot.image = item.image;
    slot.sourceName = item.result.name;
    slot.sourceMeta = item.result;
    slot.scale = 1;
    slot.offsetX = 0;
    slot.offsetY = 0;
  }

  doc.collage.activeSlotIndex = slotIndexes[0];
  updateCollageDocumentSourceMeta(doc);
  updateImageMeta(doc);
  renderPreview();
  return fillCount;
}

async function fillCollageSlotsFromResults(doc, results, preferredSlotIndex = null) {
  const files = Array.isArray(results) ? results : [results];
  if (!isCollageDocument(doc) || isPosterDocument(doc) || files.length === 0) return false;

  const slotIndexes = getCollageFillSlotIndexes(doc, preferredSlotIndex);
  if (slotIndexes.length === 0) {
    showToast('当前拼图没有空位，请先删除或更换图片');
    return true;
  }

  try {
    const loadedItems = await Promise.all(files.slice(0, slotIndexes.length).map(loadCollageItem));
    const fillCount = fillCollageSlotsWithItems(doc, loadedItems, preferredSlotIndex);
    const emptyCount = doc.collage.slots.filter((slot) => !slot.image).length;
    showToast(emptyCount > 0
      ? `已添加 ${fillCount} 张图片，还剩 ${emptyCount} 个空位`
      : '拼图图片已填满');
  } catch (error) {
    showToast(`拼图图片加载失败：${error.message}`);
  }
  return true;
}

async function chooseImageForCollageSlot(slotIndex) {
  const doc = getActiveDocument();
  if (!isCollageDocument(doc) || isPosterDocument(doc)) return false;
  const documentId = doc.id;
  const results = await window.imageEnhancer.openImage();
  if (!results) return false;

  const activeDocument = getActiveDocument();
  if (!isCollageDocument(activeDocument) || activeDocument.id !== documentId) return false;
  return fillCollageSlotsFromResults(activeDocument, results, slotIndex);
}

function replaceActiveDocument(nextDocument) {
  const currentIndex = state.documents.findIndex((doc) => doc.id === state.activeDocumentId);
  if (currentIndex === -1) {
    state.documents.push(nextDocument);
    state.activeDocumentId = nextDocument.id;
    return;
  }

  const currentId = state.documents[currentIndex].id;
  nextDocument.id = currentId;
  state.documents[currentIndex] = nextDocument;
  state.activeDocumentId = currentId;
}

function restoreImageFromPosterLayoutHistory(doc, entry) {
  const fallbackItem = getPosterSourceItemFromDocument(doc);
  const image = entry.sourceImage || fallbackItem?.image;
  const meta = entry.sourceMeta || fallbackItem?.result;
  if (!image || !meta) return false;

  const imageDocument = createDocument(meta, image);
  replaceActiveDocument(imageDocument);
  setActiveTool(null);
  syncUiWithActiveDocument();
  return true;
}

function renderDocumentTabs() {
  documentTabs.replaceChildren();
  documentTabs.classList.toggle('empty', state.documents.length === 0);

  state.documents.forEach((doc) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = doc.id === state.activeDocumentId ? 'document-tab active' : 'document-tab';
    tab.title = doc.meta.path || doc.sourceName;
    tab.addEventListener('click', () => activateDocument(doc.id));

    const title = document.createElement('span');
    title.className = 'document-tab-title';
    title.textContent = doc.sourceName;

    const close = document.createElement('span');
    close.className = 'document-tab-close';
    close.textContent = 'x';
    close.setAttribute('role', 'button');
    close.setAttribute('aria-label', `关闭 ${doc.sourceName}`);
    close.addEventListener('click', (event) => {
      event.stopPropagation();
      closeDocument(doc.id);
    });

    tab.append(title, close);
    documentTabs.appendChild(tab);
  });
}

function activateDocument(documentId) {
  if (state.activeDocumentId === documentId) return;
  state.activeDocumentId = documentId;
  syncUiWithActiveDocument();
}

function closeDocument(documentId) {
  const closingIndex = state.documents.findIndex((doc) => doc.id === documentId);
  if (closingIndex === -1) return;

  const wasActive = state.activeDocumentId === documentId;
  state.documents.splice(closingIndex, 1);

  if (wasActive) {
    const nextDocument = state.documents[closingIndex] || state.documents[closingIndex - 1] || null;
    state.activeDocumentId = nextDocument ? nextDocument.id : null;
  }

  syncUiWithActiveDocument();
}

function syncControlsFromDocument(doc) {
  controlsConfig.forEach((config) => {
    const slider = sliderElements.get(config.key);
    const valueLabel = valueElements.get(config.key);
    const value = doc?.values?.[config.key] ?? config.value;
    if (slider) slider.value = value;
    if (valueLabel) valueLabel.textContent = String(value);
  });
}

function getControlConfig(key) {
  return controlsConfig.find((config) => config.key === key);
}

function clampControlValue(key, value) {
  const config = getControlConfig(key);
  if (!config) return value;
  return Math.min(config.max, Math.max(config.min, Math.round(value)));
}

function updateControlValue(doc, key, value) {
  const nextValue = clampControlValue(key, value);
  doc.values[key] = nextValue;
  const slider = sliderElements.get(key);
  const valueLabel = valueElements.get(key);
  if (slider) slider.value = nextValue;
  if (valueLabel) valueLabel.textContent = String(nextValue);
  return nextValue;
}

function renderHistoryPanel(doc = getActiveDocument()) {
  historyList.replaceChildren();
  const history = doc?.effectHistory || [];
  historyUndoButton.disabled = !doc || history.length === 0;

  if (!doc) {
    const empty = document.createElement('p');
    empty.className = 'history-empty';
    empty.textContent = '请先打开图片';
    historyList.appendChild(empty);
    return;
  }

  if (history.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'history-empty';
    empty.textContent = '还没有一键效果记录';
    historyList.appendChild(empty);
    return;
  }

  const latestHistoryId = history[history.length - 1]?.id;
  history.forEach((entry) => {
    const item = document.createElement('div');
    item.className = 'history-item';

    const info = document.createElement('div');
    info.className = 'history-info';

    const title = document.createElement('strong');
    title.textContent = entry.label;

    const meta = document.createElement('span');
    meta.textContent = entry.id === latestHistoryId
      ? '最新操作'
      : entry.type === 'edit'
        ? '编辑操作'
        : entry.type === 'poster-edit'
          ? '海报编辑'
          : entry.type === 'poster-layout'
          ? '海报样式'
          : entry.type === 'style'
            ? '风格效果'
            : '快捷效果';

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'history-remove';
    remove.textContent = '删除';
    remove.setAttribute('aria-label', `删除历史操作 ${entry.label}`);
    remove.addEventListener('click', () => removeHistoryEntry(entry.id));

    info.append(title, meta);
    item.append(info, remove);
    historyList.appendChild(item);
  });
}

function removeHistoryEntry(historyId) {
  const doc = getActiveDocument();
  if (!doc) return;

  const index = doc.effectHistory.findIndex((entry) => entry.id === historyId);
  if (index === -1) return;

  const entry = doc.effectHistory[index];
  if (entry.type === 'edit' || entry.type === 'poster-edit') {
    doc.effectHistory.splice(index, 1);
    if (!applyTextHistoryInverse(doc, entry)) {
      restorePosterHistorySnapshot(doc, entry.beforeSnapshot);
    }
    renderHistoryPanel(doc);
    renderPreview();
    showToast(`已删除并回退：${entry.label}`);
    return;
  }

  if (entry.type === 'poster-layout') {
    if (restoreImageFromPosterLayoutHistory(doc, entry)) {
      showToast('已删除海报样式，恢复为原图片');
    } else {
      doc.effectHistory.splice(index, 1);
      renderHistoryPanel(doc);
      showToast(`已删除历史：${entry.label}`);
    }
    return;
  }

  doc.effectHistory.splice(index, 1);
  Object.entries(entry.appliedValues || {}).forEach(([key, value]) => {
    updateControlValue(doc, key, doc.values[key] - value);
  });

  if (entry.styleMode && Array.isArray(doc.styleModes)) {
    const styleIndex = doc.styleModes.lastIndexOf(entry.styleMode);
    if (styleIndex !== -1) doc.styleModes.splice(styleIndex, 1);
  }

  doc.styleMode = doc.styleModes?.[doc.styleModes.length - 1] || 'none';
  doc.grayscale = false;
  renderHistoryPanel(doc);
  renderPreview();
  showToast(`已删除历史：${entry.label}`);
}

function undoLastHistoryEntry() {
  const doc = getActiveDocument();
  const lastEntry = doc?.effectHistory?.[doc.effectHistory.length - 1];
  if (!lastEntry) return;
  removeHistoryEntry(lastEntry.id);
}


function syncToolControlsFromDocument(doc) {
  const tools = doc?.tools || defaultTools;
  const { mosaic } = tools;
  const textSource = getTextControlSource(doc);

  mosaicToggle.checked = Boolean(mosaic.enabled);
  mosaicPreset.value = mosaic.preset || 'custom';
  mosaicShape.value = mosaic.shape;
  mosaicStyle.value = mosaic.style;
  mosaicSize.value = mosaic.size;
  mosaicSizeValue.textContent = String(mosaic.size);
  mosaicColor.value = mosaic.color;
  mosaicPattern.value = mosaic.pattern;
  const activeLayer = getActiveTextLayer(doc);
  if (!activeLayer) {
    textContent.replaceChildren();
  } else if (textContent.innerHTML !== activeLayer.html) {
    textContent.innerHTML = activeLayer.html;
  }
  textPreset.value = textSource.preset || 'custom';
  textFont.value = textSource.fontFamily;
  textEffect.value = textSource.effect;
  textSize.value = textSource.size;
  textSizeValue.textContent = String(textSource.size);
  textColor.value = textSource.color;
  textBold.checked = Boolean(textSource.bold);
  textItalic.checked = Boolean(textSource.italic);
}

function clearPreviewCanvas() {
  previewContext.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
  previewCanvas.style.width = '';
  previewCanvas.style.height = '';
  hideTextEditorOverlay();
}

function syncUiWithActiveDocument() {
  const activeDocument = getActiveDocument();
  clearTimeout(state.renderTimer);
  renderDocumentTabs();

  if (!activeDocument) {
    fileName.textContent = '还没有打开图片';
    imageMeta.replaceChildren();
    const hint = document.createElement('span');
    hint.textContent = '支持 JPG / PNG / WEBP / BMP';
    imageMeta.appendChild(hint);
    emptyState.style.display = 'grid';
    previewCanvas.style.display = 'none';
    saveButton.disabled = true;
    setAdjustmentsEnabled(false);
    syncControlsFromDocument(null);
    renderHistoryPanel(null);
    setActiveTool(null);
    clearPreviewCanvas();
    return;
  }

  fileName.textContent = activeDocument.sourceName;
  updateImageMeta(activeDocument);
  emptyState.style.display = 'none';
  previewCanvas.style.display = 'block';
  saveButton.disabled = false;
  setAdjustmentsEnabled(!isCollageDocument(activeDocument) || isPosterDocument(activeDocument));
  syncControlsFromDocument(activeDocument);
  renderHistoryPanel(activeDocument);
  if (isCollageDocument(activeDocument) && !isPosterDocument(activeDocument)) {
    setActiveTool(null);
  }
  renderPreview();
}

function createControls() {
  controlsConfig.forEach((config) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'control';

    const head = document.createElement('div');
    head.className = 'control-head';

    const label = document.createElement('span');
    label.textContent = config.label;

    const value = document.createElement('span');
    value.textContent = String(config.value);

    const input = document.createElement('input');
    input.type = 'range';
    input.min = config.min;
    input.max = config.max;
    input.value = config.value;
    input.dataset.key = config.key;

    input.addEventListener('input', () => {
      const doc = getActiveDocument();
      if (!doc) return;

      doc.values[config.key] = Number(input.value);
      value.textContent = input.value;
      schedulePreviewRender();
    });

    head.append(label, value);
    wrapper.append(head, input);
    controlsElement.appendChild(wrapper);
    sliderElements.set(config.key, input);
    valueElements.set(config.key, value);
  });
}

function setAdjustmentsEnabled(enabled) {
  rightPanel.classList.toggle('disabled', !enabled);
  rightPanel.setAttribute('aria-disabled', String(!enabled));
  sliderElements.forEach((slider) => {
    slider.disabled = !enabled;
  });
  toolInputs.forEach((input) => {
    input.disabled = !enabled;
  });
  textContent.contentEditable = String(enabled);
}

function setControlValues(values) {
  const doc = getActiveDocument();
  if (!doc) return;

  Object.entries(values).forEach(([key, value]) => {
    updateControlValue(doc, key, value);
  });
}

function updateMosaicTool(updates) {
  const doc = getActiveDocument();
  if (!doc) return;

  flushPendingTextHistory();
  const beforeSnapshot = createPosterHistorySnapshot(doc);
  Object.assign(doc.tools.mosaic, updates);
  syncToolControlsFromDocument(doc);
  schedulePreviewRender();
  pushPosterEditHistory(doc, isPosterDocument(doc) ? '调整海报马赛克' : '调整马赛克', beforeSnapshot);
}

function applyMosaicPreset(name) {
  const preset = mosaicPresets[name];
  if (!preset) return;
  updateMosaicTool({ ...preset, preset: name });
}

function applyTextPreset(name) {
  const preset = textPresets[name];
  if (!preset) return;
  updateTextTool({ ...preset, preset: name }, true);
}

function updateTextTool(updates, applyToSelection = false) {
  const doc = getActiveDocument();
  if (!doc) return;

  flushPendingTextHistory();
  const beforeSnapshot = createPosterHistorySnapshot(doc);
  if (applyToSelection && applyInlineTextStyle(updates)) {
    syncToolControlsFromDocument(doc);
    pushPosterEditHistory(doc, '调整文字样式', beforeSnapshot);
    return;
  }

  const layer = getActiveTextLayer(doc);
  if (layer) {
    Object.assign(layer, updates);
  } else {
    Object.assign(doc.tools.text.defaults, updates);
  }
  syncToolControlsFromDocument(doc);
  updateTextEditorOverlay();
  schedulePreviewRender();
  pushPosterEditHistory(doc, '调整文字样式', beforeSnapshot);
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes < 0) return '未知大小';

  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  const precision = unitIndex === 0 ? 0 : size >= 10 ? 1 : 2;
  return `${size.toFixed(precision)} ${units[unitIndex]}`;
}

function formatDateTime(value) {
  if (!value) return '未知时间';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '未知时间';

  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function updateImageMeta(doc) {
  imageMeta.replaceChildren();

  if (isCollageDocument(doc)) {
    const layout = collageLayouts[doc.collage.layoutName];
    const filledSlots = doc.collage.slots.filter((slot) => slot.image).length;
    const activeSlot = doc.collage.slots[doc.collage.activeSlotIndex];
    const isPoster = layout.type === 'poster';
    const rows = [
      ['画布', `${layout.width} x ${layout.height}`],
      [isPoster ? '模板' : '布局', layout.label],
      ['图片', `${filledSlots} / ${layout.slots.length} 张`],
      ['选中', activeSlot?.image ? activeSlot.sourceName : '空位'],
      ['操作', isPoster ? '拖动照片移动，滚轮缩放融合位置' : '点击空格子选择图片，已有图片可拖动移动、滚轮缩放'],
    ];

    rows.forEach(([label, value]) => {
      const row = document.createElement('div');
      row.className = label === '操作' ? 'meta-row meta-path' : 'meta-row';

      const labelElement = document.createElement('span');
      labelElement.className = 'meta-label';
      labelElement.textContent = label;

      const valueElement = document.createElement('span');
      valueElement.className = 'meta-value';
      valueElement.textContent = value;
      valueElement.title = value;

      row.append(labelElement, valueElement);
      imageMeta.appendChild(row);
    });
    return;
  }

  const result = doc.meta;
  const { image } = doc;
  const rows = [
    ['尺寸', `${image.naturalWidth} x ${image.naturalHeight}`],
    ['格式', result.extension || '未知'],
    ['大小', formatFileSize(result.size)],
    ['修改', formatDateTime(result.modifiedAt)],
    ['创建', formatDateTime(result.createdAt)],
    ['路径', result.path || '未知路径'],
  ];

  rows.forEach(([label, value]) => {
    const row = document.createElement('div');
    row.className = label === '路径' ? 'meta-row meta-path' : 'meta-row';

    const labelElement = document.createElement('span');
    labelElement.className = 'meta-label';
    labelElement.textContent = label;

    const valueElement = document.createElement('span');
    valueElement.className = 'meta-value';
    valueElement.textContent = value;
    valueElement.title = value;

    row.append(labelElement, valueElement);
    imageMeta.appendChild(row);
  });
}

function schedulePreviewRender() {
  if (!getActiveDocument()) return;
  clearTimeout(state.renderTimer);
  state.renderTimer = setTimeout(renderPreview, 80);
}

async function openImage() {
  const results = await window.imageEnhancer.openImage();
  if (!results) return;

  const files = Array.isArray(results) ? results : [results];
  if (files.length === 0) return;

  const activeDocument = getActiveDocument();
  if (
    isCollageDocument(activeDocument) &&
    !isPosterDocument(activeDocument) &&
    activeDocument.collage.slots.some((slot) => !slot.image)
  ) {
    await fillCollageSlotsFromResults(activeDocument, files);
    return;
  }

  try {
    const loadedDocuments = await Promise.all(files.map(loadDocument));
    state.documents.push(...loadedDocuments);
    state.activeDocumentId = loadedDocuments[loadedDocuments.length - 1].id;
    setActiveTool(null);
    syncUiWithActiveDocument();
    showToast(files.length > 1 ? `已打开 ${files.length} 张图片` : '图片已打开');
  } catch (error) {
    showToast(`图片加载失败：${error.message}`);
  }
}

async function createCollageFromLayout(layoutName) {
  const layout = collageLayouts[layoutName];
  if (!layout) return;

  state.pendingCollageTrim = null;
  const targetSlotCount = layout.slots.length;
  const currentItems = getCurrentCollageItems();
  let items = currentItems.slice();

  if (items.length > targetSlotCount) {
    const activeDocument = getActiveDocument();
    const selectionLayoutName = isCollageDocument(activeDocument) && activeDocument.collage.slots.length >= items.length
      ? activeDocument.collage.layoutName
      : getSelectionLayoutNameForCount(items.length);
    const selectionDocument = createCollageDocumentFromItems(selectionLayoutName, items);
    state.pendingCollageTrim = {
      documentId: selectionDocument.id,
      targetLayoutName: layoutName,
      targetSlotCount,
    };
    renderPreview();
    showToast(`${layout.label}需要 ${targetSlotCount} 张，请点击图片右上角删除多余图片`);
    return;
  }

  try {
    createCollageDocumentFromItems(layoutName, items);
    const remainingCount = targetSlotCount - items.length;
    showToast(remainingCount > 0
      ? `已创建${layout.label}，还有 ${remainingCount} 个空位，点击空格子选择图片`
      : `已创建${layout.label}，点击格子后可拖动或滚轮缩放`);
  } catch (error) {
    showToast(`拼图图片加载失败：${error.message}`);
  }
}

async function createPosterFromLayout(layoutName) {
  const layout = collageLayouts[layoutName];
  if (!layout || layout.type !== 'poster') return;

  commitTextEditorChanges();
  const activeDocument = getActiveDocument();
  const currentItem = getPosterSourceItemFromDocument(activeDocument);
  if (currentItem) {
    const posterDocument = createCollageDocument(layoutName, [currentItem]);
    if (isPosterDocument(activeDocument)) {
      const beforeSnapshot = createPosterHistorySnapshot(activeDocument);
      activeDocument.sourceName = posterDocument.sourceName;
      activeDocument.collage = posterDocument.collage;
      pushPosterEditHistory(activeDocument, `切换海报样式：${layout.label}`, beforeSnapshot);
    } else {
      posterDocument.effectHistory.push({
        id: posterDocument.nextHistoryId++,
        type: 'poster-layout',
        name: layoutName,
        label: `应用海报样式：${layout.label}`,
        sourceImage: currentItem.image,
        sourceMeta: currentItem.result,
      });
      replaceActiveDocument(posterDocument);
    }
    setActiveTool(null);
    syncUiWithActiveDocument();
    showToast(`已用当前图片切换为${layout.label}`);
    return;
  }

  try {
    showToast(`请选择插入${layout.label}的照片`);
    const results = await window.imageEnhancer.openImage();
    if (!results) return;

    const files = (Array.isArray(results) ? results : [results]).slice(0, 1);
    if (files.length === 0) return;

    const loadedItems = await Promise.all(files.map(loadCollageItem));
    const posterDocument = createCollageDocument(layoutName, loadedItems);
    posterDocument.effectHistory.push({
      id: posterDocument.nextHistoryId++,
      type: 'poster-layout',
      name: layoutName,
      label: `应用海报样式：${layout.label}`,
      sourceImage: loadedItems[0].image,
      sourceMeta: loadedItems[0].result,
    });
    replaceActiveDocument(posterDocument);
    setActiveTool(null);
    syncUiWithActiveDocument();
    showToast(`已生成${layout.label}，可拖动照片或滚轮缩放融合位置`);
  } catch (error) {
    showToast(`海报图片加载失败：${error.message}`);
  }
}

async function saveImage() {
  const doc = getActiveDocument();
  if (!doc) {
    showToast('请先打开图片');
    return;
  }

  showToast('正在生成全尺寸图片...');
  const outputCanvas = isCollageDocument(doc)
    ? buildCollageCanvas(doc, Number.POSITIVE_INFINITY, false, true, false)
    : buildProcessedCanvas(doc.image, Number.POSITIVE_INFINITY, doc, false, true);
  const dataUrl = outputCanvas.toDataURL('image/png');
  const savedPath = await window.imageEnhancer.saveImage({
    sourceName: doc.sourceName,
    dataUrl,
  });

  if (savedPath) {
    showToast('图片已保存');
  }
}

function applyStackedEffect({ type, name, label, values, styleMode = null }) {
  const doc = getActiveDocument();
  if (!doc) return;

  const appliedValues = {};
  Object.entries(values).forEach(([key, value]) => {
    const before = doc.values[key] ?? 0;
    const after = updateControlValue(doc, key, before + value);
    appliedValues[key] = after - before;
  });

  if (!Array.isArray(doc.effectHistory)) doc.effectHistory = [];
  if (!Array.isArray(doc.styleModes)) doc.styleModes = [];
  if (!doc.nextHistoryId) doc.nextHistoryId = 1;
  if (styleMode) doc.styleModes.push(styleMode);

  doc.grayscale = false;
  doc.styleMode = doc.styleModes[doc.styleModes.length - 1] || 'none';
  doc.effectHistory.push({
    id: doc.nextHistoryId++,
    type,
    name,
    label,
    appliedValues,
    styleMode,
  });
  renderHistoryPanel(doc);
  renderPreview();
  showToast(`已叠加：${label}`);
}

function resetEffects() {
  const doc = getActiveDocument();
  if (!doc) return;

  setControlValues(presets.reset);
  doc.effectHistory = [];
  doc.nextHistoryId = 1;
  doc.styleModes = [];
  doc.grayscale = false;
  doc.styleMode = 'none';
  renderHistoryPanel(doc);
  renderPreview();
  showToast('已重置效果');
}

function applyPreset(name, label = '快捷效果') {
  const values = presets[name];
  if (!values) return;
  if (name === 'reset') {
    resetEffects();
    return;
  }

  applyStackedEffect({
    type: 'preset',
    name,
    label,
    values,
  });
}

function applyStylePreset(name) {
  const style = stylePresets[name];
  if (!style) return;

  applyStackedEffect({
    type: 'style',
    name,
    label: style.label,
    values: style.controls,
    styleMode: name,
  });
}

function toggleCollapsibleOptions(button, options) {
  const isCollapsed = options.classList.toggle('collapsed');
  button.classList.toggle('expanded', !isCollapsed);
  button.setAttribute('aria-expanded', String(!isCollapsed));
}

function togglePosterOptions() {
  toggleCollapsibleOptions(posterToggleButton, posterOptions);
}

function toggleSceneOptions() {
  toggleCollapsibleOptions(sceneToggleButton, sceneOptions);
}

function toggleQualityOptions() {
  toggleCollapsibleOptions(qualityToggleButton, qualityOptions);
}

function toggleToneOptions() {
  toggleCollapsibleOptions(toneToggleButton, toneOptions);
}

function toggleRepairOptions() {
  toggleCollapsibleOptions(repairToggleButton, repairOptions);
}

function togglePortraitDetailOptions() {
  toggleCollapsibleOptions(portraitDetailToggleButton, portraitDetailOptions);
}

function toggleSocialOptions() {
  toggleCollapsibleOptions(socialToggleButton, socialOptions);
}

function toggleCollageOptions() {
  toggleCollapsibleOptions(collageToggleButton, collageOptions);
}

function toggleStyleOptions() {
  toggleCollapsibleOptions(styleToggleButton, styleOptions);
}

function renderPreview() {
  const doc = getActiveDocument();
  if (!doc) return;
  previewCanvas.dataset.mode = isCollageDocument(doc) ? 'collage' : 'image';
  if (isCollageDocument(doc)) {
    const hideActiveTextLayer = isPosterDocument(doc) && shouldHideActiveTextLayerInPreview();
    const collageCanvas = buildCollageCanvas(
      doc,
      1500,
      true,
      isPosterDocument(doc),
      hideActiveTextLayer
    );
    previewCanvas.width = collageCanvas.width;
    previewCanvas.height = collageCanvas.height;
    previewContext.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
    previewContext.drawImage(collageCanvas, 0, 0);
    fitPreviewCanvasToContainer();
    updateImageMeta(doc);
    if (isPosterDocument(doc)) {
      updateTextEditorOverlay();
    } else {
      hideTextEditorOverlay();
    }
    return;
  }

  const hideActiveTextLayer = shouldHideActiveTextLayerInPreview();

  const canvas = buildProcessedCanvas(
    doc.image,
    1500,
    doc,
    state.activeTool === 'mosaic',
    true,
    hideActiveTextLayer
  );
  previewCanvas.width = canvas.width;
  previewCanvas.height = canvas.height;
  previewContext.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
  previewContext.drawImage(canvas, 0, 0);
  fitPreviewCanvasToContainer();
  updateTextEditorOverlay();
}

function fitPreviewCanvasToContainer() {
  if (!previewCanvas.width || !previewCanvas.height) return;

  const styles = window.getComputedStyle(canvasCard);
  const paddingX = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  const paddingY = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
  const availableWidth = Math.max(1, canvasCard.clientWidth - paddingX);
  const availableHeight = Math.max(1, canvasCard.clientHeight - paddingY);
  const scale = Math.min(
    availableWidth / previewCanvas.width,
    availableHeight / previewCanvas.height,
    1
  );

  previewCanvas.style.width = `${Math.floor(previewCanvas.width * scale)}px`;
  previewCanvas.style.height = `${Math.floor(previewCanvas.height * scale)}px`;
  updateTextEditorOverlay();
}

function hideTextEditorOverlay() {
  textEditorFrame.classList.remove('visible');
}

function shouldHideActiveTextLayerInPreview() {
  const activeLayer = getActiveTextLayer();
  if (!activeLayer || state.activeTool !== 'text') return false;

  return document.activeElement === textContent && textEditorFrame.classList.contains('visible');
}

function updateTextEditorOverlay() {
  const doc = getActiveDocument();
  const layer = getActiveTextLayer(doc);
  if (!doc || !layer || state.activeTool !== 'text' || previewCanvas.style.display === 'none') {
    hideTextEditorOverlay();
    return;
  }

  const canvasRect = previewCanvas.getBoundingClientRect();
  const cardRect = canvasCard.getBoundingClientRect();
  if (canvasRect.width <= 0 || canvasRect.height <= 0) {
    hideTextEditorOverlay();
    return;
  }

  const displayScale = canvasRect.width / Math.max(1, previewCanvas.width);
  const fontScale = Math.min(previewCanvas.width, previewCanvas.height) / 1000 * displayScale;
  const fontSize = Math.max(14, Math.round(layer.size * fontScale));
  const width = Math.min(Math.max(180, canvasRect.width * ((layer.width || 36) / 100)), canvasRect.width * 0.78);
  const left = canvasRect.left - cardRect.left + canvasRect.width * (layer.x / 100);
  const top = canvasRect.top - cardRect.top + canvasRect.height * (layer.y / 100);

  textEditorFrame.style.left = `${left}px`;
  textEditorFrame.style.top = `${top}px`;
  textEditorFrame.style.width = `${width}px`;
  textEditorFrame.style.transform = 'translate(-50%, -50%)';
  textEditorFrame.classList.add('visible');

  if (textContent.innerHTML !== layer.html) {
    textContent.innerHTML = layer.html;
  }
  textContent.style.color = layer.color;
  textContent.style.fontFamily = layer.fontFamily;
  textContent.style.fontSize = `${fontSize}px`;
  textContent.style.fontWeight = layer.bold ? '700' : '400';
  textContent.style.fontStyle = layer.italic ? 'italic' : 'normal';
  textContent.dataset.layerId = String(layer.id);
  textContent.dataset.fontScale = String(fontScale);
  refreshEditorInlineStyles();
  applyTextEditorEffect(layer, fontSize);
}

function refreshEditorInlineStyles() {
  const fontScale = Number(textContent.dataset.fontScale) || 1;
  textContent.querySelectorAll('span').forEach((span) => {
    if (span.dataset.color) {
      span.style.color = span.dataset.color;
    }
    if (span.dataset.size) {
      span.style.fontSize = `${Math.max(10, Number(span.dataset.size) * fontScale)}px`;
    }
    if (span.dataset.fontFamily) {
      span.style.fontFamily = span.dataset.fontFamily;
    }
    if (span.dataset.bold) {
      span.style.fontWeight = span.dataset.bold === 'true' ? '700' : '400';
    }
    if (span.dataset.italic) {
      span.style.fontStyle = span.dataset.italic === 'true' ? 'italic' : 'normal';
    }
  });
}

function applyTextEditorEffect(text, fontSize) {
  const blur = getTextShadowBlur(text.effect, fontSize);
  const stroke = getTextStrokeWidth(text.effect, fontSize);
  const darkStroke = `0 0 ${Math.max(1, stroke)}px rgba(0, 0, 0, 0.72)`;
  const baseShadow = `0 ${Math.max(1, fontSize * 0.06)}px ${blur}px rgba(0, 0, 0, 0.58)`;

  textContent.style.textShadow = baseShadow;
  textContent.style.webkitTextStroke = '0 transparent';
  textContent.style.filter = 'none';

  if (text.effect === 'glow') {
    textContent.style.textShadow = [
      `0 0 ${Math.max(6, fontSize * 0.24)}px ${text.color}`,
      `0 0 ${Math.max(12, fontSize * 0.45)}px ${text.color}`,
      darkStroke,
    ].join(', ');
  } else if (text.effect === 'float') {
    textContent.style.textShadow = [
      `0 ${Math.max(5, fontSize * 0.16)}px ${Math.max(10, fontSize * 0.3)}px rgba(0, 0, 0, 0.62)`,
      `0 ${Math.max(2, fontSize * 0.08)}px ${Math.max(4, fontSize * 0.14)}px rgba(0, 0, 0, 0.4)`,
    ].join(', ');
  } else if (text.effect === 'outline') {
    textContent.style.webkitTextStroke = `${Math.max(1, stroke * 0.45)}px rgba(255, 255, 255, 0.82)`;
    textContent.style.textShadow = darkStroke;
  }
}

function buildProcessedCanvas(
  image,
  maxSize,
  doc = getActiveDocument(),
  showGuides = false,
  showTextLayer = true,
  hideActiveTextLayer = false
) {
  if (!doc) return createCanvas(1, 1);

  const scale = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d', { willReadFrequently: true });

  context.drawImage(image, 0, 0, width, height);
  applyDocumentEffectsToCanvas(context, canvas, doc, showGuides, showTextLayer, hideActiveTextLayer);

  return canvas;
}

function applyDocumentEffectsToCanvas(
  context,
  canvas,
  doc,
  showGuides = false,
  showTextLayer = true,
  hideActiveTextLayer = false
) {
  const { width, height } = canvas;
  applyPixelAdjustments(context, width, height, doc.values);
  const skinMask = buildSkinMask(context, width, height);

  if (doc.values.whitening > 0) {
    applySkinWhitening(context, width, height, doc.values.whitening, skinMask);
  }

  if (doc.values.skinSmooth > 0 || doc.values.denoise > 0) {
    applySmoothOverlay(context, canvas, doc.values.skinSmooth, doc.values.denoise, skinMask);
  }

  if (doc.values.sharpness > 0) {
    applySharpen(context, width, height, doc.values.sharpness);
  }

  if (doc.values.faceSlim > 0) {
    applyCenterSlim(context, width, height, doc.values.faceSlim);
  }

  if (doc.values.softGlow > 0) {
    applySoftGlow(context, canvas, doc.values.softGlow);
  }

  const activeStyleModes = Array.isArray(doc.styleModes) && doc.styleModes.length > 0
    ? doc.styleModes
    : doc.styleMode !== 'none'
      ? [doc.styleMode]
      : [];
  activeStyleModes.forEach((styleMode) => {
    applyStyleGrade(context, width, height, styleMode);
  });

  if (doc.grayscale) {
    applyGrayscale(context, width, height);
  }

  if (doc.tools.mosaic.enabled) {
    applyMosaic(context, width, height, doc.tools.mosaic, showGuides);
  }

  if (showTextLayer) {
    applyTextOverlay(context, width, height, doc.tools.text, hideActiveTextLayer);
  }
}

function buildCollageCanvas(
  doc,
  maxSize,
  showGuides = false,
  showTextLayer = true,
  hideActiveTextLayer = false
) {
  const layout = collageLayouts[doc.collage.layoutName];
  if (!layout) return createCanvas(1, 1);

  const scale = Math.min(1, maxSize / Math.max(layout.width, layout.height));
  const width = Math.max(1, Math.round(layout.width * scale));
  const height = Math.max(1, Math.round(layout.height * scale));
  const gap = Math.max(0, Math.round(layout.gap * scale));
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d', { willReadFrequently: layout.type === 'poster' });

  if (layout.type === 'poster') {
    drawPosterBackground(context, width, height, layout);
  } else {
    context.fillStyle = '#f8fafc';
    context.fillRect(0, 0, width, height);
  }

  const activeRects = [];
  const showSlotGuide = showGuides && !(layout.type === 'poster' && ['mosaic', 'text'].includes(state.activeTool));

  layout.slots.forEach((layoutSlot, index) => {
    const slot = doc.collage.slots[index];
    const rect = getCollageSlotRect(layoutSlot, width, height, gap);
    drawCollageSlot(context, rect, slot, layoutSlot, scale);
    if (showSlotGuide && index === doc.collage.activeSlotIndex) {
      activeRects.push({ rect, layoutSlot, scale });
    }
  });

  if (layout.type === 'poster') {
    drawPosterDecorations(context, width, height, layout);
    applyDocumentEffectsToCanvas(context, canvas, doc, showGuides, showTextLayer, hideActiveTextLayer);
  }

  activeRects.forEach(({ rect, layoutSlot, scale }) => drawCollageActiveSlot(context, rect, layoutSlot, scale));

  if (showGuides && shouldShowCollageDeleteButtons(doc)) {
    layout.slots.forEach((layoutSlot, index) => {
      if (doc.collage.slots[index]?.image) {
        drawCollageDeleteButton(context, layoutSlot, width, height);
      }
    });
  }

  return canvas;
}

function getCollageSlotRect(layoutSlot, canvasWidth, canvasHeight, gap) {
  const halfGap = gap / 2;
  const x = Math.round(layoutSlot.x * canvasWidth + (layoutSlot.x === 0 ? gap : halfGap));
  const y = Math.round(layoutSlot.y * canvasHeight + (layoutSlot.y === 0 ? gap : halfGap));
  const rightInset = layoutSlot.x + layoutSlot.width >= 1 ? gap : halfGap;
  const bottomInset = layoutSlot.y + layoutSlot.height >= 1 ? gap : halfGap;
  const right = Math.round((layoutSlot.x + layoutSlot.width) * canvasWidth - rightInset);
  const bottom = Math.round((layoutSlot.y + layoutSlot.height) * canvasHeight - bottomInset);

  return {
    x,
    y,
    width: Math.max(1, right - x),
    height: Math.max(1, bottom - y),
  };
}

function drawCollageSlot(context, rect, slot, layoutSlot = {}, scale = 1) {
  const shapeRect = getSlotShapeRect(rect, layoutSlot);
  const radius = Math.round((layoutSlot.radius || 0) * scale);

  if (layoutSlot.shadow) {
    context.save();
    context.shadowColor = layoutSlot.shadow;
    context.shadowBlur = Math.max(12, Math.round(46 * scale));
    context.shadowOffsetY = Math.max(8, Math.round(22 * scale));
    context.fillStyle = 'rgba(255, 255, 255, 0.92)';
    drawSlotShapePath(context, shapeRect, layoutSlot, radius);
    context.fill();
    context.restore();
  }

  context.save();
  drawSlotShapePath(context, shapeRect, layoutSlot, radius);
  context.clip();

  if (!slot?.image) {
    drawTransparentCheckerboard(context, shapeRect, scale);
    context.restore();
    return;
  }

  const image = slot.image;
  const coverScale = Math.max(shapeRect.width / image.naturalWidth, shapeRect.height / image.naturalHeight) * (slot.scale || 1);
  const drawWidth = image.naturalWidth * coverScale;
  const drawHeight = image.naturalHeight * coverScale;
  const drawX = shapeRect.x + (shapeRect.width - drawWidth) / 2 + ((slot.offsetX || 0) / 100) * shapeRect.width;
  const drawY = shapeRect.y + (shapeRect.height - drawHeight) / 2 + ((slot.offsetY || 0) / 100) * shapeRect.height;

  context.imageSmoothingQuality = 'high';
  context.drawImage(image, drawX, drawY, drawWidth, drawHeight);

  if (Array.isArray(layoutSlot.tint)) {
    const gradient = context.createLinearGradient(shapeRect.x, shapeRect.y, shapeRect.x + shapeRect.width, shapeRect.y + shapeRect.height);
    gradient.addColorStop(0, layoutSlot.tint[0]);
    gradient.addColorStop(1, layoutSlot.tint[1]);
    context.fillStyle = gradient;
    context.fillRect(shapeRect.x, shapeRect.y, shapeRect.width, shapeRect.height);
  }

  if (layoutSlot.innerStroke) {
    context.lineWidth = Math.max(2, Math.round(4 * scale));
    context.strokeStyle = layoutSlot.innerStroke;
    const strokeRect = insetRect(shapeRect, context.lineWidth / 2);
    drawSlotShapePath(context, strokeRect, layoutSlot, Math.max(0, radius - context.lineWidth / 2));
    context.stroke();
  }

  context.restore();
}

function drawTransparentCheckerboard(context, rect, scale = 1) {
  const cellSize = Math.max(8, Math.round(18 * scale));
  const startX = Math.floor(rect.x / cellSize) * cellSize;
  const startY = Math.floor(rect.y / cellSize) * cellSize;
  const endX = rect.x + rect.width;
  const endY = rect.y + rect.height;

  context.fillStyle = '#f8fafc';
  context.fillRect(rect.x, rect.y, rect.width, rect.height);

  context.fillStyle = '#e2e8f0';
  for (let y = startY; y < endY; y += cellSize) {
    for (let x = startX; x < endX; x += cellSize) {
      const column = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      if ((column + row) % 2 === 0) {
        context.fillRect(x, y, cellSize, cellSize);
      }
    }
  }
}

function drawCollageDeleteButton(context, layoutSlot, canvasWidth, canvasHeight) {
  const button = getCollageDeleteButtonMetrics(layoutSlot);
  const centerX = (button.centerX / 100) * canvasWidth;
  const centerY = (button.centerY / 100) * canvasHeight;
  const radius = Math.max(12, Math.min(24, (button.radius / 100) * Math.min(canvasWidth, canvasHeight)));
  const lineOffset = radius * 0.36;

  context.save();
  context.shadowColor = 'rgba(15, 23, 42, 0.28)';
  context.shadowBlur = Math.max(6, radius * 0.45);
  context.shadowOffsetY = Math.max(2, radius * 0.16);
  context.fillStyle = '#ef4444';
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();

  context.shadowColor = 'transparent';
  context.strokeStyle = '#ffffff';
  context.lineWidth = Math.max(2.2, radius * 0.16);
  context.lineCap = 'round';
  context.beginPath();
  context.moveTo(centerX - lineOffset, centerY - lineOffset);
  context.lineTo(centerX + lineOffset, centerY + lineOffset);
  context.moveTo(centerX + lineOffset, centerY - lineOffset);
  context.lineTo(centerX - lineOffset, centerY + lineOffset);
  context.stroke();
  context.restore();
}

function drawPosterBackground(context, width, height, layout) {
  const colors = layout.background || ['#f8fafc', '#e2e8f0'];
  const gradient = context.createLinearGradient(0, 0, width, height);
  colors.forEach((color, index) => {
    gradient.addColorStop(colors.length === 1 ? 0 : index / (colors.length - 1), color);
  });
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  context.save();
  context.globalAlpha = 0.2;
  context.fillStyle = '#ffffff';
  context.beginPath();
  context.arc(width * 0.82, height * 0.14, width * 0.22, 0, Math.PI * 2);
  context.fill();
  context.beginPath();
  context.arc(width * 0.12, height * 0.88, width * 0.28, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawPosterThumbnailPhoto(context, rect, layoutSlot = {}, scale = 1) {
  const shapeRect = getSlotShapeRect(rect, layoutSlot);
  const radius = Math.round((layoutSlot.radius || 0) * scale);

  if (layoutSlot.shadow) {
    context.save();
    context.shadowColor = layoutSlot.shadow;
    context.shadowBlur = Math.max(8, Math.round(32 * scale));
    context.shadowOffsetY = Math.max(5, Math.round(15 * scale));
    context.fillStyle = 'rgba(255, 255, 255, 0.92)';
    drawSlotShapePath(context, shapeRect, layoutSlot, radius);
    context.fill();
    context.restore();
  }

  context.save();
  drawSlotShapePath(context, shapeRect, layoutSlot, radius);
  context.clip();

  const photoGradient = context.createLinearGradient(
    shapeRect.x,
    shapeRect.y,
    shapeRect.x + shapeRect.width,
    shapeRect.y + shapeRect.height
  );
  photoGradient.addColorStop(0, 'rgba(255, 255, 255, 0.82)');
  photoGradient.addColorStop(0.48, 'rgba(148, 163, 184, 0.48)');
  photoGradient.addColorStop(1, 'rgba(15, 23, 42, 0.18)');
  context.fillStyle = photoGradient;
  context.fillRect(shapeRect.x, shapeRect.y, shapeRect.width, shapeRect.height);

  context.globalAlpha = 0.42;
  context.fillStyle = '#ffffff';
  context.beginPath();
  context.arc(shapeRect.x + shapeRect.width * 0.32, shapeRect.y + shapeRect.height * 0.32, shapeRect.width * 0.12, 0, Math.PI * 2);
  context.fill();
  context.beginPath();
  context.moveTo(shapeRect.x, shapeRect.y + shapeRect.height);
  context.lineTo(shapeRect.x + shapeRect.width * 0.42, shapeRect.y + shapeRect.height * 0.55);
  context.lineTo(shapeRect.x + shapeRect.width * 0.7, shapeRect.y + shapeRect.height);
  context.closePath();
  context.fill();
  context.globalAlpha = 0.34;
  context.beginPath();
  context.moveTo(shapeRect.x + shapeRect.width * 0.36, shapeRect.y + shapeRect.height);
  context.lineTo(shapeRect.x + shapeRect.width * 0.74, shapeRect.y + shapeRect.height * 0.48);
  context.lineTo(shapeRect.x + shapeRect.width, shapeRect.y + shapeRect.height);
  context.closePath();
  context.fill();

  if (Array.isArray(layoutSlot.tint)) {
    const tintGradient = context.createLinearGradient(shapeRect.x, shapeRect.y, shapeRect.x + shapeRect.width, shapeRect.y + shapeRect.height);
    tintGradient.addColorStop(0, layoutSlot.tint[0]);
    tintGradient.addColorStop(1, layoutSlot.tint[1]);
    context.globalAlpha = 1;
    context.fillStyle = tintGradient;
    context.fillRect(shapeRect.x, shapeRect.y, shapeRect.width, shapeRect.height);
  }

  if (layoutSlot.innerStroke) {
    context.lineWidth = Math.max(1, Math.round(4 * scale));
    context.strokeStyle = layoutSlot.innerStroke;
    drawSlotShapePath(context, insetRect(shapeRect, context.lineWidth / 2), layoutSlot, Math.max(0, radius - context.lineWidth / 2));
    context.stroke();
  }

  context.restore();
}

function renderPosterThumbnails() {
  document.querySelectorAll('[data-poster-layout]').forEach((button) => {
    const layout = collageLayouts[button.dataset.posterLayout];
    const thumb = button.querySelector('.poster-thumb');
    if (!layout || !thumb) return;

    const canvas = createCanvas(220, 120);
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgba(15, 23, 42, 0.28)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const scale = Math.min(canvas.width / layout.width, canvas.height / layout.height);
    const previewWidth = layout.width * scale;
    const previewHeight = layout.height * scale;
    const offsetX = (canvas.width - previewWidth) / 2;
    const offsetY = (canvas.height - previewHeight) / 2;

    context.save();
    context.translate(offsetX, offsetY);
    context.scale(scale, scale);
    drawPosterBackground(context, layout.width, layout.height, layout);
    layout.slots.forEach((layoutSlot) => {
      const rect = getCollageSlotRect(layoutSlot, layout.width, layout.height, 0);
      drawPosterThumbnailPhoto(context, rect, layoutSlot, 1);
    });
    drawPosterDecorations(context, layout.width, layout.height, layout);
    context.restore();

    thumb.replaceChildren(canvas);
  });
}

function renderCollageThumbnails() {
  document.querySelectorAll('[data-collage-layout]').forEach((button) => {
    const layout = collageLayouts[button.dataset.collageLayout];
    const thumb = button.querySelector('.collage-thumb');
    if (!layout || !thumb) return;

    const canvas = createCanvas(220, 120);
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgba(15, 23, 42, 0.28)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const scale = Math.min(canvas.width / layout.width, canvas.height / layout.height);
    const previewWidth = layout.width * scale;
    const previewHeight = layout.height * scale;
    const offsetX = (canvas.width - previewWidth) / 2;
    const offsetY = (canvas.height - previewHeight) / 2;

    context.save();
    context.translate(offsetX, offsetY);
    context.scale(scale, scale);
    context.fillStyle = '#f8fafc';
    context.fillRect(0, 0, layout.width, layout.height);
    layout.slots.forEach((layoutSlot, index) => {
      const rect = getCollageSlotRect(layoutSlot, layout.width, layout.height, layout.gap || 0);
      drawCollageThumbnailSlot(context, rect, layoutSlot, index);
    });
    context.restore();

    thumb.replaceChildren(canvas);
  });
}

function drawCollageThumbnailSlot(context, rect, layoutSlot = {}, index = 0) {
  const shapeRect = getSlotShapeRect(rect, layoutSlot);
  const radius = Math.round(layoutSlot.radius || 0);
  const gradients = [
    ['#bfdbfe', '#60a5fa'],
    ['#fecdd3', '#fb7185'],
    ['#bbf7d0', '#34d399'],
    ['#fde68a', '#f59e0b'],
    ['#ddd6fe', '#8b5cf6'],
    ['#bae6fd', '#06b6d4'],
  ];
  const colors = gradients[index % gradients.length];
  const gradient = context.createLinearGradient(shapeRect.x, shapeRect.y, shapeRect.x + shapeRect.width, shapeRect.y + shapeRect.height);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);

  context.save();
  drawSlotShapePath(context, shapeRect, layoutSlot, radius);
  context.clip();
  context.fillStyle = gradient;
  context.fillRect(shapeRect.x, shapeRect.y, shapeRect.width, shapeRect.height);
  context.globalAlpha = 0.36;
  context.fillStyle = '#ffffff';
  context.beginPath();
  context.arc(shapeRect.x + shapeRect.width * 0.32, shapeRect.y + shapeRect.height * 0.32, Math.min(shapeRect.width, shapeRect.height) * 0.13, 0, Math.PI * 2);
  context.fill();
  context.beginPath();
  context.moveTo(shapeRect.x, shapeRect.y + shapeRect.height);
  context.lineTo(shapeRect.x + shapeRect.width * 0.45, shapeRect.y + shapeRect.height * 0.58);
  context.lineTo(shapeRect.x + shapeRect.width * 0.72, shapeRect.y + shapeRect.height);
  context.closePath();
  context.fill();
  context.restore();

  context.save();
  context.lineWidth = 3;
  context.strokeStyle = 'rgba(255, 255, 255, 0.82)';
  drawSlotShapePath(context, insetRect(shapeRect, 1.5), layoutSlot, Math.max(0, radius - 1.5));
  context.stroke();
  context.restore();
}

function drawPosterDecorations(context, width, height, layout) {
  const poster = layout.poster;
  if (!poster) return;

  context.save();
  context.fillStyle = poster.accentColor;
  context.globalAlpha = 0.72;

  if (poster.decorations === 'travel') {
    context.fillRect(width * 0.1, height * 0.1, width * 0.18, Math.max(4, height * 0.004));
    context.beginPath();
    context.arc(width * 0.84, height * 0.82, width * 0.035, 0, Math.PI * 2);
    context.fill();
  } else if (poster.decorations === 'product') {
    context.beginPath();
    context.arc(width * 0.5, height * 0.46, width * 0.32, 0, Math.PI * 2);
    context.strokeStyle = poster.accentColor;
    context.lineWidth = Math.max(2, width * 0.006);
    context.stroke();
  } else if (poster.decorations === 'festival') {
    for (let i = 0; i < 8; i += 1) {
      context.beginPath();
      context.arc(width * (0.16 + i * 0.1), height * 0.11, width * 0.01, 0, Math.PI * 2);
      context.fill();
    }
  } else if (poster.decorations === 'magazine') {
    context.strokeStyle = poster.accentColor;
    context.lineWidth = Math.max(2, width * 0.004);
    context.strokeRect(width * 0.07, height * 0.06, width * 0.86, height * 0.88);
  } else if (poster.decorations === 'portrait') {
    context.beginPath();
    context.arc(width * 0.18, height * 0.12, width * 0.045, 0, Math.PI * 2);
    context.fill();
    context.globalAlpha = 0.36;
    context.beginPath();
    context.arc(width * 0.82, height * 0.78, width * 0.09, 0, Math.PI * 2);
    context.fill();
  } else if (poster.decorations === 'food') {
    context.fillRect(width * 0.1, height * 0.76, width * 0.2, Math.max(5, height * 0.006));
    context.beginPath();
    context.arc(width * 0.82, height * 0.13, width * 0.038, 0, Math.PI * 2);
    context.fill();
  } else if (poster.decorations === 'event') {
    context.strokeStyle = poster.accentColor;
    context.lineWidth = Math.max(3, width * 0.008);
    context.beginPath();
    context.moveTo(width * 0.08, height * 0.14);
    context.lineTo(width * 0.34, height * 0.08);
    context.moveTo(width * 0.68, height * 0.84);
    context.lineTo(width * 0.92, height * 0.78);
    context.stroke();
  } else if (poster.decorations === 'cinema') {
    context.globalAlpha = 0.42;
    for (let i = 0; i < 5; i += 1) {
      context.fillRect(width * 0.08, height * (0.08 + i * 0.035), width * 0.05, height * 0.014);
      context.fillRect(width * 0.87, height * (0.08 + i * 0.035), width * 0.05, height * 0.014);
    }
  } else if (poster.decorations === 'course') {
    context.strokeStyle = poster.accentColor;
    context.lineWidth = Math.max(2, width * 0.004);
    context.strokeRect(width * 0.1, height * 0.72, width * 0.28, height * 0.07);
    context.fillRect(width * 0.68, height * 0.1, width * 0.2, Math.max(4, height * 0.005));
  } else if (poster.decorations === 'recruit') {
    context.fillRect(width * 0.14, height * 0.12, width * 0.14, Math.max(5, height * 0.006));
    context.globalAlpha = 0.28;
    context.beginPath();
    context.arc(width * 0.78, height * 0.18, width * 0.12, 0, Math.PI * 2);
    context.fill();
  }

  context.restore();
  drawPosterTextBlock(context, width, height, poster);
}

function drawPosterTextBlock(context, width, height, poster) {
  const isCenter = poster.align === 'center';
  const x = isCenter ? width / 2 : width * 0.1;
  const align = isCenter ? 'center' : 'left';
  const titleY = height * 0.83;

  context.save();
  context.textAlign = align;
  context.fillStyle = poster.textColor;
  context.textBaseline = 'alphabetic';
  context.font = `700 ${Math.round(width * 0.035)}px sans-serif`;
  context.globalAlpha = 0.78;
  context.fillText(poster.eyebrow, x, titleY - height * 0.07);
  context.globalAlpha = 1;
  context.font = `900 ${Math.round(width * 0.064)}px sans-serif`;
  context.fillText(poster.title, x, titleY);
  context.font = `500 ${Math.round(width * 0.026)}px sans-serif`;
  context.fillText(poster.subtitle, x, titleY + height * 0.048);
  context.restore();
}

function drawRoundedRectPath(context, x, y, width, height, radius = 0) {
  const safeRadius = Math.max(0, Math.min(radius, width / 2, height / 2));
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
}

function getSlotShapeRect(rect, layoutSlot = {}) {
  if (!['square', 'circle'].includes(layoutSlot.shape)) {
    return rect;
  }
  const size = Math.min(rect.width, rect.height);
  return {
    x: rect.x + (rect.width - size) / 2,
    y: rect.y + (rect.height - size) / 2,
    width: size,
    height: size,
  };
}

function insetRect(rect, inset) {
  return {
    x: rect.x + inset,
    y: rect.y + inset,
    width: Math.max(1, rect.width - inset * 2),
    height: Math.max(1, rect.height - inset * 2),
  };
}

function drawSlotShapePath(context, rect, layoutSlot = {}, radius = 0) {
  if (layoutSlot.shape === 'circle' || layoutSlot.shape === 'ellipse') {
    context.beginPath();
    context.ellipse(
      rect.x + rect.width / 2,
      rect.y + rect.height / 2,
      rect.width / 2,
      rect.height / 2,
      0,
      0,
      Math.PI * 2
    );
    context.closePath();
    return;
  }
  drawRoundedRectPath(context, rect.x, rect.y, rect.width, rect.height, radius);
}

function drawCollageActiveSlot(context, rect, layoutSlot = {}, scale = 1) {
  const shapeRect = getSlotShapeRect(rect, layoutSlot);
  const radius = Math.round((layoutSlot.radius || 0) * scale);
  context.save();
  context.lineWidth = 4;
  context.setLineDash([14, 8]);
  context.strokeStyle = 'rgba(37, 99, 235, 0.95)';
  drawSlotShapePath(context, insetRect(shapeRect, 3), layoutSlot, Math.max(0, radius - 3));
  context.stroke();
  context.setLineDash([]);
  context.lineWidth = 2;
  context.strokeStyle = 'rgba(255, 255, 255, 0.9)';
  drawSlotShapePath(context, insetRect(shapeRect, 7), layoutSlot, Math.max(0, radius - 7));
  context.stroke();
  context.restore();
}

function createCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function applyPixelAdjustments(context, width, height, values) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  const brightness = values.brightness * 2.1;
  const contrast = 1 + values.contrast / 100;
  const saturation = 1 + values.saturation / 100;

  for (let i = 0; i < data.length; i += 4) {
    let red = (data[i] - 128) * contrast + 128 + brightness;
    let green = (data[i + 1] - 128) * contrast + 128 + brightness;
    let blue = (data[i + 2] - 128) * contrast + 128 + brightness;

    const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
    red = luminance + (red - luminance) * saturation;
    green = luminance + (green - luminance) * saturation;
    blue = luminance + (blue - luminance) * saturation;

    data[i] = clamp(red);
    data[i + 1] = clamp(green);
    data[i + 2] = clamp(blue);
  }

  context.putImageData(imageData, 0, 0);
}

function applySkinWhitening(context, width, height, strength, skinMask) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  const amount = strength / 100;

  for (let pixel = 0; pixel < skinMask.length; pixel += 1) {
    const mask = skinMask[pixel];
    if (mask <= 0.04) continue;

    const i = pixel * 4;
    let red = data[i];
    let green = data[i + 1];
    let blue = data[i + 2];
    const blend = amount * mask;

    red += (255 - red) * 0.28 * blend;
    green += (255 - green) * 0.25 * blend;
    blue += (255 - blue) * 0.2 * blend;

    const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
    red = luminance + (red - luminance) * (1 - blend * 0.16);
    green = luminance + (green - luminance) * (1 - blend * 0.16);
    blue = luminance + (blue - luminance) * (1 - blend * 0.16);

    data[i] = clamp(red);
    data[i + 1] = clamp(green);
    data[i + 2] = clamp(blue);
  }

  context.putImageData(imageData, 0, 0);
}

function applySmoothOverlay(context, sourceCanvas, skinSmooth, denoise, skinMask) {
  const blur = Math.max(0, skinSmooth / 22 + denoise / 35);
  const globalDenoiseAlpha = Math.min(0.18, denoise / 420);
  const skinSmoothAlpha = Math.min(0.62, skinSmooth / 125);
  if (blur <= 0 || globalDenoiseAlpha + skinSmoothAlpha <= 0) return;

  const overlay = createCanvas(sourceCanvas.width, sourceCanvas.height);
  const overlayContext = overlay.getContext('2d');
  overlayContext.filter = `blur(${blur}px)`;
  overlayContext.drawImage(sourceCanvas, 0, 0);

  const original = context.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
  const blurred = overlayContext.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);

  for (let pixel = 0; pixel < skinMask.length; pixel += 1) {
    const i = pixel * 4;
    const alpha = Math.min(0.7, globalDenoiseAlpha + skinSmoothAlpha * skinMask[pixel]);
    if (alpha <= 0.01) continue;

    original.data[i] = clamp(original.data[i] * (1 - alpha) + blurred.data[i] * alpha);
    original.data[i + 1] = clamp(original.data[i + 1] * (1 - alpha) + blurred.data[i + 1] * alpha);
    original.data[i + 2] = clamp(original.data[i + 2] * (1 - alpha) + blurred.data[i + 2] * alpha);
  }

  context.putImageData(original, 0, 0);
}

function buildSkinMask(context, width, height) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  const mask = new Float32Array(width * height);

  for (let pixel = 0; pixel < mask.length; pixel += 1) {
    const i = pixel * 4;
    mask[pixel] = getSkinConfidence(data[i], data[i + 1], data[i + 2]);
  }

  return blurMask(mask, width, height, Math.max(2, Math.round(Math.min(width, height) / 180)), 2);
}

function getSkinConfidence(red, green, blue) {
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const chroma = max - min;
  const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
  const cb = 128 - 0.168736 * red - 0.331264 * green + 0.5 * blue;
  const cr = 128 + 0.5 * red - 0.418688 * green - 0.081312 * blue;
  const hsv = rgbToHsv(red, green, blue);

  const rgbSkin =
    red > 45 &&
    green > 30 &&
    blue > 18 &&
    red >= blue &&
    green >= blue * 0.72 &&
    chroma > 10 &&
    luminance > 35;
  const ycbcrSkin = cb >= 74 && cb <= 145 && cr >= 128 && cr <= 188 && luminance > 38;
  const hueSkin = (hsv.h <= 52 || hsv.h >= 345) && hsv.s >= 0.08 && hsv.s <= 0.72 && hsv.v >= 0.18;
  const notWhiteDress = !(luminance > 218 && hsv.s < 0.16);
  const notDeepShadow = luminance > 28;

  if (!notWhiteDress || !notDeepShadow) {
    return 0;
  }

  const score = Number(rgbSkin) + Number(ycbcrSkin) + Number(hueSkin);
  if (score >= 3) return 1;
  if (score === 2) return 0.72;
  if (score === 1 && ycbcrSkin && chroma > 16) return 0.38;
  return 0;
}

function rgbToHsv(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let hue = 0;

  if (delta !== 0) {
    if (max === r) {
      hue = 60 * (((g - b) / delta) % 6);
    } else if (max === g) {
      hue = 60 * ((b - r) / delta + 2);
    } else {
      hue = 60 * ((r - g) / delta + 4);
    }
  }

  if (hue < 0) hue += 360;
  return {
    h: hue,
    s: max === 0 ? 0 : delta / max,
    v: max,
  };
}

function blurMask(mask, width, height, radius, passes) {
  let current = mask;
  for (let pass = 0; pass < passes; pass += 1) {
    const horizontal = new Float32Array(current.length);
    const output = new Float32Array(current.length);

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        let total = 0;
        let count = 0;
        for (let offset = -radius; offset <= radius; offset += 1) {
          const sampleX = x + offset;
          if (sampleX < 0 || sampleX >= width) continue;
          total += current[y * width + sampleX];
          count += 1;
        }
        horizontal[y * width + x] = total / count;
      }
    }

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        let total = 0;
        let count = 0;
        for (let offset = -radius; offset <= radius; offset += 1) {
          const sampleY = y + offset;
          if (sampleY < 0 || sampleY >= height) continue;
          total += horizontal[sampleY * width + x];
          count += 1;
        }
        output[y * width + x] = Math.min(1, total / count);
      }
    }

    current = output;
  }

  return current;
}

function applySharpen(context, width, height, strength) {
  const original = context.getImageData(0, 0, width, height);
  const blurredCanvas = createCanvas(width, height);
  const blurredContext = blurredCanvas.getContext('2d');
  blurredContext.filter = 'blur(1.2px)';
  blurredContext.putImageData(original, 0, 0);
  blurredContext.drawImage(blurredCanvas, 0, 0);
  const blurred = blurredContext.getImageData(0, 0, width, height);
  const amount = strength / 85;

  for (let i = 0; i < original.data.length; i += 4) {
    original.data[i] = clamp(original.data[i] + (original.data[i] - blurred.data[i]) * amount);
    original.data[i + 1] = clamp(original.data[i + 1] + (original.data[i + 1] - blurred.data[i + 1]) * amount);
    original.data[i + 2] = clamp(original.data[i + 2] + (original.data[i + 2] - blurred.data[i + 2]) * amount);
  }

  context.putImageData(original, 0, 0);
}

function applyCenterSlim(context, width, height, strength) {
  const source = context.getImageData(0, 0, width, height);
  const output = context.createImageData(width, height);
  const centerX = width / 2;
  const centerY = height * 0.46;
  const radiusX = width * 0.28;
  const radiusY = height * 0.34;
  const slim = 0.18 * (strength / 100);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const dx = (x - centerX) / radiusX;
      const dy = (y - centerY) / radiusY;
      let sampleX = x;

      if (dx * dx + dy * dy < 1) {
        const weight = Math.max(0, (1 - dx * dx) * (1 - dy * dy));
        const shrink = Math.max(0.76, 1 - slim * weight);
        sampleX = centerX + (x - centerX) / shrink;
      }

      copyPixelBilinear(source, output, width, height, sampleX, y, x, y);
    }
  }

  context.putImageData(output, 0, 0);
}

function applySoftGlow(context, sourceCanvas, strength) {
  const factor = strength / 100;
  const glow = createCanvas(sourceCanvas.width, sourceCanvas.height);
  const glowContext = glow.getContext('2d');
  glowContext.filter = `blur(${8 + strength / 4}px) brightness(${1.04 + factor * 0.12})`;
  glowContext.drawImage(sourceCanvas, 0, 0);

  context.save();
  context.globalCompositeOperation = 'screen';
  context.globalAlpha = 0.16 + factor * 0.28;
  context.drawImage(glow, 0, 0);
  context.restore();
}

function applyGrayscale(context, width, height) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }
  context.putImageData(imageData, 0, 0);
}

function applyMosaic(context, width, height, mosaic, showGuides) {
  const region = getMosaicRegionPixels(mosaic.region, width, height);
  if (!region) return;

  context.save();
  createRegionPath(context, region, mosaic.shape);
  context.clip();

  if (mosaic.style === 'blur') {
    applyMosaicBlur(context, width, height, region, mosaic.size);
  } else if (mosaic.style === 'solid') {
    context.globalAlpha = 0.82;
    context.fillStyle = mosaic.color;
    context.fillRect(region.x, region.y, region.width, region.height);
  } else if (mosaic.style === 'pattern') {
    drawMosaicPattern(context, region, mosaic);
  } else {
    applyPixelMosaic(context, width, height, region, mosaic.size);
  }

  if (showGuides) {
    drawMosaicSelection(context, region, mosaic.shape);
  }
  context.restore();
}

function getMosaicRegionPixels(region, width, height) {
  if (!region || region.width < 1 || region.height < 1) return null;

  const x = Math.round(region.x * width / 100);
  const y = Math.round(region.y * height / 100);
  const regionWidth = Math.round(region.width * width / 100);
  const regionHeight = Math.round(region.height * height / 100);

  return {
    x: Math.max(0, Math.min(width - 1, x)),
    y: Math.max(0, Math.min(height - 1, y)),
    width: Math.max(1, Math.min(width - x, regionWidth)),
    height: Math.max(1, Math.min(height - y, regionHeight)),
  };
}

function createRegionPath(context, region, shape) {
  context.beginPath();
  if (shape === 'ellipse') {
    context.ellipse(
      region.x + region.width / 2,
      region.y + region.height / 2,
      region.width / 2,
      region.height / 2,
      0,
      0,
      Math.PI * 2
    );
  } else {
    context.rect(region.x, region.y, region.width, region.height);
  }
}

function applyPixelMosaic(context, width, height, region, size) {
  const blockSize = Math.max(2, Math.round(size * Math.min(width, height) / 1000));
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;

  for (let y = region.y; y < region.y + region.height; y += blockSize) {
    for (let x = region.x; x < region.x + region.width; x += blockSize) {
      const sampleX = Math.min(width - 1, x + Math.floor(blockSize / 2));
      const sampleY = Math.min(height - 1, y + Math.floor(blockSize / 2));
      const sampleIndex = (sampleY * width + sampleX) * 4;
      const red = data[sampleIndex];
      const green = data[sampleIndex + 1];
      const blue = data[sampleIndex + 2];

      for (let yy = y; yy < Math.min(y + blockSize, region.y + region.height); yy += 1) {
        for (let xx = x; xx < Math.min(x + blockSize, region.x + region.width); xx += 1) {
          const index = (yy * width + xx) * 4;
          data[index] = red;
          data[index + 1] = green;
          data[index + 2] = blue;
        }
      }
    }
  }

  context.putImageData(imageData, 0, 0);
}

function applyMosaicBlur(context, width, height, region, size) {
  const snapshot = createCanvas(width, height);
  snapshot.getContext('2d').drawImage(context.canvas, 0, 0);

  context.save();
  context.filter = `blur(${Math.max(5, size / 2)}px)`;
  context.drawImage(
    snapshot,
    region.x,
    region.y,
    region.width,
    region.height,
    region.x,
    region.y,
    region.width,
    region.height
  );
  context.restore();
}

function drawMosaicPattern(context, region, mosaic) {
  context.save();
  context.globalAlpha = 0.82;
  context.fillStyle = mosaic.color;

  if (mosaic.pattern === 'dots') {
    const gap = Math.max(10, mosaic.size);
    for (let y = region.y; y <= region.y + region.height; y += gap) {
      for (let x = region.x; x <= region.x + region.width; x += gap) {
        context.beginPath();
        context.arc(x, y, gap * 0.28, 0, Math.PI * 2);
        context.fill();
      }
    }
  } else if (mosaic.pattern === 'diagonal') {
    const gap = Math.max(8, mosaic.size * 0.75);
    context.lineWidth = Math.max(3, mosaic.size * 0.18);
    context.strokeStyle = mosaic.color;
    for (let offset = -region.height; offset < region.width; offset += gap) {
      context.beginPath();
      context.moveTo(region.x + offset, region.y + region.height);
      context.lineTo(region.x + offset + region.height, region.y);
      context.stroke();
    }
  } else {
    const gap = Math.max(8, mosaic.size * 0.65);
    context.lineWidth = Math.max(2, mosaic.size * 0.12);
    context.strokeStyle = mosaic.color;
    for (let x = region.x; x <= region.x + region.width; x += gap) {
      context.beginPath();
      context.moveTo(x, region.y);
      context.lineTo(x, region.y + region.height);
      context.stroke();
    }
    for (let y = region.y; y <= region.y + region.height; y += gap) {
      context.beginPath();
      context.moveTo(region.x, y);
      context.lineTo(region.x + region.width, y);
      context.stroke();
    }
  }

  context.restore();
}

function drawMosaicSelection(context, region, shape) {
  context.save();
  createRegionPath(context, region, shape);
  context.lineWidth = 2;
  context.setLineDash([8, 6]);
  context.strokeStyle = 'rgba(255, 255, 255, 0.88)';
  context.stroke();
  context.restore();
}

function applyTextOverlay(context, width, height, textTool, hideActiveTextLayer = false) {
  const layers = textTool.layers || [];
  layers.forEach((layer) => {
    if (hideActiveTextLayer && layer.id === textTool.activeLayerId) return;
    drawTextLayer(context, width, height, layer);
  });
}

function drawTextLayer(context, width, height, layer) {
  if (!layer.plainText && !layer.html) return;

  const fontScale = Math.min(width, height) / 1000;
  const baseSize = Math.max(10, Math.round(layer.size * fontScale));
  const x = width * (layer.x / 100);
  const y = height * (layer.y / 100);
  const lines = parseTextLayerLines(layer, fontScale);
  if (lines.length === 0) return;

  context.save();
  context.textAlign = 'left';
  context.textBaseline = 'middle';
  context.lineJoin = 'round';
  context.shadowColor = layer.effect === 'glow' ? layer.color : 'rgba(0, 0, 0, 0.58)';
  context.shadowBlur = getTextShadowBlur(layer.effect, baseSize);
  context.shadowOffsetY = layer.effect === 'float' ? Math.max(4, baseSize * 0.16) : Math.max(1, baseSize * 0.06);

  const lineHeight = getRichLineHeight(lines, baseSize);
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((segments, index) => {
    const lineWidth = measureRichLine(context, segments);
    let cursorX = x - lineWidth / 2;
    const lineY = startY + index * lineHeight;

    segments.forEach((segment) => {
      if (!segment.text) return;
      context.font = getCanvasTextFont(segment);
      context.lineWidth = getTextStrokeWidth(layer.effect, segment.size);
      context.strokeStyle = layer.effect === 'outline' ? 'rgba(255, 255, 255, 0.82)' : 'rgba(0, 0, 0, 0.62)';
      context.strokeText(segment.text, cursorX, lineY);
      context.fillStyle = segment.color;
      context.fillText(segment.text, cursorX, lineY);
      cursorX += context.measureText(segment.text).width;
    });
  });

  context.restore();
}

function parseTextLayerLines(layer, fontScale) {
  const lines = [[]];
  const root = document.createElement('div');
  root.innerHTML = layer.html || layer.plainText || '';
  const baseStyle = {
    color: layer.color,
    fontFamily: layer.fontFamily,
    size: Math.max(10, Math.round(layer.size * fontScale)),
    bold: layer.bold,
    italic: layer.italic,
  };

  const appendText = (text, style) => {
    text.split(/\n/).forEach((part, index) => {
      if (index > 0) lines.push([]);
      if (part) {
        lines[lines.length - 1].push({ text: part, ...style });
      }
    });
  };

  const walk = (node, inheritedStyle) => {
    if (node.nodeType === Node.TEXT_NODE) {
      appendText(node.textContent || '', inheritedStyle);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const element = node;
    const nextStyle = {
      ...inheritedStyle,
      color: element.dataset.color || inheritedStyle.color,
      fontFamily: element.dataset.fontFamily || inheritedStyle.fontFamily,
      size: element.dataset.size ? Math.max(10, Math.round(Number(element.dataset.size) * fontScale)) : inheritedStyle.size,
      bold: element.dataset.bold ? element.dataset.bold === 'true' : inheritedStyle.bold,
      italic: element.dataset.italic ? element.dataset.italic === 'true' : inheritedStyle.italic,
    };

    if (element.tagName === 'BR') {
      lines.push([]);
      return;
    }

    Array.from(element.childNodes).forEach((child) => walk(child, nextStyle));
    if (element.tagName === 'DIV' || element.tagName === 'P') {
      lines.push([]);
    }
  };

  Array.from(root.childNodes).forEach((child) => walk(child, baseStyle));
  return lines.filter((line, index) => line.length > 0 || index === 0);
}

function getCanvasTextFont(segment) {
  const style = `${segment.italic ? 'italic ' : ''}${segment.bold ? '700 ' : '400 '}`;
  return `${style}${segment.size}px ${segment.fontFamily}`;
}

function measureRichLine(context, segments) {
  return segments.reduce((total, segment) => {
    context.font = getCanvasTextFont(segment);
    return total + context.measureText(segment.text).width;
  }, 0);
}

function getRichLineHeight(lines, fallbackSize) {
  return lines.reduce((max, segments) => {
    const maxSize = segments.reduce((lineMax, segment) => Math.max(lineMax, segment.size), fallbackSize);
    return Math.max(max, maxSize * 1.22);
  }, fallbackSize * 1.22);
}

function getTextShadowBlur(effect, scaledSize) {
  if (effect === 'glow') return Math.max(8, scaledSize * 0.34);
  if (effect === 'float') return Math.max(8, scaledSize * 0.22);
  if (effect === 'outline') return 0;
  return Math.max(3, scaledSize * 0.16);
}

function getTextStrokeWidth(effect, scaledSize) {
  if (effect === 'outline') return Math.max(3, scaledSize * 0.12);
  if (effect === 'glow') return Math.max(1, scaledSize * 0.04);
  return Math.max(2, scaledSize * 0.08);
}

function applyStyleGrade(context, width, height, styleMode) {
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];
    const skin = getSkinConfidence(red, green, blue);
    const hsv = rgbToHsv(red, green, blue);
    const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
    let next = [red, green, blue];

    if (styleMode === 'blueSky') {
      next = gradeBlueSky(red, green, blue, hsv, luminance, skin);
    } else if (styleMode === 'cyanYouth') {
      next = gradeCyanYouth(red, green, blue, luminance, skin);
    } else if (styleMode === 'warmFilm') {
      next = gradeWarmFilm(red, green, blue, luminance, skin);
    } else if (styleMode === 'premiumGray') {
      next = gradePremiumGray(red, green, blue, luminance, skin);
    } else if (styleMode === 'sweetPink') {
      next = gradeSweetPink(red, green, blue, luminance, skin);
    } else if (styleMode === 'cyberNight') {
      next = gradeCyberNight(red, green, blue, luminance, skin);
    } else if (styleMode === 'forestFresh') {
      next = gradeForestFresh(red, green, blue, hsv, luminance, skin);
    } else if (styleMode === 'vintageRetro') {
      next = gradeVintageRetro(red, green, blue, luminance, skin);
    } else if (styleMode === 'classicBw') {
      next = gradeClassicBw(luminance, skin);
    }

    data[i] = clamp(next[0]);
    data[i + 1] = clamp(next[1]);
    data[i + 2] = clamp(next[2]);
  }

  context.putImageData(imageData, 0, 0);
}

function gradeBlueSky(red, green, blue, hsv, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const skyMask = smoothstep(178, 235, hsv.h) * smoothstep(0.16, 0.5, hsv.s) * smoothstep(0.25, 0.9, hsv.v);
  const cloudMask = smoothstep(175, 245, luminance) * (1 - smoothstep(0.12, 0.32, hsv.s)) * (1 - skin);

  b += 34 * skyMask;
  g += 12 * skyMask;
  r -= 10 * skyMask;

  r += (255 - r) * 0.18 * cloudMask;
  g += (255 - g) * 0.18 * cloudMask;
  b += (255 - b) * 0.22 * cloudMask;

  if (skin > 0) {
    r += 5 * skin;
    g += 2 * skin;
    b -= 4 * skin;
  }

  return [r, g, b];
}

function gradeCyanYouth(red, green, blue, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const shadow = 1 - smoothstep(80, 190, luminance);
  const nonSkin = 1 - skin * 0.75;

  r -= 8 * nonSkin;
  g += 12 * nonSkin + 7 * shadow;
  b += 10 * nonSkin + 12 * shadow;

  if (skin > 0) {
    r += 8 * skin;
    g += 4 * skin;
    b += 1 * skin;
  }

  return liftMidtones(r, g, b, 0.06);
}

function gradeWarmFilm(red, green, blue, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const highlight = smoothstep(145, 245, luminance);
  const shadow = 1 - smoothstep(70, 180, luminance);

  r += 14 * highlight + 8 * skin;
  g += 6 * highlight + 3 * skin;
  b -= 10 * highlight;
  r += 5 * shadow;
  g += 2 * shadow;
  b += 8 * shadow;

  return liftMidtones(r, g, b, 0.035);
}

function gradePremiumGray(red, green, blue, luminance, skin) {
  let r = luminance + (red - luminance) * 0.72;
  let g = luminance + (green - luminance) * 0.72;
  let b = luminance + (blue - luminance) * 0.72;
  const contrast = 1.08;

  r = (r - 128) * contrast + 128;
  g = (g - 128) * contrast + 128;
  b = (b - 128) * contrast + 128 + 3;

  if (skin > 0) {
    r += 5 * skin;
    g += 2 * skin;
  }

  return [r, g, b];
}

function gradeSweetPink(red, green, blue, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const highlight = smoothstep(130, 245, luminance);
  const nonSkin = 1 - skin * 0.55;

  r += 16 * highlight + 10 * skin;
  g += 5 * highlight + 4 * skin;
  b += 10 * highlight + 2 * nonSkin;

  return liftMidtones(r, g, b, 0.08);
}

function gradeCyberNight(red, green, blue, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const shadow = 1 - smoothstep(65, 175, luminance);
  const highlight = smoothstep(150, 245, luminance);
  const nonSkin = 1 - skin * 0.65;

  r += 18 * highlight * nonSkin + 14 * shadow;
  g -= 8 * nonSkin;
  b += 28 * nonSkin + 16 * shadow;

  if (skin > 0) {
    r += 5 * skin;
    g += 2 * skin;
    b -= 3 * skin;
  }

  return [r, g, b];
}

function gradeForestFresh(red, green, blue, hsv, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const greenMask = smoothstep(65, 145, hsv.h) * smoothstep(0.12, 0.55, hsv.s) * (1 - skin);
  const highlight = smoothstep(135, 240, luminance);

  r -= 8 * greenMask;
  g += 20 * greenMask + 4 * highlight;
  b += 6 * greenMask + 6 * highlight;

  if (skin > 0) {
    r += 6 * skin;
    g += 3 * skin;
    b -= 2 * skin;
  }

  return liftMidtones(r, g, b, 0.04);
}

function gradeVintageRetro(red, green, blue, luminance, skin) {
  let r = red;
  let g = green;
  let b = blue;
  const shadow = 1 - smoothstep(75, 175, luminance);
  const highlight = smoothstep(145, 245, luminance);

  r += 16 * highlight + 10 * shadow + 6 * skin;
  g += 4 * highlight - 2 * shadow;
  b -= 12 * highlight + 8 * shadow;

  return [r, g, b];
}

function gradeClassicBw(luminance, skin) {
  const contrast = skin > 0 ? 1.12 : 1.22;
  const gray = (luminance - 128) * contrast + 128;
  return [gray, gray, gray];
}

function liftMidtones(red, green, blue, amount) {
  const lift = (value) => value + (255 - value) * amount * (1 - Math.abs(value - 128) / 160);
  return [lift(red), lift(green), lift(blue)];
}

function smoothstep(edge0, edge1, value) {
  const x = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return x * x * (3 - 2 * x);
}

function copyPixelBilinear(source, output, width, height, sx, sy, tx, ty) {
  const x = Math.max(0, Math.min(width - 1, sx));
  const y = Math.max(0, Math.min(height - 1, sy));
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const x1 = Math.min(width - 1, x0 + 1);
  const y1 = Math.min(height - 1, y0 + 1);
  const wx = x - x0;
  const wy = y - y0;
  const targetIndex = (ty * width + tx) * 4;

  for (let channel = 0; channel < 4; channel += 1) {
    const p00 = source.data[(y0 * width + x0) * 4 + channel];
    const p10 = source.data[(y0 * width + x1) * 4 + channel];
    const p01 = source.data[(y1 * width + x0) * 4 + channel];
    const p11 = source.data[(y1 * width + x1) * 4 + channel];
    output.data[targetIndex + channel] =
      p00 * (1 - wx) * (1 - wy) +
      p10 * wx * (1 - wy) +
      p01 * (1 - wx) * wy +
      p11 * wx * wy;
  }
}

function clamp(value) {
  return Math.max(0, Math.min(255, value));
}

function getCanvasPoint(event) {
  const rect = previewCanvas.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return null;

  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  return {
    x: Math.max(0, Math.min(100, x)),
    y: Math.max(0, Math.min(100, y)),
  };
}

function createRegionFromPoints(start, end) {
  const x = Math.min(start.x, end.x);
  const y = Math.min(start.y, end.y);
  const width = Math.abs(start.x - end.x);
  const height = Math.abs(start.y - end.y);

  return { x, y, width, height };
}

function findCollageSlotAtPoint(doc, point) {
  const layout = collageLayouts[doc.collage.layoutName];
  if (!layout) return -1;

  return layout.slots.findIndex((slot) => (
    point.x >= slot.x * 100 &&
    point.x <= (slot.x + slot.width) * 100 &&
    point.y >= slot.y * 100 &&
    point.y <= (slot.y + slot.height) * 100
  ));
}

function handleCanvasPointerDown(event) {
  const doc = getActiveDocument();
  const point = getCanvasPoint(event);
  if (!doc || !point) return;
  if (commitTextEditorChanges()) {
    event.preventDefault();
    return;
  }
  if (state.suppressNextTextCanvasCreate && state.activeTool === 'text') {
    state.suppressNextTextCanvasCreate = false;
    event.preventDefault();
    return;
  }

  const posterToolActive = isPosterDocument(doc) && ['mosaic', 'text'].includes(state.activeTool);
  if (isCollageDocument(doc) && !posterToolActive) {
    const deleteSlotIndex = getCollageDeleteButtonAtPoint(doc, point);
    if (deleteSlotIndex !== -1) {
      deleteCollageImage(deleteSlotIndex);
      event.preventDefault();
      return;
    }

    const slotIndex = findCollageSlotAtPoint(doc, point);
    if (slotIndex === -1) return;

    doc.collage.activeSlotIndex = slotIndex;
    const slot = doc.collage.slots[slotIndex];
    updateImageMeta(doc);
    renderPreview();

    if (!slot?.image && !isCollageTrimPending(doc)) {
      chooseImageForCollageSlot(slotIndex);
      event.preventDefault();
      return;
    }

    if (slot?.image) {
      state.canvasInteraction = {
        type: 'collage',
        slotIndex,
        start: point,
        offsetX: slot.offsetX || 0,
        offsetY: slot.offsetY || 0,
        sourceSlotSnapshot: cloneCollageSlotForMove(slot),
        beforeSnapshot: createPosterHistorySnapshot(doc),
      };
      previewCanvas.dataset.dragging = 'true';
      previewCanvas.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    return;
  }

  if (state.activeTool === 'mosaic' && doc.tools.mosaic.enabled) {
    state.canvasInteraction = {
      type: 'mosaic',
      start: point,
      beforeSnapshot: createPosterHistorySnapshot(doc),
    };
    doc.tools.mosaic.region = { x: point.x, y: point.y, width: 0, height: 0 };
    previewCanvas.setPointerCapture(event.pointerId);
    event.preventDefault();
    return;
  }

  if (state.activeTool === 'text') {
    const hitLayer = findTextLayerAtPoint(doc, point);
    if (!hitLayer) {
      const beforeSnapshot = createPosterHistorySnapshot(doc);
      createTextLayer(doc, point);
      if (beforeSnapshot) {
        state.pendingTextHistorySnapshot = beforeSnapshot;
        state.pendingTextHistoryLabel = '新增文字';
      }
      syncToolControlsFromDocument(doc);
      updateTextEditorOverlay();
      renderPreview();
      window.setTimeout(() => textContent.focus(), 0);
      event.preventDefault();
      return;
    }

    doc.tools.text.activeLayerId = hitLayer.id;
    state.textSelectionRange = null;
    syncToolControlsFromDocument(doc);
    updateTextEditorOverlay();
    renderPreview();
    state.canvasInteraction = {
      type: 'text',
      layerId: hitLayer.id,
      offsetX: point.x - hitLayer.x,
      offsetY: point.y - hitLayer.y,
      beforeSnapshot: createPosterHistorySnapshot(doc),
    };
    previewCanvas.setPointerCapture(event.pointerId);
    event.preventDefault();
  }
}

function handleTextDragPointerDown(event) {
  const doc = getActiveDocument();
  const point = getCanvasPoint(event);
  const layer = getActiveTextLayer(doc);
  if (!doc || !point || !layer) return;

  setActiveTool('text');
  state.canvasInteraction = {
    type: 'text',
    layerId: layer.id,
    offsetX: point.x - layer.x,
    offsetY: point.y - layer.y,
    beforeSnapshot: createPosterHistorySnapshot(doc),
  };
  textDragHandle.setPointerCapture(event.pointerId);
  event.preventDefault();
}

function handleCanvasPointerMove(event) {
  const doc = getActiveDocument();
  const point = getCanvasPoint(event);
  if (!doc || !point || !state.canvasInteraction) return;

  if (state.canvasInteraction.type === 'mosaic') {
    doc.tools.mosaic.region = createRegionFromPoints(state.canvasInteraction.start, point);
  } else if (state.canvasInteraction.type === 'collage') {
    const layout = collageLayouts[doc.collage.layoutName];
    const layoutSlot = layout?.slots[state.canvasInteraction.slotIndex];
    const slot = doc.collage.slots[state.canvasInteraction.slotIndex];
    if (!layoutSlot || !slot) return;
    const deltaX = (point.x - state.canvasInteraction.start.x) / layoutSlot.width;
    const deltaY = (point.y - state.canvasInteraction.start.y) / layoutSlot.height;
    slot.offsetX = Math.max(-55, Math.min(55, state.canvasInteraction.offsetX + deltaX));
    slot.offsetY = Math.max(-55, Math.min(55, state.canvasInteraction.offsetY + deltaY));
  } else if (state.canvasInteraction.type === 'text') {
    const layer = doc.tools.text.layers.find((item) => item.id === state.canvasInteraction.layerId);
    if (!layer) return;
    layer.x = Math.max(0, Math.min(100, point.x - state.canvasInteraction.offsetX));
    layer.y = Math.max(0, Math.min(100, point.y - state.canvasInteraction.offsetY));
    updateTextEditorOverlay();
  }

  schedulePreviewRender();
}

function handleCanvasWheel(event) {
  const doc = getActiveDocument();
  const point = getCanvasPoint(event);
  if (!isCollageDocument(doc) || !point) return;

  const slotIndex = findCollageSlotAtPoint(doc, point);
  if (slotIndex !== -1) {
    doc.collage.activeSlotIndex = slotIndex;
  }
  const slot = doc.collage.slots[doc.collage.activeSlotIndex];
  if (!slot?.image) return;

  const beforeSnapshot = createPosterHistorySnapshot(doc);
  const direction = event.deltaY < 0 ? 1 : -1;
  const factor = direction > 0 ? 1.08 : 0.92;
  slot.scale = Math.max(0.65, Math.min(3.2, (slot.scale || 1) * factor));
  updateImageMeta(doc);
  renderPreview();
  pushPosterEditHistory(doc, '缩放海报照片', beforeSnapshot);
  event.preventDefault();
}

function handleCanvasPointerUp(event) {
  if (!state.canvasInteraction) return;
  const doc = getActiveDocument();
  const interaction = state.canvasInteraction;
  const point = getCanvasPoint(event);
  let handledCollageMove = false;
  if (
    doc &&
    point &&
    interaction.type === 'collage' &&
    !isPosterDocument(doc) &&
    !isCollageTrimPending(doc)
  ) {
    const targetSlotIndex = findCollageSlotAtPoint(doc, point);
    if (targetSlotIndex !== -1 && targetSlotIndex !== interaction.slotIndex) {
      handledCollageMove = moveCollageImageToSlot(
        doc,
        interaction.slotIndex,
        targetSlotIndex,
        interaction.sourceSlotSnapshot
      );
    }
  }

  if (doc && interaction.beforeSnapshot) {
    const labels = {
      collage: isPosterDocument(doc) ? '调整海报照片位置' : '调整拼图照片位置',
      mosaic: isPosterDocument(doc) ? '绘制海报马赛克' : '绘制马赛克',
      text: '移动文字',
    };
    pushPosterEditHistory(doc, labels[interaction.type] || '编辑图片', interaction.beforeSnapshot);
  }
  if (handledCollageMove) {
    event.preventDefault();
  }
  state.canvasInteraction = null;
  delete previewCanvas.dataset.dragging;
  try {
    event.currentTarget.releasePointerCapture(event.pointerId);
  } catch {
    // Pointer capture may already be released when the pointer leaves the canvas.
  }
}

function isEditableKeyTarget(target) {
  return Boolean(
    target &&
    (
      target === textContent ||
      textContent.contains(target) ||
      target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
    )
  );
}

function handleTextDeleteKey(event) {
  if (event.key !== 'Delete' && event.key !== 'Backspace') return;
  const target = event.target;
  if (isEditableKeyTarget(target)) return;

  if (state.activeTool === 'text' && getActiveTextLayer() && deleteActiveTextLayer()) {
    event.preventDefault();
    return;
  }

  const doc = getActiveDocument();
  const activeSlotIndex = doc?.collage?.activeSlotIndex;
  if (
    shouldShowCollageDeleteButtons(doc) &&
    Number.isInteger(activeSlotIndex) &&
    doc.collage.slots[activeSlotIndex]?.image &&
    deleteCollageImage(activeSlotIndex)
  ) {
    event.preventDefault();
  }
}

document.getElementById('openButton').addEventListener('click', openImage);
emptyState.addEventListener('click', openImage);
emptyState.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openImage();
  }
});
saveButton.addEventListener('click', saveImage);

document.querySelectorAll('[data-preset]').forEach((button) => {
  const label = button.querySelector('span:not(.poster-thumb)')?.textContent || '快捷效果';
  button.addEventListener('click', () => {
    commitTextEditorChanges();
    applyPreset(button.dataset.preset, label);
  });
});

document.querySelectorAll('[data-style-preset]').forEach((button) => {
  button.addEventListener('click', () => {
    commitTextEditorChanges();
    applyStylePreset(button.dataset.stylePreset);
  });
});

document.querySelectorAll('[data-collage-layout]').forEach((button) => {
  button.addEventListener('click', () => createCollageFromLayout(button.dataset.collageLayout));
});

document.querySelectorAll('[data-poster-layout]').forEach((button) => {
  button.addEventListener('click', () => createPosterFromLayout(button.dataset.posterLayout));
});

posterToggleButton.addEventListener('click', togglePosterOptions);
sceneToggleButton.addEventListener('click', toggleSceneOptions);
qualityToggleButton.addEventListener('click', toggleQualityOptions);
toneToggleButton.addEventListener('click', toggleToneOptions);
repairToggleButton.addEventListener('click', toggleRepairOptions);
portraitDetailToggleButton.addEventListener('click', togglePortraitDetailOptions);
socialToggleButton.addEventListener('click', toggleSocialOptions);
collageToggleButton.addEventListener('click', toggleCollageOptions);
styleToggleButton.addEventListener('click', toggleStyleOptions);
themeModeSelect.addEventListener('change', () => saveThemeMode(themeModeSelect.value));
systemThemeQuery?.addEventListener?.('change', handleSystemThemeChange);

adjustToolButton.addEventListener('click', () => {
  setActiveTool('adjust');
});

historyToolButton.addEventListener('click', () => {
  setActiveTool(state.activeTool === 'history' ? null : 'history');
  renderHistoryPanel();
});

historyUndoButton.addEventListener('click', undoLastHistoryEntry);

textToolButton.addEventListener('click', () => {
  const doc = getActiveDocument();
  if (state.activeTool === 'text') {
    commitTextEditorChanges();
    if (doc) {
      doc.tools.text.activeLayerId = null;
      state.textSelectionRange = null;
    }
    setActiveTool(null);
    return;
  }

  if (doc) {
    commitTextEditorChanges();
    doc.tools.text.activeLayerId = null;
    state.textSelectionRange = null;
  }
  setActiveTool('text');
});

mosaicToolButton.addEventListener('click', () => {
  setActiveTool('mosaic');
  const doc = getActiveDocument();
  if (doc && !doc.tools.mosaic.enabled) {
    updateMosaicTool({ enabled: true });
  }
});

mosaicToggle.addEventListener('change', () => {
  if (mosaicToggle.checked) {
    setActiveTool('mosaic');
  }
  updateMosaicTool({ enabled: mosaicToggle.checked });
});

mosaicPreset.addEventListener('change', () => {
  applyMosaicPreset(mosaicPreset.value);
});

mosaicShape.addEventListener('change', () => {
  updateMosaicTool({ shape: mosaicShape.value, preset: 'custom' });
});

mosaicStyle.addEventListener('change', () => {
  updateMosaicTool({ style: mosaicStyle.value, preset: 'custom' });
});

mosaicSize.addEventListener('input', () => {
  updateMosaicTool({ size: Number(mosaicSize.value), preset: 'custom' });
});

mosaicColor.addEventListener('input', () => {
  updateMosaicTool({ color: mosaicColor.value, preset: 'custom' });
});

mosaicPattern.addEventListener('change', () => {
  updateMosaicTool({ pattern: mosaicPattern.value, preset: 'custom' });
});

clearMosaicRegion.addEventListener('click', () => {
  updateMosaicTool({ region: null });
});

textContent.addEventListener('input', () => {
  if (state.activeTool !== 'text') {
    setActiveTool('text');
  }
  const doc = getActiveDocument();
  if (doc?.tools?.text && !state.pendingTextHistorySnapshot) {
    state.pendingTextHistorySnapshot = createPosterHistorySnapshot(doc);
    state.pendingTextHistoryLabel = '编辑文字';
  }
  syncActiveTextLayerFromEditor();
  upsertPendingTextHistory();
});

textContent.addEventListener('focus', () => {
  if (state.activeTool !== 'text') {
    setActiveTool('text');
  }
});
textContent.addEventListener('blur', () => commitTextEditorChanges('编辑文字', true));

textContent.addEventListener('mouseup', saveTextEditorSelection);
textContent.addEventListener('keyup', saveTextEditorSelection);

textPreset.addEventListener('change', () => {
  applyTextPreset(textPreset.value);
});

textFont.addEventListener('change', () => {
  updateTextTool({ fontFamily: textFont.value, preset: 'custom' }, true);
});

textEffect.addEventListener('change', () => {
  updateTextTool({ effect: textEffect.value, preset: 'custom' });
});

textSize.addEventListener('input', () => {
  updateTextTool({ size: Number(textSize.value), preset: 'custom' }, true);
});

textColor.addEventListener('input', () => {
  updateTextTool({ color: textColor.value, preset: 'custom' }, true);
});

textBold.addEventListener('change', () => {
  updateTextTool({ bold: textBold.checked, preset: 'custom' }, true);
});

textItalic.addEventListener('change', () => {
  updateTextTool({ italic: textItalic.checked, preset: 'custom' }, true);
});

textDeleteButton.addEventListener('click', () => {
  deleteActiveTextLayer();
});

previewCanvas.addEventListener('pointerdown', handleCanvasPointerDown);
previewCanvas.addEventListener('pointermove', handleCanvasPointerMove);
previewCanvas.addEventListener('pointerup', handleCanvasPointerUp);
previewCanvas.addEventListener('pointercancel', handleCanvasPointerUp);
previewCanvas.addEventListener('wheel', handleCanvasWheel, { passive: false });
textDragHandle.addEventListener('pointerdown', handleTextDragPointerDown);
textDragHandle.addEventListener('pointermove', handleCanvasPointerMove);
textDragHandle.addEventListener('pointerup', handleCanvasPointerUp);
textDragHandle.addEventListener('pointercancel', handleCanvasPointerUp);
document.addEventListener('keydown', handleTextDeleteKey);

applyThemeMode();
createControls();
renderPosterThumbnails();
renderCollageThumbnails();
setActiveTool(null);
syncUiWithActiveDocument();

window.addEventListener('resize', fitPreviewCanvasToContainer);

if ('ResizeObserver' in window) {
  const previewResizeObserver = new ResizeObserver(fitPreviewCanvasToContainer);
  previewResizeObserver.observe(canvasCard);
}
