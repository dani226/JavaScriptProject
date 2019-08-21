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

//forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);
//Break//

const x = 9;

const color = 'green';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
//Break//

const addNums = (num1 = 1, num2 = 1) =>
   console.log( num1 + num2 );

(addNums(5,5));
//Break//

//Class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob =  new Date(dob);   
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object

const person1 = new Person ('Ben', 'Berry', '4-3-1988');
const person2 = new Person ('Mary', 'Berry', '12-12-1986')

console.log(person2.getFullName());
console.log(person1);
//Break//

// Single element 
    //console.log(document.getElementById('my-form'));
        //console.log(document.querySelector('h1'));

// Multiple element 
 //console.log(document.querySelectorAll('.item'));
    //console.log(document.getElementsByClassName('item'));
        //console.log(document.getElementsByClassName('item'));
           //console.log(document.getElementsByClassName('li'));

           const items =  document.querySelectorAll('.item');

           items.forEach((item) => console.log(item));
           
           // Break //
           const ul = document.querySelector('.items');
           
           //ul.remove();
               //ul.lastElementChild.remove();
                   //ul.firstElementChild.textContent = 'Hello';
                       //ul.children[1].innerText = 'Brad';
                           //ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
           

//Break //
const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background =
    '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
     .lastElementChild.innerHTML = '<h1>Hello</h1>'

});

//break //

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all field';

        setTimeout(() => msg.remove(), 3000);
    } else {
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(
       `${nameInput.value} : ${emailInput.value}`));
       
       userList.appendChild(li);

       //Clear Fields 

       nameInput.value = '';
       emailInput.value = '';
    }
}


