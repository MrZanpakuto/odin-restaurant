import {headerIcon} from './assets.js';

export function header() {
    //create elements for header section
    const header = document.createElement('header');
    const div = document.createElement('div');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const list_item1 = document.createElement('li');
    const list_item2 = document.createElement('li');
    const list_item3 = document.createElement('li');
    // const iconContainer = document.getElementById('logo-placeholder');

    // append elements
    header.appendChild(div);
    header.appendChild(nav);
 
    nav.appendChild(ul);
    ul.appendChild(list_item1);
    ul.appendChild(list_item2);
    ul.appendChild(list_item3);
    div.appendChild(headerIcon());

    // add content/links to elements
    list_item1.innerText = 'Home';
    list_item2.innerText = 'Menu';
    list_item3.innerText = 'Contact';
    
    // add selectors for style
    div.id = 'logo-placeholder';
    list_item1.className ='btns';
    list_item2.className ='btns';
    list_item3.className ='btns';

    return header;
}




