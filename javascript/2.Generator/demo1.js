function *testGenerator(){
 console.log('start')

 yield 'hellow'
 console.log(1)
 yield 'world'
 console.log(2)
 return "ending"
 console.log(3)
}
let test = testGenerator()
console.log(test)
console.log(test.next())
// console.log(test.next())
// console.log(test.next())