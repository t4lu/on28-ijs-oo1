import { SuperPoder } from './SuperPoder.js';

export class Personagem {
    #nome;
    #nomeVidaReal;
    #poderes = [];

    constructor(nome, nomeVidaReal) {
        this.#nome = nome;
        this.#nomeVidaReal = nomeVidaReal;
        this.#poderes = [];
    }

    get nome() {
        return this.#nome;
    }
    get nomeVidaReal() {
        return this.#nomeVidaReal;
    }

    adicionaSuperPoder(superPoder) {
        if (superPoder instanceof SuperPoder) {
            this.#poderes.push(superPoder)
            console.log(`Poder ${superPoder.nome} adicionado à lista.`);
        } else {
            console.log(`Não foi possível adicionar o poder à personagem.`);
        }

        if (this.#poderes.length > 3) {
            console.log(`O limite de poderes (4) para esta personagem foi ultrapassado.`);
        }
    }

    poderTotal() {
        let somaDePoderes = this.#poderes.reduce(function (poderDaPersonagem, total) {
            return poderDaPersonagem + total.categoria
        }, 0);
        console.log(somaDePoderes)
    }
}

const heroi = new Personagem("Homem-Aranha", "Peter Park");
const sentidoApurado = new SuperPoder("sentido apurado", 1);
const andarEmParedes = new SuperPoder("andar em paredes", 2);
const soltarTeia = new SuperPoder("soltar teia", 3);

heroi.adicionaSuperPoder("andar em paredes", 2); // Não foi possível adicionar poder à personagem.
heroi.adicionaSuperPoder(sentidoApurado); //Poder adicionado à lista.
heroi.adicionaSuperPoder(andarEmParedes); //Poder adicionado à lista.
heroi.adicionaSuperPoder(soltarTeia); //Poder adicionado à lista.
heroi.adicionaSuperPoder(soltarTeia); //O limite de poderes (4) para esta personagem foi ultrapassado.
heroi.poderTotal()// retorna o resultado da soma


const vilao = new Personagem("Octopus", "Otto Octavius");
const velocidade = new SuperPoder("velocidade", 1);
const tentaculos = new SuperPoder("tentáculos indestrutíveis", 5);

vilao.adicionaSuperPoder("velocidade", 1); // Não foi possível adicionar poder à personagem.
vilao.adicionaSuperPoder(velocidade); //Poder adicionado à lista.
vilao.adicionaSuperPoder(tentaculos); //Poder adicionado à lista.
vilao.adicionaSuperPoder(velocidade); //Poder adicionado à lista.
vilao.adicionaSuperPoder(tentaculos); //O limite de poderes (4) para esta personagem foi ultrapassado.
vilao.poderTotal(); // retorna o resultado da soma