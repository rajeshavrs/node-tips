
let array1 = [1, 2, 3, 4, 5, 'a: 1']
let array2 = [4, 5, 6, 7, 'a: 1']

let set1 = new Set(array1)
let commonSet = new Set()
let set2Only = new Set()

array2.forEach( x => {
    if(set1.has(x)) {
        commonSet.add(x)
        set1.delete(x)
    }
    else {
        set2Only.add(x)
    }
})

console.log(set1)
console.log(commonSet)
console.log(set2Only)
