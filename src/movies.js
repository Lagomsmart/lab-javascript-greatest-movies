// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {

    let directors = movies.map((movie) => {
        return movie.director
    })
    return directors;
}

const getAllDirectors = movies.map((directors) => {
    return movie.director
})

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
    let spielbergMovies = movies.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes(`Drama`)
    })
    return spielbergMovies.length
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length < 1) return 0;

    let rates = movies.reduce((acc, movie) => {
        if (movie.rate === undefined) {
            return
        }
        return acc + movie.rate
    }, 0)

    let final = (rates / movies.length).toFixed(2)
    return Number(final)
}

// function ratesAverage(movies) {
//     if (movies.length < 1) return 0;
//     let rates = 0
//         for (movie of movies) {
//             rates += movie.rate
//         }
//     let final = (rates / movies.length).toFixed(2)
//     return Number(final)
// }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter((movie) => {
        return movie.genre.includes(`Drama`)
    })
    return ratesAverage(dramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// let orderByYear = movies.map((movies) => {
//     let sortYear = movies.sort((a, b) => {
//         if (a.year < b.year) {
//             return -1
//         }
//         if (a.year > b.year) {
//             return 1
//         }
//         if (a.year == b.year) {
//             return 0
//         }
//     })
//     return sortYear
// })

function orderByYear(movies) {

    let sortYear = movies.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        }
        if (a.year > b.year) {
            return 1
        }
        if (a.year == b.year) {
            return 0
        }
    })

    return sortYear
}

// let sortYear = movies.sort((a, b) => {
//     if (a.year < b.year) {
//         return -1
//     }
//     if (a.year > b.year) {
//         return 1
//     }
//     if (a.year == b.year) {
//         return 0
//     }
// })


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let newArr = [...arr];
    newArr.sort(function (a, b) {
        return (a.title.localeCompare(b.title))

    })
    console.log(newArr)

    let firstTwenty = newArr.slice(0, 20).map((a) => {
        console.log(a)
        return a.title

    })
    return firstTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
