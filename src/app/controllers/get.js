module.exports = (req, res) => {
  res.json({
    mensagem: 'Servidor rodando na porta 3000',
  });
  res.status(200);
};
