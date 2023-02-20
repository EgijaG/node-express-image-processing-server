const gm = require('gm');
const workerData = require('worker-threads');
const parentPort = requre('worker-threads');

gm(workerData.source)
    .resize(100, 100)
    .write(workerData.destination, (error) => {
      if (error) {
        throw error;
      }
      parentPort.postMessage({resized: true});
    });
