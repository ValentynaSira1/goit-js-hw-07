import { galleryItems } from './gallery-items.js'; 
// Change code below this line 
 
const modalContainer = document.querySelector(".gallery"); 
const cardsMarkup = galleryItemsImg(galleryItems); 
 
modalContainer.insertAdjacentHTML('beforeend', cardsMarkup); 
modalContainer.addEventListener('click', onImgClick); 
 
function galleryItemsImg (gallery){ 
    return gallery 
        .map(({ preview, original, description }) => { 
        return ` 
        <li><a class="gallery__item" href="${original}"> 
          <img src="${preview}" alt="${description}" class="gallery__image">          
          </a></li> 
      `; 
        }) 
        .join(""); 
console.log(galleryItems);     
} 
 
function onImgClick(event){ 
    event.preventDefault(); 
    const Lightbox = new SimpleLightbox(".gallery__item", { 
        captionDelay: 250, 
        captionsData: "alt", 
    }); 
}