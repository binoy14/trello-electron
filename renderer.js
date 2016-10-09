// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const webview = document.getElementById("webview");
const storage = require('electron-json-storage');

const url = storage.get('url', (err, data) => {
	if(err) throw err;
	webview.loadURL(data.url);
});

webview.addEventListener('dom-ready', () => {
	webview.addEventListener('page-title-updated', (title) => {
		const url = webview.getURL();
		console.log(url);
		storage.set('url', {url}, (err) => {if(err) throw err});
	});
});

