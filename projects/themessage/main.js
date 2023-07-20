const submitBtn = document.getElementById('submit');
const outputMessageEl = document.getElementById('output-message');

submitBtn.addEventListener('click', () => {
  const inputEl = document.getElementById('message-input');
  const inputText = inputEl.value;
  inputEl.value = '';
  outputMessageEl.innerHTML = inputText;
});
