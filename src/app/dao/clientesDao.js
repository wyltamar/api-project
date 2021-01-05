const { insert } = require('../service/clientesService');
const connectionFactory = require('./connectionFactory');

exports.listAllClientes = (callback) => {
  connectionFactory.getConnection(function (err, connection) {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql = 'select * from clientes';
      connection.query(sql, function (err, clientes) {
        connection.release();
        if (err) callback(err);
        else callback(err, clientes);
      });
    }
  });
};

exports.listCliente = (id, callback) => {
  connectionFactory.getConnection(function (err, connection) {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql = 'select * from clientes where id = ?';
      connection.query(sql, [id], (err, cliente) => {
        connection.release();
        if (err) callback(err);
        else callback(err, cliente);
      });
    }
  });
};

exports.insert = (novoCliente, callback) => {
  connectionFactory.getConnection(function (err, connection) {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql =
        'insert into clientes (id,nome,endereco,telefone,email) values (?,?,?,?,?) ';
      //prettier-ignore
      connection.query(
        sql,
        [
          novoCliente.id,
          novoCliente.nome,
          novoCliente.endereco,
          novoCliente.telefone,
          novoCliente.email        
        ],
        (err, insertedrow) => {
          connection.release();
          if (err) callback(err);
          else {
            novoCliente.id = insertedrow.insertId;
            callback(null, novoCliente);
          }
        }
      );
    }
  });
};

exports.delete = (id, callback) => {
  connectionFactory.getConnection(function (err, connection) {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql = 'delete from clientes where id = ?';
      //prettier-ignore
      connection.query(sql, [id], ((err) => {
        connection.release();
        if (err) callback(err);
        else callback();
      })
      )
    }
  });
};

exports.put = (id, alterRegistro, callback) => {
  connectionFactory.getConnection(function (err, connection) {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql =
        'update clientes set nome = ?,endereco = ?, telefone = ?,email = ? where id = ?';
      //prettier-ignore
      connection.query(sql, [alterRegistro.nome,alterRegistro.endereco,alterRegistro.telefone,alterRegistro.email], ((err) => {
        connection.release();
        if (err) callback(err);
        else callback();
      })
      )
    }
  });
};
