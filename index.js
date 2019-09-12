const EventEmitter = require('events');
const descEvent = new EventEmitter();

const init = (taiko, eventHandler) => {
    eventHandler.on('createdSession', async (client) => {
        console.log('taiko-coverage init');
    });
};

const runCoverage = async () => {
  // console.log('taiko-coverage runCoverage');
  descEvent('success', 'runCoverage ran successfully');
};

module.exports = {
    init,
    runCoverage
}
