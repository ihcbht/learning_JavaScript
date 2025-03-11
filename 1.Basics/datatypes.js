"use strict" //treat all js code as newer version

//alert("hello") -- using node,js not browser

// ensure code readability
console.log(3
    +3
);

//for documentation-- tc39.es, mdn

let name = "ashu"
let age = 25
let osLoggedIn = false
let state

// number : 2 to the power of 53
// bigint
// string : "",'
// boolean : true/false
// null : standalone value (not undefined)
// undefined : (no value given)
// symbol : unique


//object


console.log(typeof "ashu")
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof age);

// String, Number, Boolean, null, undefined, Symbol, BigInt (Primitive)
// (Reference) : Array, Objects, Functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null  // typeof(outsideTemp) : object
const id = Symbol('123')
const anotherId = Symbol('123')
console.log( id === anotherId) //false

const bigNumber = 123456789852n //BigInt typeof(bigNumber): undefined

const heroes = ["IronMan" , "Thor" , "Hulk"]

let myobj = {
    name: "Ashu",
    age: 23,
}

const myfunction = function(){ //typeof(myfunction) : function
    console.log("hello guys")
}