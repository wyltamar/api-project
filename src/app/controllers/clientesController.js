const clientesService = require('../service/clientesService');

exports.getListClientes = (req, res) => {
  clientesService.listAllClientes((err, clientes) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(clientes);
  });
};

exports.getCliente = (req, res) => {
  clientesService.listCliente(req.params.id, (err, cliente) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(cliente);
  });
};

exports.post = (req, res) => {
  clientesService.insert(req.body, (err, cadastro) => {
    if (err) res.status(500).send(err);
    else res.status(201).json(cadastro);
  });
};

exports.delete = (req, res) => {
  clientesService.delete(req.params.id, (err) => {
    if (err) res.status(500).send(err);
    else res.status(200).send();
  });
};

exports.put = (req, res) => {
  clientesService.put(req.params.id, req.body, (err) => {
    if (err) res.status(500).send(err);
    else res.status(200).send();
  });
};
