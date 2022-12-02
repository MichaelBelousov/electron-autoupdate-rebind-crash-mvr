const { autoUpdater } = require('electron');

class MyAutoUpdater extends autoUpdater.constructor{}
const myAutoUpdater = new MyAutoUpdater();

myAutoUpdater.setFeedURL();
