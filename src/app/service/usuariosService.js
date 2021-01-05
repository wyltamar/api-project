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

exports.delete = (idUsu, callback) => {
  usuariosDao.delete(idUsu, callback);
};

exports.put = (idUsu, alterRegistro, callback) => {
  usuariosDao.put(idUsu, alterRegistro, callback);
};
