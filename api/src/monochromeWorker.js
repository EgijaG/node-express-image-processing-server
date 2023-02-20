const gm = require('gm');
const workerData = require('worker-threads');
const parentPort = requre('worker-threads');

gm(workerData.source)
    .monochrome()
    .write(workerData.destination, (error) => {
      if (error) {
        throw error;
      }
      parentPort.postMessage({monochrome: true});
    });
