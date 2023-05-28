openMenu.addEventListener('click', () => {

    menu.style.display = "flex"

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout(()=> {

        menu.style.opacity = '1'
        menu.style.right = "0"
        openMenu.style.display = 'none'
    }, 10);
})

closeMenu.addEventListener('click', () => {

    menu.style.opacity = '0'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout(()=> {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    }, 200);
})


var slideIndex = 0;
var slides = document.getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");

function showSlide(n) {
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

showSlide(slideIndex);
