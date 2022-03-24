const conexao = require('../infra/data-base/conexao');
const repositorio = require('../repositorio/produtos');


class Produtos{
    adicionaProduto(produto){
        return repositorio.adicionaProduto(produtoCadastrado).then((resultados)=>{
            return {...produto}
        })
    }

    listaProdutos(){
        return repositorio.listaProdutos()
    }

    buscaCod(produto){
        return repositorio.buscaCod(produtoCadastrado).then((resultados) =>{
            return{...produto, resultados}
        })
    }

    alteraProduto(produto){
        return repositorio.alteraProduto(produtoAlterado).then((resultados)=>{
            return{...produto, resultados}
        })
    }

    deletaProdutos(cod, res){
        return repositorio.deletaProdutos(produtoDeletado).then((resultados)=>{
            return{...cod, res}
        })
    }
}