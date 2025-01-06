let videoPlayButton = document.getElementById('videoButton');
let video = document.getElementById('video');

videoPlayButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        videoPlayButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        videoPlayButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});
// JavaScript for Image Slider

// Select necessary DOM elements
const sliderWrapper = document.getElementById("sliderWrapper");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Variables to track the current slide index
let currentIndex = 0;
const totalSlides = slides.length;

// Function to update the slider position
function updateSlider() {
  const slideWidth = slides[0].offsetWidth; // Get the width of a single slide
  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listener for Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  updateSlider();
});

// Event listener for Previous button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
  updateSlider();
});

// Make the slider responsive

document.getElementById('home').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

document.getElementById('about').addEventListener('click', function() {
  const aboutSection = document.getElementsByClassName('about')[0];
  window.scrollTo({
    top: aboutSection.offsetTop,
    behavior: 'smooth'
  });
});

document.getElementById('destination').addEventListener('click', function() {
  const destinationSection = document.getElementsByClassName('destination')[0];
  window.scrollTo({
    top: destinationSection.offsetTop,
    behavior: 'smooth'
  });
});

document.getElementById('blog').addEventListener('click', function() {
  const destinationSection = document.getElementsByClassName('blog')[0];
  window.scrollTo({
    top: destinationSection.offsetTop,
    behavior: 'smooth'
  });
});

document.getElementById('contact').addEventListener('click', function() {
  const contactSection = document.getElementsByClassName('contact')[0];
  window.scrollTo({
    top: contactSection.offsetTop,
    behavior: 'smooth'
  });
});

// For hamburger menu

document.getElementById('home_hamburger').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

document.getElementById('about_hamburger').addEventListener('click', function() {
  const aboutSection = document.getElementsByClassName('about')[0];
  window.scrollTo({
    top: aboutSection.offsetTop,
    behavior: 'smooth'
  });
});

document.getElementById('destination_hamburger').addEventListener('click', function() {
  const destinationSection = document.getElementsByClassName('destination')[0];
  window.scrollTo({
    top: destinationSection.offsetTop,
    behavior: 'smooth'
  });
});

document.getElementById('blog_hamburger').addEventListener('click', function() {
  const destinationSection = document.getElementsByClassName('blog')[0];
  window.scrollTo({
    top: destinationSection.offsetTop,
    behavior: 'smooth'
  });
});

document.getElementById('contact_hamburger').addEventListener('click', function() {
  const contactSection = document.getElementsByClassName('contact')[0];
  window.scrollTo({
    top: contactSection.offsetTop,
    behavior: 'smooth'
  });
});