
//function within a function is possible, usecase?
function outerFunction() {

    console.log('invoked outerFunction')

    return function innerFunction1() {
        console.log('invoked innerFunction1')
    }
}

outerFunction()()

//function as an attribute of an object
let myObj = {
    'firstAttribute': 'value1',
    'secondAttribute': () => {
        console.log('function within object')
    }
}

console.log(myObj.secondAttribute())