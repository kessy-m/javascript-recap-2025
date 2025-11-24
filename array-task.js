// TASK 1: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that prompts the user to enter the base and height of a triangle and returns its area.
// Once you learn functions,revisit this and write this code inside a function.

function area_of_triangle(h, b) {
    let area = 0.5 * h, b;
    return area;
}

let height = Number(prompt('enter height:'))
let base = Number(prompt('enter the base:'))
let area = 0.5 * base * height

console.log('the area of triangle is:', area)



// TASK 2: Using Python or PHP or Java or Ruby or JavaScript
// Prompt the user for a number either on a form input or the terminal. Depending on whether the number
//  is even or odd, display  either “odd” or “even” to the user.
//  Hint: how does an even / odd number react differently when divided by 2?
// Once you learn functions,revisit this and write this code inside a function.
// Extras:
// If the number is a multiple of 4, print out “divisible by 4”.

function check_number(x) {
    if (x % 2 == 0) {
        return 'number is even'
    }
    else {
        return 'number is odd'
    }
}
let num1 = Number(prompt('enter num1:'))
let check_divisibility = check_number(num1)
console.log(check_divisibility)




// TASK 3: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which gets a phone number from a form input or terminal. 
// Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. 
// Convert the number to start with +254… 
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”

function valid_phone_number(phone_num) {
    if (phone_num.startswith('+254') && phone_num.length == 13) {
        return 'valid number'
    }
    else if (phone_num.startswith('07') && phone_num.lenght == 10) {
        valid_number = '+254' + phone_num.slice[1]
        return 'valid number'
    }
    else if (phone_num.startswith('7') && phone_num.length == 9) {
        valid_number = '+254' + phone_num
        return 'valid number'
    }
    else if (phone_num.startswith('254') && phone_num.length == 12) {
        valid_number = '+' + phone_num
        return 'valid number'
    }
    else if(phone_num.startswith('01') && phone_num.length==10){
        valid_number='+254' +phone_num.slice[1]
        return 'valid number'
    }
    else{
        return 'the phone number is invalid'
    }
}

let phone_num=Number(prompt('enter phone number:'))
let valid_number=valid_phone_number(phone_num)
console.log('valid phone number is:',valid_number)



// TASK 4: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which accepts email as form input or from terminal. 
// Validate the email by checking if it's a valid email. 
// Hint: Check if it contains an “@” symbol and “.” symbol.

function valid_email(email) {
    if (email.includes('@') && email.includes('.')) {
        return 'email is valid'
    }
    else {
        return 'email is invalid'
    }
}
let email = prompt('enter your email: ')
let check_email = valid_email(email)
console.log(check_email)



// TASK 5: Using Python or PHP or Java or Ruby or JavaScript
// Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores 
// them in three variables. Return the largest of the three. 
// Do this without using the the inbuilt max () function!
// The goal of this exercise is to think about some internals that programs normally take care of for us. 

function check_largest_number(a, b, c) {
    if (a > b && a > c) {
        return 'a is the largest number'
    }
    else if (b > a && b > c) {
        return 'b is the largest number'
    }
    else if (c > a && c > b) {
        return 'c is the largest number'
    }
    else {
        return 'numbers are equal'
    }
}

let a = Number(prompt('enter the value of a: '))
let b = Number(prompt('enter the value of b: '))
let c = Number(prompt('enter the value of c: '))

let largest_number = check_largest_number(a, b, c)
console.log('the largest number is:', largest_number)


// TASK 6:Using Python or PHP or Java or Ruby or JavaScript
// Write a program that lets the user input a password. Give them only 4 attempts to
// check the passwords entered against “admin@123”. If the password is correct access is granted.
//  After you show them a message , the account is blocked.
// Once you learn functions,revisit this and write this code inside a function.




// TASK 7: Using Python or PHP or Java or Ruby or JavaScript
// Write that prompts the user to input student marks. The input should be between 0 and 100.
// Then output the correct grade:
// A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40
// Once you learn functions,revisit this and write this code inside a function.

function students_grade(marks){
    if(marks>0 && marks>100){
        if(marks>0 && marks<=79){
            return 'Grade is A'
        }
        else if(marks>=60 && marks<=79){
            return 'Grade is B'
        }
        else if(marks>=49 && marks<=59){
            return 'Grade is C'
        }
        else if(marks>=40 && marks<=49){
            return 'Grade is D'
        }
        else{
            return 'Grade is E'
        }
    }
}

let marks=Number(prompt('enter students marks:'))
let student_results=students_grade(marks)
console.log('the student grade is: ',student_results)




// TASK 8: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70,
// it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.
// For example, if the speed is 80, it should print: “Points: 2”.
// If the driver gets more than 12 points, the function should print: “License suspended”.




// TASK 9: Using Python or PHP or Java or Ruby or JavaScript
// Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
// Example If rows is 5, it should print the following:
// *
// **
// ***
// ****
// *****.....




// TASK 10: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that calculates the total stock in a company from the array/list below if
// we know that the stock is the last digit in every array/list.

// prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]

// NB: ONCE YOU COPY AND PASTE THE LIST ABOVE,REWRITE THE SINGLE QUOTES AS THE ABOVE LIST WILL GIVE YOU AN ERROR.
// Once you learn functions,revisit this and write this code inside a function.





// TASK 11: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes the date of birth of a person and the program outputs
// the age in terms of years,months,days TODAY.datetime






// TASK 12: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that prints the largest of 4 inputs taken as input from a user.





// TASK 13: Using Python or PHP or Java or Ruby or JavaScript or C# or Go
// Write a program that takes the email and password as input from a user and
//  checks if they are equal to “admin@mail.com” and password is “Admin@123” ,
// if so then print  “Login is Successful” and if not print “Invalid username or password”.
// ONLY accept 3 tries after which it notifies you that you have been blocked.



// TASK 14: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of 2 values and adds them. The program should only
// accept numbers and floats only or otherwise display an error “invalid character entered”
// and take the user to re-enter the inputs .
// Once you learn functions,revisit this and write this code inside a function.







