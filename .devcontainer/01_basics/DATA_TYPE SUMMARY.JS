//  Primitive
// 7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt

  const score = 100
  const scoreValue =100.3
   
  const isLoggedIn =false
  const outsideTemp = null
  let userEmail; --> undefined



  const id= Symbol('123')
  const anotherId= symbol('123')

  console.log(id === anotherId)



// Reference (Non primitive)



// Array, Objects,Functions


const heros =["shaktiman","naagraj","doga"];
let myObj ={
    name:"hitesh",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

fu