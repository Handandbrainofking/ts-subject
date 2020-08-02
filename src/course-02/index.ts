//函数定义方式
function hello() {}
const hello1 = function() {};
const hello2 = () => {};

function add(first: number, second: number): number {
	return first + second;
}

const totalCalc = add(1, 3);

function sayHello(): void {
	console.log('hello');
	// return 'hello';//void 没有返回值
}

sayHello();

function errorEmitter(): never {
	console.log(123);
	// throw Error('error');
	while (true) {}
}

function add2({ first, second }: { first: number; second: number }): number {
	return first + second;
}

const totalCalc2 = add2({ first: 1, second: 2 });

let count2: number;
count2 = 222;

//对象类型，{}, Class, funciton , []

const func = (str: string): number => {
	return parseInt(str, 10);
};

const func2: (str: string) => number = str => {
	return parseInt(str, 10);
};

const date = new Date();

//其他的case
interface Person {
	name: string;
}
const rawData = '{"name":"zoew"}';
const newData: Person = JSON.parse(rawData);

//联合类型
let temp: number | string = 123;
temp = '456';
