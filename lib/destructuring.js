
//array destructuring
let numArray = [1, 2, 3, 4]

let [i, j, ...k] = numArray

console.log(i)
console.log(j)
console.log(k)

//object destructuring

let name = {
    'firstName': 'rajesh',
    'lastName': 'atmuri',
    'middleName': 'vrs',
    'something': 'some name',
    'somethingElse': 'some other name'
}

let {firstName, lastName, middleName, ...restAll} = name

console.log(firstName)
console.log(lastName)
console.log(middleName)
console.log(restAll)

//destructuring nested objects

const user = {
    id: 369,
    name: 'rajesh',
    age: 40,
    education: {
      degree: 'masters'
    }
  }

// education.degree is available in user object
const { education: {degree} } = user
console.log(degree)