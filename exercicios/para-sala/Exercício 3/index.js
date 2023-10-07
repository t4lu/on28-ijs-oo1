class Account{
    id;
    name;
    #balance;

    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.#balance = balance
    }

    credit(amount){
        this.#balance += amount
        console.log(`O saldo é de R$ ${this.#balance} `)
    }

    debit(amount){
        this.#balance -= amount
        console.log(`O saldo é de R$ ${this.#balance} `)
    }

    transferTo(anotherAccount, amount){
        // SE a outraConta NÃO FOR um instancia de ACCOUNT
        if(!(anotherAccount instanceof Account)){
            console.log('Informe uma conta válida!')
            return;
        }

        //validando se vc tem saldo suficiente pra fazer a transferencia
        //SE saldo atual é menor que o valor de transferencia
        if(this.#balance < amount){
            console.log(`${this.name} seu saldo é insuficiente. O saldo é de R$ ${this.#balance} `)
            return;
        }

        //sucesso
        this.debit(amount)
        anotherAccount.credit(amount)
        console.log(`${this.name} transferencia para ${anotherAccount.name} no valor ${amount} realizada com sucesso. O saldo atual é de R$ ${this.#balance} `)


    }
}

const contaAmanda = new Account(1236546842, "Amanda", 10000)
console.log(contaAmanda)
contaAmanda.credit(500)
contaAmanda.debit(90)

const contaViviane = new Account(362638746351, "Viviane", 10)
contaAmanda.transferTo(contaViviane, 100)

contaViviane.transferTo(contaAmanda, 1000)

