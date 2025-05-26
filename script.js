
// let Joy ="today is joy's birthday";
// console.log(Joy)
// const student = {
//     name: "Joy",
//     age:21,
//     isPregnant: true,
// }
// console.log(student)
// console.log(typeof Joy)
// console.log(typeof student)
// const myArray =["Amaka","James",345,true, {name:"joy",},47,34]
// console.log(myArray);
// console.log(typeof myArray)
// console.log(myArray[4]);
// console.log("student"=="Joy")
// //  const myAge = prompt("Enter your age");
// // alert(myAge);

// let valueOne = parseInt(prompt("enter your first Number"));
// let valueTwo = parseInt(prompt("enter your second number"));
// let ans = valueOne + valueTwo;
// alert(ans);
//write a program that determines wheter a given number is positive or negative.
//  let num= -18;
//  if (num < 0 ){
// console.log("this a negative number ")
//  }
//  else
 //write a program that checks if the number is even or odd
// let num = parseInt(prompt("enter a number"));
// if (num % 2 === 0){
//     alert("This is an even number");

// }
// else{
//     alert("this is an odd number");
// }
//conditional statement
//  if(12>14){
//  console.log("12 is the highest number")
// } else{
//     console.log("12 is not the highest number")
// }

// const age=parseInt(prompt("enter your age"));
// alert(age);

// const idNumber = parseInt(prompt("enter your ID number here"));
// if(idNumber  < 0){
//     alert(`${idNumber} is a negative number`);
// } else if(idNumber > 0){
//     alert(`${idNumber} is a positive number`);
// }

//Write a program that determines the greater of two numbers


//  const greaterNumber= parseInt(prompt("enter the greater number"));
//  const lesserNumber = parseInt(prompt("enter the lesser number"));
// if(greaterNumber>lesserNumber){
//     alert(`${greaterNumber} is the greaterNumber`);
// }else if(greaterNumber===0){
//     alert(`${lesserNumber} is the greaterNumber`);
// }else if(lesserNumber===0){
//     alert(`${greaterNumber} is the greaterNumber`);
// }else{
//    alert(`${greaterNumber} and ${lesserNumber}`);
// }
//Write a program that transforms  a numerical grade to a letter grade(e.g grade 0-39 should display "f" grade 40-44 should display"E", GRADE 45-49 should display "D", grade 50-59 should display "C", grade 60-69 should display "B", grade 70-100 should display "A").
// const myGrade = parseInt(prompt("enter your grade"));
// if(myGrade <= 39){
//     alert(`${myGrade} F is a poor result`);
// }else if (myGrade >=40 && myGrade <=44){
//     alert(`${myGrade} E is a bad result`);
// }else if (myGrade >=45 && myGrade <=49){
//     alert(`${myGrade} D is a not so good `);
// }else if (myGrade >=50 && myGrade <=59){
//     alert(`${myGrade} C is a good result you can do better `);
// }else if (myGrade >=60 && myGrade <=69){
//     alert(`${myGrade} B is Excellent `);
// }else if (myGrade >=70 && myGrade <=100){
//     alert(`${myGrade} A is Brillliant Result `);
// }else{
//     alert("invalid")
// }
//write a program that calculates the BMI and categorizes it. The formula for BMI : weight / (height*height).
//UNderweight (below 18.5), Healthy weight (18.5 to 24.9), Overweight (25 to 29.9 )and obese(30 0r greater)

// let W= 12;
// let H = 63;

//methods and properties
//Array

// function callMyName(){
//     var name = "ife";
//     for(Let i = 0 )
// }

// let myStr ="Hello , Javascript World";
// console.log(myStr);
// console.log(myStr.toUpperCase());

// function multiplyNum(a,b){
//     console.log(a * b)
// }
// multiplyNum(3,5)

// function greet(name, gender){
//     console.log("Hello world", name,gender);
// }

//    greet("joy", "female");
//    greet("ife", "male");

