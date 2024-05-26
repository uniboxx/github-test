console.log('Vite Vanilla TS');

class Department {
  // name: string;
  #employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  addEmployee(employee: string) {
    this.#employees.push(employee);
  }

  printClass() {
    console.log(this.id, this.name);
  }
}

const accounting = new Department('id1', 'Accounting');

console.log(accounting);
accounting.printClass();

// accounting.id = '3';
