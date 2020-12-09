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
    idCliente: 1,
    nome: 'Pedro Lucas',
    endereco: 'Rua da Matriz',
    telefone: '99645517',
    email: 'pedro@outlook.com'
  },
  {
    idCliente: 2,
    nome: 'Amanda',
    endereco: 'Rua da Matriz',
    telefone: '98345517',
    email: 'amanda1@outlook.com'
  }
  
];

//prettier-ignore
var usuarios = [
  {
    idUsuario: 1,
    nome: 'João Lucas',
    login: 'joao12@gmail.com',
    senha: '2267',
    telefone: '999435671',
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
       if(clientes[i].idCliente == req.params.idCliente){
         res.json(clientes[i])
         return
       }
   }
  
    res.status(404).send({Message: "Nonexistent costumer!"});
});

//filtrar usuario pelo id
app.get('/usuarios/:idUsuario', (req, res) => {
  for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idUsuario == req.params.idUsuario) {
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
    res.status(201).send('Usuário(a) cadastrado com sucesso!');
  } else {
    res.status(400).send('Erro no cadastro de usuário!');
  }
});

//inserir OS
app.post('/os', (req, res) => {
  console.log('POST/Ordens de Serviço', req.body);

  if (req.body) {
    ordensServicos.push(req.body);
    res.status(201).send('Ordem de Serviço inserida com sucesso');
  } else {
    res.status(400).send('Erro no cadastro de Ordens de serviço!');
  }
});

//atualizar cliente
//prettier-ignore
app.put('/clientes/:idCliente', (req, res) => {

  for(i=0; i< clientes.length; i++){

    if(clientes[i].idCliente == req.params.idCliente){
      if(req.body.nome)
        clientes[i].nome = req.body.nome;
      if(req.body.endereco)
        clientes[i].endereco = req.body.endereco;
      if(req.body.telefone)
        clientes[i].telefone = req.body.telefone;
      if(req.body.email)
        clientes[i].email = req.body.email;
        res.sendStatus(200);
        return;
    }
  }
  
    res.sendStatus(404);
});

//atualizar usuario
app.put('/usuarios/:idUsuario', (req, res) => {
  for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idUsuario == req.params.idUsuario) {
      if (req.body.nome) usuarios[i].nome = req.body.nome;
      if (req.body.login) usuarios[i].login = req.body.login;
      if (req.body.senha) usuarios[i].senha = req.body.senha;
      if (req.body.telefone) usuarios[i].telefone = req.body.telefone;
      if (req.body.perfil) usuarios[i].perfil = req.body.perfil;

      res.sendStatus(200);
      return;
    }
  }

  res.sendStatus(404);
});

//atualizar os
app.put('/os/:numOs', (req, res) => {
  for (i = 0; i < ordensServicos.length; i++) {
    if (ordensServicos[i].numOs == req.params.numOs) {
      if (req.body.situacaoOs)
        ordensServicos[i].situacaoOs = req.body.situacaoOs;
      if (req.body.tipo) ordensServicos[i].tipo = req.body.tipo;
      if (req.body.servico) ordensServicos[i].servico = req.body.servico;
      if (req.body.valor) ordensServicos[i].valor = req.body.valor;
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
});

//excluir cliente
app.delete('/clientes/:idCliente', (req, res) => {
  const tamanhoAntes = clientes.length;

  for (i = 0; i < clientes.length; i++) {
    if (clientes[i].idCliente == req.params.idCliente) clientes.splice(i, 1);
  }
  clientes = clientes.filter(
    (cliente) => cliente.idCliente != req.params.idCliente
  );

  if (tamanhoAntes > clientes.length) res.sendStatus(200);
  else res.sendStatus(404);
});

//excluir usuario
app.delete('/usuarios/:idUsuario', (req, res) => {
  const tamanhoAntes = usuarios.length;

  for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idUsuario == req.params.idUsuario) usuarios.splice(i, 1);
  }
  usuarios = usuarios.filter(
    (ususario) => usuario.idUsuario != req.params.idUsuario
  );

  if (tamanhoAntes > usuarios.length) res.sendStatus(200);
  else res.sendStatus(404);
});

//excluir ordem de serviço
app.delete('/os/:numOs', (req, res) => {
  const tamanhoAntes = ordensServicos.length;

  for (i = 0; i < ordensServicos.length; i++) {
    if (ordensServicos[i].numOs == req.params.numOs)
      ordensServicos.splice(i, 1);
  }

  ordensServicos = ordensServicos.filter(
    (ordensServico) => ordensServico.numOs != req.params.numOs
  );

  if (tamanhoAntes > ordensServicos.length) res.sendStatus(200);
  else res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Servidor rodando no endereço: http://localhost:${port}`);
});
