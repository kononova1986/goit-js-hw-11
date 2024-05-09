import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const list = document.querySelector('.list');

export function render(photos) {
    const markup = photos.hits.map((photo) => {
      return `<li class="gallery-item" >
    <a href= ${photo.largeImageURL}>
	<img
			class = "gallery-image"  
			src = "${photo.webformatURL}"  
			alt = "${photo.tags}"
    />
	</a>
    <ul class = "gallery-alt">
        <li class="gallery-alt-photo">Likes <p>${photo.likes}</p></li>
        <li class="gallery-alt-photo">Views <p>${photo.views}</p></li>
        <li class="gallery-alt-photo">Comments <p>${photo.comments}</p></li>
        <li class="gallery-alt-photo">Downloads <p>${photo.downloads}</p></li>
    </ul>
</li>`
    }).join('');
  
    list.insertAdjacentHTML("beforeend", markup);
    let lightbox = new SimpleLightbox('.gallery-item a', {
      captionDelay: 250,
      captionPosition: 'bottom',
      captionsData: 'alt',
    });
  lightbox.refresh();
  }