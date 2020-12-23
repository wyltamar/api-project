const clientesDao = require('../dao/clientesDao');
//prettier-ignore
exports.listAllClientes = (callback) => {
  clientesDao.listAllClientes(callback)
}
//prettier-ignore
exports.listCliente = (callback) => {
  clientesDao.listCliente(callback)
}

exports.insert = (novoCliente, callback) => {
  clientesDao.insert(novoCliente, callback);
};

exports.delete = (id, callback) => {
  clientesDao.delete(id, callback);
};

exports.put = (id, alterRegistro, callback) => {
  clientesDao.put(id, alterRegistro, callback);
};
