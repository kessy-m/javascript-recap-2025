let person = {
    'name': 'Esther',
    'age': 25,
    'address': '123 Kimathi street',
    'is_married': false,
    'Tech stack': ['python', 'js', 'c++']
}
console.log(person)
console.log(typeof (person))

// accessing the values in objects
console.log(person.name)
console.log(person.age)
console.log(person['Tech stack'])


console.log(Object.keys(person))
// ['name', 'age', 'address', 'is_married', 'Tech stack']


console.log(Object.values(person))
//  ['Esther', 25, '123 Kimathi street', false, Array(3)]


console.log(Object.entries(person))

// task 
// Create a new file called objectTask and attempt the below questions:
// my_arr= [23, “Jane”, 560, [“Lesson”, “Maths”, {“currency” : “KES”}], 987, 76,”John”]
// Display:

// 1. KES
my_arr = [23, 'Jane', 560, ['Lesson', 'Maths', { 'currency': 'KES' }], 987, 76, 'John']
let new_arr = my_arr[3][2].currency
console.log(new_arr)


// 2. 560
let arr_2 = my_arr[2]
console.log(arr_2)


// 3. Maths
let arr_3 = my_arr[3][1]
console.log(arr_3)



//5. In the object with the key currency, add another key “amount” with value 90
my_arr = [23, 'Jane', 560, ['Lesson', 'Maths', { 'currency': 'KES' }], 987, 76, 'John']
let arr_4 = my_arr[3][2]['amount'] = 90
console.log(arr_4)
// ans> {currency: 'KES', amount: 90}




// 6.Change the name “John” to “Jane” . 
arr_name = 'John'
let new_name = arr_name = 'Jane'
console.log(new_name)
// Jane


//7. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.
//  Hint: arrays can be reversed using reverse() functions
arr_num = 987
arr_num.reverse
console.log(arr_num)







//  In the object below , output the following values:
// a) "Deploy to Netlify"
// b.)"updates"
// c.)"Lake View Road" 
// d.) "PostgreSQL"

const userProfile = {
    id: 101,
    name: {
        first: "Brian",
        last: "Letting"
    },
    contact: {
        email: "jeff@example.com",
        phones: ["+254700000001", "+254700000002"]
    },
    address: {
        current: {
            city: "Nairobi",
            street: "Westlands Ave",
            postalCode: "00100"
        },
        previous: [
            {
                city: "Eldoret",
                street: "Main Street",
                postalCode: "30100"
            },
            {
                city: "Kisumu",
                street: "Lake View Road",
                postalCode: "40100"
            }
        ]
    },
    preferences: {
        theme: "dark",
        language: "en",
        notifications: {
            email: true,
            sms: false,
            push: ["promotions", "updates"]
        }
    },
    projects: [
        {
            id: 1,
            name: "POS System",
            technologies: ["React", "FastAPI", "PostgreSQL"],
            tasks: [
                { title: "Set up DB", done: true },
                { title: "Design UI", done: false }
            ]
        },
        {
            id: 2,
            name: "Portfolio Website",
            technologies: ["HTML", "CSS", "JavaScript"],
            tasks: [
                { title: "Create About Page", done: true },
                { title: "Deploy to Netlify", done: false }
            ]
        }
    ]
};



// output kilimani
let city = {
    "name":"Nairobi",
    "code": 47,
    "sub-counties":{
        "sub1":"Dagoretti",
        "sub2":"Westlands",
        "sub3":"Embakasi",
        "sub-3":{
            "towns":["Parklands","Kilimani"]
        }
    }
}


console.log(city['sub-county']?.['sub-3'].towns[1])










