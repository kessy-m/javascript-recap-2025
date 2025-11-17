let values = [1, 2, 3, 'four', 'five', false, [true, 'six', 'seven'], 8, 9]

console.log(values) //array 8
console.log(typeof (values)) //object
console.log(Array.isArray(values)) //true


// accessing values
console.log(values[3])
console.log(values[6][1])


// updating vlaues
let names = ['ken', 'mercy', 'Ruth']
names[2] = 'Joana'
console.log(names)
//['ken', 'mercy', 'Joana']


// no of values
let no_of_values = names.length
console.log(no_of_values)


// adding items at the end
names.push('Bruce','Martin')
console.log(names)
//['ken', 'mercy', 'Joana', 'Bruce', 'Martin']


// adding items at the start
names.unshift('Liam','Kessy')
console.log(names)
//['Liam', 'Kessy', 'ken', 'mercy', 'Joana', 'Bruce', 'Martin']



// removes the first items
names.pop('Liam')
console.log(names)

// removes the last item
names.shift('Martin')
console.log(names)