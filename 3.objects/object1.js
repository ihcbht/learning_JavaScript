//singleton
//object literals
//Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Ashutosh",
    "full-name": "Ashutosh Das", //we cannot access it through dot operator
    [mySym]: "mykey1",
    age: 20,
    location: "BLR",
    email: "ashu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
// ashu@gmail.com
// ashu@gmail.com

// console.log(JsUser.mySym); //mykey1
// console.log(typeof JsUser.mySym); //string not symbol
console.log(JsUser[mySym]); // mykey1
console.log(typeof JsUser.mySym); //undefined

JsUser.email = "chiku@gmail.con"
//Object.freeze(JsUser) // cannot make nay more changes
JsUser.email = "chiku@yahoo.con"
console.log(JsUser);
// {
//     name: 'Ashutosh',
//     'full-name': 'Ashutosh Das',
//     age: 20,
//     location: 'BLR',
//     email: 'chiku@gmail.con',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

JsUser.greeting  = function(){
    console.log("Hello!!");
}
JsUser.greetingtwo  = function(){
    console.log(`Hello!! ${this.name}`);
}
console.log(JsUser.greeting); 
// [Function (anonymous)]

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
// Hello!!
// undefined
// Hello!! Ashutosh
// undefined



