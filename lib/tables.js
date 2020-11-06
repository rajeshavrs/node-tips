
function multiplicationTables(table) {
    for(let i = 1; i < 13; i++) {
        console.log(`${table} X ${i} = ${table * i}`)
    }
    console.log('=====================')
}

let tables = [10, 11, 12, 13]

tables.forEach(multiplicationTables)