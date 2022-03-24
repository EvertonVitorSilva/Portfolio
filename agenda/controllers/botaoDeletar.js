export const deletarTarefa = (atualiza, id)=>{
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefa'))
    tarefasCadastradas.splice(index, 1)
    localStorage.setItem('tarefa', JSON.stringify(tarefasCadastradas))
    atualiza()
}

const botaoDeleta = (atualiza, id)=>{
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.classList = 'botao__deleta'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(atualiza, id))

    return botaoDeleta
}

export default botaoDeleta