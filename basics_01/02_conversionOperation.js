let attendance = "56abc"

// console.log(typeof attendance)
// console.log(typeof(attendance))

let stringToNumber = Number(attendance)

// console.log(typeof stringToNumber)
// console.log(stringToNumber) //NaN because it contains alphabets,0 in case of null,NaN is case of undefined,NaN in case of string 

// console.log(typeof NaN) //NaN itself a type of number


let tutor = undefined
let tutorAvailability = Boolean(tutor)

// console.log(typeof tutorAvailability)
// console.log(tutorAvailability)

//1 => true,0 => false
//"" => false, string => true
//null => false, undefined => false


// --------------operations--------------

let number = 21
let negNumber = -number
// console.log(typeof negNumber)
// console.log(negNumber)

let str1 = "namste"
let str2 = " friends"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 3)
// console.log(1 + 2 + "3")

//precendence oprator
let gameCounter = 50
gameCounter++
console.log(gameCounter)
++gameCounter
console.log(gameCounter)

// let higestScore = ++gameCounter //value assign then after incremnet done
// console.log(`higestScore = ${higestScore} | gamecounter = ${gameCounter}`)

let higestScore = gameCounter++ //value assign first then incremnet done
console.log(`higestScore = ${higestScore} | gamecounter = ${gameCounter}`)
