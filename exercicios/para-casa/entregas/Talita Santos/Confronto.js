export class Confronto {
    lutar(superHeroi, vilao) {
        let heroiVencedor = superHeroi.poderTotal();
        let vilaoVencedor = vilao.poderTotal();

        if (heroiVencedor > vilaoVencedor) {
            console.log(1);
        } else {
            console.log(2);
        }
        if (heroiVencedor === vilaoVencedor) {
            console.log(0);
        }
    }
}