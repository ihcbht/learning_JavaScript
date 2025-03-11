const name = "Ashu"
const repoCOunt = 10

console.log(name + repoCOunt + " RepoCount");

console.log(`Hello my name is ${name} and my repo count is ${repoCOunt}`)


const gameName = new String("Ashutosh_Das") // in browserlength property, keyvalue pairs()0:A, 1:s ....

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); //12
console.log(gameName.toUpperCase()); //ASHUTOSH_DAS
console.log(gameName.charAt(5)); //o
console.log(gameName.indexOf('u')); ////3

const newName= gameName.substring(0,4)
console.log(newName); //Ashu

const anotherName= gameName.slice(-8,-4)
console.log(anotherName) //tosh

const newStringOne = "   Ashutosh   "
console.log(newStringOne.trim()) //Ashutosh // removes spaces at terminators

const url = "https://ashu.com/ashutosh%20das"
console.log(url.replace('%20','-')) //https://ashu.com/ashutosh-das
console.log(url.includes('ashutosh')) // true

console.log(gameName.split('_')); //[ 'Ashutosh', 'Das' ]

