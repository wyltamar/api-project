const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

/* MOCK DA BASE DE DADOS */
//prettier-ignore
var clientes = [ 
  {
    id: 1,
    nome: 'Pedro Lucas',
    Endereco: 'Rua da Matriz',
    telefone: '99645517',
    email: 'pedro@outlook.com'
  },
  {
    id: 2,
    nome: 'Amanda',
    Endereco: 'Rua da Matriz',
    telefone: '98345517',
    email: 'amanda1@outlook.com'
  }
  
];

//prettier-ignore
var usuarios = [
  {
    id: 1,
    nome: 'João Lucas',
    login: 'joao12@gmail.com',
    senha: '2267',
    fone: '999435671',
    perfil: 'Administrador'
  }
];

//prettier-ignore
var ordensServicos = [
  {
    numOs: 1,
    dataOs: '04/11/2020',
    situacaoOs: 'executada',
    tipo: 'OS',
    cliente: 'Amanda Gonçalves',
    idCliente: 2,
    equipamento: 'Notebook',
    defeito: 'Não liga',
    servico: 'Troca da fonte',
    tecnico: 'Gustavo Ferreira',
    valor: '90,00'
  }
];
// endereço root
app.get('/', (req, res) => {
  res.json({ status: 'Servidor  rodando' });
});

//listar clientes
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

//listar usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

//listar OS
app.get('/os', (req, res) => {
  res.json(ordensServicos);
});

//filtrar cliente pelo id
//prettier-ignore
app.get('/clientes/:idCliente', (req, res) => {
   for(i=0; i < clientes.length; i++){
       if(clientes[i].id == req.params.idCliente){
         res.json(clientes[i])
         return
       }
   }
  
    res.status(404).send({Message: "Nonexistent costumer!"});
});

//filtrar usuario pelo id
app.get('/usuarios/:idUsuario', (req, res) => {
  for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id == req.params.idUsuario) {
      res.json(usuarios[i]);
      return;
    }
  }
  res.status(404).send({ Menssage: 'Nonexistent user' });
});

//filtrar OS pelo numero da OS
app.get('/os/:numOs', (req, res) => {
  for (i = 0; i < ordensServicos.length; i++) {
    if (ordensServicos[i].numOs == req.params.numOs) {
      res.json(ordensServicos[i]);
      return;
    }
  }
  res.status(404).send({ Menssage: 'Nonexistent OS' });
});

//inserir clientes
app.post('/clientes', (req, res) => {
  console.log('POST / Clientes', req.body);
  if (req.body) {
    clientes.push(req.body);
    res.status(201).send;
    res.send('Cliente cadastrado com sucesso!');
  } else {
    res.status(400).send('Erro no cadastro do cliente!');
  } ///
});

//inserir usuário
app.post('/usuarios', (req, res) => {
  console.log('POST / Usuários', req.body);
  if (req.body) {
    usuarios.push(req.body);
    res.send('Usuário(a) cadastrado com sucesso!');
  } else {
    res.status(400).send('Erro no cadastro de usuário!');
  }
});

//inserir OS
app.post('/os', (req, res) => {
  console.log('POST/Ordens de Serviço', req.body);

  if (req.body) {
    ordensServicos.push(req.body);
    res.json(req.body);
  } else {
    res.status(400).send('Erro no cadastro de Ordens de serviço!');
  }
});

//atualizar cliente
//prettier-ignore
app.put('/clientes/:idCliente', (req, res) => {
  const id = req.params.idCliente;
  const nome = req.body.nome;
  const endereco = req.body.endereco;
  const telefone = req.body.telefone;
  const email = req.body.email;

    res.status(200).send({
      id: idCliente,
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email
    });
  
});

app.listen(port, () => {
  console.log(`Servidor rodando no endereço: http://localhost:${port}`);
});
