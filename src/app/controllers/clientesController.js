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
    elseres.status(200).json(cliente);
  });
};
