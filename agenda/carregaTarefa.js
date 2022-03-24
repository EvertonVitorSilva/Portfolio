import { Tarefa } from "./controllers/criaTarefas.js";

export const carregaTarefa = ()=>{
    const lista = document.querySelector('#lista');
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefa'))||[]
    lista.innerHTML = " "
    tarefasCadastradas.forEach(tarefa =>{
        lista.appendChild(Tarefa(tarefa))
    })
}