import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    list : document.querySelector('.gallery'),

};
refs.list.addEventListener('click', onItemClick );


function onItemClick(event){
    if(!event.target.classList.contains('gallery__image')){
    return;
    }
    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });

}

// створення розмітки
const listItemsGalery = creatItemsGalery(galleryItems);
console.log(listItemsGalery)
function creatItemsGalery(items){
   return items.map(item=>
    `<li class=".gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}">
    </a> </li>`).join(``);
}

refs.list.innerHTML = listItemsGalery;
