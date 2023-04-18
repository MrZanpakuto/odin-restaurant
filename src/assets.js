import icon from './images/pancake.png';

export function headerIcon() {
    const myIcon = new Image();
    
    // set image attributes
    myIcon.src = icon;
    myIcon.width = '30';
    myIcon.height = '30';
    myIcon.alt ='Pancakes with Strawberry on top';
    return myIcon;   
}
