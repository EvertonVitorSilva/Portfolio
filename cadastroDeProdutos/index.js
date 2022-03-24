const customExpress = require('./config/customExpress');
const conexao = require('./infra/data-base/conexao');
const tabelas = require('./infra/data-base/tabelas');

conexao.connect(erro =>{
    if(erro){
        console.log(erro)
    }else{
        tabelas.init(conexao)

        const app = customExpress()
        app.listen(3000, ()=> console.log('rodando'));
    }
})