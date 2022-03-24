import { carregaTarefa } from "../carregaTarefa.js";
import botaoDeleta from "./botaoDeletar.js";
export const criaTarefas = (evento)=>{
    evento.preventDefault()
    const tarefa = JSON.parse(localStorage.getItem('tarefa'))||[]
    const input = document.querySelector('#input_tarefa');
    const valor = input.value;
    const data = document.querySelector('#data');
    const horario = moment(data.value).format('DD/MM/YYYY hh:mm:ss');
    

    const dados = {
        valor,
        horario
        
    }

    const tarefasAtualizadas = [... tarefa, dados]
    
    
    localStorage.setItem("tarefa", JSON.stringify(tarefasAtualizadas));
    
    input.value = ""
    data.value = ""

    carregaTarefa()
    
    
   
}

export const Tarefa = ({valor, horario}, id)=>{
    
    const tarefas = document.createElement('li');
    
    tarefas.classList = 'tarefa';
   
    const conteudo = `${horario} - ${valor}`;
    
    tarefas.innerText = conteudo;
    
    
   
    
   
    
    
    tarefas.appendChild(botaoDeleta(carregaTarefa, id));

    

    
    return tarefas
}




