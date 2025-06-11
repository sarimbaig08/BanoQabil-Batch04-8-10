

// var calSum=()=>{}





function calSum(){

var num1 = document.getElementById("num1").value
var num2 = document.getElementById("num2").value

console.log("num1",num1)
console.log("num2",num2)

var sum = +num1 + +num2

var displaySum = document.getElementById("sum")

displaySum.innerText += sum

console.log("sum:",sum)
}

// Or Operator
// if(12 > 12 || 12 < 12 || 12==12){
// alert("Condition is TRUE")
// }
// else{
//     alert("Condition is False")
// }


// And Operator
// if(12 > 12 && 12 < 12 && 12==12){
// alert("Condition is TRUE")
// }
// else{
//     alert("Condition is False")
// }

// let fruits = ["mango","apple","pineapple","orange"]

//To add or remove from last index

// fruits.push("orange")
// fruits.push("orange")
// fruits.pop()
// fruits.pop()
// fruits.pop()

//To add or remove from 0 index

// fruits.unshift("orange")
// fruits.shift()

//Slice
// console.log(fruits.slice(0,1))

//Splice

// Splice takes 3 arguments
// 1: index Number
// 2: total count of the values to be deleted
// 3:values to be added
// fruits.splice(1,0,"watermelon")


let fruits = [["mango","apple","pineapple","orange"],
             ["mango2","apple2","pineapple2","orange2"]]


console.log(fruits[1][2])