//typescript
// type annotation 类型注解,我们告诉TS变量是什么类型
// type inference 类型推断 TS 会自动的尝试分析变量的类型
//变量定义 time 19:33
let count: number;
count = 123;

console.log(count);

let countInference = 678;
function getTotal(firstNumber: number, secondNumber: number): number {
	return firstNumber + secondNumber;
}

const total = getTotal(2, 3);

const obj = { name: 'zoiew', age: 18 };
