import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
    list : document.querySelector('.gallery'),

};
const listItemsGalery = creatItemsGalery(galleryItems);
refs.list.insertAdjacentHTML("beforeend", listItemsGalery);
document.addEventListener('DOMContentLoaded', onItemClick);
function onItemClick(event){
    event.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });

};

// створення розмітки


function creatItemsGalery(items){
   return items.map(item=>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}">
    </a> </li>`).join(``);
};


