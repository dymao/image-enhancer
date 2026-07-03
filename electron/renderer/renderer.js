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
    content: '',
    preset: 'custom',
    fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif',
    size: 48,
    color: '#ffffff',
    bold: false,
    italic: false,
    effect: 'shadow',
    x: 50,
    y: 82,
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

const state = {
  documents: [],
  activeDocumentId: null,
  nextDocumentId: 1,
  renderTimer: null,
  canvasInteraction: null,
  activeTool: null,
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
const grayscaleToggle = document.getElementById('grayscaleToggle');
const textToolButton = document.getElementById('textToolButton');
const mosaicToolButton = document.getElementById('mosaicToolButton');
const textToolPanel = document.getElementById('textToolPanel');
const mosaicToolPanel = document.getElementById('mosaicToolPanel');
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
const textContent = document.getElementById('textContent');
const textPreset = document.getElementById('textPreset');
const textFont = document.getElementById('textFont');
const textEffect = document.getElementById('textEffect');
const textSize = document.getElementById('textSize');
const textSizeValue = document.getElementById('textSizeValue');
const textColor = document.getElementById('textColor');
const textBold = document.getElementById('textBold');
const textItalic = document.getElementById('textItalic');
const styleToggleButton = document.getElementById('styleToggleButton');
const styleOptions = document.getElementById('styleOptions');

const sliderElements = new Map();
const valueElements = new Map();
const toolInputs = [
  textToolButton,
  mosaicToolButton,
  mosaicToggle,
  mosaicPreset,
  mosaicShape,
  mosaicStyle,
  mosaicSize,
  mosaicColor,
  mosaicPattern,
  clearMosaicRegion,
  textContent,
  textPreset,
  textFont,
  textEffect,
  textSize,
  textColor,
  textBold,
  textItalic,
];

function setActiveTool(tool) {
  state.activeTool = tool;
  textToolButton.classList.toggle('active', tool === 'text');
  mosaicToolButton.classList.toggle('active', tool === 'mosaic');
  textToolPanel.classList.toggle('active', tool === 'text');
  mosaicToolPanel.classList.toggle('active', tool === 'mosaic');
  if (tool) {
    previewCanvas.dataset.tool = tool;
  } else {
    delete previewCanvas.dataset.tool;
  }
  updateTextEditorOverlay();
  if (getActiveDocument()) {
    renderPreview();
  }
  if (tool === 'text' && getActiveDocument()) {
    window.setTimeout(() => textContent.focus(), 0);
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

function createDocument(result, image) {
  return {
    id: state.nextDocumentId++,
    sourceName: result.name,
    image,
    meta: result,
    values: { ...presets.reset },
    tools: {
      mosaic: { ...defaultTools.mosaic },
      text: { ...defaultTools.text },
    },
    grayscale: false,
    styleMode: 'none',
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
  grayscaleToggle.checked = Boolean(doc?.grayscale);
  syncToolControlsFromDocument(doc);
}

function syncToolControlsFromDocument(doc) {
  const tools = doc?.tools || defaultTools;
  const { mosaic, text } = tools;

  mosaicToggle.checked = Boolean(mosaic.enabled);
  mosaicPreset.value = mosaic.preset || 'custom';
  mosaicShape.value = mosaic.shape;
  mosaicStyle.value = mosaic.style;
  mosaicSize.value = mosaic.size;
  mosaicSizeValue.textContent = String(mosaic.size);
  mosaicColor.value = mosaic.color;
  mosaicPattern.value = mosaic.pattern;
  if (textContent.value !== text.content) {
    textContent.value = text.content;
  }
  textPreset.value = text.preset || 'custom';
  textFont.value = text.fontFamily;
  textEffect.value = text.effect;
  textSize.value = text.size;
  textSizeValue.textContent = String(text.size);
  textColor.value = text.color;
  textBold.checked = Boolean(text.bold);
  textItalic.checked = Boolean(text.italic);
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
    setActiveTool(null);
    clearPreviewCanvas();
    return;
  }

  fileName.textContent = activeDocument.sourceName;
  updateImageMeta(activeDocument);
  emptyState.style.display = 'none';
  previewCanvas.style.display = 'block';
  saveButton.disabled = false;
  setAdjustmentsEnabled(true);
  syncControlsFromDocument(activeDocument);
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
  grayscaleToggle.disabled = !enabled;
  toolInputs.forEach((input) => {
    input.disabled = !enabled;
  });
}

function setControlValues(values) {
  const doc = getActiveDocument();
  if (!doc) return;

  Object.entries(values).forEach(([key, value]) => {
    doc.values[key] = value;
    const slider = sliderElements.get(key);
    const valueLabel = valueElements.get(key);
    if (slider) slider.value = value;
    if (valueLabel) valueLabel.textContent = String(value);
  });
}

function updateMosaicTool(updates) {
  const doc = getActiveDocument();
  if (!doc) return;

  Object.assign(doc.tools.mosaic, updates);
  syncToolControlsFromDocument(doc);
  schedulePreviewRender();
}

function applyMosaicPreset(name) {
  const preset = mosaicPresets[name];
  if (!preset) return;
  updateMosaicTool({ ...preset, preset: name });
}

function applyTextPreset(name) {
  const preset = textPresets[name];
  if (!preset) return;
  updateTextTool({ ...preset, preset: name });
}

function updateTextTool(updates) {
  const doc = getActiveDocument();
  if (!doc) return;

  Object.assign(doc.tools.text, updates);
  syncToolControlsFromDocument(doc);
  schedulePreviewRender();
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

async function saveImage() {
  const doc = getActiveDocument();
  if (!doc) {
    showToast('请先打开图片');
    return;
  }

  showToast('正在生成全尺寸图片...');
  const outputCanvas = buildProcessedCanvas(doc.image, Number.POSITIVE_INFINITY, doc, false, true);
  const dataUrl = outputCanvas.toDataURL('image/png');
  const savedPath = await window.imageEnhancer.saveImage({
    sourceName: doc.sourceName,
    dataUrl,
  });

  if (savedPath) {
    showToast('图片已保存');
  }
}

function applyPreset(name) {
  const doc = getActiveDocument();
  if (!doc) return;

  setControlValues(presets[name]);
  grayscaleToggle.checked = false;
  doc.grayscale = false;
  doc.styleMode = 'none';
  renderPreview();
}

function applyStylePreset(name) {
  const doc = getActiveDocument();
  if (!doc) return;

  const style = stylePresets[name];
  if (!style) return;

  setControlValues(style.controls);
  grayscaleToggle.checked = false;
  doc.grayscale = false;
  doc.styleMode = name;
  renderPreview();
  showToast(`已应用：${style.label}`);
}

function toggleStyleOptions() {
  const isCollapsed = styleOptions.classList.toggle('collapsed');
  styleToggleButton.classList.toggle('expanded', !isCollapsed);
  styleToggleButton.setAttribute('aria-expanded', String(!isCollapsed));
}

function renderPreview() {
  const doc = getActiveDocument();
  if (!doc) return;

  const canvas = buildProcessedCanvas(
    doc.image,
    1500,
    doc,
    state.activeTool === 'mosaic',
    state.activeTool !== 'text'
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

function updateTextEditorOverlay() {
  const doc = getActiveDocument();
  if (!doc || state.activeTool !== 'text' || previewCanvas.style.display === 'none') {
    hideTextEditorOverlay();
    return;
  }

  const canvasRect = previewCanvas.getBoundingClientRect();
  const cardRect = canvasCard.getBoundingClientRect();
  if (canvasRect.width <= 0 || canvasRect.height <= 0) {
    hideTextEditorOverlay();
    return;
  }

  const text = doc.tools.text;
  const displayScale = canvasRect.width / Math.max(1, previewCanvas.width);
  const fontSize = Math.max(14, Math.round(text.size * Math.min(previewCanvas.width, previewCanvas.height) / 1000 * displayScale));
  const width = Math.min(Math.max(220, fontSize * 8), canvasRect.width * 0.72);
  const left = canvasRect.left - cardRect.left + canvasRect.width * (text.x / 100);
  const top = canvasRect.top - cardRect.top + canvasRect.height * (text.y / 100);

  textEditorFrame.style.left = `${left}px`;
  textEditorFrame.style.top = `${top}px`;
  textEditorFrame.style.width = `${width}px`;
  textEditorFrame.style.transform = 'translate(-50%, -50%)';
  textEditorFrame.classList.add('visible');

  if (textContent.value !== text.content) {
    textContent.value = text.content;
  }
  textContent.style.color = text.color;
  textContent.style.fontFamily = text.fontFamily;
  textContent.style.fontSize = `${fontSize}px`;
  textContent.style.fontWeight = text.bold ? '700' : '400';
  textContent.style.fontStyle = text.italic ? 'italic' : 'normal';
  applyTextEditorEffect(text, fontSize);
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
  showTextLayer = true
) {
  if (!doc) return createCanvas(1, 1);

  const scale = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d', { willReadFrequently: true });

  context.drawImage(image, 0, 0, width, height);
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

  if (doc.styleMode !== 'none') {
    applyStyleGrade(context, width, height, doc.styleMode);
  }

  if (doc.grayscale) {
    applyGrayscale(context, width, height);
  }

  if (doc.tools.mosaic.enabled) {
    applyMosaic(context, width, height, doc.tools.mosaic, showGuides);
  }

  if (showTextLayer) {
    applyTextOverlay(context, width, height, doc.tools.text);
  }

  return canvas;
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

function applyTextOverlay(context, width, height, text) {
  const content = text.content.trim();
  if (!content) return;

  const scaledSize = Math.max(10, Math.round(text.size * Math.min(width, height) / 1000));
  const style = `${text.italic ? 'italic ' : ''}${text.bold ? '700 ' : '400 '}`;
  const x = width * (text.x / 100);
  const y = height * (text.y / 100);

  context.save();
  context.font = `${style}${scaledSize}px ${text.fontFamily}`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.lineJoin = 'round';
  context.shadowColor = text.effect === 'glow' ? text.color : 'rgba(0, 0, 0, 0.58)';
  context.shadowBlur = getTextShadowBlur(text.effect, scaledSize);
  context.shadowOffsetY = text.effect === 'float' ? Math.max(4, scaledSize * 0.16) : Math.max(1, scaledSize * 0.06);

  const lines = content.split(/\r?\n/);
  const lineHeight = scaledSize * 1.22;
  const startY = y - ((lines.length - 1) * lineHeight) / 2;

  lines.forEach((line, index) => {
    const lineY = startY + index * lineHeight;
    context.lineWidth = getTextStrokeWidth(text.effect, scaledSize);
    context.strokeStyle = text.effect === 'outline' ? 'rgba(255, 255, 255, 0.82)' : 'rgba(0, 0, 0, 0.62)';
    context.strokeText(line, x, lineY);
    context.fillStyle = text.color;
    context.fillText(line, x, lineY);
  });

  context.restore();
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

function handleCanvasPointerDown(event) {
  const doc = getActiveDocument();
  const point = getCanvasPoint(event);
  if (!doc || !point) return;

  if (state.activeTool === 'mosaic' && doc.tools.mosaic.enabled) {
    state.canvasInteraction = {
      type: 'mosaic',
      start: point,
    };
    doc.tools.mosaic.region = { x: point.x, y: point.y, width: 0, height: 0 };
    previewCanvas.setPointerCapture(event.pointerId);
    event.preventDefault();
    return;
  }

  if (state.activeTool === 'text' && doc.tools.text.content.trim()) {
    state.canvasInteraction = {
      type: 'text',
      offsetX: point.x - doc.tools.text.x,
      offsetY: point.y - doc.tools.text.y,
    };
    previewCanvas.setPointerCapture(event.pointerId);
    event.preventDefault();
  }
}

function handleTextDragPointerDown(event) {
  const doc = getActiveDocument();
  const point = getCanvasPoint(event);
  if (!doc || !point) return;

  setActiveTool('text');
  state.canvasInteraction = {
    type: 'text',
    offsetX: point.x - doc.tools.text.x,
    offsetY: point.y - doc.tools.text.y,
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
  } else if (state.canvasInteraction.type === 'text') {
    doc.tools.text.x = Math.max(0, Math.min(100, point.x - state.canvasInteraction.offsetX));
    doc.tools.text.y = Math.max(0, Math.min(100, point.y - state.canvasInteraction.offsetY));
  }

  schedulePreviewRender();
}

function handleCanvasPointerUp(event) {
  if (!state.canvasInteraction) return;
  state.canvasInteraction = null;
  try {
    event.currentTarget.releasePointerCapture(event.pointerId);
  } catch {
    // Pointer capture may already be released when the pointer leaves the canvas.
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
  button.addEventListener('click', () => applyPreset(button.dataset.preset));
});

document.querySelectorAll('[data-style-preset]').forEach((button) => {
  button.addEventListener('click', () => applyStylePreset(button.dataset.stylePreset));
});

styleToggleButton.addEventListener('click', toggleStyleOptions);

textToolButton.addEventListener('click', () => {
  setActiveTool('text');
});

mosaicToolButton.addEventListener('click', () => {
  setActiveTool('mosaic');
  const doc = getActiveDocument();
  if (doc && !doc.tools.mosaic.enabled) {
    updateMosaicTool({ enabled: true });
  }
});

grayscaleToggle.addEventListener('change', () => {
  const doc = getActiveDocument();
  if (!doc) return;

  doc.grayscale = grayscaleToggle.checked;
  schedulePreviewRender();
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
  updateTextTool({ content: textContent.value });
});

textContent.addEventListener('focus', () => {
  if (state.activeTool !== 'text') {
    setActiveTool('text');
  }
});

textPreset.addEventListener('change', () => {
  applyTextPreset(textPreset.value);
});

textFont.addEventListener('change', () => {
  updateTextTool({ fontFamily: textFont.value, preset: 'custom' });
});

textEffect.addEventListener('change', () => {
  updateTextTool({ effect: textEffect.value, preset: 'custom' });
});

textSize.addEventListener('input', () => {
  updateTextTool({ size: Number(textSize.value), preset: 'custom' });
});

textColor.addEventListener('input', () => {
  updateTextTool({ color: textColor.value, preset: 'custom' });
});

textBold.addEventListener('change', () => {
  updateTextTool({ bold: textBold.checked, preset: 'custom' });
});

textItalic.addEventListener('change', () => {
  updateTextTool({ italic: textItalic.checked, preset: 'custom' });
});

previewCanvas.addEventListener('pointerdown', handleCanvasPointerDown);
previewCanvas.addEventListener('pointermove', handleCanvasPointerMove);
previewCanvas.addEventListener('pointerup', handleCanvasPointerUp);
previewCanvas.addEventListener('pointercancel', handleCanvasPointerUp);
textDragHandle.addEventListener('pointerdown', handleTextDragPointerDown);
textDragHandle.addEventListener('pointermove', handleCanvasPointerMove);
textDragHandle.addEventListener('pointerup', handleCanvasPointerUp);
textDragHandle.addEventListener('pointercancel', handleCanvasPointerUp);

createControls();
setActiveTool(null);
syncUiWithActiveDocument();

window.addEventListener('resize', fitPreviewCanvasToContainer);

if ('ResizeObserver' in window) {
  const previewResizeObserver = new ResizeObserver(fitPreviewCanvasToContainer);
  previewResizeObserver.observe(canvasCard);
}
