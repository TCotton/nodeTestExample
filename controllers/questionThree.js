const exec = require('child_process').exec;

const questionThere = () => {

  const numberOfProcesses = 2;
  let promise;

  for (let i = 0; i < numberOfProcesses; i++) {

    promise = new Promise((resolve) => {
      exec('sleep 10', () => {
        resolve('Hello World!');
      });
    });

  }

  return promise;

};

module.exports = questionThere;