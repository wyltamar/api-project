const osDao = require('../dao/osDao');

exports.insert = (novaOs, callback) => {
  osDao.insert(novaOs, callback);
};

exports.listAllOs = (callback) => {
  osDao.listAllOs(callback);
};
