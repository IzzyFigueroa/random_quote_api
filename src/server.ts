//This is running a backend server
//The root of our server is the domain name

import express from 'express';
import cors from 'cors';

const app = express();
//We need a database of quotes
const quotes = [
    "JavaScript is the language of the web. Embrace it!",
    "Learning JavaScript opens up endless possibilities.",
    "Every line of JavaScript you write is a step closer to mastery.",
    "JavaScript is not just a language, it's a mindset.",
    "The more you practice JavaScript, the better you get.",
    "JavaScript is the key to unlocking web development.",
    "Don't fear JavaScript, embrace its quirks.",
    "JavaScript is powerful, learn to harness it.",
    "With JavaScript, you can create anything you imagine.",
    "JavaScript is the bridge between ideas and reality.",
    "Mastering JavaScript is a journey worth taking.",
    "JavaScript makes the web come alive.",
    "Every JavaScript error is a learning opportunity.",
    "JavaScript is the canvas, your code is the art.",
    "Keep coding, keep learning, keep growing with JavaScript."
];

app.use(cors());
//When a route sends back an aray or an obj it is an api route. 
//When a route in an api route you should prefix the pass with a /api
app.get('/api/quote', (_, responseObj) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

 responseObj.send({
    quote: randomQuote
 })
})
/* 
Route that sends back a random quote from the database
- Create a GET route with the path of '/quote'
- Your callback should reference the responseObj and use an underscore for the requestObj
- Your code block should create a variable randomQuote that is assigned a random string from the quotes array
- Use the responseObj.send method to send an object back with a property of quote that has the value of your randomQuote string
ie. It sends back an object like the one below: 
{
  quote: 'JavaScript is the tool that turns ideas into reality.'
}
*/

//The four major requests that clients/browsers can do are GET POST PUT DELETE
//This will take 2 arg

//is localhost visited, and its just the domain, we would just put a /

//request is info we receive fromthe browser. response is something we can send back to the browswr

// Allow other domains to make requests to our server

// app.get('/', (_, responseObj) => {
// responseObj.send('Hi there from the server!')
// })

// app.get('/data', (_, responseObj) => {
//     const data = {
//         name: 'Izzy',
//         age: 33
//     };
//     responseObj.send(data);

//     })

app.listen(3333, () => {
    console.log('Server started on port 3333');
});