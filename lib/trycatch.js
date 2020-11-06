function myFunction(){
    try{

        //Just throw something, can be called as anything, like ReferenceError
        throw new CelestialsError('Celestials error')
    }
    catch(e){
        console.log(e.message) //my first error
        console.log(e.name) //CelestialsError
    }
}

myFunction()

function myFunction2(){
    try {

        //Just throw something, can be called as anything, like RajeshError
        throw new RajeshError('Rajesh AVRS error')
    }
    //Not catching anything secific here
    catch {
        console.log('we didnt catch any specific error')
    }
    finally {
        console.log('gets invoked all the time')
    }
}

myFunction2()

//code in finally gets executed just before 'returning'
const myFunction3 = function() {
    try {
        return 'Returning from function3'
    } catch {
        console.log('in catch block')
    } finally {
        console.log('in finally!')
    }
}

console.log(myFunction3())

//catch is not required :)
let myFunction4 = function() {
    try {
        console.log('in try block')
    } finally {
        console.log('in finally, catch is not required')
    }
}

myFunction4()