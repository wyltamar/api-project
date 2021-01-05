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
