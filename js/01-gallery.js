import { galleryItems } from './gallery-items.js';

for (let el of galleryItems) 
document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', `<div class="gallery__item"><a class="gallery__link"><img class="gallery__image" src ="${el.preview}" data-source = "${el.original}" alt ="${el.description}"></a></div>`);


const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
 
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  // console.log(event.target);
  

  const galleryEl = event.target;
  const parentGalleryEl = galleryEl.closest(".gallery__item");
   console.log(parentGalleryEl);
}

console.log(galleryItems);
  

// ==============================================================================

// const galleryContainerEl = document.querySelector(".gallery");

// const makeGalleryImg = galleryItem => {
//     const itemRef = document.createElement('div');
//     itemRef.classList.add("gallery__item");

//     const linkRef = document.createElement('a');
//     linkRef.classList.add("gallery__link");
//     linkRef.href = "large-image.jpg";

//     const imgRef = document.createElement('img');
//     imgRef.classList.add("gallery__image");
//     imgRef.dataset.source = galleryItems.original;
//     imgRef.src = galleryItems.preview;
//     imgRef.alt = galleryItems.description;
    
//     itemRef.append(linkRef);
//     linkRef.append(imgRef);
    
//     return itemRef;
// };

// const elements = galleryItems.map(makeGalleryImg);
// console.log(elements);
// galleryContainerEl.append(...elements);


// ==============================================================================


// const galleryContainerEl = document.querySelector(".gallery");
// const galleryMarkup = createGalleryMarkup(galleryItems);

// galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);
// galleryContainerEl.addEventListener('click', onGalleryContainerClick);

// function createGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//       < div class="gallery__item">
//           <a class="gallery__link" href="large-image.jpg">
//             <img
//               class="gallery__image"
//               src="${preview}"
//               data-source="${original}" 
//               alt="${description}"
//             />
//           </a>
//        </div>
//        `;
//     })
//     .join('');
// }

// function onGalleryContainerClick(event) {
 
//   if (!event.target.classList.contains("gallery__image")) {
//     return;
//   }
//   // console.log(event.target);
  

//   const galleryEl = event.target;
//   const parentGalleryEl = galleryEl.closest(".gallery__item");
//    console.log(parentGalleryEl);
// }

// ===================================================================================

{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}

