"use strict";

var menuBtn = document.querySelector(".menu-btn");
var dropDown = document.querySelector(".dropdown");
var menuItem = document.querySelectorAll(".menu-item");
menuBtn.addEventListener('click', function () {
  toggle();
});
menuItem.forEach(function (item) {
  item.addEventListener("click", function () {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  dropDown.classList.toggle("open");
}

var slideshowImages = document.querySelectorAll(".intro-slide li img");
var nextImagesDelay = 3500;
var currentImagesCounter = 0; // slideshowImages[currentImagesCounter].style.display = "block";

slideshowImages[currentImagesCounter].style.opacity = 1;
setInterval(nextImages, nextImagesDelay);

function nextImages() {
  // slideshowImages[currentImagesCounter].style.opacity = 0;
  slideshowImages[currentImagesCounter].style.zIndes = -2;
  var tempCounter = currentImagesCounter;
  setTimeout(function () {
    slideshowImages[tempCounter].style.opacity = 0;
  }, 1000);
  currentImagesCounter = (currentImagesCounter + 1) % slideshowImages.length;
  slideshowImages[currentImagesCounter].style.opacity = 1;
  slideshowImages[currentImagesCounter].style.zIndes = -1;
}
//# sourceMappingURL=all.js.map
