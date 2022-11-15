// Carousel Functionality //

var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $carouselTitle = document.querySelector('.carousel-title');
var $carouselText = document.querySelector('.carousel-text');
var $carouselImage = document.querySelector('.carousel-image');
var $circle = document.querySelectorAll('.fa-regular');
var $spanBox = document.querySelector('.span-box');

$leftArrow.addEventListener('click', handleCarouselSwap1);
$rightArrow.addEventListener('click', handleCarouselSwap2);
$spanBox.addEventListener('click', handleCarouselSwap3);

var carouselTextArray = ['We believe the fun of brewing your own beer at home should be an open-resource experience. Welcome to a hub all about recipes, techniques, tips, and pride in one\'s work.We\'re glad you\'re here!',
  'What fun would it be if you couldn’t share your batch turnouts and suggestions with others? Here, we encourage all brewers to share the goodness of what’s bubbling in their fermenters (digitally, of course)!',
  'While the recipes offered here are absolutely fantastic, we’re always in the market for new ones too! Feel free to post recipes you think others will enjoy. We’ll take a look at your post and add it to the Recipes page!'];

var carouselTitleArray = ['Beer is Our Thing', 'Share with Us!', 'Got a Recipe?'];

$carouselTitle.textContent = carouselTitleArray[0];
$carouselText.textContent = carouselTextArray[0];
$carouselImage.setAttribute('src', 'images/carousel-image-1.webp');
$circle[0].setAttribute('class', 'fa-solid fa-circle');

function handleCarouselSwap1(event) {
  for (var i = 0; i < carouselTextArray.length; i++) {
    if ($carouselText.textContent === carouselTextArray[0]) {
      $carouselTitle.textContent = carouselTitleArray[2];
      $carouselText.textContent = carouselTextArray[2];
      $carouselImage.setAttribute('src', 'images/carousel-image-3.webp');
      $circle[0].setAttribute('class', 'fa-regular fa-circle');
      $circle[1].setAttribute('class', 'fa-regular fa-circle');
      $circle[2].setAttribute('class', 'fa-solid fa-circle');
      break;
    } else if ($carouselText.textContent === carouselTextArray[2]) {
      $carouselTitle.textContent = carouselTitleArray[1];
      $carouselText.textContent = carouselTextArray[1];
      $carouselImage.setAttribute('src', 'images/carousel-image-2.webp');
      $circle[0].setAttribute('class', 'fa-regular fa-circle');
      $circle[1].setAttribute('class', 'fa-solid fa-circle');
      $circle[2].setAttribute('class', 'fa-regular fa-circle');
      break;
    } else if ($carouselText.textContent === carouselTextArray[1]) {
      $carouselTitle.textContent = carouselTitleArray[0];
      $carouselText.textContent = carouselTextArray[0];
      $carouselImage.setAttribute('src', 'images/carousel-image-1.webp');
      $circle[0].setAttribute('class', 'fa-solid fa-circle');
      $circle[1].setAttribute('class', 'fa-regular fa-circle');
      $circle[2].setAttribute('class', 'fa-regular fa-circle');
      break;
    }
  }
}

function handleCarouselSwap2(event) {
  for (var i = 0; i < carouselTextArray.length; i++) {
    if ($carouselText.textContent === carouselTextArray[0]) {
      $carouselTitle.textContent = carouselTitleArray[1];
      $carouselText.textContent = carouselTextArray[1];
      $carouselImage.setAttribute('src', 'images/carousel-image-2.webp');
      $circle[0].setAttribute('class', 'fa-regular fa-circle');
      $circle[1].setAttribute('class', 'fa-solid fa-circle');
      $circle[2].setAttribute('class', 'fa-regular fa-circle');
      break;
    } else if ($carouselText.textContent === carouselTextArray[1]) {
      $carouselTitle.textContent = carouselTitleArray[2];
      $carouselText.textContent = carouselTextArray[2];
      $carouselImage.setAttribute('src', 'images/carousel-image-3.webp');
      $circle[0].setAttribute('class', 'fa-regular fa-circle');
      $circle[1].setAttribute('class', 'fa-regular fa-circle');
      $circle[2].setAttribute('class', 'fa-solid fa-circle');
      break;
    } else if ($carouselText.textContent === carouselTextArray[2]) {
      $carouselTitle.textContent = carouselTitleArray[0];
      $carouselText.textContent = carouselTextArray[0];
      $carouselImage.setAttribute('src', 'images/carousel-image-1.webp');
      $circle[0].setAttribute('class', 'fa-solid fa-circle');
      $circle[1].setAttribute('class', 'fa-regular fa-circle');
      $circle[2].setAttribute('class', 'fa-regular fa-circle');
      break;
    }
  }
}

function handleCarouselSwap3(event) {
  for (var i = 0; i < $circle.length; i++) {
    if (event.target === $circle[0]) {
      $carouselTitle.textContent = carouselTitleArray[0];
      $carouselText.textContent = carouselTextArray[0];
      $carouselImage.setAttribute('src', 'images/carousel-image-1.webp');
      $circle[0].setAttribute('class', 'fa-solid fa-circle');
      $circle[1].setAttribute('class', 'fa-regular fa-circle');
      $circle[2].setAttribute('class', 'fa-regular fa-circle');
      break;
    } else if (event.target === $circle[1]) {
      $carouselTitle.textContent = carouselTitleArray[1];
      $carouselText.textContent = carouselTextArray[1];
      $carouselImage.setAttribute('src', 'images/carousel-image-2.webp');
      $circle[0].setAttribute('class', 'fa-regular fa-circle');
      $circle[1].setAttribute('class', 'fa-solid fa-circle');
      $circle[2].setAttribute('class', 'fa-regular fa-circle');
      break;
    } else if (event.target === $circle[2]) {
      $carouselTitle.textContent = carouselTitleArray[2];
      $carouselText.textContent = carouselTextArray[2];
      $carouselImage.setAttribute('src', 'images/carousel-image-3.webp');
      $circle[0].setAttribute('class', 'fa-regular fa-circle');
      $circle[1].setAttribute('class', 'fa-regular fa-circle');
      $circle[2].setAttribute('class', 'fa-solid fa-circle');
      break;
    }
  }
}

// function rotation() {
//   handleCarouselSwap2();
// }

// setInterval(rotation, 5000);
