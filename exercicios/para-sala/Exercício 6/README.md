# Exercício de Sala 🏫  

- Conteúdo teórico: 
[Abstração](../../../material/5.%20Introdução%20à%20Orientação%20a%20Objeto%20I/5.3%20-%20Abstração.md) e [Encapsulamento](../../../material/5.%20Introdução%20à%20Orientação%20a%20Objeto%20I/5.4%20-%20Encapsulamento.md)

## Exercício 6

Crie uma classe chamada `Tarefa` que tenha os seguintes atributos:
- `titulo` (recebido por instanciação)
- `descricao` (recebido por instanciação)
- `concluida` (inicializada com `false`)

Crie uma classe chamada `ToDoList` que tenha os seguintes atributos e métodos:

Atributos:
- `tarefas` (um array para armazenar as tarefas, deve ser privado)

Métodos:
- `adicionarTarefa(titulo, descricao)` (adiciona uma nova tarefa à lista)
- `listarTarefas()` (lista todas as tarefas)
- `marcarTarefaConcluida(titulo)` (marca uma tarefa como concluída)
- `removerTarefa(titulo)` (remove uma tarefa da lista)

Utilize encapsulamento para garantir que as tarefas sejam manipuladas apenas pelos métodos e não diretamente.
