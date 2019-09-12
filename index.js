const descEvent = undefined;

const init = (taiko, eventHandler, descEventHandler) => {
  descEvent = descEventHandler;
  eventHandler.on('createdSession', async (client) => {
    console.log('taiko-coverage init');
  });
};

const runCoverage = async () => {
  // console.log('taiko-coverage runCoverage');
  descEvent.emit('success', 'runCoverage ran successfully');
};

module.exports = {
    init,
    runCoverage
}
