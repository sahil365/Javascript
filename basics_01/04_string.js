const car = "innova"
const brandName = "toyota"

console.log("The manufacturer of " + car + " is " + brandName)
console.log(`The manufacturer of ${car} is ${brandName} `) //more efficient

//2nd way to use string
const name = new String("Sahil-Hindaniya") //run this on browser console and print it
console.log(name)

//you can find all method of string by using prototye in browser console
//some string method
console.log(name.length)
console.log(name.toLowerCase())
console.log(name.charAt(2)) //find character of index

console.log(name.split("-")) //seprate strings and store in array form

console.log(name.slice(0, 5))
const namePart = name.slice(-5, -1) //first index show number of starting to print from RHS and second index show where to stop from RHS
console.log(namePart)

const newName = "       sahil        "
console.log(newName)
console.log(newName.trim()) //remove white spaces and new line tags

const url = "https://google.com/search?q=what-is-javascript"

console.log(url.replaceAll("-", "%20")) //replace keyword

console.log(url.includes("google")) //find keyword