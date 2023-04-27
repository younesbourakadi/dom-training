const thumbnails = document.querySelectorAll('.thumbs-img');
const picture = document.getElementById('gallery-picture');
const description = document.getElementById('gallery-description');
const title = document.getElementById('gallery-title');

thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener('mouseover', function() {
    title.innerHTML = thumbnail.dataset.title;
    description.innerHTML = thumbnail.dataset.description;
    picture.src = thumbnail.src;
  });
});
