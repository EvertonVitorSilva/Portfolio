class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.tabelaProdutos()

    }

    tabelaProdutos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Produtos (cod INT(11) AUTO_INCREMENT NOT NULL, nome VARCHAR (50) NOT NULL, preco_custo FLOAT NOT NULL, cod_barras VARCHAR(13), preco_venda FLOAT NOT NULL, PRIMARY KEY (cod))'
        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('tabela criada de produtos')
            }
        })
    }
}

module.exports = new Tabelas