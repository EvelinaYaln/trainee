// task 1

const counter = {
    count: 0,
    showCount() {
        console.log(this.count)
    }
}

const counter2 = new Object();
counter2.count = 0;
counter2.showCount = function() {
    console.log(this.count)
}

const counter3 = Object.create({},{count: 
    {value:0,writable:true,enumerable:true,configurable:true},
    showCount: 
    {value:function(){console.log(this.count)},writable:true,enumerable:true,configurable:true}
})

const counter4 = Object.assign({},counter);

//task 2

const copy1 = {};
for (let key in counter) {
    copy1[key] = counter[key];
}

const copy2 = Object.assign(counter);

const copy3 = {...counter};

const copy4 = JSON.parse(JSON.stringify(counter));

const copy5 = structuredClone(counter);

//task 3

//FD
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    }
}

//FE
const makeCounter1 = function() {
    let count = 0;
    return function() {
        return count++
    }
};

//NFE
const makeCounter2 = function createCounter() {
    let count = 0;
    return function() {
        return count++
    }
};

//Arrow function
const makeCounter3 = () => {
    let count = 0;
    return () =>  count++
};


//IIFE
(function makeCounter() {
    let count = 0;
    return function() {
        return count++
    }
})()

//new Function
let count = 0;
let makeCounter5 = new Function('count','return ++count')
console.log(makeCounter5(count))

//task 4

const obj1 = { 
    here: { 
        is: "on", 
        other: "2"
    }, 
    object: "Z"
};
    
const obj2 = { 
    here: { 
        is: "on", 
        other: "3"
    }, 
    object: "Z"
};
  
const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) {
      return true;
    }
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let i = 0; i < keys1.length; i += 1) {
      const key = keys1[i];
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  };
console.log(deepEqual(obj1,obj2));

//task 5 

function reverseStr(str) {
    return str.split('').reverse().join('')
}

console.log(reverseStr('Evelina'))

//или можно так еще

function reverseStrModified(str) {
    return str.split(' ').reverse().join(' ');
}

console.log(reverseStrModified('I love JS'));


