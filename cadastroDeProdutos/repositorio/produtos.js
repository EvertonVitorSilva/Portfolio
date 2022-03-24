const res = require("express/lib/response")
const query  = require("../infra/data-base/queries")
const { conexao } = require("../infra/data-base/tabelas")

class Produtos{
    adicionaProduto(produto){
        const sql = 'INSERT INTO Produtos SET ?;'
        return query(sql, produto)
    }

    listaProdutos(){
        const sql = "SELECT * FROM Produtos"
        return query(sql)
    }

    buscaCod(produto){
        const sql = 'SELECT * FROM Produtos WHERE cod= ?';
        return query(sql, produto)
    }

    alteraProduto(cod, valores){
        const sql = 'UPDATE Produtos SET ? WHERE cod=?'
        return query(sql, [valores, cod])
    }

    deletaProdutos(cod){
        const sql = 'DELETE FROM Produtos WHERE cod=?'
        return query(sql, cod)
    }
            

}

    


module.exports = new Produtos