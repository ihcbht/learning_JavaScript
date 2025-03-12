let a = 10
const b = 20
var c = 30
console.log(a);
console.log(a);
console.log(a);
//doesnot work with block scope {..}

if(true){
    let d = 10
    const e = 20
    var f = 30
}
//console.log(d); //cannot log
//console.log(e); // cannot log
console.log(f); //30


let g=1000;
if(true){
    let g=10;
    console.log("Inner:"+g);
}
console.log(g);
// Inner:10
// 1000