//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);

console.log(document.domain);
//Accessing document URL
console.log(document.URL);
//Accessing Web Page Title
console.log(document.title);
//Accessing Elements in the Head Tag
console.log(document.head);
//Accessing Elements in the Body Tag
console.log(document.body);
//Accessin all Elements in the DOM as an Array
console.log(document.all);

//Changing Items using Selector and document.all index
// Note that this is not the best way.
//document.all[14].textContent = 'Testing Items';

//Accessing Forms on the Page
console.log(document.forms);
//Accessing the Amount of Forms on the DOM
//This will show the amount of forms on the page
console.log(document.forms.length);

//Accessing the links on the Page
console.log(document.links);
//Acceessing Images in the DOM
console.log(document.images);

//Various Selectors
// 1 getElementById

console.log(document.getElementById('header-title'));

let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Hello World';

//note: textContent and innerText properties are kinda similar but the difference is that innerText pays attention to stylings while textContent doesn't

//headerTitle.innerHTML = '<h3>What\'s Popping</h3>';
//innerHTML property add an HTML element into the element with the ID it doesn't change the element to a new one.

//Style Changes
//header.style.borderBottom = 'solid 3px #000';


//Various Selector
// 2 getElementsByClassName

let items = document.getElementsByClassName('list-group-item');
// This will console log all the elements with the class name 'list-group-item' in the console as an array and each can be accessed with index
items[items.length - 3].style.color = 'black';
items[items.length - 2].style.color = 'green';
items[items.length - 1].style.color = 'red';
items[items.length - 1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let x = 0; x < items.length; x++) {
//     items[x].style.backgroundColor = '#f4f4f4'
// }

//Various Selectors
// 3 getElementsByTagName

let li = document.getElementsByTagName('li');
//This selector works basically the same way as the others but this time we use tagname and not classname and id.

//Various Selectors

// 4 querySelector

let mainheader = document.querySelector('#main-header');
mainheader.style.borderBottom = '4px solid #ccc';

//using input

let input = document.querySelector('input');
input.value = 'Hello World'

let submit = document.querySelector('input[type="submit"]')
submit.value = 'SEND';

//Using Css :last-child selector to select and style html element

//let lastItem = document.querySelector('.list-group-item:last-child')
//lastItem.style.color = 'blue'

//Using CSS :nth-child selector to select and style HTML element

//let secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral'

//We can make items content editable
for (i = 0; i < items.length; i++) {
    items[i].contentEditable = true;
}

//Various Selectors

// 5 querySelectorAll

let titles = document.querySelectorAll('.title');
console.log(titles);

//Stylying only the odd

let odd = document.querySelectorAll('li:nth-child(odd)')
for (let j = 0; j < odd.length; j++) {
    odd[j].style.backgroundColor = '#f4f4f4'
}

let even = document.querySelectorAll('li:nth-child(even)')
for (let k = 0; k < even.length; k++) {
    even[k].style.backgroundColor = '#ccc'
}

//TRAVERSING THE DOM
//Querying the parentNode, childrenNode and Sibling Node

//parentNode
let itemList = document.querySelector('#items')
    //parentNode
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentNode.parentNode)
    //parentElement
    //parentElement and parentNode are basically the same thing
console.log(itemList.parentElement)

//childNode
console.log(itemList.childNodes)

//children
console.log(itemList.children);

console.log(document.head)