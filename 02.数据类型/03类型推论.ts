/* 类型推论 */
//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

let myFavoriteNumber = 'seven' // 等价于 let myFavoriteNumber: string = 'seven'
// myFavoriteNumber = 7  // 错误

