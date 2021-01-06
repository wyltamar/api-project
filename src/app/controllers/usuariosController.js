const usuariosService = require('../service/usuariosService');

exports.getListUsuarios = (req, res) => {
  usuariosService.listAllUsers((err, usuarios) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(usuarios);
  });
};

exports.getUsuario = (req, res) => {
  usuariosService.listUser(req.params.idUsu, (err, usuario) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(usuario);
  });
};

exports.post = (req, res) => {
  usuariosService.insert(req.body, (err, usuarioCadastrado) => {
    if (err) res.status(500).send(err);
    else res.status(201).json(usuarioCadastrado);
  });
};

exports.delete = (req, res) => {
  usuariosService.delete(req.params.idUsu, (err) => {
    if (err) res.status(500).send(err);
    else res.status(200).send('Usuário excluído com sucesso!');
  });
};

exports.put = (req, res) => {
  usuariosService.put(req.params.idUsu, req.body, (err, usuarioAtualizado) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(usuarioAtualizado);
  });
};
