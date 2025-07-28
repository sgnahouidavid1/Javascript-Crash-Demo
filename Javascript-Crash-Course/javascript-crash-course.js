// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['Music', 'Movies', 'Sports'],
//     address: {
//         streets: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }


// console.log("The person is: ", "\nName: ", person.firstName, person.lastName, "\nCity: ", person.address.city, "\nHobby: ", person.hobbies[1]);
/* 
    Output:
    The person is:  
    Name:  John Doe 
    City:  Boston 
    Hobby:  Movies

*/
// Destructering traget assignment:
// const { firstName, lastName, address: {city, streets}, hobbies} = person;
// console.log(firstName, lastName, city, streets, hobbies[0]);

// Output:
// John Doe Boston 50 main st Music

// const todosList = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },

//     {
//         id: 2,
//         text: 'Meet with boss',
//         isCompleted: true
//     },

//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];
// For Of Loop (used for looping through array).
// for (let todo of todosList) {
//     console.log(todo.text)
// }

// Output:
// Take out trash
// Meet with boss
// Dentist appt

// console.log(todosList[1]);

// --------------------------------------------------------------------
// Javascript Functional Programing:
// High Order array methods which are better ways to iterate an array.
//  - forEach
// todosList.forEach(function(todo) {
//     console.log(todo.id);
// });

//  - map
// const todoText = todosList.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);
//  - filter
// const todoCompleted = todosList.filter(function (todo) {
//     return todo.isCompleted == true;
//     // using map it only get the element associated with the key (text)
// }).map(function (todo) {
//     return todo.text;
// });
// console.log(todoCompleted);
// ---------------------------------------------------------------------



// --------------------------------------------------------------------------------------------
// Json data format
// [
//     {
//     //  key / item
//         "id": 1,
//         "text": "Take out trash",
//         "isCompleted": true
//     },
//     {
//         "id": 2,
//         "text": "Meet with boss",
//         "isCompleted": true
//     },
//     {
//         "id": 3,
//         "text": "Dentist appt",
//         "isCompleted": false
//     }
// ]


// Creating a Json data format convetor within our script so we can send to a server:
// const todoJSON = JSON.stringify(todosList);
// console.log(todoJSON);
// ----------------------------------------------------------------------------------------------




// For Loops
// for (let i = 0; i < 10; i++) {
//     console.log('For Loop Number: ', i);
// }

// While Loops
// let i = 0;
// while (i < 10) {
//     console.log('While Loop Number: ', i);
//     i++;
// }

// if conditional statement comparison
// if statement comparison with a double eqaul sign == will only compare values
// an if statement comparison with tripple equal sign === will compare values and the data types.
// When using if statements it is always best to use tripple eqaul sign comparison to check the matching
// while also checking the values data types.

// const x = '10';
// if (x == 10) {
//     console.log("This first double eqaul sign if statement is true.")
// } else {
//     console.log("This first double eqaul sign if staement is false.")
// }

// if (x === 10) {
//     console.log("This second tripple eqaul sign if statement is true.")
// } else {
//     console.log("This second tripple eqaul sign if staement is false.")
// }

// Output:
/* 
    This first double eqaul sign if statement is true.
    This second tripple eqaul sign if staement is false.
*/
// -----------------------------------------------------
// Ternary Operator (short-hand if statement):
// const x = 11;
// // The ternary operator (?) repersent then.
// // The : sign repersent else.
// // x > 10 repersent the condition.
// // So if x is greater than 10 then color equal red.
// // but else if x is less than 10 then color equal blue.
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// // explain of using a switch statement
// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }
//-------------------------------------------------------

// creating a functions:
// set the default arugment value to 1.
// function addNums(num1 = 1, num2 = 1) {
//     console.log(num1 + num2);
// }
// addNums(10, 15);

// // One line function expression
// // const subtractNums = (num1 = 1, num2 = 2) => console.log(num1 - num2);
// // subtractNums(10, 5);

// const subtractNums = (num1 = 1, num2 = 2) => num1 - num2;
// console.log(subtractNums(10, 5));

// function addString(str1, str2) {
//     return str1 + str2;
// }

// const str3 = addString("hello ", "world!")
// console.log(str3);


// Javascript OOP

// // Constructer function:
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob); // using the Date constructor
// }
// // Prototype functions
// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// Classes with Methods:
// Does the same things as constructor and prototype but with different and better synatx ("Syntaxes Sugar").
// class Person {
//     // Method
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob); // using the Date constructor
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


// // Using either Classes and Methods or Constructor and Prototypes:

// // Instantiate object
// const person1 = new Person('Samuel', 'Gnahoui-David', '01-11-1999');
// // person1.firstName = "Samuel";
// // person1.lastName = "Gnahoui-David"
// // person1.dob = "01/11/1999";
// const person2 = new Person('Joel', 'Gnahoui-David', '07-28-2001');
// const personArr = new Array;
// personArr[0] = person1;
// personArr[1] = person2;
// // console.log(person2.dob.getFullYear());
// console.log(person1.getFullName());
// console.log(person1.getBirthYear());
// // console.log(personArr);


