// 01 Nombre pairs
console.log("------------------ 01-------------------")

var sum = 0

for (var i = 11; i < 47; i++) {
    if(i % 2 === 0) {
        console.log(i)
        sum = sum + i
    }
}

console.log(sum)

// 02 Nombre impairs
console.log("------------------ 02-------------------")

var sum = 0

for (var i = 109; i < 588; i++) {
    if(i % 2 !== 0) {
        console.log(i)
        sum = sum + i
    }
}
console.log(sum)

// 03 Puissance et racine carrée
console.log("------------------ 03-------------------")

var numbers = [1, 2, 3, 4, 5]
var squares = []
var roots = []

for ( var i = 0; i < numbers.length; i++) {
    squares.push(numbers[i] * numbers[i]) 
}
console.log(squares)

for (var i = 0; i < squares.length; i++) {
    roots.push(Math.sqrt(squares[i]))
}
console.log(roots)


// 04 Table de multiplication v1
console.log("------------------ 04-------------------")

var result = 0

for (var i = 0 ; i <= 10; i++) {
    result = 3 * i
    console.log(`3 x ${i} = ${result}`)
}

// 05  Table de multiplication v2
console.log("------------------ 05-------------------")

var result = 0

for (var i = 0; i <= 10; i++) {
    console.log("")
    for (var j = 0; j <= 10; j ++) {
        result = i * j
        console.log(`${j} x ${i} = ${result}`)
    }
}

// 06  Factorielle v1
console.log("------------------ 06-------------------")

var factorial = 7

for (var i = 1; i < 7; i++) {
    factorial = i * factorial
}

console.log(factorial)

// 07 Factorielle  v2
console.log("------------------ 07-------------------")

for (var i = 0; i <= 8; i++) {
    var factorial = 1
    for (var j = 1; j <= i; j ++){
        factorial = j * factorial
    }
    console.log(`${i}! = ${factorial}`)
}


// 08 Somme des carrés
console.log("------------------ 08-------------------")

for (var i = 5; i <= 10; i ++) {
    var square = i * i
    console.log(`${i} x ${i} = ${square}`)
}
// 9 Comptons
console.log("------------------ 09-------------------")

var count = 0

for (var i = 100; i <= 1000; i++) {
    if ( i % 7 === 0) {
        count ++
    }
}

console.log(count)


//--------deuxième méthode--------

var array = []

for (var i = 100; i <= 1000; i++) {
    var modulo = i % 7 === 0
    if (modulo) {
        array.push(modulo)
    }
}

console.log("2e :", array.length)


// 10 Chanceux
console.log("------------------10-------------------")

var min = 1
var max = 6
var randomSup = 0

for (var i = 0; i < 20; i++) {
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(random)

    if (random >= 5) {
        randomSup = randomSup + random
    }
}

console.log("randomSup => 5 :", randomSup)

// 11 Des boîtes
console.log("------------------11-------------------")

// première itération

// console.log(box1 + box 2) = 10
// console.log(box1) = 5
// console.log(box2) = 17
// console.log(i) = 12

// deuxième itération

// console.log(box1 + box 2) = 34
// console.log(box1) = 17
// console.log(box2) = 30
// console.log(i) = 13

// troisième itération

// console.log(i) = 14

var box1 = 12
var box2 = 5

for (var i = 12; i < 14; i++) {
    box1 = box2
    console.log("box1 + box2 :", box1 + box2)
    box2 = box1 + i
}

console.log("box1 :", box1)
console.log("box2 :" ,box2)
console.log("i :", i)

// 12 D'autres boîtes
console.log("------------------12-------------------")

var box1 = 12

for (var i = 12; i !== 0; i = i - 3) { // 12, 9, 6, 3, 0
    console.log(box1) // 12, 24, 33, 39
    box1 = box1 + i // 24, 33, 39, 42
}

console.log(box1) // 42
console.log(i) // 0

// 13 Encore d'autres boîtes 
console.log("------------------13-------------------")


