const fs = require('fs');

const sortObject = (data) => {

  return Object.keys(data).map((value) => {

    return {
      min: Math.min(...data[value]),
      max: Math.max(...data[value])
    }

  });

};

const readJSON = () => {

  return new Promise((resolve, reject) => {

    fs.readFile(__base + 'controllers/example.json', 'utf8', function(err, data) {
      if (err) {
        reject(err);
      }

      resolve(sortObject(JSON.parse(data)));

    });

  });

};

module.exports = readJSON;