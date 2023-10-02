//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle)
// headerTitle.innerText = 'suletha'
// headerTitle.textContent = 'sarah'
// headerTitle.style.borderBottom = 'solid 3px #000'

// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// items[1].textContent = 'suletha';
// items[2].style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'yellow';

var header = document.querySelector('#main-header')

header.style.borderBottom = 'solid 8px #ccc'
var input = document.querySelector('input');
input.value = 'suletha'

//querySelector

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send'

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// var second_item = document.querySelector('.list-group-item:nth-child(2)');
// second_item.style.color = 'green'

// var last_item = document.querySelector('.list-group-item:last-child');
// last_item.style.color = 'yellow'


//querySelectorAll

// var titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Welcome'

// var sec_item = document.querySelectorAll('.list-group-item:nth-child(2)');
// sec_item.forEach(function(sec_item) {
//     sec_item.style.color = 'green';
//   });


// var sec_item = document.querySelectorAll('.list-group-item:nth-child(2)');
// for(var i = 0 ; i < odd.length;i++) {
//     sec_item.style.color = 'green';
//   };

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i = 0 ; i < odd.length;i++){
//     odd[i].style.backgroundColor = 'green'
//     //even[i].style.backgroundColor = '#ccc'
// }
//parentNode
// var itemlist = document.querySelector('#items')
// itemlist.parentNode.style.backgroundColor = 'yellow';

//parentElement

// var itemlist = document.querySelector('#items')
// itemlist.parentElement.style.backgroundColor = 'yellow';
var newDiv = document.createElement('div');
var newtextnode = document.createTextNode('HELLO WORLD');
newDiv.appendChild(newtextnode)

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);
