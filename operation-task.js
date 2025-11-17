// task on page 66
//1. Create a variable and console log whether a number is odd or even
let a=Number(prompt('enter num1:'))
if(a%2==0){
    console.log('a is an even number')
}
else{
    console.log('a is an odd number')
}


// 2.Create 3 variables and console log the largest of them. Assume that the user would not
//  enter any two numbers which are the same.
let num1=Number(prompt('enter num1'))
let num2=Number(prompt('enter num2'))
let num3=Number(prompt('enter num2'))

if (num1>num2 && num1>num3){
    console.log('num 1 is the largest')
}
else if(num2>num1 && num2>num3){
    console.log('num2 is the largest')
}
else{
    console.log('num3 is the largest')
}

// 3.Create a variable called year and enter the a random year. Check if the year is a 
// leap year or not. A leap year is a year that is divisible by 4  not divisible by 100
//  or divisible  by 400.

let year=Number(prompt('enter the year: '))
if(year%4==0){
    console.log('its a leap year')
}
else if(year%100 !=0){
    console.log('its a leap year')
}
else{
    console.log('not a leap a year')
}

// also
let my_year=Number(prompt('enter year: '))
if (my_year%4==0 && my_year%400==0 || my_year%100 !=0){
    console.log('a leap year')
}
else{
    console.log('not a leap year')
}


// 4.Take as input from a user the temperature if the temperature is above 
// 30°C display “The temperature is too high”,if the temperature  
//  is above 15 display “Normal temperature” otherwise display “Cold temperature”
let temp=Number(prompt('enter the temperature'))
if(temp>30){
    console.log('tempertaure is too high')
}
else if(temp>15){
    console.log('normal temperature')
}
else{
    console.log('cold temeperature')
}



// 5.Write a js program that checks if a variable x is between 10 and 20 (inclusive)
//  and if another variable y is greater than 100. If both conditions are true, 
// display"Conditions met", otherwise display"Conditions not met"
let x=Number(prompt('enter the value of x:'))
let y=Number(prompt('enter the value of y'))

if(x>=0 && x<20 && y>100 ){
    console.log('the conditions are met')
}
else{
    console.log('conditions not met')
}


// 6.Write a js program that checks if a variable password is equal to the string "secret123".
//  If it is, display "Access   granted", otherwise display"Access denied"



//7. Write a js program that checks if a variable student_score is greater than 90. 
// If true, check if the attendance is greater than 80. If both conditions are true,
//  display"Excellent student", otherwise display "Good score, but attendance needs improvement"

student_score=Number(prompt('enter student scores: '))
attendance=Number(prompt('enter student attendance: '))
if(student_score>90 && attendance>80){
    console.log('excellent student')
}
else if(student_score<90 && attendance>80){
    console.log('poor perforamace but good attendance')
}
else if(student_score>90 && attendance<80){
    console.log('good performance but poor attendance')
}
else{
    console.log('poor score and poor attendance')
}

// new task
// 1. Write if…else to print:
// "Empty" if string length is 0
// "Short" if 1–5 characters
// "Medium" if 6–10 characters
// "Long" if more than 10 characters


// 2. Write a program that calculates the ticket price 
// based on age with the following conditions: age below
// 12 pay a ticket price of 5, age below 18 pay a ticket 
// price of 10, age below 60 pay a ticket price of 20,
// age over 60 play a ticket price of 15.


// 3.Write a program that calculates a discount based on the
//  purchase amount.Prices equal or over 100 discount have a 
//  discount of 20. Prices equal or over 50 have a discount of 10.
// Otherwise discount is 0


// 4.Write an if…else that prints "Match" if a variable val is the 
// number 5 or the string "5", but does not match "05" or 5.0.


// 5.Given a variable str, write an if…else that prints:
// "Empty" if it’s an empty string or whitespace only
// "Number" if it can be converted to a number (e.g., "123")
// "Text" otherwise


// 6.Write if…else to handle a variable num such that:
// Print "Integer" if it’s a whole number
// Print "Float" if it’s a number but has decimals
// Print "Not a number" otherwise


// 7.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer


// 8.Write a JavaScript that takes 3 numeric inputs and outputs them
// in ascending order from smallest to largest

// 9.Write a program to check whether the last digit entered by a user is divisible by 3





