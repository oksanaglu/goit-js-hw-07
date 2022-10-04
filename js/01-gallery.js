import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
  



const galleryContainerEl = document.querySelector(".gallery");

const makeGalleryImg = galleryItem => {
    const itemRef = document.createElement('div');
    itemRef.classList.add("gallery__item");

    const linkRef = document.createElement('a');
    linkRef.classList.add("gallery__link");
    linkRef.href = "large-image.jpg";

    const imgRef = document.createElement('img');
    imgRef.classList.add("gallery__image");
    imgRef.dataset.source = galleryItems.original;
    imgRef.src = galleryItems.preview;
    imgRef.alt = galleryItems.description;
    
    itemRef.append(linkRef);
    linkRef.append(imgRef);
    
    return itemRef;
};

const elements = galleryItems.map(makeGalleryImg);
console.log(elements);
galleryContainerEl.append(...elements);




