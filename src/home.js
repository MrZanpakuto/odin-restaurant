import bakerImage from './images/baker.png';

export function home() {
    const mainContainer = document.createElement('div');
    const main = document.createElement('main');
    const container = document.createElement('div');
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    mainContainer.appendChild(main);
    main.appendChild(container);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(img);
    container.appendChild(p3);

    mainContainer.id = 'main-container';
    mainContainer.className = 'home-contact-bkg';
    main.className ='main-menu';
    p3.className = 'order';
    container.className = 'home';
    img.src = bakerImage;
    img.alt = 'Baker';

    p1.innerText = 'Sweet Treats';
    p2.innerText = 'Come get a piece of heaven!';
    p3.innerText = 'Order Online or in-store!';

    return mainContainer;
}