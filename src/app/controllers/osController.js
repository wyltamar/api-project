const osService = require('../service/osService');

exports.post = (req, res) => {
  osService.insert(req.body, (err, novaOs) => {
    if (err) res.status(500).send(err);
    else res.status(201).json(novaOs);
  });
};
