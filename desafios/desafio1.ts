// Como podemos rodar isso em um arquivo .ts sem causar erros? 
interface Employee {
  code?: number,
  name?: string
}

let employee: Employee = {};
employee.code = 10;
employee.name = "John";