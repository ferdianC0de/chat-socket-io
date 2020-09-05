const node = (io) => {
    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('chat message', (msg, id) => {
            console.log(socket.id);
            io.emit('chat', msg, id);
        });

        socket.on('getScoketId', () => {
            return socket.id;
        });
    });
}

module.exports = node ;