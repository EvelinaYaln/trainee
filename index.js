// task 1 
// Птому что массивы в js имеют динамически изменяемую длину,в отличие от других языков программирования, где длина массива фиксированная. Массивы совмещают в себе очередь и стек.

//task 2 

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);
logger.apply(obj);
const logger1 = logger.bind(obj);
logger1();

// task 3

function bind(func, context,...args){
	return function(...rest) {
		const uniqueId = Date.now().toString();
        context[uniqueId] = func;
        const result = context[uniqueId](...args.concat(rest));
        delete context[uniqueId];
        return result;
	}
}

const abc = function (a) {
	return this.l + a
}

const o = {
    l:10
}

console.log(bind(abc,o)(5))
