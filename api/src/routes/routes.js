const express = require('express');
const server = express.Router();
const { ALLPokemons, newPoke, getTypes2, findpoke } = require('../functions');

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan
// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.
server.use(express.json());

server.get('/pokemons', ALLPokemons);
server.get('/types', getTypes2);
server.get('/findpoke', findpoke);
server.post('/pokemons', newPoke);

module.exports = server;
