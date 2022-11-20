// Carousel Functionality //

var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $carouselTitle = document.querySelector('.carousel-title');
var $carouselText = document.querySelector('.carousel-text');
var $carouselImage = document.querySelector('.carousel-image');
var $circle = document.querySelectorAll('.fa-regular');
var $spanBox = document.querySelector('.span-box');
var $postForm = document.querySelector('.new-post-form');
var $view = document.querySelectorAll('.view');
var $mainTitleLink = document.querySelector('.main-title');
var $recipeLink = document.querySelector('.recipe-link');
var $newPostLink = document.querySelector('.post-link');
var $feedLink = document.querySelector('.feed-link');
var $noContent = document.querySelector('.no-content-box');
var $postButton = document.querySelector('.post-button');
var $postPhotoFile = document.querySelector('input.post-photo-file');
var $newPostImage = document.querySelector('img.new-post-image');
var $selectedFile = document.getElementById('photo-file');
var $formResults = document.querySelector('.form-results');

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

function rotation() {
  handleCarouselSwap2();
}

setInterval(rotation, 5000);

// Recipes "Thumbnail" List Render and Filter Functionality //

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
  aTag.setAttribute('data-beer-id', beer.id);
  aTag.setAttribute('data-view', 'recipe-details');
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
var $abvOption = document.querySelectorAll('.abv-option');
var $ibuOption = document.querySelectorAll('.ibu-option');
var $filterForm = document.querySelector('.filter-form');

for (var i = 0; i < recipesList.length; i++) {
  var result = renderThumbnails(recipesList[i]);
  $recipesRow.appendChild(result);
}

$filterForm.addEventListener('input', checkFilters);
$filterForm.addEventListener('input', lockFilter);

function checkFilters(event) {
  if (event.target.closest('select').getAttribute('id') === 'abv-filter') {
    for (var i = 0; i < $abvOption.length; i++) {
      if ($abvOption[i].value !== '') {
        $recipesRow.textContent = '';
        for (var x = 0; x < recipesList.length; x++) {
          if (recipesList[x].abv < Number(event.target.value)) {
            var result1 = renderThumbnails(recipesList[x]);
            $recipesRow.appendChild(result1);
          }
        }
      } else if (event.target.value === '') {
        $recipesRow.textContent = '';
        for (var y = 0; y < recipesList.length; y++) {
          var result2 = renderThumbnails(recipesList[y]);
          $recipesRow.appendChild(result2);
        }
        break;
      }
    }
  } else if (event.target.closest('select').getAttribute('id') === 'ibu-filter') {
    for (var z = 0; z < $ibuOption.length; z++) {
      if ($ibuOption[z].value !== '') {
        $recipesRow.textContent = '';
        for (var a = 0; a < recipesList.length; a++) {
          if (recipesList[a].ibu < Number(event.target.value)) {
            var result3 = renderThumbnails(recipesList[a]);
            $recipesRow.appendChild(result3);
          }
        }
      } else if (event.target.value === '') {
        $recipesRow.textContent = '';
        for (var b = 0; b < recipesList.length; b++) {
          var result4 = renderThumbnails(recipesList[b]);
          $recipesRow.appendChild(result4);
        }
        break;
      }
    }
  }
}

function lockFilter(event) {
  if (event.target.closest('select').getAttribute('id') === 'abv-filter' && event.target.value !== '') {
    document.forms[0].elements['ibu-filter'].setAttribute('disabled', 'disabled');
  } else if (event.target.closest('select').getAttribute('id') === 'abv-filter' && event.target.value === '') {
    document.forms[0].elements['ibu-filter'].removeAttribute('disabled', 'disabled');
  } else if (event.target.closest('select').getAttribute('id') === 'ibu-filter' && event.target.value !== '') {
    document.forms[0].elements['abv-filter'].setAttribute('disabled', 'disabled');
  } else if (event.target.closest('select').getAttribute('id') === 'ibu-filter' && event.target.value === '') {
    document.forms[0].elements['abv-filter'].removeAttribute('disabled', 'disabled');
  }
}

// Public API XMLHttpRequest Function//

