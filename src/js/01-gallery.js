// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryPictures = document.querySelector('.gallery')
const pictures = []

galleryItems.forEach(element => {
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = element.preview
	galleryImage.setAttribute('title', element.description)
	galleryImage.alt = element.description

	galleryLink.append(galleryImage)
	pictures.push(galleryLink)
})
galleryPictures.append(...pictures)

let picturesGallery = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
	captionDelay: 250,
});