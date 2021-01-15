const osService = require('../service/osService');

exports.post = (req, res) => {
  osService.insert(req.body, (err, novaOs) => {
    if (err) res.status(500).send(err);
    else res.status(201).json(novaOs);
  });
};

exports.getListOss = (req, res) => {
  osService.listAllOs((err, oss) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(oss);
  });
};

exports.getOs = (req, res) => {
  osService.listOs(req.params.numOs, (err, os) => {
    if (err) res.status(500).send(err);
    else res.status(200).json(os);
  });
};

exports.put = (req, res) => {
  osService.put(req.params.numOs, req.body, (err) => {
    if (err) res.status(500).send(err);
    else res.status(200).send();
  });
};

exports.delete = (req, res) => {
  osService.delete(req.params.numOs, (err) => {
    if (err) res.status(500).send(err);
    else res.status(200).send('Número da OS excluída = ' + req.params.numOs);
  });
};
