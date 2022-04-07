function * test(num){
  let yield1  = yield num+1
  console.log(yield1) 
  return num+yield1
}
let  g = test(5) 
console.log(g)
let result = g.next()
console.log(result) //{value:6,done : false}

console.log(g.next(result.value))
/*
yield 本身没有返回值 或者说返回值为undefined
yield 的运算结果出现在 next 函数的返回值里  
next函数 可以携带一个参数作为 上一个yield 的返回值
*/