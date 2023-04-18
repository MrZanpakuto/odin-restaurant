export function footer() {
    // create elements
    const footer = document.createElement('footer');
    const ul = document.createElement('ul');
    const list_item1 = document.createElement('li');
    const list_item2 = document.createElement('li');
    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    
//  append elements 
    footer.appendChild(ul);
    ul.appendChild(link1);
    ul.appendChild(link2);
    link1.appendChild(list_item1);
    link2.appendChild(list_item2);
 

    // set anchor & list attributes
    link1.href = 'https://github.com/MrZanpakuto';
    link1.title ='github';
    list_item1.textContent = 'Copyright © 2023 MrZanpakuto';
    link2.href = 'https://www.flaticon.com';
    link2.title ='icons';
    list_item2.textContent = 'Icon Images from Flaticon.com';

    return footer
}