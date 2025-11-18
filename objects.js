let person={
    'name':'Esther',
    'age':25,
    'address':'123 Kimathi street',
    'is_married':false,
    'Tech stack':['python','js','c++']
}
console.log(person)
console.log(typeof(person))

// accessing the values in objects
console.log(person.name)
console.log(person.age)
console.log(person['Tech stack'])


console.log(Object.keys(person))
// ['name', 'age', 'address', 'is_married', 'Tech stack']


console.log(Object.values(person))
//  ['Esther', 25, '123 Kimathi street', false, Array(3)]


console.log(Object.entries(person))
