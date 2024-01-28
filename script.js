class Movies {
    constructor(title, genre, rentalPeriod, isRented = false) {
        this.title = title;
        this.genre = genre;
        this.rental_period = rentalPeriod;
        this.isRented = isRented;
    }
}

class MovieStore {
    constructor(storeName) {
        this.store_name = storeName;
        this.movies = [];
    }

    addMovie = (title, genre, rentalPeriod, isRented) => {
        const movie = new Movies(title, genre, rentalPeriod, isRented);

        this.movies.push(movie);

        return movie;
    }

   
    searchMovie = (title) => {
        const movieSearch = this.movies.find(movie => movie.title === title);

        return movieSearch;
    }

    rentMovie = (title) => {
       const movie = this.searchMovie(title);

        if (movie && movie.isRented) {
            return `The movie "${movie.title}" has been rented by someone.`
        }
        else if (movie && !movie.isRented) {
            movie.isRented = true;

            return `You have rented the movie "${movie.title}"`;
        }
        else {
            return `"${title}" is not available in our store right now! Check back later.`
        }
    }

    returnMovie = (title) => {
        const movie = this.searchMovie(title);

        if (movie && movie.isRented === true) {
            movie.isRented = false;

            return `You have returned the movie "${movie.title}". Thanks for your patronage!`
        }
        else if (movie && movie.isRented === false) {
            return `We haven't rented the movie "${movie.title}" out.`
        }
        else {
            return `The movie "${title}" is not available in our store right now!`
        }
    }
}


const movieStore = new MovieStore();
const movies = new Movies()

//ADD MOVIES
const movie1 = movieStore.addMovie("inception", "action", '1 week');
const movie2 = movieStore.addMovie('love', "romance", "2 days", true);
const movie3 = movieStore.addMovie('berlin', "slice of life", "3 days");


//RENT & RETURN MOVIES
console.log(movieStore.rentMovie('inception'));
console.log(movieStore.returnMovie('berlin'));