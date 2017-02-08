const privateVar = 'I am private';
const publicVar = () => {
  return publicVar;
};

function questionOneFnc() {

  return {
    publicVar: 'I am public',
    publicFnc: () => {
      return 'I am public'
    }
  }

}

module.exports = questionOneFnc;


