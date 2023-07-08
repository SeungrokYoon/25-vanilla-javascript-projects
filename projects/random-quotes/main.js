const quoteParagraph = document.querySelector('.quote');
const authorSpan = document.querySelector('.author');
const generateBtn = document.querySelector('.generate-btn');

async function getQuotes(url = '') {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': config.api_ninjas_key,
      },
    });
    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
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
