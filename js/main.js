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

// Public API XMLHttpRequest //

// var targetUrl = encodeURIComponent('https://api.punkapi.com/v2/beers');

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
//   var recipes = xhr.response;
// });
// xhr.send();

// Recipes "Thumbnail" List Render //

var recipesList = [
  {
    name: 'Buzz',
    imageUrl: 'images/beer-photo-1.webp',
    id: 1,
    abv: 4.5,
    ibu: 60
  },
  {
    name: 'Trashy Blonde',
    imageUrl: 'images/beer-photo-2.webp',
    id: 2,
    abv: 4.1,
    ibu: 41.5
  },
  {
    name: 'Berliner Weisse',
    imageUrl: 'images/beer-photo-6.webp',
    id: 3,
    abv: 4.2,
    ibu: 8
  },
  {
    name: 'Pilsen Lager',
    imageUrl: 'images/beer-photo-3.webp',
    id: 4,
    abv: 6.3,
    ibu: 55
  },
  {
    name: 'Avery Brown Dredge',
    imageUrl: 'images/beer-photo-9.webp',
    id: 5,
    abv: 7.2,
    ibu: 59
  },
  {
    name: 'Electric India',
    imageUrl: 'images/beer-photo-7.webp',
    id: 6,
    abv: 5.2,
    ibu: 38
  },
  {
    name: 'AB:12',
    imageUrl: 'images/beer-photo-5.webp',
    id: 7,
    abv: 11.2,
    ibu: 35
  },
  {
    name: 'Fake Lager',
    imageUrl: 'images/beer-photo-4.webp',
    id: 8,
    abv: 4.7,
    ibu: 40
  },
  {
    name: 'AB:07',
    imageUrl: 'images/beer-photo-1.webp',
    id: 9,
    abv: 12.5,
    ibu: 30
  },
  {
    name: 'Bramling X',
    imageUrl: 'images/beer-photo-6.webp',
    id: 10,
    abv: 7.5,
    ibu: 75
  },
  {
    name: 'Misspent Youth',
    imageUrl: 'images/beer-photo-2.webp',
    id: 11,
    abv: 7.3,
    ibu: 30
  },
  {
    name: 'Arcade Nation',
    imageUrl: 'images/beer-photo-8.webp',
    id: 12,
    abv: 5.3,
    ibu: 60
  },
  {
    name: 'Movember',
    imageUrl: 'images/beer-photo-4.webp',
    id: 13,
    abv: 4.5,
    ibu: 50
  },
  {
    name: 'Alpha Dog',
    imageUrl: 'images/beer-photo-3.webp',
    id: 14,
    abv: 4.5,
    ibu: 42
  },
  {
    name: 'Mixtape 8',
    imageUrl: 'images/beer-photo-8.webp',
    id: 15,
    abv: 14.5,
    ibu: 50
  },
  {
    name: 'Libertine Porter',
    imageUrl: 'images/beer-photo-5.webp',
    id: 16,
    abv: 6.1,
    ibu: 45
  },
  {
    name: 'AB:06',
    imageUrl: 'images/beer-photo-9.webp',
    id: 17,
    abv: 11.2,
    ibu: 150
  },
  {
    name: 'Russian Doll IPA',
    imageUrl: 'images/beer-photo-2.webp',
    id: 18,
    abv: 6,
    ibu: 70
  },
  {
    name: 'Hello My Name Is Mette-Marit',
    imageUrl: 'images/beer-photo-6.webp',
    id: 19,
    abv: 8.2,
    ibu: 70
  },
  {
    name: 'Rabiator',
    imageUrl: 'images/beer-photo-4.webp',
    id: 20,
    abv: 10.27,
    ibu: 26
  },
  {
    name: 'Vice Bier',
    imageUrl: 'images/beer-photo-3.webp',
    id: 21,
    abv: 4.3,
    ibu: 25
  },
  {
    name: 'Devine Rebel',
    imageUrl: 'images/beer-photo-7.webp',
    id: 22,
    abv: 12.5,
    ibu: 100
  },
  {
    name: 'Storm',
    imageUrl: 'images/beer-photo-4.webp',
    id: 23,
    abv: 8,
    ibu: 60
  },
  {
    name: 'The End Of History',
    imageUrl: 'images/beer-photo-9.webp',
    id: 24,
    abv: 55,
    ibu: null
  }
];

function renderThumbnails(beer) {
  var divColumnSixth = document.createElement('div');
  divColumnSixth.setAttribute('class', 'column-sixth');

  var aTag = document.createElement('a');
  aTag.setAttribute('class', 'a-tag');
  divColumnSixth.appendChild(aTag);

  var divCard = document.createElement('div');
  divCard.setAttribute('class', 'div-card');
  aTag.appendChild(divCard);

  var beerImage = document.createElement('img');
  beerImage.setAttribute('class', 'beer-image');
  beerImage.setAttribute('src', beer.imageUrl);
  divCard.appendChild(beerImage);

  var divCardText = document.createElement('div');
  divCardText.setAttribute('class', 'div-card-text');
  divCard.appendChild(divCardText);

  var beerName = document.createElement('h2');
  beerName.textContent = beer.name;
  beerName.setAttribute('class', 'beer-name');
  divCardText.appendChild(beerName);

  var details = document.createElement('h3');
  details.setAttribute('class', 'details-text');
  details.textContent = 'ABV: ' + beer.abv + ' IBU: ' + beer.ibu;
  divCardText.appendChild(details);

  return divColumnSixth;
}

var $recipesRow = document.querySelector('#recipes-row');

for (var i = 0; i < recipesList.length; i++) {
  var result = renderThumbnails(recipesList[i]);
  $recipesRow.appendChild(result);
}

// View Swapping Functionality //

var $view = document.querySelectorAll('.view');
var $mainTitleLink = document.querySelector('.main-title');
var $recipeLink = document.querySelector('.recipe-link');

function handleViewSwap(string) {
  for (var i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === string) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
}

$mainTitleLink.addEventListener('click', function () {
  handleViewSwap(event.target.getAttribute('data-view'));
});

$recipeLink.addEventListener('click', function () {
  handleViewSwap(event.target.getAttribute('data-view'));
});
