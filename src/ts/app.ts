//^ INTERSECTION TYPES

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: 'Max',
//   privileges: ['create-server'],
//   startDate: new Date(),
// };

interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

// type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//^ TYPE GUARDS

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
}

//^ MORE TYPE GUARDS

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo... ' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(3);
  }
}

useVehicle(v1);
useVehicle(v2);

//^ DISCRIMINETED UNIONS

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveanimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveanimal({ type: 'bird', flyingSpeed: 10 });

//^ TYPE CASTING

const paragraph = document.getElementById('message-output');

const inputEl1 = <HTMLInputElement>document.getElementById('user-input');
//================
const inputEl2 = document.getElementById('user-input') as HTMLInputElement;

inputEl1.value = 'Hi there!';
inputEl2.value = 'Hi there!';

//^ INDEX PROPERTIES

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'not a valid email!',
  username: 'Must start with a capital character!',
};
