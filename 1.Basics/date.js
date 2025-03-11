let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// 2025-03-11T09:52:16.013Z
// Tue Mar 11 2025 09:52:16 GMT+0000 (Coordinated Universal Time)
// Tue Mar 11 2025
// 3/11/2025, 9:52:16 AM
// object

let myCreatedDate = new Date(2023, 0 ,23)
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString()); //1/23/2023, 12:00:00 AM

let myCreatedDateOne = new Date("2023-01-12")
console.log(myCreatedDateOne.toDateString()); // Thu Jan 12 2023
console.log(myCreatedDateOne.toLocaleString()); // 1/12/2023, 12:00:00 AM

let myCreatedDateTwo = new Date("01-24-2025")
console.log(myCreatedDateTwo.toDateString()); // Fri Jan 24 2025
console.log(myCreatedDateTwo.toLocaleString()); // 1/24/2025, 12:00:00 AM



let myTimeStamp = Date.now()
console.log(myTimeStamp); //1741686999491
console.log(myCreatedDate.getTime()); //1674432000000
console.log(Math.floor(Date.now()/1000)); //1741687092 in seconds

let newDate = new Date()
console.log(newDate); //2025-03-11T09:59:11.389Z
console.log(newDate.getMonth()); //2
console.log(newDate.getDay()); //2


newDate.toLocaleDateString('default',{
    weekday: "long",
})
