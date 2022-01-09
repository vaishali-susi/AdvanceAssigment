// function leapYear(year){
// if(year%400==0 || year%100==0 || year%4==0){
//     console.log("true")
// }else{
//     console.log("false");
// }
// }

// leapYear(2024);


// function sum(a,b){
//     console.log(a+b);
// }

// sum(2,3);

//annonamous function 

// let sum=function(a,b){
//     console.log(a+b)
// }
// sum(1,2);

// let number = (number)=> number>0;
// console.log(number);


// const obj = {
//     key : " Abcd",
//     fn: function(){
//         console.log(this);
//     },
//     objfn : ()=>{
//         console.log(this);
//     }
// }
// obj.fn();
// obj.objfn();

// let obj = {
//     key : "outerkey",
//     key2 : {
//         key1 : "innerkey",
//         fn : function(){
//             console.log(this);
//         }
//     }
        
    
// }
// obj.key2.key1.fn();


// const obj_timeout = {
//     key: "ABCD",
//     fn: function() {
//         setTimeout(function() {
//             console.log(this);
//         }, 1000);
//         setTimeout(_ => {
//             console.log(this);
//         }, 1000);
//     },
// }

// obj_timeout.fn();

// const sum = (...numbers)=>{
//     let min = numbers[0];
// for(let i=0 ; i<numbers.length;i++){
//     if(min>numbers[i]){
//         min = numbers[i];
//     } 
// }
// console.log(min);
// }
// // sum(-1,2,3);
// sum(1, 2, 3, 4, 5, 6); 
// sum(-1, -5, 10);
// sum(10, 20);

// const String = "hello";
// console.log(String);

// const obj = {

// }
// console.log(obj);

// call by value 
// var num = 20;
// function sum(a){
// a=10;
// console.log(a);
// }

// sum(num);
// console.log(20);

// call by refrence
// let arr = [1,2,3,4];
// function a(b){
// console.log(b);
// b[0] = "hey";
// }

// a(arr);
// console.log(arr);

// var obj= {
//     key : "value"
// }
// function change(a){
// a.key = "refer";
// }
// change(obj);
// console.log(obj);

// let arr = [1,2,3,4];
// function change(a){
// var b = [...a];   // spread operator deep copy
// b[0] = "hey";

// }

// change(arr);
// console.log(b);
// console.log(arr);
// function f(cb){
// cb();
// }
// f(function(){
//     console.log("hello");
// });

// function fact(a){
//     if(a==0){
//         return 1;
//     }
// return a*fact(a-1);
// }

// console.log(fact(5));

// function app(n){
//     if(n>30){
//         return;
//     }
//     if(n%3==0 && n%5!=0){
//         console.log("Fizz");
        
//     }else if(n%5==0 && n%3!=0){
//         console.log("Buzz");
        
//     }else if(n%3==0 && n%5==0){
// console.log("FizzBuzz");

//     }else{
//         console.log(n);
//     }
//     app(++n);
// }

// app(0);

//Create a lock screen with a 4 digit pin code. (10 separate buttons). Similar to your phone.
// (You can decide your own pin). 
//Once unlocked, you can simply change text or something. (Reference, attached image).


// Array.prototype.hello = _ => {
//     console.log('Hello Geeks');
// }

// const obj = {};
// console.log(obj);

// const arr = [];
// arr.push(12345);
// console.log(arr);


// const arr2 = [];
// arr2.hello();

///the no is prime or not 



Array.prototype.prime = function(a,b,c){
    console.log(a);
   for(let i=0;i<this.length;i++){
        b = true;
       for(let j=2;j<this[i];j++){
if(this[i]%j==0){
    b = false;
    console.log(this[i] + " is a non prime number");
     break;
}
       }
       if(b == true)
       console.log(this[i] + " is a prime number");
   }
}

const arr3 = [3, 7, 12];
 arr3.prime(...arr3);
