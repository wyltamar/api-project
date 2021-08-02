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

//prettier-ignore
exports.listUser = (idUsu, callback)=> {
  connectionFactory.getConnection(function (err, connection) {
    if (err) {
      if (connection) connection.release()
      callback(err)
    } else {
      let sql = 'select * from usuarios where idUsu = ?';
      //prettier-ignore
      connection.query(sql, [idUsu], (function(err, usuario){
        connection.release()
        if(err) callback(err)
        else callback(err, usuario)
      }))
    }
  })
}

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

exports.put = (idUsu, alterRegistro, callback) => {
  connectionFactory.getConnection((err, connection) => {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      sql =
        'update usuarios set nomeUsu = ?, login = ?, senha = ?, telefone = ?, perfil = ? where idUsu = ?';
      //prettier-ignore
      connection.query(
        sql,
        [
          alterRegistro.nomeUsu,
          alterRegistro.login,
          alterRegistro.senha,
          alterRegistro.telefone,
          alterRegistro.perfil,
          idUsu
        ],
        ((err) => {
          connection.release()
          if(err){
            callback(err)
            console.log(err)
          } 
          else callback()
        })
      );
    }
  });
};
