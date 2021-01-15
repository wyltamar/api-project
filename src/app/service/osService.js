const osDao = require('../dao/osDao');

exports.insert = (novaOs, callback) => {
  osDao.insert(novaOs, callback);
};

exports.listAllOs = (callback) => {
  osDao.listAllOs(callback);
};

exports.listOs = (numOs, callback) => {
  osDao.listOs(numOs, callback);
};

exports.put = (numOs, alterOs, callback) => {
  osDao.put(numOs, alterOs, callback);
};
