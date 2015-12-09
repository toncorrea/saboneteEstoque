var MateriaPrima = function(){
  this.id;
  this.nome;
  this.preco;
  this.descricao;

  this.salvar = function(){
    indice++;
    this.id = indice
    MateriaPrima.dados.push(this);
    console.log("SALVANDO") 
    console.log(MateriaPrima.dados) 
  }

  this.alterar = function(){
    var c = MateriaPrima.buscarPorId(this.id);
    c.nome = this.nome;
    c.preco = this.preco;
    c.descricao = this.descricao;
  }
}

MateriaPrima.dados = []
indice = []

MateriaPrima.buscarPorId = function(id){
  for(i=0; i<MateriaPrima.dados.length; i++){
    var c = MateriaPrima.dados[i];
    if(id == c.id){
      return c;
    }
  }
}

MateriaPrima.excluir = function(id){
  var backup = [];
  id = parseInt(id);
  for(i=0; i<MateriaPrima.dados.length; i++){
    if(id != MateriaPrima.dados[i].id){
      backup.push(MateriaPrima.dados[i]);
    }
  }
  MateriaPrima.dados = backup;
}

MateriaPrima.quantidade = function(){
  var c = MateriaPrima.dados.length
  return c;
}

module.exports = MateriaPrima;