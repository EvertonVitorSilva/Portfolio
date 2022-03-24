import {criaTarefas} from "./controllers/criaTarefas.js";
import { carregaTarefa } from "./carregaTarefa.js";

const botaoAdiciona = document.querySelector('#botao__criaTarefa');
botaoAdiciona.addEventListener('click', criaTarefas);

carregaTarefa()
