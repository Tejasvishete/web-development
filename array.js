// // let arr=[1,2,3,4,5,6]
// // console.log(arr)

// // arr.push(10)
// // console.log("after push:",arr)
// // arr.pop(3)
// // console.log("after pop:",arr)
// // arr.unshift(0)
// // console.log("after unshift:",arr)
// //  arr.shift(0)
// //  console.log("after shift:",arr)


// //  console.log("has 10?", arr.includes(10))


// //  console.log("index of 5",arr.indexOf(5))

// //  part=arr.slice(1,3)
// //  console.log("after slice:",part)

// //  part2=arr.splice(4,5,6)
// // console.log("after splice:",part2)

// // // 


// // arr.reverse()
// // console.log("after reverse:",arr)


// // firsthigh=arr.find(m=>m>5);
// // console.log("firsthigh>5:",firsthigh)
// // arr.sort((a,b)=>a-b)
// // console.log("")

// const prompt=require("prompt-sync")();

// let cart=["apple","banana","orange"];
// console.log("my cart",cart);

// console.log("\n1. Add an item");
// console.log("2. Remove item");
// console.log("3. Exit");
// let choice = prompt("choose an option:");

// switch(choice){
//                                         case"1":
//                                         let newitem=prompt("entervitem to add:");
//                                         cart.push(newitem);
//                                         console.log("updated cart:",cart);
//                                         break;

//                                         case"2":
//                                         let removeitem=prompt("entervitem to remove:");
//                                         let index=cart.indexOf(removeitem);
//                                         if(index !== -1){
//                                                                                 cart.splice(index,1);
//                                                                                 console.log("updated cart:",cart);

//                                         }else{
//                                                                                 console.log("item not found in cart:",cart);
//                                         }
                                        
                                        
//                                         break;
//                                         default:
//                                                                                 console.log("exiting...");

// }

// // cart.push("Mango");
// // console.log("after adding mango:",cart);


// // cart.pop();
// // console.log("after removing last items:",cart);







// let fruits=["apple","banana","orange"];
// console.log("fruits:",fruits);

// // add "grape" to the end of the array
// fruits.push("grape");
// console.log("after adding :",fruits);
// // remove the last item from the array
// fruits.pop();
// console.log("after removing last item:",fruits);

// // add"kiwi" to the begining of the array
// fruits.shift("kiwi");
// console.log("after adding kiwi:",fruits);
// // remove the first item from the array
// fruits.unshift();
// console.log("after removing first item:",fruits);
// // check if "banana"is in the array
// console.log("is banana in the array?",fruits.includes("banana"));
// // for each
// let num=[1,2,3,4,5];
// console.log("numbers:",num);
// num.forEach ((n)=>{
//                                         console.log(n);
// })

// // map
// let squared=num.map(n=>n*n);
// console.log("squared numbers:",squared);

// // filter
// let even=num.filter(n=>n%2===0);
// console.log("even numbers:",even);
// // find
// let firstEven=num.find(n=>n%2===0);
// console.log("first even number:",firstEven);

// // splice()
// let removed=num.splice(2,1);
// console.log("after splice:",num);
// console.log("removed item:",removed);
// // splice format
// // array.splice(start,deleteCount,item1,item2,...)

// // slice()
// let part=num.slice(1,4);
// console.log("part of array:",part)


// // format for slice()
// // array.slice(start,end)end is exclusive

// // sort
// let sorted=num.sort((a,b)=>a-b);
// console.log("sorted numbers:",sorted);
// // reduce
// let sum=num.reduce((acc,n)=>acc+n,0);
// console.log("sum of numbers:",sum);
// // example:calculate the total price of items in a shopping cart
// // let cart=[200,300,400];
// // let total=0;
// // total=cart.reduce((acc,price)=>acc+price,0);
// // console.log("total price:",total);


// let salary=[50000,60000,70000,80000,30000,40000,50000,90000,60000,80000];
// let total=0;
// total=salary.reduce((acc,sal)=>acc+sal,0);
// console.log("total salary:",total);



// function login(password){
//                                          if ( password==="password"){
//                                                                                console.log("login successful");
//                                          }
//                                          else{
//                                                                                  console.log("login failed") 
                                                                                
//                                                                                 if(i===3){
//                                                                                                                         console.log("too many failed attempts.account locked for 10 seconds...");
//                                                                                                                         let seconds=10;
//                                                                                                                         let interval=setInterval(()=>{
//                                                                                                                                                                 console.log(seconds--);

//                                                                                 }}
// }


const prompt=require("prompt-sync")();
for(let i=0;i<3;i++){
                                        let password=prompt("enter password:");
                                        if(password==="password"){
                                                                                console.log("login successful");
                                                                                break;

                                        }
                                        else{
                                                                                console.log("login failed");
                                                                                if(i===2){
                                                                                                                        console.log("too many failed attempts.account locked for 10 seconds...");
                                                                                                                        let seconds=10;
                                                                                                                        let interval=setInterval(()=>{
                                                                                                                                                                console.log(seconds--);
                                                                                                                                                                if(seconds<0){
                                                                                                                                                                                                        clearInterval(interval);
                                                                                                                                                                                                        console.log("you can try login again now.");
                                                                                                                                                                }

                                                                                                                                                                },1000);
                                                                                                                        }else{
                                                                                                                                                                console.log("you have",2-i,"attempts left.");
                                                                                                                        }
                                                                                }
                                        }








































//  example: create  if  wrong password return three time then set timer for 10min
// let attempts=0;
// const maxAttempts=3;
// const lockoutTime=10*60*1000; // 10 minutes in milliseconds
// let lockoutEndTime=0;

// function loginWithLockout(password){
//                                          if (lockoutEndTime > Date.now()) {
//                                                                                console.log("login is locked out. Please try again later.");
//                                                                                return;
//                                          }
//                                          if ( password==="password"){
//                                                                                console.log("login successful");
//                                                                                attempts=0; // reset attempts on successful login
//                                          }
//                                          else{
//                                                                                  attempts++;
//                                                                                  console.log("login failed. Attempts left:", maxAttempts - attempts);
//                                                                                  if (attempts >= maxAttempts) {
//                                                                                        lockoutEndTime = Date.now() + lockoutTime;
//                                                                                        console.log("Too many failed attempts. Account locked for 10 minutes.");
//                                                                                  }
//                                          }
// }







