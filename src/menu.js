import tacoImage from './images/taco.png';
import pieImage from './images/pie.png';
import tartImage from './images/tart.png';
import cakeImage from './images/piece-of-cake.png';
import sundaeImage from './images/sundae.png';
import splitImage from  './images/banana-split.png';

export function menu() {
    const mainContainer = document.createElement('div');
    const main = document.createElement('main');
    const container = document.createElement('div');

    // create 6 div elements
    for (let i= 0; i < 6; i++) {
        const card = document.createElement('div');
        const p = document.createElement('p');
        const menuItemTitle = document.createElement('h2');
        const img = document.createElement('img');
        container.appendChild(card);
        card.appendChild(img);
        card.appendChild(menuItemTitle);
        card.appendChild(p);

        card.className = 'card';

        if(i===0) {
            menuItemTitle.innerText = 'Choco Taco';
            p.innerText = 'Chocolate Syrup, Vanilla Ice Cream, Graham Cracker, Caramel';
            img.src = tacoImage;
        } else if(i===1) {
            menuItemTitle.innerText = 'Apple Towtow';
            p.innerText = 'Apple, Sugar, Cinnamon, Salt, Flour';
            img.src = pieImage;
        } else if(i===2) {
            menuItemTitle.innerText = 'Lemon Drop';
            p.innerText = 'Lemon, Sugar, Flour, Cream, Salt';
            img.src = tartImage;
        } else if(i===3) {
            menuItemTitle.innerText = 'Shortcake';
            p.innerText = 'Strawberry, Sugar, Flour, Cream, Salt';
            img.src = cakeImage;
        } else if(i===4) {
            menuItemTitle.innerText = 'Sundae Delight';
            p.innerText = 'Vanilla Ice Cream, Chocolate Fudge, Sprinkles';
            img.src = sundaeImage;
        } else {
            menuItemTitle.innerText = 'Banana Dream';
            p.innerText = 'Banana, Chocolate, Custard, Cream';
            img.src = splitImage;
        }
    }

    mainContainer.appendChild(main);
    main.appendChild(container);
    
    // assign class names & id
    mainContainer.id = 'main-container';
    main.className = 'main-menu'; 
    container.className = 'menu';

    return mainContainer;
}