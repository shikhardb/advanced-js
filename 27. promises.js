/*
 * Promises
 * One time guaranteed return of some future value
 * When that value is figured out, the promise is resolved/fulfilled or rejected
 * Friendly way to refactor callback code
 */

var years = [];

$.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb')
  .then(function(movie) {
    years.push(movie.Year);
    return $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
  })
  .then(function(movie) {
    years.push(movie.Year);
    console.log(years);
  });

console.log('ALL DONE!');
