const background = document.querySelector('.background');
const hexText = document.querySelector('.hex-text');
const btnContainer = document.querySelector('.btn-container');
const generateBtn = document.querySelector('#generate-btn');
const copyBtn = document.querySelector('#copy-btn');

function getRandomHexText() {
  const randomHex =
    '#' +
    parseInt(Math.random() * 2 ** 16)
      .toString(16)
      .padStart(6, 0);
  return randomHex;
}
