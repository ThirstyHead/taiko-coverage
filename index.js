const init = (taiko, eventHandler) => {
    eventHandler.on('createdSession', async (client) => {
        console.log('taiko-coverage init');
    });
};

const runCoverage = async () => {
  console.log('taiko-coverage runCoverage');
};

module.exports = {
    init,
    runCoverage
}
