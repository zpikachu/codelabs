var x = 10 //globle scope redeclarable
console.log(x + " var")

let y = 20; //block scope reclarable
console.log(y + " let");

const z = 30; //constant
console.log(z + " const")

var x = 40; //
console.log(x);
var state = true;
if (state == true) {
    var x = 100;
    let cc = 800;
    const ct = 900
    console.log(cc + " inside");
    console.log(ct + " inside");
    console.log(x + " inside");
}
console.log(cc + " outside"); //error
console.log(ct + " outside"); //error
console.log(x + " inside");
//what is function