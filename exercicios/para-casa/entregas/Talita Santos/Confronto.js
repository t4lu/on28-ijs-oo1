export class Confronto {
    lutar(superHeroi, vilao) {
        let poderDoHeroi = superHeroi.poderTotal();
        let poderDoVilao = vilao.poderTotal();

        if (poderDoHeroi > poderDoVilao) {
            console.log(1);
        } else {
            console.log(2);
        }
        if (poderDoHeroi === poderDoVilao) {
            console.log(0);
        }
    }
}