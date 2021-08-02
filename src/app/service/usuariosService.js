const usuariosDao = require('../dao/usuariosDao');

exports.listAllUsers = (callback) => {
  usuariosDao.listAllUsers(callback);
};

exports.listUser = (idUsu, callback) => {
  usuariosDao.listUser(idUsu, callback);
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
