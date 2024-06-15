//=======================================================================================================================
//day 1
// This keyword -"this keyword refer to an object that is executing the current piece of code"

const student ={
    name:"kishan",
    age:20,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        console.log(this);  
        let avg=(this.eng+ this.math+this.phy)/3;   
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
student.getAvg();
//when we call stduent.getAvg(); directly it gives us an error but if we use this.eng ,this.math,this.phy in
//the place of eng,math,phy we got average answer


//=======================================================================================================================
//day 2
// Try and Catch 
// The try statements allows you to define a block of code to be  tested for errors while it is being executed.

//The catch statement allows you to define a block of code to be executed, if an error occues in the try block.

console.log("hello");
console.log("hello");
//console.log(a);
console.log("hello");
console.log("hello");
console.log("hello");



console.log("hello");
console.log("hello");
let a=50;                //but if we define the  value of a so try and catch are not in used 
try{
    console.log(a);
}
catch{
    console.log("caught an error.. a is not define")
}
console.log("hello");
console.log("hello");
console.log("hello"); 




//=======================================================================================================================
//day 3
//Miscellaneous topics

// arrow function
//example 
// const func=(arg1,arg2) =>{ function definition}
const sum=(a,b) =>{
    console.log(a+b);
   }
sum(3,4);
   const cube=(n) =>{
    return n*n*n;
   }
   console.log(cube(3));

   const power=(a,b)=>{
    return a**b;
   }
   console.log(power(3,3));

   const hello=()=>{
    console.log("hello world");
   }
   hello();


//=======================================================================================================================
//day 4
//  arrow function(implicit return )

const sum1=(a,b)=> a+b;
const mul1=(a,b)=>a*b;

//=======================================================================================================================
//day 5
// set timeout
//set Timeout(function,timeout)

console.log("hey there");
setTimeout( () =>{
    console.log("Apna  college");
},5000);
console.log("welcome to");


//=======================================================================================================================
//day 6
// set interval
//set interval(function,timeout)

console.log("hey there");
 id1=setInterval( () =>{
    console.log("Apna  college");
},2000);
console.log(id1);
//for stopinng the interval use clearInterval(id1);

//=======================================================================================================================
//day 7
// practice question
//write an arrow function that return the squares of the number n;
const sqaure=(n)=> n*n;
console.log(sqaure(4));

//write a function that prints "hello world" 5times at interval pf 2s each

let id=setInterval=(()=>{
    console.log("hello world");
},2000)
setTimeout(()=>{
    clearInterval(id);
},10000);
