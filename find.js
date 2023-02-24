/*
  Find method also maps on each element in the array and take a condition in return.
  It is same like filter method but it returns only first value that returns true ( It doesn't return the array 
  like filter but retuns only single value )
  For example in the following array there are two 8 and we are looking for value 8. When find method will find
  the first 8 it will return that and will not move to the next value
*/


let arr = [4, 3, 8, 34, 20, 4, 8]

const result = arr.find((val)=>{
    return val === 8
})

console.log(result)

