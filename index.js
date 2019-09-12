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
  let doc = await cdpClient.DOM.getDocument({ depth: -1 });
  console.log(doc);
  //console.log(`doc.root.nodeId - ${doc.root.nodeId}`);
  //let rootHTML = await cdpClient.DOM.getOuterHTML({nodeId: doc.root.nodeId});
  //console.log(rootHTML);
  descEvent.emit('success', 'runCoverage ran successfully');
};

module.exports = {
    init,
    runCoverage
}
