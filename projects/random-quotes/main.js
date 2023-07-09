const quoteParagraph = document.querySelector('.quote');
const authorSpan = document.querySelector('.author');
const generateBtn = document.querySelector('.generate-btn');

let loading = false;
handleClick();

async function getQuotes(url = '') {
  loading = true;
  quoteParagraph.innerHTML = `<span style="color: #06bdc1;">loading</span>`;
  authorSpan.innerText = '';
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': config.API_NINJAS_KEY,
      },
    });
    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
  loading = false;
  quoteParagraph.innerHTML = '';
}

async function handleClick() {
  const [{ author, quote }] = await getQuotes(
    'https://api.api-ninjas.com/v1/quotes'
  );
  const quoteElement = document.createElement('q');
  quoteElement.innerText = quote;
  quoteParagraph.innerHTML = '';
  quoteParagraph.appendChild(quoteElement);
  authorSpan.innerText = '- ' + author;
}

generateBtn.addEventListener('click', handleClick);
