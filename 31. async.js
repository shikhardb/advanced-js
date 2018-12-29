/*
 * Async functions
 * Special kind of function that is created using the word async
 * The purpose of async functions is to simplify writing asynchronous code, specifically Promises
 * Await pauses the execution of the async function and is followed by a Promise. The await keyword waits for the promise to resolve, and then resumes the async functions's execution and returns the resolved value.
 */

async function getMovieData() {
  console.log('starting!');
  var movieData = await $.getJSON(
    'https://omdbapi.com?t=titanic&apikey=thewdb'
  );
  // this line does not run until the promise is resolved
  console.log('all done!');
  console.log(movieData);
}
getMovieData(); // logs an object wuth data about the movie
