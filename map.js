let arr = [4, 3, 2, 34, 2, 4, 2]

/*
 This method maps on each element in array and returns the new array.
 In this example we have stored that new array in a new variable named result.
 In first argument we get each element of array and the second is the index of that element.
*/

const result = arr.map((val, index) => {
    // console.log(index)
    return val * 5
})

console.log(result)