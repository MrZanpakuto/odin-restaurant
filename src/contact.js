import contactImage from './images/contact.png';

export function contact() {
    const mainContainer = document.createElement('div');
    const main = document.createElement('main');
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const img = document.createElement('img');

    main.id = 'main-contact';
    div.className = 'contact';
    mainContainer.id = 'main-container';
    mainContainer.className = 'home-contact-bkg';

    mainContainer.appendChild(main);
    main.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(img);

    p1.innerText = '📞  (281) 330-8004';
    p2.innerText = '🏠 Mike Jones Drive, Jonesville, MI';
    img.src = contactImage;
    img.alt = 'Sweet Treats Bakery';

    return mainContainer;
}