let descEvent;
let cdpClient;

const init = (taiko, eventHandler, descEventHandler) => {
  descEvent = descEventHandler;
  eventHandler.on('createdSession', async (client) => {
    cdpClient = client;
  });
};

const runCoverage = async () => {
  // console.log('taiko-coverage runCoverage');
  descEvent.emit('success', 'runCoverage ran successfully');
  console.log(cdpClient);
};

module.exports = {
    init,
    runCoverage
}
