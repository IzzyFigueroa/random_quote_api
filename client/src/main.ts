import './style.css'

const quoteBtn = document.querySelector('#quote-btn')

// Make an http GET request to our Express server route '/api/quote' and get back a quote
async function getQuote() {
const resObj = await fetch('/api/quote')
const data = await resObj.json();

console.log(data)

}
 
quoteBtn?.addEventListener('click', getQuote);

