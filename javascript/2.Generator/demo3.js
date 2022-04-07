function ajax(cb){
  setTimeout(()=>{
    cb()
  },1000)
}

function * testGenerator(){
   yield ajax(()=>{return 222})
}

let test = testGenerator() 
let result = test.next()
console.log(result)
/*
yeild 跟随异步
*/ 