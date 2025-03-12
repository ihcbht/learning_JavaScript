function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("U");
}

sayMyName();
// A
// S
// H
// U

function addTwoNum(number1,number2){
    console.log(number1 + number2);
}

addTwoNum() // NaN
addTwoNum(4,5) // 9
addTwoNum(3,null) //3
addTwoNum("3","5") //35
addTwoNum(3,"10") //310

const result = addTwoNum(4.6)
console.log(result); // undefined (not returned)

function addTwoNumm(number1,number2){
    return number1+number2
}
const ress = addTwoNumm(4,6)
console.log(ress); //10

function loginUserMessage(username){
    return `${username} Just Logged in`
}
console.log(loginUserMessage("Ashutosh")) //Ashutosh Just Logged in
console.log(loginUserMessage())  //undefined Just Logged in

function loginUserMessagee(username){
    if(username === undefined){ //if(!username)
        console.log("Pkease Enter a UserName!")
        return
    }
    return `${username} Just Logged in`
}
console.log(loginUserMessagee("Ashutosh")) 
console.log(loginUserMessagee())  
// Ashutosh Just Logged in
// Pkease Enter a UserName!
// undefined

//undefined: false value

function loginUserMessageee(username="Rohit"){
    if(username === undefined){ //if(!username)
        console.log("Pkease Enter a UserName!")
        return
    }
    return `${username} Just Logged in`
}
console.log(loginUserMessageee("Ashutosh")) 
console.log(loginUserMessageee())  
// Ashutosh Just Logged in
// Rohit Just Logged in


//shopping Cart
function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(10)); //10
console.log(calculateCartPrice(10,20,30)); //10

//Rest Operator
function calculateCartPricee(...num1){ //Rest Operator
    return num1;
}

console.log(calculateCartPricee(10)); //[ 10 ]
console.log(calculateCartPricee(10,20,30)); //[ 10, 20, 30 ]

function calculateCartPriceee(val1,val2,...num1){ //val1=10, val2=20 num1: 300,400
    return num1;
}

console.log(calculateCartPriceee(10,20,300,400)); //[ 300, 400 ]



const user ={
    username: "ashu",
    price: 500
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) // Username is ashu and price is 500
handleObject({
    username:"Rohit",
    price: 600
}) // Username is Rohit and price is 600



const myNewArray =[100,200,330,400]
function return2ndValue(getarray){
    return getarray[1]
}
console.log(return2ndValue(myNewArray)); //200
