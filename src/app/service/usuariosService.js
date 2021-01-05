const usuariosDao = require('../dao/usuariosDao');

exports.listAllUsers = (callback) => {
  usuariosDao.listAllUsers(callback);
};
