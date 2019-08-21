// String, numbers, boolean, null, undefined //

const name = 'John';
const age = 30;

//Concatenation//

console.log('My name is ' + name + ' and I am' + age);
//Temple string//
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

const s = 'Behind the Scene: BTS';

console.log(s.split(','));

//Arrays - variables that had multiple values //

const fruits = ['apples', 'kiwis', 'oranges'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('Kiwis'));

console.log(fruits);
//Break//

const person = {
    firstName: 'Ben',
    lastName: 'Berry',
    age: 40,
    hobbies: ['art', 'dance', 'swim'],
    address: {
        street: '24 tree st',
        city: 'Kansas City',
        state: 'Ka'
    } 
}
console.log(person.hobbies[1]);

console.log(person.address.city);

const { firstName, lastName, address: { city }} = person;
console.log(city);

person.email = 'ben@gmail.com';

console.log(person);
//Break//

const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Doctor appointment ',
        isCompleted: false
    }
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loop//
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

//while loop//
let i = 0;
while(i< 10) {
    console.log(`While Loop Number: ${i}`);
}
//break//