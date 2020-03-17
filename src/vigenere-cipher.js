class VigenereCipheringMachine {
    constructor(modification = true) {
      this.modification = modification;
    }
    encrypt(message, key) {
      let messLow = message.toLowerCase();
      let keyLow = key.toLowerCase();
      let result = '';
      while (keyLow.length < message.length) {
        keyLow += keyLow;
      }
      let j = 0;
      for (let i = 0; i < messLow.length; i++) {
        if (messLow.charCodeAt(i) < 97 || messLow.charCodeAt(i) > 122) {
          result += messLow[i];
          continue;
        }
        let shift = keyLow.charCodeAt(j) - 'a'.charCodeAt(0);
        let code = messLow.charCodeAt(i) + shift > 'z'.charCodeAt(0) ?
          messLow.charCodeAt(i) + shift - 26 :
          messLow.charCodeAt(i) + shift;
        result += String.fromCharCode(code);
        j++;
      }
      return this.modification ? result.toUpperCase() : result.toUpperCase().split('').reverse().join('');
    }
  
    decrypt(message, key) {
      let messLow = message.toLowerCase();
      let keyLow = key.toLowerCase();
      let result = '';
      while (keyLow.length < message.length) {
        keyLow += keyLow;
      }
      let j = 0;
      for (let i = 0; i < messLow.length; i++) {
        if (messLow.charCodeAt(i) < 97 || messLow.charCodeAt(i) > 122) {
          result += messLow[i];
          continue;
        }
        let shift = keyLow.charCodeAt(j) - 'a'.charCodeAt(0);
        let code = messLow.charCodeAt(i) - shift < 'a'.charCodeAt(0) ?
          messLow.charCodeAt(i) - shift + 26 :
          messLow.charCodeAt(i) - shift;
        result += String.fromCharCode(code);
        j++;
      }
      return this.modification ? result.toUpperCase() : result.toUpperCase().split('').reverse().join('');
    }
  }
module.exports = VigenereCipheringMachine;