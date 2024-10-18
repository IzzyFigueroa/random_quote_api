//This is running a backend server
//The root of our server is the domain name

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import api_routes from './routes/api_routes.js';
import htmlRoutes from './routes/htmlroutes.js';

const app = express();
const PORT = process.env.PORT || 3333;
//We need a database of quotes
app.use(express.static("../client/dist"));

// Load in routes
app.use(api_routes)

// Load in HTML Routes
app.use(htmlRoutes);



// START THE SERVER
app.listen(PORT, () => {
    console.log('Server started on port 3333');
    console.log('Hi from server')

});