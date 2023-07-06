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

function updateBgColor(colorFrom, colorTo) {
  background.style.background = genLinearGradientValue(45, colorFrom, colorTo);
}

function updateHexText(colorFrom, colorTo) {
  const text = `background: ${genLinearGradientValue(45, colorFrom, colorTo)}`;
  hexText.textContent = text;
}

function changeBgToRandomHexColor() {
  const hex1 = getRandomHexText();
  const hex2 = getRandomHexText();
  updateBgColor(hex1, hex2);
  updateHexText(hex1, hex2);
}

function copyToClipboard() {
  const text = hexText.textContent;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then((r) => alert('Copied!'))
      .catch((e) => alert('Try again'));
  } else {
    alert('the window is insecure');
  }
}

init();
generateBtn.addEventListener('click', changeBgToRandomHexColor);
copyBtn.addEventListener('click', copyToClipboard);
