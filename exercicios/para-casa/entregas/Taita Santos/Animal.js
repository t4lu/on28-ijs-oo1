class Animal {
    #nome;
    raca;
    idade;
    qtdPata;
    cor;

    constructor(nome, raca, idade, qtdPata, cor){
        this.#nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.qtdPata = qtdPata;
        this.cor = cor;
    }
    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    comer(){
        console.log(`${this.#nome} está comendo`);
    }

    som(){
        console.log(`${this.#nome} está emitindo som.`);
    }

    dormir(){
        console.log(`${this.#nome} está dormindo.`);
    }

    cagar(){
        console.log(`${this.#nome} está cagando.`)
    }
}

const animal1 = new Animal("tutu", "gato doméstico", 4, 4, "branco e marrom");

console.log(animal1);
animal1.comer();