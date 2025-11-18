// let values = [1, 2, 3, 'four', 'five', false, [true, 'six', 'seven'], 8, 9]

// console.log(values) //array 8
// console.log(typeof (values)) //object
// console.log(Array.isArray(values)) //true


// // accessing values
// console.log(values[3])
// console.log(values[6][1])


// // updating vlaues
// let names = ['ken', 'mercy', 'Ruth']
// names[2] = 'Joana'
// console.log(names)
// //['ken', 'mercy', 'Joana']


// // no of values
// let no_of_values = names.length
// console.log(no_of_values)


// // adding items at the end
// names.push('Bruce','Martin')
// console.log(names)
// //['ken', 'mercy', 'Joana', 'Bruce', 'Martin']


// // adding items at the start
// names.unshift('Liam','Kessy')
// console.log(names)
// //['Liam', 'Kessy', 'ken', 'mercy', 'Joana', 'Bruce', 'Martin']


// // removes the first items
// names.pop('Liam')
// console.log(names)


// // removes the last item
// names.shift('Martin')
// console.log(names)

// 7.splice()-adds elemnts without deleting
let girls=['Mary','Susan','Faith','Ruth','Joyce']
girls.splice(3,0,'Diana')
console.log(girls)

// replace values
girls.splice(2,2,'Sophia','Grace')
console.log(girls)

girls.splice(1,2)
console.log(girls)

// 14.join()-joins array elements into a string you can include a separator of your choice
let shoes=['big','small','medium']
let z=shoes.join('*')
console.log(z)

// 15.toString()-returns element of an array as a comma sepaarated string
let colors=['blue','white','orange','yellow','black','purple']
colors.toString()
console.log(colors)


// 16.copyWithin()-copies array elements to another position in an array
let birds=['Peacock','Hen','duck','Eagle']
birds.copyWithin(3,0,3)
console.log(birds)

// 17.at()-returns an element at a specific index
colors.at(2)
console.log(colors)

// 8.slice()
birds.slice(2,5)
console.log(birds)


// 9.indexOf()
let numberss=[1,2,3,4,5,6]
numberss.indexOf(3)
console.log(numberss)

// 10.lastIndexOf()
numberss.lastIndexOf(4)
console.log(numberss)

// 11.includes()-checks if an element exists -returns bollean
let bottles=['250ml','500ml','800ml']
console.log(bottles.includes('500ml'))
console.log(bottles.includes('1000ml'))

// 12.sort()
let x=[100,11,2,3]
x.sort()
console.log(x)

// 13.reverse()
let y=['Mark','John','Jack']
y.reverse()
console.log(y)