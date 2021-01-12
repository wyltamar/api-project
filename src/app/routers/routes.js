const routes = require('express').Router();
const clientesController = require('../controllers/clientesController');
const usuariosController = require('../controllers/usuariosController');
const post = require('./../controllers/post');

routes.get('/clientes', clientesController.getListClientes);
routes.get('/clientes/:id', clientesController.getCliente);
routes.post('/clientes', clientesController.post);
routes.delete('/clientes/:id', clientesController.delete);
routes.put('/clientes/:id', clientesController.put);

routes.get('/usuarios', usuariosController.getListUsuarios);
routes.get('/usuarios/:idUsu', usuariosController.getUsuario);
routes.post('/usuarios', usuariosController.post);
routes.delete('/usuarios/:idUsu', usuariosController.delete);
routes.put('/usuarios/:idUsu', usuariosController.put);

module.exports = routes;
