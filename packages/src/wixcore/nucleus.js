module.exports = async () => {
    try {
        global.fs = require("fs");
        global.path = require("path");
        global.WixCore = {};
    } catch (e) {
        console.log('[ERROR]', e.message);
    }
};