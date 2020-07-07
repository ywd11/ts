/* 接口(interface) */

// 简单示例
interface Person {
    name: string,
    age: number
}
let Tom: Person = { // 赋值的时候，变量的形状必须和接口的形状保持一致
    name: 'Tom',
    age: 213
}


// 可选属性
interface Person2 {
    name: string,
    age?: number
}
let Tom2: Person2 = { // age 为可选
    name: 'Tom'
}


// 任意属性
