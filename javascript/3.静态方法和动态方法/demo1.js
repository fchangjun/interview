function fun() {}
fun.static = function(params) {
    console.log('这里是静态方法')
}
let obj1 = new fun() 
console.log('fun',fun)
console.log('obj1',obj1)


obj1.static()
fun.static()
