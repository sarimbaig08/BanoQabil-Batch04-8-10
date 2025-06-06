// alert("If Else Statements")

// var userName = "heloxyz";

// console.log(saqib)


// if keyword
// () condition 
// {} block of statement 
 

var num1 = 10
var num2 = 10
var opr = "+"

var answer;

if(opr=="+"){
 answer = num1 + num2
}
else if(opr=="-"){
 answer = num1 - num2
}
else if(opr=="*"){
 answer = num1 * num2
}
else if(opr=="/"){
 answer = num1 / num2
}
else{
alert("Worng operator!")
}


var spanEle = document.getElementById("calValue")
spanEle.innerText = answer

console.log("answer:" , spanEle)