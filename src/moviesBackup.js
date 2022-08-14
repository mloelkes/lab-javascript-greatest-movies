// The `movies` array from the file `src/data.js`.

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(function (movie) {
    return movie.director;
  });
}

function getAllDirectorsUnique(movies) {
  return movies
    .map((movie) => movie.director)
    .filter((director, i, movies) => {
      return movies.indexOf(director) === i;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  let totalScore = movies.reduce(function (accScore, movie) {
    if (typeof movie.score === 'number') {
      return accScore + movie.score;
    }

    return accScore;
  }, 0);

  return Number((totalScore / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes('Drama');
  });

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return movies.slice().sort((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let moviesCopy = JSON.parse(JSON.stringify(movies));

  return moviesCopy.map(function (movie) {
    movie.duration = movie.duration
      .split(' ')

      .map(function (hourMin) {
        return Number(hourMin.match(/[0-9]+/g));
      })

      .reduce(function (durationMin, hourMin, index) {
        if (index === 0) {
          return durationMin + hourMin * 60;
        }

        return durationMin + hourMin;
      }, 0);

    return movie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
