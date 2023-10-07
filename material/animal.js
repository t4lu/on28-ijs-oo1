class Animal {
    #nome;
    raca;
    idade;
    qtdpata;
    cor;

    constructor(nome, raca, idade, qtdpata, cor) {
      this.#nome = nome;
      this.raca = raca;
      this.idade = idade;
      this.qtdpata = qtdpata;
      this.cor = cor;
    }
  
    get nome() {
      return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome
    }
  
    comer() {
      console.log(`${this.#nome} está comendo`);
    }
  
    dormir() {
      console.log(`${this.#nome} está dormindo`);
    }
  
    som() {
      console.log(`${this.#nome} está fazendo som`);
    }
  
    cagar() {
      console.log(`${this.#nome} está fazendo cocô`);
    }
  }

const animal1 = new Animal("Mococa", "gato de rua", 3, 4,"preto e branco")

console.log(animal1)
animal1.comer()
animal1.cagar()
animal1.nome()

