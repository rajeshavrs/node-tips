// https://www.lifewire.com/best-javascript-es6-features-4579821

// parameters with default values
function double(x = 0) {
    console.log(`doubling ${x}`)
    return x * 2
}

// New array functions forEach, map, filter

let numbers = ['10', '20', '30', '40', '']

numbers.forEach(double)

let doubleNumbers = numbers.map(double)

console.log(doubleNumbers)

