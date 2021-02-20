const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(typeMachine = true) {
    this.typeMachine = typeMachine;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
      'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }



  encrypt(message, key) {
    if (message && key) {

      // Если, тип шифрования direct
      if (this.typeMachine) {
        let messageArr = message.toUpperCase().split('');
        let keysFlow = [];
        let encryptStr = [];

        // Заполняем поток ключей
        let index = 0;
        messageArr.forEach(char => {
          if (this.alphabet.includes(char)) {
            if (index <= key.length) {
              if (index == key.length) {
                index = 0;
                keysFlow.push(key[index].toUpperCase());
                index++;
              } else {
                keysFlow.push(key[index].toUpperCase());
                index++;
              }
            } else {
              index = 0;
            }
          } else {
            keysFlow.push(char);
          }
        });

        // Зашифровываем строку
        messageArr.forEach((char, index) => {
          if (this.alphabet.includes(char)) {
            encryptStr.push(this.alphabet[(this.alphabet.indexOf(char) + this.alphabet.indexOf(keysFlow[index])) % 26]);
          } else {
            encryptStr.push(char);
          }
        });

        return encryptStr.join('');

      } else {
        let messageArr = message.toUpperCase().split('');
        let keysFlow = [];
        let encryptStr = [];

        // Заполняем поток ключей
        let index = 0;
        messageArr.forEach(char => {
          if (this.alphabet.includes(char)) {
            if (index <= key.length) {
              if (index == key.length) {
                index = 0;
                keysFlow.push(key[index].toUpperCase());
                index++;
              } else {
                keysFlow.push(key[index].toUpperCase());
                index++;
              }
            } else {
              index = 0;
            }
          } else {
            keysFlow.push(char);
          }
        });

        // Зашифровываем строку
        messageArr.forEach((char, index) => {
          if (this.alphabet.includes(char)) {
            encryptStr.push(this.alphabet[(this.alphabet.indexOf(char) + this.alphabet.indexOf(keysFlow[index])) % 26]);
          } else {
            encryptStr.push(char);
          }
        });

        return encryptStr.reverse().join('');
      }

    } else {
      throw new Error('');
    }

  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {

      // Если, тип машины direct
      if (this.typeMachine) {
        let messageArr = encryptedMessage.toUpperCase().split('');
        let keysFlow = [];
        let cryptStr = [];

        // Заполняем поток ключей
        let index = 0;
        messageArr.forEach(char => {
          if (this.alphabet.includes(char)) {
            if (index <= key.length) {
              if (index == key.length) {
                index = 0;
                keysFlow.push(key[index].toUpperCase());
                index++;
              } else {
                keysFlow.push(key[index].toUpperCase());
                index++;
              }
            } else {
              index = 0;
            }
          } else {
            keysFlow.push(char);
          }
        });

        // Зашифровываем строку
        messageArr.forEach((char, index) => {
          if (this.alphabet.includes(char)) {
            let shiftNum = (this.alphabet.indexOf(char) - this.alphabet.indexOf(keysFlow[index])) % 26;
            if (shiftNum < 0) {
              shiftNum = (shiftNum + 26) % 26;
              cryptStr.push(this.alphabet[shiftNum]);
            }
            else {
              cryptStr.push(this.alphabet[shiftNum]);
            }
          } else {
            cryptStr.push(char);
          }
        });

        return cryptStr.join('');
      } else {
        let messageArr = encryptedMessage.toUpperCase().split('');
        let keysFlow = [];
        let cryptStr = [];

        // Заполняем поток ключей
        let index = 0;
        messageArr.forEach(char => {
          if (this.alphabet.includes(char)) {
            if (index <= key.length) {
              if (index == key.length) {
                index = 0;
                keysFlow.push(key[index].toUpperCase());
                index++;
              } else {
                keysFlow.push(key[index].toUpperCase());
                index++;
              }
            } else {
              index = 0;
            }
          } else {
            keysFlow.push(char);
          }
        });

        // Зашифровываем строку
        messageArr.forEach((char, index) => {
          if (this.alphabet.includes(char)) {
            let shiftNum = (this.alphabet.indexOf(char) - this.alphabet.indexOf(keysFlow[index])) % 26;
            if (shiftNum < 0) {
              shiftNum = (shiftNum + 26) % 26;
              cryptStr.push(this.alphabet[shiftNum]);
            }
            else {
              cryptStr.push(this.alphabet[shiftNum]);
            }
          } else {
            cryptStr.push(char);
          }
        });

        return cryptStr.reverse().join('');
      }

    } else {
      throw new Error('');
    }
  }
}

module.exports = VigenereCipheringMachine;
