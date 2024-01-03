const button = document.querySelector('#button');
const result = document.querySelector('#result');
const copied = document.querySelector("#copied");
const copyButton = document.querySelector("#copyButton");
const symbols = ['@', '!', '*', '$'];
let password = '';

function generatePass() {
  const upperCaseCheck = document.querySelector('#enableUpperCase');
  const input = document.querySelector('#input').value.toLowerCase().replace(/\s/g, '');

  if (input.length === 0) return;

  let modifiedInput = input.replace(/a/gi, '4').replace(/i/gi, '1').replace(/o/gi, '0');

  if (upperCaseCheck.checked) {
    modifiedInput = modifiedInput.split('').map((char) =>
      Math.round(Math.random()) ? char.toUpperCase() : char.toLowerCase()
    ).join('');
  }

  const randomSymbol1 = symbols[Math.floor(Math.random() * symbols.length)];
  const randomSymbol2 = symbols[Math.floor(Math.random() * symbols.length)];
  const randomString = Math.random().toString(32).slice(-10);

  password = `${randomSymbol1}${modifiedInput}${randomSymbol2}${randomString}`;
  result.textContent = password;

  copyButton.classList.add("--display");
  setTimeout(function () {
    result.textContent = '';
    copyButton.classList.remove("--display");
  }, 70000);
}

function copyResult() {
  if (!password) return;

  navigator.clipboard.writeText(password)
    .then(() => {
      copied.classList.add("--show");
      setTimeout(() => {
        copied.classList.remove("--show");
      }, 2500);
    })
    .catch((err) => {
      console.error('Erro ao copiar: ', err);
    });
}
// const button = document.querySelector('#button');
// const result = document.querySelector('#result');
// const copied = document.querySelector("#copied");
// const copyButton = document.querySelector("#copyButton");

// const symbol = ['@','!','*', '$'];
// let password = '';

// function generatePass() {
//   const randomSymbol = Math.floor(Math.random() * symbol.length);
//   const randomSymbol2 = Math.floor(Math.random() * symbol.length);
//   let input = document.querySelector('#input').value.toLowerCase().replace(/\s/g, '');

//   const letterToNumberCheck = document.querySelector('#letterToNumber');
//   const upperCaseCheck = document.querySelector('#enableUpperCase');
//   let number = -2;

//   if(input.length > 0) {

//     if (letterToNumberCheck.checked === true) {
//       input = input.replace(/a/gi, 4).replace(/i/gi, 1).replace(/o/gi, 0);
//     } else {
//       input;
//     }

//     if (upperCaseCheck.checked) {
//       input = input.split('').map((v) =>
//       Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
//       ).join('');
//     } else {
//       input;
//     }

//     password = symbol[randomSymbol] + input + symbol[randomSymbol2] + Math.random().toString(32).slice(number);
//     result.innerHTML = password;

//     copyButton.classList.add("--display");
//     setTimeout(function () {
//       result.innerHTML = ''; copyButton.classList.remove("--display");
//     }, 70000)
//   }
// }

// function copyResult(result) {
//   const textArea = document.createElement("textArea");
//   textArea.value = password;
//   document.body.appendChild(textArea);
//   textArea.select();
//   document.execCommand("copy");
//   textArea.remove();
  
//   copied.classList.add("--show");
//   setTimeout(function() {copied.classList.remove("--show");}, 2500);
// }

