const background = document.querySelector('.background');
const hexText = document.querySelector('.hex-text');
const btnContainer = document.querySelector('.btn-container');
const generateBtn = document.querySelector('#generate-btn');
const copyBtn = document.querySelector('#copy-btn');

function genLinearGradientValue(degree, colorFrom, colorTo) {
  return `linear-gradient(${degree}deg, ${colorFrom}, ${colorTo})`;
}

function init() {
  const initialColor = '#000000';
  const styleText = genLinearGradientValue(45, initialColor, initialColor);
  background.style.background = styleText;
  hexText.textContent = `background: ${styleText}`;
}

function getRandomHexText() {
  const randomHex =
    '#' +
    parseInt(Math.random() * 2 ** 16)
      .toString(16)
      .padStart(6, 0);
  return randomHex;
}

init();
generateBtn.addEventListener('click', changeBgToRandomHexColor);
