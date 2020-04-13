// var app = require("express")();
// var http = require("http").Server(app);
// var io = require("socket.io")(http);
// var port = process.env.PORT || 3000;
//
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });
//
// io.on("connection", function (socket) {
//   socket.on("chat message", function (msg) {
//     io.emit("chat message", msg);
//   });
// });
//
// http.listen(port, function () {
//   console.log("listening on *:" + port);
// });

module.exports = (app) => {
  // eslint-disable-next-line global-require
    const http = require('http').Server(app);
    const io = require('socket.io')(http);
    const port = process.env.PORT || 3000;

    app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/index.html`);
    });

    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });
    });

    http.listen(port, () => {
        console.log(`listening on *:${port}`);
    });
};
