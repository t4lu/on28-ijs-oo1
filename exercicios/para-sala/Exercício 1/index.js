class Employee {
    constructor(identificacao, nomeFuncionario, salarioFuncionario) {
      this.id = identificacao;
      this.name = nomeFuncionario;
      this.salary = salarioFuncionario;
    }
  
    raiseSalary(percent) {
      if (percent > 0) {
        this.salary += (this.salary * percent) / 100;
      }
    }
  }
  
  // Exemplo de teste
  const employee1 = new Employee(1, "João", 50000);
  
  console.log("Informações do Funcionário:");
  console.log(`ID: ${employee1.id}`);
  console.log(`Nome: ${employee1.name}`);
  console.log(`Salário Inicial: R$ ${employee1.salary}`);
  
  employee1.raiseSalary(10); // Aumento de 10%
  console.log(`Novo Salário após aumento: R$ ${employee1.salary}`);