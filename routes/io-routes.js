
module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            console.log(msg);
            io.emit('chat message', msg);
        });
    });
};