// //function expression
//  const sumOf2Numbers = function  (num1,num2){
   
//     let result = num1 + num2;
//     console.log(result)

//    }
//    //function declaration
//    function sumOf3Numbers (num1,num2, num3){
   
//     let result = num1 + num2 + num3;
//     return result;

//    }
//    sumOf2Numbers(4,7)
//    sumOf3Numbers(4,7,5)
// function number(){
//     prompt("enter the number");
    
// }
//    number();

//    function Subtraction(num1 ,num2){
//     //let answer = num1 - num2;
//     console.log(num1-num2)
//    }
//    Subtraction(6,4);
//    Subtraction(11,5)
//create a function that takes any number from a user and checks if that number is greater than 6
  // function input (){

 //  let num = prompt("enter a number");
   // if(num > 6){
      //  alert("correct");
   // }else if(num < 6 ){
        //alert("wrong");
    //}else{
        //alert("invalid")
  //  }
    
  // }
   
//input()

// function userName(){
//     let myName = prompt("enter your name");
//    console.log(myName.length);
// }
// userName()
//create a function that takes 4 numbers and returns the highest number

//  that takes a number and checks if the number is even or odd

// function evenOddNumber(){
//     const num = prompt("enter a number");
//     if (num % 2==0){
//         console.log(`${num} is an even number`);
//     }else{
//         console.log(`${num} is an odd number`)
//     }
// };
// evenOddNumber()

//arrow function
// const evenOddNumber=()=>{
//     const num = prompt("enter a number");
//    if (num % 2==0){
//        console.log(`${num} is an even number`);
//      }else{
//         console.log(`${num} is an odd number`)
//     }
//  };
// // evenOddNumber()
// }

// let lenghtOfName = (name) =>{
//   let myName = name;
//   console.log(myName.length);
// }
// lenghtOfName("joy");

//Assignment- write an article on hoisting and scoping with examples
//global scope ,function scope, block scope
//variable hoisting
//function hoisting
// write the article on medium
//topic-Javascript hoisting and scoping for beginners

//do your assignment 

//Write a function that divides two numbers
//   const division = (a,b) => {
//   let result = a / b;
//   console.log(result);
//  }
//  division(4,2)
//  division(10,15)
// write a function to check if a number is even or odd


// const evenOdd =(num) => {
// //  const number= prompt("enter any number");
//   if(num %2 ==0 ){
//     console.log("this is an even number");
//   }else{
//     console.log("this is an odd number")
//   }
// }                                                     
// evenOdd(9);

//write a function to return the largest of 3 numbers

//  const maxNumber= (a,b,c)=>{
//  console.log(Math.max(a,b,c));
// }
//  maxNumber(6,8,12) 
//  maxNumber(45,56,1)  

//write a function to reverse a string
// const reversedName=()=>{
//  userName= prompt("enter your name")
//  console.log(userName.split("").reverse().join(""))
// }
// reversedName()
//write a function that returns the longest word in a sentence
//  for(i=1; i<=50; i++) {
//   console.log(i)
//  }
// console.log(document.getElementsByClassName("black"))
// console.log(document.getElementById("btn"));
// console.log(document.querySelector("h2").innerText)
//  let student = {
//         name:"Joy",
//         nationality: "Nigeria",
//         gender: "female"
//  }
//  console.log(student.name);
// //  console.log(object.keys(student))
// console.log(document.querySelectorAll("li")[3].textContent = "fish");
// console.log(document.querySelectorAll("li")[2].innerHTML);
// let black = document.getElementsByClassName("black");
// black.style.backgroundcolor = "hotpink"
// function showAlert(){
//   alert('i have clicked on this button');
// }

let change = document.getElementById("change")
change.addEventListener(click,opener);
  
;

// let close = () => {

 function opener(){
 let change = document.getElementById("change");
  change.innerText ="close";
   if(change===OPEN){
     change.innerText= "close";
   }else
   change.innerText ="OPEN";
 }
 



