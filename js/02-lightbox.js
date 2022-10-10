import { galleryItems } from './gallery-items.js';

for (let el of galleryItems) 
    document.querySelector('.gallery').insertAdjacentHTML('beforeEnd',
        `<a class="gallery__item" href="${el.original}">
        <img class="gallery__image" src ="${el.preview}" alt ="${el.description}">
        </a>
        `);

       const  lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});
console.log(galleryItems);
