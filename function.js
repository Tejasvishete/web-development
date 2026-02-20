// function add(a , b){
//                                         console.log(a+b);
// }
// add(10,20);
// add(100,200);
// add(1.5,2.5);
// add("hello","world");
// add("10","20");
// add("10",20);
// add(10,"20");

// const prompt=require("prompt-sync")();
// // let a=prompt("enter a number")


// function square (n){
//                                         console.log(n*n);

// }
// a=parseInt(a)
// square(n);








// function isprime(a){
//                                         if (a<=1)
//                                                                                 return false;
//                                         for (let i=2;i<=Math.sqrt(a);i++){
//                                                                                 if(a%i===0)
//                                                                                                                         return false;

//                                         }
//                                                                                 return true;
// }

// isprime(n) ? console.log(n, "is a prime number:")









// const greet=fuction(name){
//                                         console.log("hello",name);

// }
// greet("alice");






// const multiply=(a,b)=>{
//                                         a*b;
// }
// console.log("multiplication is:",multiply(10,20));








// function welcome(name="guest"){
//                                         console.log("welcome",name);
// }
// welcome();
// welcome("bob");

// function login(username,password){
//                                         if (username=="admin" && password==="password"){
//                                                                                 console.log("login successful");
//                                         }
//                                         else{
//                                                                                 console.log("login failed")
//                                         }
// }

// login("admin","password");
// login("user","1234");
// login("admin","1234");

// function greet (name,callback){
//                                         console.log("hello",name);
//                                         callback();
// }
// function sayBye(){
//                                         console.log("goodbye!");

// }
// greet ("alice",sayBye);

// function orderfood(item,callback){
//                                         console.log("order placed for:",item);
//                                         setTimeout(()=>{
//                                                                                 console.log(item,"is ready!");
//                                                                                 callback();
//                                         },5000);
// }
// orderfood("pizza",function(){
//                                         console.log("enjoy your meal!");
// });



function job(age){
                                        if (age<=60 && age>=18){
                                                                                console.log("Eligible");
                                        }
                                        else{
                                                                                console.log("Not Eligible")
                                        }
}


 job(age=11);
 job(age=27);
 job(age=61);


