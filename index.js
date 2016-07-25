'use strict';

var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 5000;

app.use(express.static('public'));

var vendas = [];
var id = 0;
io.on('connection', function (socket) {

    socket.on('disconnect', function () {
        console.log('conexão encerrada');
    });

    socket.on('venda', function (o) {
        o.id = id++;
        o.data = new Date();
        vendas.push(o);
        io.emit('venda', o);
    });

    socket.on('excluir', function (id) {
        vendas = vendas.filter(function (v) {
            return v.id != id;
        });
        io.emit('excluir', id);
    });

    socket.on('entrar', function () {
        if (vendas.length > 0) {
            io.to(socket.id).emit('venda', vendas);
        }
    });
});

http.listen(port, function () {
    console.log('Servidor rodando na porta:' + port);
});