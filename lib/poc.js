
const getInitials = (anyName) => {
    let promise = new Promise(function(resolve, reject) {
        if(anyName !== '') {
            resolve(anyName.substring(0,1))
        }
        else {
            reject(new Error('Name is blank'))
        }
    })
    return promise
}

const entryFn = async () => {
    let names = ['atmuri', 'venkata', 'rama', 'satya', '', 'rajesh']

    for(let name of names) {
        await getInitials(name)
            .then(console.log)
            .catch(console.log)
    }
}

entryFn()