/* START CODE UNDER THIS LINE */
//////Q1
let ymfavoritfood= "mansaf";
const favoriteFood = function (){
    return ymfavoritfood
}
//////Q2


 let ymfavoritfood2="pitzza";
 const updateFavoriteFood = function (newValue){
 
   ymfavoritfood:"newValue";
    return ymfavoritfood2;
 }
 ////Q3
let s1= 4;
//  const createCounter_v01 = function (s2){
//     let  counter =0;
// s1=s2;
// return s1
//  }
//  console.log("a",s1);
 
//  s1= 5;
// console.log("d", s1);
// ////////Q4

// const createCounter_v02 = function (start){

// }

const createCounter_v01 = function () {
    let counter = 0;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
      return (counter += 1);
    };
  };

  const count1 = createCounter_v01()
  console.log(count1());
  


// instead of counting from zero it will take count from the value provided
const createCounter_v02 = function (start) {
    return function () {
        return (start += 1);
      };
};
const count2 = createCounter_v02(100)
  console.log(count2());


  ///////practice////////
  /////Q1
  let age = 25;
if (true) {
  age = 30;
}
age; // ?30
///the variable can be accessed outside the Block scope since it was defined using 
const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; // ? john
///// these variables are only accessible inside the code Block

//////Q2

let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

func1(); // ?15
// لانه في نطاق الlocal scope =======

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); // ?10
// لانه في نطاق الglopal scope

///////////////////Q3

 
let current = 5;

const countDown = function () {
   if (current > 0) {
     return current--;
   } else {
     return "count down is over";
   }
 };

 console.log(countDown());  
 console.log(countDown());  
 console.log(countDown());  
 console.log(countDown());  
 console.log(countDown());  
 console.log(countDown());  
///////Q4
let counter = 5;

const countup = function () {
  if (counter > 0) {
    return counter = counter + 1 ;
  } else {
    return "count down is over";
  }
};

console.log(countup());  
console.log(countup());  
console.log(countup());  
console.log(countup());  
console.log(countup());  
console.log(countup());

////////////Q5


const resetCount = function (start){
  counter = start;
  
  return "the count has been reset";
}

console.log(resetCount(1));
console.log(countup());  