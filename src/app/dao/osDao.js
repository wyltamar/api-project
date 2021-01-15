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
        novaOs.situcao,
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
