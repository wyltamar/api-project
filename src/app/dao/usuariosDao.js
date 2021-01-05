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
      let sql = 'select * from usuarios where idUsu = ?';
      connection.query(sql, [id], (err, usuario) => {
        connection.release();
        if (err) callback(err);
        else callback(err, usuario);
      });
    }
  });
};

exports.insert = (novoUsuario, callback) => {
  connectionFactory.getConnection(function (err, connection) {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql =
        'insert into usuarios(idUsu,nomeUsu,login,senha,telefone,perfil) values(?,?,?,?,?,?) ';
      //prettier-ignore
      connection.query(
        sql,
        [
          novoUsuario.idUsu,
          novoUsuario.nomeUsu,
          novoUsuario.login,
          novoUsuario.senha,
          novoUsuario.telefone,
          novoUsuario.perfil
        ],
        (err, novoUsuario)=>{
          connection.release()
          if(err) callback(err)
          else callback(err,novoUsuario)
        }
      );
    }
  });
};

exports.delete = (idUsu, callback) => {
  connectionFactory.getConnection((err, connection) => {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      sql = 'delete from usuarios where idUsu = ?';
      connection.query(sql, [idUsu], (err) => {
        connection.release();
        if (err) callback(err);
        else callback();
      });
    }
  });
};
