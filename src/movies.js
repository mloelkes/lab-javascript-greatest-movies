function getAllDirectors(movies) {
    return movies.map((movie) => movie.director);
}

function getAllDirectorsUnique(movies) {
    return movies
    .map((movie) => movie.director)
    .filter((director, i, movies) => {
        return movies.indexOf(director) === i;
    });
}

function howManyMovies(movies) {
  return movies.filter((movie) => {
    return (
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    );
  }).length;
}

function scoresAverage(movies) {
    if (movies.length === 0) return 0;

    const totalScore = movies.reduce((acc, val) => {
        if (!val.score) return acc;

        return acc + val.score;
    }, 0);

    return Number((totalScore / movies.length).toFixed(2));
}

function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));

    return scoresAverage(dramaMovies);
}

function orderByYear(movies) {
    return movies.slice().sort((a, b) => {
        return a.year - b.year || a.title.localeCompare(b.title);
    });
}

function orderAlphabetically(movies) {
    return movies
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

function turnHoursToMinutes(movies) {
    return movies.map((movie) => {
        let minutes = 0;
        let hoursInMinutes = 0;
        
        if (movie.duration.includes("m")) {
            minutes = Number(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m')));
        }

        if (movie.duration.includes("h")) {
            hoursInMinutes = Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60
        }
    
        return { ...movie, duration: minutes + hoursInMinutes };
    })
}

function bestYearAvg (movies) {
    if (movies.length === 0) return null;
    
    const years = [...new Set(movies.map(movie => movie.year))];
    const scoresByYear = [];
    
    years.forEach(year => {
        scoresByYear.push({year, score: scoresAverage(movies.filter(movie => {
            return movie.year === year;
        }))});
    })
    
    const scoresByYearSorted = scoresByYear.sort((a, b) => {
        return b.score - a.score === 0 ? a.year - b.year : b.score - a.score;
    });
  
    const best = scoresByYearSorted[0];

    return `The best year was ${best.year} with an average score of ${best.score}`;
}

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