// Javascript DOM ("Document Object Model") Basics
// console.log(window);
// Single element selectors:
// const form = document.getElementById('my-form') // Grab a single element by there id name
// console.log(form);
// console.log(document.querySelector('.container')); // Grab a single element by their class name, tags (when using tags, class name that have multiple occurance an single element selector will only grab the first occurance).

// Multiple element selectors:
// console.log(document.querySelectorAll('.item'));


// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item)); // Grabing each item using the foreach method.


// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// // ul.firstElementChild.remove();
// ul.firstElementChild.textContent = "Hello World!";
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello World!!<h1>';
// // Button
// const submitBtn = document.querySelector('.btn');
// submitBtn.style.background = 'red'; // Changing the background color of the button to red.
// submitBtn.style.fontSize = '25px'; // Changing the font size of the text within the button to 25 pixels


// const submitBtn = document.querySelector('.btn');

// // Click Button
// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log('clicked');
//     // console.log(e.target.className); // target grab the element that the event listener is attach to.
//     document.querySelector('#my-form').style.background = "#ccc";
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello World!<h1>';
// });

// // Hover over Button
// submitBtn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     // console.log('clicked');
//     // console.log(e.target.className); // target grab the element that the event listener is attach to.
//     document.querySelector('#my-form').style.background = "#ccc";
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello World!<h1>';
// });


// Form Script:
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);


// function onSubmit(e) {
//     e.preventDefault();
//     // console.log(nameInput.value); // To print the text within the name input field to the console log.
//     // value grabs the text within a input element field


//     if (nameInput.value === '' || emailInput.value === '') {
//         msg.classList.add('error');
//         msg.innerHTML = 'Plese enter all fields';
//         setTimeout(() => msg.remove(), 3000); // setting a timer on the message element so that the message will disappear after 3sec.
//     } else {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//         userList.appendChild(li);

//         // Clear fields
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }


// var newUser = document.getElementById('new-user');
// newUser.innerText = "Add new user";




// Get multiple "Elements" by class name: //
// var items = document.getElementsByClassName('item');
// console.log(items);
// items[1].textContent = "Go to Walmart";
// items[1].style.fontWeight = "bold";

// // This line will give an error:
// // item.style.backgroundColor = "gray";

// // Setting all the item background color to gray using a for loop:
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "gray";
// }

// Get multiple "Elements" by tag name: //
// var items = document.getElementsByTagName('li');
// console.log(items);
// items[1].textContent = "Go to Walmart";
// items[1].style.fontWeight = "bold";

// This line will give an error:
// item.style.backgroundColor = "gray";

// // Setting all the item background color to gray using a for loop:
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "gray";
// }


// Traversing the DOM //
// var itemList = document.querySelector('#items')
// ParentNode //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'black'

// parentElement //
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = 'black'
// console.log(itemList.parentElement.parentElement.parentElement)


// childrenNodes //
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'yellow';

// firstElementChild //
// console.log(itemList.firstElementChild); // Grab the first child element under a parent element.


// // lastElementChild //
// console.log(itemList.lastElementChild); // Grab the last child element under a parent element.

// nextSibling //
// console.log(itemList.nextElementSibling);

// previousSibling //
// console.log(itemList.previousElementSibling);


// createElement //
// var newDiv = document.createElement('div');
// // add class //
// newDiv.className = 'new-div'; // Make the created div have the class name of new-div. //
// // add id //
// newDiv.id = 'new-div'; // Make the created div have the id name of new-div. //

// // add attribute //
// newDiv.setAttribute('title', 'New Div');

// // create a text node //
// var newDivText = document.createTextNode('Hello World');

// // add to new created div //
// newDiv.appendChild(newDivText);

// var container = document.querySelector('body .container');
// var form = document.querySelector('body #my-form');
// container.insertBefore(newDiv, form);
// newDiv.style.fontWeight = 'bold';
// newDiv.style.fontSize= '30px';
// console.log(newDiv);

// Event listener
// var clickBtn = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick() {
//     document.getElementById('header-title').innerText = 'Changed';
//     // console.log('Button clicked');
// }

// function buttonClick(e) {
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.classList);
    // console.log(e.target.className);
    // position of the mouse when the button is click //
    // position on the x-axis
    // console.log(e.clientX);
    // // position on the y-axis
    // console.log(e.clientY)

    // check to see if the alt key was hold press while clicking the button
    // outputs true if the alt key was hold press while clicking the button and
    // false if the alt key was not hold press while clicking the button
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);



// }

var clickBtn = document.getElementById('button')
var box = document.getElementById('box');
// clickBtn.addEventListener('click', runEvent);
    
// clickBtn.addEventListener('dblclick', runEvent); // double click
// clickBtn.addEventListener('mousedown', runEvent);
// clickBtn.addEventListener('mouseup', runEvent);

// // mouseEnter event listener 
// box.addEventListener('mouseenter', runEvent);

// // mouseLeave event listener
// box.addEventListener('mouseleave', runEvent);

// // mouseOver event listener 
// box.addEventListener('mouseover', runEvent); // For child elements within the parent element

// // mouseOut event listener
// box.addEventListener('mouseout', runEvent); // For child elements within the parent element

// mouseMove event listener
box.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log('Event type: ' + e.type); // show the type of click to the console.
    box.style.backgroundColor = "rgb(" + e.offsetX + ","+ e.offsetY + ", 40)";
}