var $recipesBox = document.querySelector('.recipes-box');
var $beerTitle = document.querySelector('.beer-title');
var $tagLine = document.querySelector('.tag-line');
var $description = document.querySelector('.description');
var $tip = document.querySelector('.tip');
var $hops = document.querySelector('.hops-list');
var $malts = document.querySelector('.malts-list');
var $yeast = document.querySelector('.yeast-list');
var $fermentation = document.querySelector('.fermentation-list');
var $mash = document.querySelector('.mash-list');
var $stats = document.querySelector('.stats-list');

$recipesBox.addEventListener('click', handleRecipeRequest);

var targetUrl = encodeURIComponent('https://api.punkapi.com/v2/beers');

function handleRecipeRequest(event) {
  if (event.target.closest('a').getAttribute('data-beer-id')) {
    $hops.textContent = '';
    $malts.textContent = '';
    $yeast.textContent = '';
    $fermentation.textContent = '';
    $mash.textContent = '';
    $stats.textContent = '';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      var recipes = xhr.response;
      for (var i = 0; i < recipes.length; i++) {
        if (Number(event.target.closest('a').getAttribute('data-beer-id')) === (recipes[i].id)) {
          $beerTitle.textContent = recipes[i].name;
          $tagLine.textContent = recipes[i].tagline;
          $description.textContent = recipes[i].description;
          $tip.textContent = recipes[i].brewers_tips;
          for (var x = 0; x < recipes[i].ingredients.hops.length; x++) {
            var hopsItem = document.createElement('li');
            hopsItem.textContent = recipes[i].ingredients.hops[x].name + ', ' + recipes[i].ingredients.hops[x].amount.value + ' g, ' + recipes[i].ingredients.hops[x].add;
            $hops.appendChild(hopsItem);
          }
          for (var y = 0; y < recipes[i].ingredients.malt.length; y++) {
            var maltsItem = document.createElement('li');
            maltsItem.textContent = recipes[i].ingredients.malt[y].name + ', ' + recipes[i].ingredients.malt[y].amount.value + ' kg';
            $malts.appendChild(maltsItem);
          }
          var yeastItem = document.createElement('li');
          yeastItem.textContent = recipes[i].ingredients.yeast;
          $yeast.appendChild(yeastItem);

          var fermentationItem = document.createElement('li');
          fermentationItem.textContent = recipes[i].method.fermentation.temp.value + ' ' + recipes[i].method.fermentation.temp.unit;
          $fermentation.appendChild(fermentationItem);

          var mashItem = document.createElement('li');
          mashItem.textContent = recipes[i].method.mash_temp[0].temp.value + ' ' + recipes[i].method.mash_temp[0].temp.unit + ', ' + recipes[i].method.mash_temp[0].duration + ' mins';
          $mash.appendChild(mashItem);

          var statsItem1 = document.createElement('li');
          statsItem1.textContent = 'pH: ' + recipes[i].ph;
          $stats.appendChild(statsItem1);

          var statsItem2 = document.createElement('li');
          statsItem2.textContent = 'Boil Volume: ' + recipes[i].boil_volume.value + ' ' + recipes[i].boil_volume.unit;
          $stats.appendChild(statsItem2);

          var statsItem3 = document.createElement('li');
          statsItem3.textContent = 'Volume: ' + recipes[i].volume.value + ' ' + recipes[i].volume.unit;
          $stats.appendChild(statsItem3);

          var statsItem4 = document.createElement('li');
          statsItem4.textContent = 'IBU: ' + recipes[i].ibu;
          $stats.appendChild(statsItem4);

          var statsItem5 = document.createElement('li');
          statsItem5.textContent = 'ABV: ' + recipes[i].abv;
          $stats.appendChild(statsItem5);

          var statsItem6 = document.createElement('li');
          statsItem6.textContent = 'EBC: ' + recipes[i].ebc;
          $stats.appendChild(statsItem6);
        }
      }
    });
    xhr.send();
    handleViewSwap('recipe-details');
  }
}

// Image Placeholder Function //

$postPhotoFile.addEventListener('input', handleFileInput);

var objectURL = '';

function handleFileInput(event) {
  if ($postPhotoFile.value !== '') {
    var fileObject = $selectedFile.files[0];
    objectURL = window.URL.createObjectURL(fileObject);
    $newPostImage.setAttribute('src', objectURL);
  } else {
    $newPostImage.setAttribute('src', 'images/placeholder-image.jpg');
  }
}

// Submit Post Function //

$postForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var obj = {};
  var $title = document.forms[1].elements.title.value;
  var $photoFile = objectURL;
  var $content = document.forms[1].elements.content.value;
  obj.title = $title;
  obj.photoFile = $photoFile;
  obj.content = $content;
  obj.postId = data.nextPostId;
  document.forms[1].reset();
  $newPostImage.setAttribute('src', 'images/placeholder-image.jpg');
  data.posts.unshift(obj);
  data.nextPostId++;
  $formResults.prepend(renderPost(obj));
}

// DOM Tree Post Creation Function //

function renderPost(obj) {
  var $li = document.createElement('li');
  $li.setAttribute('data-post-id', obj.postId);

  var $divPost = document.createElement('div');
  $divPost.setAttribute('class', 'post');
  $li.appendChild($divPost);

  var $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  $divPost.appendChild($divRow);

  var $divColumnThird = document.createElement('div');
  $divColumnThird.setAttribute('class', 'column-third');
  $divRow.appendChild($divColumnThird);

  var $imgPicture = document.createElement('img');
  $imgPicture.setAttribute('src', obj.photoFile);
  $imgPicture.setAttribute('class', 'picture');
  $divColumnThird.appendChild($imgPicture);

  var $divColumnTwoThirds = document.createElement('div');
  $divColumnTwoThirds.setAttribute('class', 'column-two-thirds');
  $divRow.appendChild($divColumnTwoThirds);

  var $divTopic = document.createElement('div');
  $divTopic.setAttribute('class', 'row');
  $divColumnTwoThirds.appendChild($divTopic);

  var $divTopicThreeFourths = document.createElement('div');
  $divTopicThreeFourths.setAttribute('class', 'column-three-fourths');
  $divTopic.appendChild($divTopicThreeFourths);

  var $h2Topic = document.createElement('h2');
  $h2Topic.setAttribute('class', 'topic');
  $h2Topic.textContent = obj.title;
  $divTopicThreeFourths.appendChild($h2Topic);

  var $divTopicOneFourth = document.createElement('div');
  $divTopicOneFourth.setAttribute('class', 'column-one-fourth pen-box');
  $divTopic.appendChild($divTopicOneFourth);

  var $iPen = document.createElement('i');
  $iPen.setAttribute('class', 'fa-solid fa-pen-to-square');
  $iPen.setAttribute('data-view', 'new-post-page');
  $iPen.setAttribute('data-post-id', obj.postId);
  $divTopicOneFourth.appendChild($iPen);

  var $iTrash = document.createElement('i');
  $iTrash.setAttribute('class', 'fa-regular fa-trash-can');
  $iTrash.setAttribute('data-post-id', obj.postId);
  $divTopicOneFourth.appendChild($iTrash);

  var $divContent1 = document.createElement('div');
  $divColumnTwoThirds.appendChild($divContent1);

  var $pContent1 = document.createElement('p');
  $pContent1.setAttribute('class', 'content');
  $pContent1.textContent = obj.content;
  $divContent1.appendChild($pContent1);

  return $li;
}

function createPosts(event) {
  for (var i = 0; i < data.posts.length; i++) {
    var result = renderPost(data.posts[i]);
    $formResults.prepend(result);
  }
}

// View Swapping Functionality //

$postForm.addEventListener('submit', handleContentSwap);

function handleViewSwap(string) {
  data.view = string;
  for (var i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === string) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
}

function handleContentSwap(event) {
  if (data.posts.length === 0) {
    $noContent.className = 'no-content-box';
  } else {
    $noContent.className = 'no-content-box hidden';
  }
}

function handleFormClear(event) {
  data.view = 'new-post-page';
  $postForm.reset();
  window.location.reload(false);
}

$mainTitleLink.addEventListener('click', function () {
  handleViewSwap(event.target.getAttribute('data-view'));
});

$recipeLink.addEventListener('click', function () {
  handleViewSwap(event.target.getAttribute('data-view'));
});

$newPostLink.addEventListener('click', handleFormClear);

$newPostLink.addEventListener('click', function () {
  handleViewSwap(event.target.getAttribute('data-view'));
});

$feedLink.addEventListener('click', function () {
  handleViewSwap(event.target.getAttribute('data-view'));
});

$postButton.addEventListener('click', function (event) {
  handleViewSwap(event.target.getAttribute('data-view'));
});

window.addEventListener('DOMContentLoaded', function (event) {
  createPosts();
  handleContentSwap();
  handleViewSwap(data.view);
});
