// append components to div#content.
// components = header, footer, assets, home, main, and contact js files.
// same header and footer on home, main, and contact js files.
// call header and footer functions after DOM is parsed.
// create event listeners on click for menu, home, or contact tabs.
// menu tab click generates menu content, home tab generates home content, and contact tab generates contact content. The content will be in the main section of each page. header and footer will be the same on each page.

// import { ContextReplacementPlugin } from 'webpack'
import {header} from './header.js';
import {footer} from './footer.js';
import {menu} from './menu.js';
import {home} from './home.js';
import {contact} from './contact.js';


const element = document.getElementById('content');

// initial page load
element.appendChild(header());
element.appendChild(home());
element.appendChild(footer());

// add event listeners to tabs
const list = document.querySelectorAll('.btns');

list.forEach((element) => {
    element.addEventListener('click', changeMain);
    }
);

function changeMain(e) {
    const main = document.getElementById('main-container');
    const footer = document.querySelector('footer');    
    const parentDiv = footer.parentNode;

    if (main != null) {
        main.remove();
    }
    
    if (e.target.innerText == 'Home') { 
        parentDiv.insertBefore(home(), footer);
    } else if (e.target.innerText == 'Menu') {
        parentDiv.insertBefore(menu(), footer);
        // console.log('Menu Section');
    } else if (e.target.innerText == 'Contact') {
        parentDiv.insertBefore(contact(), footer);
        // console.log('Contact Section');
    }
}

