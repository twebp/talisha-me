const zoomImages = document.querySelectorAll('.wireframe-zoom');

const lightbox = document.querySelector('#image-lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const closeLightbox = document.querySelector('.lightbox-close');

zoomImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape"){
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
    }
});
