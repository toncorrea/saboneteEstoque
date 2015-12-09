var express = require('express');
var router = express.Router();
var MateriaPrima = require('../models/materiaPrima');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Controle de Estoque' 
  });
});

//------------ Rotas Materia Prima -----------

router.get('/materiaprima', function(req, res, next){
  res.render('materiaprima', {
    title: 'Materia Prima',
  });
});

router.post('/salvar', function(req, res, next) {
  var materia = new MateriaPrima();
  materia.nome = req.body.nomeMP; // nome
  materia.preco = req.body.precoMP; // preco
  materia.descricao = req.body.descricaoMP; // descricao
  if(req.body.idMP == ""){
    //quando estou salvando pela view materiaprima.ejs
    //o valor é vazio
    materia.salvar();
  }
  else{
    materia.id = req.body.idMP;
    materia.alterar();
  }
  res.redirect('/materiaprima');
});

//lista de todas as materias primas registradas
router.get('/materiaprima/listamaterias', function(req, res, next){
  materias = MateriaPrima.dados;
  quantidade = MateriaPrima.quantidade();
  res.render('listamateria', {
    title: 'Materias Primas',
    materias: materias,
    quantidade: quantidade
  });
});
//edição das materias primas
router.get('/materiaprima/editar', function(req, res, next){
  var materia = MateriaPrima.buscarPorId(req.query.id);
  var materias = MateriaPrima.dados;
  res.render('materiaeditar', {
    title: 'Materias Primas',
    materias: materias,
    materia: materia
  })
})

router.get('/materiaprima/excluir', function(req, res, next){
  MateriaPrima.excluir(req.query.id);
  console.log(req.query.id);
  res.redirect('/materiaprima/listamaterias');
});

// -------------- Rotas Produto ---------------

router.get('/materiaprima', function(req, res, next){
  res.render('materiaprima', {
    title: 'Materia Prima',
  });
});

module.exports = router;