// Requiring path to so we can use relative routes to our HTML files
const path = require('path');
//
// const express = require('express')();
//
// const http = require('http').Server(express);
// const io = require('socket.io')(http);
// const port = process.env.PORT || 3000;
//
//
// console.log(express);
//
// express.get('/', function(req, res){
//   res.sendFile(path.join(__dirname, './public/members.html'));
// });
//
// io.on('connection', socket => {
//   socket.on('chat message', msg => {
//     io.emit('chat message', msg);
//   });
// });
//
// http.listen(port, function(){
//   console.log('listening on *:' + port);
// });


var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
// Pass a http.Server instance to the listen method
var io = require('socket.io').listen(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// The server should start listening
server.listen(3000);

// Register the index route of your app that returns the HTML file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/members.html'));
});

// Expose the node_modules folder as static resources (to access socket.io.js in the browser)
app.use('/static', express.static('node_modules'));

//

io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

// Handle connection
// io.on('connection', function (socket) {
//   console.log("Connected succesfully to the socket ...");
//
//   var news = [
//     { title: 'The cure of the Sadness is to play Videogames',date:'04.10.2016'},
//     { title: 'Batman saves Racoon City, the Joker is infected once again',date:'05.10.2016'},
//     { title: "Deadpool doesn't want to do a third part of the franchise",date:'05.10.2016'},
//     { title: 'Quicksilver demand Warner Bros. due to plagiarism with Speedy Gonzales',date:'04.10.2016'},
//   ];
//
//   // Send news on the socket
//   socket.emit('news', news);
//
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });
