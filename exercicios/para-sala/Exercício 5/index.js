class Employee {
  #id;
  #firstName;
  #lastName;
  #salary;

  constructor(identificacao, primeiroNomeFuncionario, ultimoNomeFuncionario, salarioFuncionario) {
    this.#id = identificacao;
    this.#firstName = primeiroNomeFuncionario;
    this.#lastName = ultimoNomeFuncionario;
    this.#salary = salarioFuncionario;
  }

  get id() {
    return this.#id;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get name() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    this.#salary = newSalary;
  }

  get annualSalary() {
    return this.#salary * 12;
  }

  raiseSalary(percent) {
    if (percent > 0) {
      this.salary += (this.salary * percent) / 100;
    }
  }

  employeeToString() {
    return `id: ${this.#id}, name: ${this.name}, salary: ${this.#salary}`;
  }
}

const employee1 = new Employee(1, "João", "Santos", 50000);
employee1.salary = 60000;
employee1.salary;
console.log(employee1.employeeToString());

