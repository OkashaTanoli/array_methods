/*
 Filter method also maps on each element in the array and take a condition in return. If the condition is
 true it will return that element and create a new array of that elements 
*/


// Example 1

let arr = [4, 3, 2, 34, 20, 4, 2]

const result = arr.filter((val, index) => {
    return val > 10
})

console.log(result)




// Example 2

let arr2 = [
    { name: "okasha", gender: "male", age: 19 },
    { name: "iqra", gender: "female", age: 12 },
    { name: "shehzad", gender: "male", age: 17 },
    { name: "amir", gender: "male", age: 26 },
    { name: "anam", gender: "female", age: 16 },
]

const output = arr2.filter((val, index) => {
    if (val.gender === "male") {
        return val.age >= 18
    }
    else {
        return val.age >= 16
    }
})

console.log(output)
