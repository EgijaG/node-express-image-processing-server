const gm = require('gm');
const workerData = require('worker_threads');
const parentPort = requre('worker_threads');

gm(workerData.source)
    .monochrome()
    .write(workerData.destination, (error) => {
      if (error) {
        throw error;
      }
      parentPort.postMessage({monochrome: true});
    });
