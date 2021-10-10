const menuBtn = document.querySelector(".menu-btn");
const dropDown = document.querySelector(".dropdown");
const menuItem = document.querySelectorAll(".menu-item");

menuBtn.addEventListener('click', () => {
  toggle();
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  dropDown.classList.toggle("open");
}

const slideshowImages = document.querySelectorAll(".intro-slide li img"); 

const nextImagesDelay = 3500;
let currentImagesCounter = 0;

// slideshowImages[currentImagesCounter].style.display = "block";
slideshowImages[currentImagesCounter].style.opacity = 1;

setInterval(nextImages, nextImagesDelay);

function nextImages() {
    // slideshowImages[currentImagesCounter].style.opacity = 0;
    slideshowImages[currentImagesCounter].style.zIndes = -2;
    const tempCounter = currentImagesCounter
    setTimeout(() => {
        slideshowImages[tempCounter].style.opacity = 0;
    }, 1000);
    currentImagesCounter = (currentImagesCounter + 1) % slideshowImages.length;
    slideshowImages[currentImagesCounter].style.opacity = 1;
    slideshowImages[currentImagesCounter].style.zIndes = -1;
}

