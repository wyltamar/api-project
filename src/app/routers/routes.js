const routes = require('express').Router();
const clientesController = require('../controllers/clientesController');
const usuariosController = require('../controllers/usuariosController');
const osController = require('../controllers/osController');
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

routes.post('/os', osController.post);
routes.get('/os', osController.getListOss);
routes.get('/os/:numOs', osController.getOs);
routes.put('/os/:numOs', osController.put);
routes.delete('/os/:numOs', osController.delete);

module.exports = routes;
