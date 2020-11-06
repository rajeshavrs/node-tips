//https://javascript.info/promise-basics

function f1() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve('f1'), 1000)
    })
}

function f2() {
    return new Promise(function(resolve, reject) {
        resolve('f2')
    })
}

async function entryfn() {
    await f1().then(console.log)
    await f2().then(console.log)
}

entryfn()