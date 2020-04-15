// Requiring path to so we can use relative routes to our HTML files
const http = require('http');
const express = require('express');
const session = require('express-session');
// Requiring passport as we've configured it
const passport = require('./config/passport');

const app = express();

const server = http.createServer(app);
// Pass a http.Server instance to the listen method
// eslint-disable-next-line import/order
const io = require('socket.io').listen(server);

const PORT = process.env.PORT || 80;
// eslint-disable-next-line import/no-unresolved
const db = require('./models');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Expose the node_modules folder as static resource
// (to access socket.io.js in the browser) - THIS!!!
app.use('/static', express.static('node_modules'));

// Requiring our routes
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);
require('./routes/news-routes')(app);
require('./routes/io-routes')(io);

server.listen(PORT, () => {
    console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});
