//^ GENERICS

const names: Array<string> = ['Max', 'Manuel'];

names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' ');
});

//^ CONSTRAINTS -- extends

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: 'Max' }, { age: 30 }));
const mergedObj = merge({ name: 'Max' }, { age: 30 });
const mergedObj2 = merge({ name: 'Max' }, { age: 30 });

console.log(mergedObj.age); //! senza generics non conosce l'oggetto

function countAndDescribe<T extends { length: number }>(element: T) {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['sports', 'cookies']));
// console.log(countAndDescribe(30));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key]; //^ senza constraint non garantisce che la chiave esista nell'oggetto
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));

//^ GENERIC CLASSES
//_ meglio degli unions perchè gli unions dichiarano array con un mix di string number e boolean. con generic dichiaro un array o di uno o dell'altro
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10);
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Manu');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<Object>();
// objStorage.addItem({ name: 'Max' });
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem({ name: 'Max' }); //^ rimuove l'ultimo elemento perchè restituisce -1;
// console.log(objStorage.getItems());

//^ GENERIC UTILITY TYPES

//^ Partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//^ Readonly

const names2: Readonly<string[]> = ['Max', 'Anna'];
// names2.push('Manu');
console.log(names2);
