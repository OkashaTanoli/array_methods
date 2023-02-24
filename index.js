let obj = [
    { firstname: "okasha", lastname: "aijaz", age: 19 },
    { firstname: "ali", lastname: "khan", age: 30 },
    { firstname: "amir", lastname: "khan", age: 22 },
]


let output = obj.reduce((con, curr) => {
    if(curr.age<30){
        con.push(curr.firstname)
    }
    return con
},[])
console.log(output)