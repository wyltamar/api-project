const mysql = require('mysql');

//prettier-ignore
const _dbConfig = {
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sgos',
  port: '3306'
}

const _pool = mysql.createPool(_dbConfig);
exports.getConnection = (callback) => {
  _pool.getConnection(function (err, connection) {
    if (err) {
      console.log('Erro ao obter a conexão mysql_pool:' + err);
      _pool.end(function onEnd(error) {
        if (error) {
          console.log('Erro ao finalizar o _pool' + error);
        }
        _createPool();
      });
      callback(err);
    } else {
      callback(null, connection);
    }
  });
};
