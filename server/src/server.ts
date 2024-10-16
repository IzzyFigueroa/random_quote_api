//This is running a backend server
//The root of our server is the domain name

import express from 'express';


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


//When a route sends back an aray or an obj it is an api route. 
//When a route in an api route you should prefix the pass with a /api

// Random quote GET route
app.get('/api/quote', (_, responseObj) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

 responseObj.send({
    quote: randomQuote
 })
});
 app.get('/api/test', (_, responseObj) => {
responseObj.send({
message: 'this is a test'
})
 })


// START THE SERVER
app.listen(3333, () => {
    console.log('Server started on port 3333');
    console.log('Hi from server')

});