let images = [{
    url: "./images/RostovonDonAdmiral_1.png",
    title: "Rostov-on-Don, Admiral"
  }, {
    url: "./images/SochiThieves_2.png",
    title: "Sochi Thieves"
  }, {
    url: "./images/RostovonDonPatriotic_3.png",
    title: "Rostov-on-Don Patriotic"
  }];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    titles: false,
    dots: true,
    autoplay: false
  };
  
  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".image-content");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderLink = document.querySelector(".projects-list");
  
  initImages();
  initArrows();
  initLink();

  if (options.dots) {
    initDots();
  }
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrows").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initLink(){
    sliderLink.querySelectorAll(".projects-link").forEach(link => {
      link.addEventListener("click", function() {
        let imageNumber;
        if (link.classList.contains("link-first")) {
          imageNumber = images.length - 3;
        } 
        if (link.classList.contains("link-second")) {
          imageNumber = images.length - 2;
        } 
        if (link.classList.contains("link-third")) {
          imageNumber = images.length - 1;
        } 
        moveSlider(imageNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
  }
}

let sliderOptions = {
  dots: true,
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});