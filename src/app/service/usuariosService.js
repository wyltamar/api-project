const usuariosDao = require('../dao/usuariosDao');

exports.listAllUsers = (callback) => {
  usuariosDao.listAllUsers(callback);
};

exports.listUser = (callback) => {};

exports.insert = (novoUsuario, callback) => {};

exports.delete = (id, callback) => {};

exports.put = (id, alterRegistro, callback) => {};
