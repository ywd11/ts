/* 布尔值 */

let isDone: boolean = true //正确
// let isDones: boolean = '223'  //错误


/*数值*/
let number1: number = -6
let nan:number = NaN
let binaryLiteral: number = 0b1010; // ES6 中的二进制表示法
let infinity1:number = -Infinity


/* 字符串 */
let str: string = 'Tom'
let num: number = 99
let sentence: string = `年龄:${num}`

/* 空值 */

function alertName(): void {
    alert('dewqeqeqeq')
}
let unusable: void = undefined;
// let unusable: void = 1; // 错误


/* Null & Undefined */
let u: undefined = undefined
let n: null = null
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num2: number = undefined
let num3: number = null
// let num4: number = void // 错误