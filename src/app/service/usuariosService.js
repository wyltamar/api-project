const usuariosDao = require('../dao/usuariosDao');

exports.listAllUsers = (callback) => {
  usuariosDao.listAllUsers(callback);
};

exports.listUser = (callback) => {
  usuariosDao.listUser(callback);
};

exports.insert = (novoUsuario, callback) => {
  usuariosDao.insert(novoUsuario, callback);
};

exports.delete = (id, callback) => {};

exports.put = (id, alterRegistro, callback) => {};
