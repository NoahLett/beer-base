/* exported data */

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
