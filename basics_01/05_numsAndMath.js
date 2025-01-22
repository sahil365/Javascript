const num = 20
console.log(num)

const numTwo = new Number(200.67865) //you can run this on dev console in chrome and it return object that gives all Number method 
console.log(numTwo)
console.log(typeof numTwo)

console.log(numTwo.toString())

console.log(numTwo.toFixed(2)) //it gives fixed digit after decimal

console.log(numTwo.toPrecision(3)) //it gives precise size of value 

const numThree = new Number(100000)
console.log(numThree.toLocaleString('en-IN'))

// +++++++++ MATHS +++++++++
const numMath = 34.3
const numMath2 = 34.3
console.log(Math.abs(-34))
console.log(Math.round(4))
console.log(Math.floor(numMath))
console.log(Math.ceil(numMath))
console.log(Math.sqrt(4))
console.log(Math.max(num,3,56,432)) //retrun max value
console.log(Math.min(num,3,56,432)) //retrun min value

console.log(Math.random()) //random value between 0 and 1
console.log(Math.random()* 10) //shift decimal right shift and give value from 0 to 9
console.log((Math.random()*10) + 1) //avoid 0

const min = 20
const max = 50
console.log((Math.floor(Math.random() * (max - min + 1 ))) + min) //give random number with range of min and max
