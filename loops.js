// display numbers from 1 to 20

for (i = 1; i <= 20; i++) {
    console.log(i)
}

// looping through an array
const fruits=['apple','berries','banana','mango','orange']
for(i=0; i<=fruits.length; i++){
    console.log(fruits[i])
}

// skip an element with every iteration
for(i=0; i<fruits.length;i+=2){
    console.log(fruits[i])
}

// looping backwards-display 1-10 in descending order
for(i=10;i>0;i--){
    console.log(i)
}

// looping backwards-display arrays item in the reverse order
for(i=(fruits.length-1); i>=0;i--){
    console.log(fruits[i])
}