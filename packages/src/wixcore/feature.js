module.exports = async () => {
    try {
        fs.readdirSync(path.dirname(__dirname) + '\\features\\').forEach(feature => {
            let checkPath = path.dirname(__dirname) + '\\features\\' + feature;

            if (!fs.existsSync(checkPath + "\\events.js") && fs.existsSync(checkPath + "\\index.js")) {
                require('..\\' + '\\features\\' + feature);;
                console.log('[FEATURE]', feature);
            };

            if (fs.existsSync(checkPath + "\\events.js")) {
                let events = require('..\\' + '\\features\\' + feature + '\\events');
                mp.events.add(events);
                console.log('[EVENTS]', feature);
            };
        });
    } catch (e) {
        console.log('[ERROR]', e.message);
    }
};