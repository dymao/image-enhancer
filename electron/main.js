const fs = require('node:fs/promises');
const path = require('node:path');
const { app, BrowserWindow, dialog, ipcMain } = require('electron');

const IMAGE_FILTERS = [
  { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'webp', 'bmp'] },
];

function createWindow() {
  const window = new BrowserWindow({
    width: 1680,
    height: 1050,
    minWidth: 1280,
    minHeight: 820,
    title: 'Image Enhancer',
    backgroundColor: '#1f1f1f',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  window.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.handle('image:open', async () => {
  const result = await dialog.showOpenDialog({
    title: '选择图片',
    properties: ['openFile'],
    filters: IMAGE_FILTERS,
  });

  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }

  const filePath = result.filePaths[0];
  const buffer = await fs.readFile(filePath);
  const ext = path.extname(filePath).toLowerCase().replace('.', '') || 'png';
  const mime = ext === 'jpg' ? 'jpeg' : ext;

  return {
    path: filePath,
    name: path.basename(filePath),
    dataUrl: `data:image/${mime};base64,${buffer.toString('base64')}`,
  };
});

ipcMain.handle('image:save', async (_event, payload) => {
  const defaultName = payload?.sourceName
    ? `${path.parse(payload.sourceName).name}_enhanced.png`
    : 'enhanced_image.png';

  const result = await dialog.showSaveDialog({
    title: '保存图片',
    defaultPath: path.join(app.getPath('pictures'), defaultName),
    filters: [
      { name: 'PNG', extensions: ['png'] },
      { name: 'JPEG', extensions: ['jpg', 'jpeg'] },
      { name: 'WEBP', extensions: ['webp'] },
    ],
  });

  if (result.canceled || !result.filePath) {
    return null;
  }

  const dataUrl = payload.dataUrl || '';
  const base64 = dataUrl.replace(/^data:image\/\w+;base64,/, '');
  await fs.writeFile(result.filePath, Buffer.from(base64, 'base64'));
  return result.filePath;
});
