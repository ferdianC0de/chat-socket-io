const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const socket = require('./node-socket.js');

// console.log(socket.);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home/index.html');
});

socket(io);

http.listen(5000, () => {
    console.log(`express is running on port : 5000`);
});