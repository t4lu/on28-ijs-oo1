class Income {
    balance;
    interestRate;

    constructor(initialBalance, initialInterestRate) {
          this.balance = initialBalance;
          this.interestRate = initialInterestRate;
    }

    pritnBalance() {
          console.log(`O saldo atual é de R$ ${this.balance}`);
    }
    calculateIncome() {
        const income = this.balance * this.interestRate
        this.balance += income
        console.log(`O saldo atual é de R$ ${this.balance}. Sendo R$ ${income},00 de rendimento`);
    }
}
    
    const income1 = new Income(1000, 0.05);
    income1.pritnBalance();
    income1.calculateIncome();