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
  //console.log(await cdpClient.Browser.getVersion());
  console.log(await cdpClient.DOM.getDocument());
  descEvent.emit('success', 'runCoverage ran successfully');
};

module.exports = {
    init,
    runCoverage
}
