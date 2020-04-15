// Requiring path to so we can use relative routes to our HTML files
const path = require('path');
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);
// Pass a http.Server instance to the listen method
const io = require('socket.io').listen(server);

const PORT = process.env.PORT || 80;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// Expose the node_modules folder as static resource (to access socket.io.js in the browser) - THIS!!!
app.use('/static', express.static('node_modules'));

// Requiring our routes
require('./routes/html-routes')(app);
require('./routes/io-routes')(io);

server.listen(PORT, () => {
    console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});

