
let a1 = [5, 4, 3, 2, 1]
let a2 = [4, 5, 6, 7]

// let common = a1.filter(x => a2.find(y => x === y))
let common = a1.filter(x => a2.includes(x))
console.log(common)

let onlya1 = a1.filter(x => !a2.includes(x))
console.log(onlya1)

let onlya2 = a2.filter(x => !a1.includes(x))
console.log(onlya2)

let union = new Set([...a1, ...a2])
console.log(union)

let sortedUnion = [...union].sort()
console.log(sortedUnion)

sortedUnion.forEach(x => {
  let ina1 = a1.includes(x)
  let ina2 = a2.includes(x)
  console.log(x, '\t', ina1, '\t', ina2)
})