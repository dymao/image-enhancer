const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('imageEnhancer', {
  openImage: () => ipcRenderer.invoke('image:open'),
  saveImage: (payload) => ipcRenderer.invoke('image:save', payload),
});
