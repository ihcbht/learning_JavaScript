const tinderUser = new Object()
console.log(tinderUser); //{}

tinderUser.id = "123654"
tinderUser.name = "Ashutosh"
tinderUser.isLoggedIn = false

console.log(tinderUser); //{ id: '123654', name: 'Ashutosh', isLoggedIn: false }

const regularUser = {
    email: "rahul@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Rahul",
            lastnmae: "Das"
        }
    }
}
console.log(regularUser);
// {
//     email: 'rahul@gmail.com',
//     fullname: { userFullName: { firstname: 'Rahul', lastnmae: 'Das' } }
//   }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3  = {obj1,obj2}
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2)
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({},obj1, obj2)
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6 = {5: "a", 6: "b"}
const obj7 = Object.assign({},obj1, obj2, obj6)
console.log(obj7); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj8 = {...obj1, ...obj2}
console.log(obj8); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]

console.log(users[1].email); //b@gmail.com

console.log(tinderUser); //{ id: '123654', name: 'Ashutosh', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123654', 'Ashutosh', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123654' ], [ 'name', 'Ashutosh' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


const course = {
    courseName: "JS",
    price: "455",
    instructor: "Ashutosh"
}

const {instructor} = course
console.log(instructor); //Ashutosh

const {instructor: teacher} = course
console.log(teacher); //Ashutosh

//example of an api
// {
//     "name": "ashutosh",
//     "courseName": "Coding",
//     "price": "1"
// }
