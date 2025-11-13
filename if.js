// conditional statements

let num5=Number(prompt('enter num5:'))
if (num5 %2 ==0){
    console.log('number is even')
}
else{
    console.log('number is odd')
}

// take 3 inputs
let num1=Number(prompt('enter num1'))
let num2=Number(prompt('enter num2'))
let num3=Number(prompt('enter num3'))

if (num1>num2 && num1>num3){
    console.log('num1 is greatest')
} 
else if(num2>num1 && num2>num3){
    console.log('num2 is greatest')
}
else if(num3>num1 && num3>num2){
    console.log('num3 is the largest')

}
else{
    console.log('numbers are equal')
}

// itenary opertor
// check if one is eligible voter criteria eligible should be 18 yrs older

let voter=Number(prompt('enter voters age:'))

let eligible_voter= (voter>=18) ? 'you are eligible to vote' : 'cannot vote'
console.log(eligible_voter)