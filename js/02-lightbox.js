import { galleryItems } from './gallery-items.js';
// Change code below this line
for (let el of galleryItems) 
document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', `<div class="gallery__item"><a class="gallery__link"><img class="gallery__image" src ="${el.preview}" data-source = "${el.original}" alt ="${el.description}"></a></div>`);

console.log(galleryItems);


