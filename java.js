let currentIndex = 0;
const carousel = document.getElementById('mycarousel');
const totalItems = document.querySelectorAll('.carousel-slide').length;


function showImage(index) {
    currentIndex = index;
    updateCarousel();
  }



 function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    carousel.querySelector('.slider-nav').style.transform = 'translateX(' + translateValue + ')';
  }