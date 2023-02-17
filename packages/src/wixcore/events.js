module.exports = async () => {
    try {
        fs.readdirSync(path.dirname(__dirname) + '\\features\\').forEach(feature => {
            if (fs.existsSync(path.dirname(__dirname) + '\\features\\' + feature + "\\events.js")) {
                let events = require('..\\' + '\\features\\' + feature + '\\events');
                mp.events.add(events);
            };
        });
    } catch (e) {
        console.log('[ERROR]', e.message);
    }
};