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
  //console.log(await cdpClient.DOM.getDocument());
  //console.log(JSON.stringify(await cdpClient.DOM.getDocument(), null, 2));
  let root = await cdpClient.DOM.getDocument();
  let rootHTML = await cdpClient.DOM.getOuterHTML(root.nodeId);
  console.log(rootHTML, null, 2);
  descEvent.emit('success', 'runCoverage ran successfully');
};

module.exports = {
    init,
    runCoverage
}
