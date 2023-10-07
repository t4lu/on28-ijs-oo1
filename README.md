<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 28 - Imersão JavaScript | Semana XX | 2023 | Professora Analu Sampaio

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Objetivo

- Introduzir o conceito de paradigma de programação;
- Entender o que são classes e objetos e qual é a diferença entre os dois conceitos.

### Resumo
O que veremos na aula de hoje?
- [Tema da Aula](#tema-da-aula)
    - [Instruções](#instruções)
    - [Objetivo](#objetivo)
    - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Recapitulando Prototype](#recapitulando-prototype)
    - [Todos os objetos tem um Prototype ](#todos-os-objetos-tem-um-prototype)
    - [Prototypal inheritance ](#prototypal-inheritance)
    - [Tudo no JavaScript é Objeto](#tudo-no-javascript-é-objeto)
  
  - [Por que ensinamos Prototype antes de POO?](#por-que-ensinamos-prototype-antes-de-poo)

  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)

# Conteúdo

## Recapitulando Prototype
```javascript
function Aluna(name, grade) {
  this.name = nome
  this.grade= grade
  this.sayName = function() {
    console.log(name)
  }
}

const aluna1= new Aluna('Camila', 'On25')
const aluna2= new Aluna('Amanda', 'On28')
aluna1.sayName() // logs 'Camila'
aluna2.sayName() // logs 'Amanda'
```

  #### Todos os objetos tem um Prototype
  ```javascript
  Object.getPrototypeOf(aluna1) === Aluna.prototype // returns true
  Object.getPrototypeOf(aluna2) === Aluna.prototype // returns true
  ```
  - Você consegue verificar o prototype de um objeto usando a função `Object.getProtypeOf()` no objeto, como `Object.getPrototypeOf(aluna1)`
  - o resultado dessa função retorna as propriedades do `.prototype` do objeto construtor

  #### Prototypal inheritance 
  O objeto herda e tem acessos metodos e propriedades do seu prototype
``` javascript
    Aluna.prototype.sayHello = function() {
      console.log("Hello, world!");
    }

    aluna1.sayHello() // logs "Hello, world!"
    aluna2.sayHello() // logs "Hello, world!"
```

  ##### Herança
  ```javascript
  function Pessoa(name) {
  this.name = name
}

Pessoa.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`)
}
```
```javascript
function Aluna(name, grade) {
  this.name = name
  this.grade = grade
}

Aluna.prototype.getGrade = function() {
  console.log(`My grade is '${this.grade}'`)
}

```
```javascript
aluna1.sayName() //error
Object.getPrototypeOf(Aluna.prototype) // returns Object.prototype

// Now make `Aluna` objects inherit from `Pessoa`
Object.setPrototypeOf(Aluna.prototype, Pessoa.prototype)
Object.getPrototypeOf(Aluna.prototype) // returns Pessoa.prototype

const aluna1= new Aluna('Camila', 'On25')
const aluna2= new Aluna('Amanda', 'On28')

aluna1.sayName() // Hello, I'm Camila!
aluna2.sayName() // Hello, I'm also steve!

aluna1.getGrade() // My grade is 'On25'
aluna2.getGrade() // My grade is 'On28'
```
  #####  Class
  Apresentado no ES6, não é o mesmo que as classes em Orientação à Objetos, nem o que você pode encontrar no Java ou Ruby, por exemplo. Muito a colocam como uma `Syntatic Sugar` (uma forma mais fácil de escrever algo sem nenhum acréscimo de função) dos construtores baseados em prototype. Fazendo basicamente o mesmo que os construtores e prototype que foram visto na semana passada.

  #### Tudo no JavaScript é Objeto
  > Todo  `prototype` herda do `Object.prototype`
  > O Objeto de `Object.getPrototypeOf()` dever ser somente um unico `prototype`
  #####  Object
  #####  String
  ##### Number
  ##### Array

## Por que ensinamos Prototype antes de POO?
Prototype é uma característica dos Objetos na linguagem JavaScript. Apesar de apresentar comportamentos de herança e em seu uso aparecerem palavras reservadas como `class`, o Prototype não faz parte do paradigma de programação orientada à objetos por si só, ele é parte da arquitetura core do JavaScript, sendo assim uma característica dos Objetos na linguagem.

Ele fica exatamente entre o que é Objeto para o JavaScript e a OOP em si, por isso é uma boa forma de introduzir os conceitos mesmo antes que você saiba a parte teórica de Orientação à Objetos.


***
## [Paradigmas de programação](./material/5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.2%20-%20Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos.md)

## [Programação Orientada a Objetos](./material/5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.2%20-%20Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos.md)

## [Pilares de OO - Abstração](./material/5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.3%20-%20Abstra%C3%A7%C3%A3o.md)

## [Pilares de OO - Encapsulamento](./material/5.%20Introdução%20à%20Orientação%20a%20Objeto%20I/5.4%20-%20Encapsulamento.md)

### Exercícios

- [Exercício para sala](./Exerc%C3%ADcios/Para%20sala/)
- [Exercício para casa](./Exerc%C3%ADcios/Para%20casa/)

### Material da aula

- [Material](./material/5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I/)

### Links Úteis
- [Javascript.info - Array methods](https://javascript.info/array-methods)
- [Mozilla - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Contatos da prô

- [Instagram](https://www.instagram.com/analu.io/)
- [LinkedIn](https://www.linkedin.com/in/sampaioaanaluiza/)
- [Github](https://github.com/analuizasampaio)

<p align="center">
  Desenvolvido com &#128156 por analu.io
</p>

