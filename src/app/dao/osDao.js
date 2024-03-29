const { insert } = require('../service/osService');
const connectionFactory = require('./connectionFactory');

exports.insert = (novaOs, callback) => {
  connectionFactory.getConnection((err, connection) => {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql =
        'insert into tbos(numOs,dataOs,tipo,situacao,idCli,equipamento,defeito,servico,tecnico,valor) values(?,?,?,?,?,?,?,?,?,?)';
      //prettier-ignore
      connection.query(sql, [
        novaOs.numOs,
        novaOs.dataOs,
        novaOs.tipo,
        novaOs.situacao,
        novaOs.idCli,
        novaOs.equipamento,
        novaOs.defeito,
        novaOs.servico,
        novaOs.tecnico,
        novaOs.valor
      ], (err,insertedrow)=>{
        connection.release()
        if(err) callback(err)
        else{
          novaOs.numOs = insertedrow.insertnumOs;
          novaOs.dataOs = insertedrow.insertdataOs
          callback(err,novaOs)
        } 
      })
    }
  });
};

exports.listAllOs = (callback) => {
  connectionFactory.getConnection((err, connection) => {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql = 'select * from tbos';
      connection.query(sql, (err, oss) => {
        connection.release();
        if (err) callback(err);
        else callback(err, oss);
      });
    }
  });
};

exports.listOs = (numOs, callback) => {
  connectionFactory.getConnection((err, connection) => {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql = 'select * from tbos where numOs = ?';
      connection.query(sql, [numOs], (err, os) => {
        connection.release();
        if (err) callback(err);
        else callback(err, os);
      });
    }
  });
};

exports.put = (numOs, alterOs, callback) => {
  connectionFactory.getConnection((err, connection) => {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql =
        'update tbos set tipo=?,situacao=?,equipamento=?,defeito=?,servico=?,tecnico=?,valor=? where numOs=?';
      //prettier-ignore
      connection.query(
        sql,
        [
          alterOs.tipo,
          alterOs.situacao,
          alterOs.equipamento,
          alterOs.defeito,
          alterOs.servico,
          alterOs.tecnico,
          alterOs.valor,
          numOs
        ],
        (err) => {
          connection.release()
          if(err) callback(err)
          else callback()
        }
      );
    }
  });
};

exports.delete = (numOs, callback) => {
  connectionFactory.getConnection((err, connection) => {
    if (err) {
      if (connection) connection.release();
      callback(err);
    } else {
      let sql = 'delete from tbos where numOs = ?';
      connection.query(sql, [numOs], (err) => {
        connection.release();
        if (err) callback(err);
        else callback();
      });
    }
  });
};
