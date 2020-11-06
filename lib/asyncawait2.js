
const f1 = (t) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => { console.log(`completed timeout ${t}`) }, t)
        console.log(`value of t is ${t}`)
        resolve(t)
    })
}

const entry = async () => {
    console.log(1)
    await f1(1000)
    console.log(2)
    await f1(2000)
    console.log(3)
}

entry()