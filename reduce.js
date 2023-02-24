

//This Example is used to sum all the elements of array using for loop

let arr = [4, 3, 2, 34, 20, 4, 2]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)



/* 
  Reduce method also maps on each element in the array and this method takes two arguments.
  First is the call back function and the second is the initial value,
  callback function itself takes 4 arguments but 2 of them are really important to understand.
  The first one in the value that is updated on every iteration just like sum variable in the upper example,
  The Second one is the current element of array
*/

let arr2 = [4, 3, 2, 34, 20, 4, 2]
const result = arr2.reduce((prev, curr) => {
    return prev + curr
}, 0)
console.log(result)

