//task_1
// Алгоритмы сортировок: быстрая сортировка, сортировка пузырьком, шейкерная, 
// расческой, вставками, Шелла, деревом, гномья, выбором, пирамидальная, слиянием,
// подсчетом, блочная, подразрядная, LDS, Timsort(комб. из сортировки вставками и слиянием)

//task_3 Создать объект Person несколькими способами, после создать объект Person2, 
//чтобы в нём были доступны методы объекта Person. 
//Добавить метод logInfo чтоб он был доступен всем объектам.

// создаю объекты несколькими способами с разными именами
function Person(name,age) {
    this.name  = name;
    this.age = age;
    this.sayHi = function() {
        console.log(`hi, ${this.name}`)
    }
}

const person = new Person('Vlad',23);

const person_1 = new Object();
person_1.name = 'Vlad';
person_1.age = 23;

const person_2 = Object.create({});
person_2.name = 'Vlad';
person_2.age = 23;


const person_3 = {
    name: 'Vlad',
    age: 23
}

const person_4 = {...person};

const person_5 = Object.assign({},person)

const person2 = {}
Object.setPrototypeOf(person2,person);

Object.prototype.showInfo = function() {
    return `${this.name}, ${this.age}`;
}

//task_4 Создать класс PersonThree c get и set для поля name и конструктором, 
//сделать класс наследник от класса Person

class PersonThree {
    constructor(name) {
        this._name = name;
    }
    set name(value) {
        if (value.length <3) {
            throw new Error('The name is too short')
        }
        this._name = value;
    }

    get name() {
        return this._name;
    }
}

const personFisrtInstance = new PersonThree('Alex');
personFisrtInstance.name = 'Anna';
//console.log(person_1);

class Student extends PersonThree {
    constructor(name,rate) {
        super(name);
        this.rate = rate;
    }
}

const student = new Student('Anastasia', 10);
//console.log(student);

// Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 4;
//result = [4, 9]

const firstSum = (arr, total) => {
    const  arrOfCouples = [];
    for (let i = 0; i < arr.length;i++) {
        for (let o = 1; o < arr.length;o++) {
            if (arr[i] + arr[o] === total) {
                arrOfCouples.push(arr[i], arr[o])
            }
        }
    }
    const firstCouple = arrOfCouples.slice(0,2);
    return firstCouple;
}

console.log(firstSum(arr,total));

// Сложность O(n^2)