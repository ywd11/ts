/* 联合类型 */
let mytype: (string | number) = '2'
mytype = 1
// mytype = true // 错误

// 联合类型推论(根据值推论)
let myType2: (string | number)
mytype = 'sdadas'
console.log(mytype.length)
mytype = 2
// console.log(mytype.length) // 错误
