const inputEl = document.getElementById('message-input');
const submitBtn = document.getElementById('submit');
const outputMessageEl = document.getElementById('output-message');

function submitMessage({ start, destination }) {
  const nextText = start.value;
  start.value = '';
  const currentDestinationText = destination.innerHTML;
  const isNewTextNotEmpty = nextText.length;
  const shouldUpdate = isNewTextNotEmpty && currentDestinationText !== nextText;
  shouldUpdate ? (destination.innerHTML = nextText) : '';

  if (!isNewTextNotEmpty) alert('The message is empty!');
}

submitBtn.addEventListener('click', (e) => {
  submitMessage({ start: inputEl, destination: outputMessageEl });
});

inputEl.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    submitMessage({ start: e.target, destination: outputMessageEl });
  }
});
