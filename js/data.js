/* exported data */
/* exported recipesList */

var data = {
  view: 'new-post-page',
  posts: [],
  editing: null,
  nextPostId: 1
};

window.addEventListener('beforeunload', handleBeforeUnload);

var previousDataJSON = localStorage.getItem('javascript-local-storage-Brew-Base');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function handleBeforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage-Brew-Base', dataJSON);
}

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
