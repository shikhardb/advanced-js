/*
 * 'Promise.all'
 * Accepts an array of promises and resolves all of them or rejects once a single one of them have been rejected
 * Returns an array sequntially
 */

function getMovie(title) {
  return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');

Promise.all([titanicPromise, shrekPromise, braveheartPromise]).then(function(
  movies
) {
  return movies.forEach(function(value) {
    console.log(value.Year);
  });
});
