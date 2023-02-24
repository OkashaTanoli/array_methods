let arr = [4, 3, 2, 34, 2, 4, 2]


/*
 This method maps on each element in array and does not return the new array.
 We have to do whatever we want inside the callback function.
 If we try to return anything from callback function it will return undefined

*/

const result = arr.forEach((val, index) => {
    console.log(val * 5)
    // return val*5
})

console.log(result) //undefined