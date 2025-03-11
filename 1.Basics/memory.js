// Stack, Heap
// Stack: primitive(copy)  Heap: Non-Primitive(reference)

let mySubName = "CD" // stored in the stack  (0th)

let anotherName = mySubName // stored in stack(1st ) only the copy is created no reference
anotherName = "DSA"

console.log(anotherName)
console.log(mySubName)


let userOne = {
    email: "ashu@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne // here a new object is created but referenced to the object's content present in the Heap memory

userTwo.email = "chiku@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)  // as i is referenced both will give chiku@gmail.com 