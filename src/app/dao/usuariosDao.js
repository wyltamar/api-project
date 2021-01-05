const { insert } = require('../service/usuariosService');
const connectionFactory = require('./connectionFactory');

exports.listAllUsers = (callback) => {
  connectionFactory.getConnection(function (err, connection) {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql = 'select * from usuarios';
      connection.query(sql, function (err, usuarios) {
        connection.release();
        if (err) callback(err);
        else callback(err, usuarios);
      });
    }
  });
};

exports.listUser = (callback) => {
  connectionFactory.getConnection(function (err, connection) {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql = 'select * from usuarios where id = ?';
      connection.query(sql, [id], (err, usuario) => {
        connection.release();
        if (err) callback(err);
        else callback(err, usuario);
      });
    }
  });
};
