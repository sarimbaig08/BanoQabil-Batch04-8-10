
let fruits = ["mango","apple","pineapple","orange"]


// console.log(fruits[1])


for(var i=1; i<=10; i++){
    console.log("2 x", i, "=", 2*i)
}

// for(var j=0; j< fruits.length; j++){

// console.log(fruits[j])
// }


let userNames =["sarim","baig","mirza","hassan"]

userNames.push("newUser")

var flag=false

for(var j=0; j< userNames.length; j++){

if(userNames[j] == "mirza1"){
    flag=true
    console.log("Logged In", userNames[j])
}

}

if(!flag){
    console.log("Please enter correct name")
}

let opr=["+","*","/","-"]

let userOpr="p"

for(var k=0; k<opr.length; k++){
if(userOpr== opr[k]){
    console.log("Opr", opr[k])
}
}



let user = ["sarim","baig","mirza","hassan"]

localStorage.setItem("userName", JSON.stringify(user))


var userArray = localStorage.getItem("userName")

console.log(
    JSON.parse(userArray)
)

