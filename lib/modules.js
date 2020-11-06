//https://www.sitepoint.com/understanding-module-exports-exports-node-js/

const module1 = require('./module1')

//invoke getName function
console.log(`Name is: ${module1.getName123()}`)

//get person object
console.log(module1.person)

//get dob variable
console.log(module1.dob)

const module2 = require('./module2.js')

module2.getName('Rajesh')
console.log(module2.dateOfBirth)