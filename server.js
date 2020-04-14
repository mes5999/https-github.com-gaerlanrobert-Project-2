// Requiring path to so we can use relative routes to our HTML files
const path = require('path');
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);
// Pass a http.Server instance to the listen method
const io = require('socket.io').listen(server);

const PORT = process.env.PORT || 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Requiring our routes
// require('./routes/html-routes')(app);
// require('./routes/api-routes')(app);
// require('./routes/news-routes')(app);

server.listen(PORT, () => {
    console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});

// Register the index route of your app that returns the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/members.html'));
});

// Expose the node_modules folder as static resource
// (to access socket.io.js in the browser) - THIS!!!
app.use('/static', express.static('node_modules'));

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});
