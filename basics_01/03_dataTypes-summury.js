// js is dynamically types language

// datatypes:

// 1. Primitive

// 7 types: Number, String, Boolean, Null, Undefined, Symbol, BigInt

let oneCheck = Symbol(101)
console.log(typeof oneCheck)
let secondCheck = null
console.log(typeof secondCheck)

// 2. Refrence(non-primitive)

// 3 types: Array, Objects, Functions

let firstArray = ["Ironman", "Captain-Marvel", "Hulk"]

let myFirstObj = {
    name: "sahil",
    age: "20",
    nationality: "indian"
}

let myFuc = function myFuction() {
    console.log("hello world");
}

console.log(typeof firstArray)
console.log(typeof myFirstObj)
console.log(typeof myFuc)
