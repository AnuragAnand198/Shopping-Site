// let currentIndex = 0;
// const carousel = document.getElementById('mycarousel');
// const totalItems = document.querySelectorAll('.carousel-slide').length;



// const searchbar= document.getElementById("search-bar");
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".mycarousel");
    const slides = document.querySelectorAll(".carousel-slide");
   
  
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    }
  
    // function nextSlide() {

    //   currentIndex = (currentIndex + 1) % slides.length;
    //   showSlide(currentIndex);
    // }
  
    function nextSlide() {
        currentIndex++;
        if (currentIndex === slides.length) {
          currentIndex = 0; // Reset to the first slide
        }
        showSlide(currentIndex);
      }
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  

  });





// function showImage(index) {
//     currentIndex = index;
//     updateCarousel();
//   }



//  function updateCarousel() {
//     const translateValue = -currentIndex * 100 + '%';
//     carousel.querySelector('.slider-nav').computedStyleMap.transform = 'translateX(' + translateValue + ')';
//   }