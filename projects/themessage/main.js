const inputEl = document.getElementById('message-input');
const submitBtn = document.getElementById('submit');
const outputMessageEl = document.getElementById('output-message');

function submitMessage({ start, destination }) {
  const inputText = start.value;
  start.value = '';
  destination.innerHTML = inputText;
}

submitBtn.addEventListener('click', (e) => {
  submitMessage({ start: inputEl, destination: outputMessageEl });
});

inputEl.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    submitMessage({ start: e.target, destination: outputMessageEl });
  }
});
