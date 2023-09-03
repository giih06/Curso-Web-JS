const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) { // x = índice do array

    if (x == 5) {
        break // sai do for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // interrompe a repetição atual e vai para a próxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

// não recomendado utilizar esse tipo de código
externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}