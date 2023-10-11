class Tarefa {
  titulo;
  descricao;
  concluida = false;

  constructor(titulo, descricao) {
    this.titulo = titulo;
    this.descricao = descricao;
  }
}

class ToDoList {
  #tarefas = [];

  adicionarTarefa(titulo, descricao) {
    const novaTarefa = new Tarefa(titulo, descricao);
    this.#tarefas.push(novaTarefa);
    console.log(`Nova tarefa adicionada: ${titulo}`)
  }

  listarTarefas() {
    this.#tarefas.forEach((tarefa) => {
      // CONDIÇÃO ? CONSEQUENCIA SE VERDADEIRO : CONSEQUENCIA SE FALSO
      const status = tarefa.concluida === true ? "concluída" : "não concluída";

      console.log(`- ${tarefa.titulo}: (${status}) ${tarefa.descricao}`);
    })
  }

  marcarTarefaConcluida(titulo) {
    const indexDaTarefa = this.#tarefas.findIndex((tarefa) => tarefa.titulo === titulo);

    if(indexDaTarefa === -1) {
      console.log(`Tarefa não encontrada: ${titulo}`);
    } else {
      this.#tarefas[indexDaTarefa].concluida = true;
      console.log(`Tarefa concluída: ${titulo}`);
    }
  }

  removerTarefa(titulo) {
    this.#tarefas = this.#tarefas.filter((tarefa) => tarefa.titulo !== titulo);
    console.log(`Tarefa removida: ${titulo}`);
  }
}

const listaDeTarefas1 = new ToDoList();
listaDeTarefas1.adicionarTarefa('Compras', 'Fazer compras no supermercado')
listaDeTarefas1.adicionarTarefa('Estudar', 'Fazer exercício de casa da reprograma')

listaDeTarefas1.marcarTarefaConcluida('Estudar');
listaDeTarefas1.removerTarefa('Treinar')

listaDeTarefas1.listarTarefas();