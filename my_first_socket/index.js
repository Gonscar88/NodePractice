const { Socket } = require('dgram');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

io.on('connection', (socket) => {
    io.emit("user connected", "Un usuario prueba");
    socket.on('chat message', (user_data) =>{
        console.log("user_data : ", user_data);
        io.emit('chat message', user_data);
    });

    socket.on('user setNickname', (user_name) => {
        io.emit("user setNickname", user_name);
    })

    socket.on('user dos', function(username) {
        console.log("Respuesta desde el servidor, usuario se ha desconectado", username);
        io.emit("user desconect", username);
    });

    socket.on('disconnect', () => {
        console.log("Desde servidor, usuario se ha desconectado");
    });
});


http.listen(3000, () => {
    console.log("listening on *:3000")
});