// const process = require("node:process");

// let name = process.argv[2];
// console.log("Hello",name)


const prompt = require("prompt-sync")

// let name = prompt("enter your name:")
// console.log("hello",name);


let n=prompt("enter a number:");
n=parseInt(n);
for(let i=1; i<=n; i++){
                                        console.log(i);
}



let a;
let b;
let c=prompt("enter an operator(+,-,*,/):");
a=prompt("enter a number:");
bprompt("enter a number:");
a=parseInt(a);
b=parseInt(b);
switch(c){
 case"+":
 console.log("addition:",a+b);
 break;
 case"-":
 console.log("subtraction:",a-b);
 break;
 case"*":
 console.log("multiplication:",a*b);
 break;
 case"/":
 console.log("division:",a/b);
 break;
 default:
                                        console.log("invalid opreator:")


}
