import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    list : document.querySelector('.gallery'),

};
refs.list.addEventListener('click', onItemClick );


function onItemClick(event){
    if(!event.target.classList.contains('gallery__image')){
        
        return;
        
    }
    console.log(event.target.dataset.source);
    event.preventDefault();
    const instance = basicLightbox.create(`
        <img src ="${event.target.dataset.source}" width="800" height="600">
    `);
    
    
    instance.show();

}

// створення розмітки
const listItemsGalery = creatItemsGalery(galleryItems);
console.log(listItemsGalery)
function creatItemsGalery(items){
   return items.map(item=>
    `<li class=".gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
    </a> </li>`).join(``);
}

refs.list.innerHTML = listItemsGalery;

// делегація

