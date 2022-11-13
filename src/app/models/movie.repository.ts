import { Movie } from "./movie";

export class MovieRepository {

    private movies: Movie[];

    constructor() {
        this.movies = [

            { id: 2, title: "film 2", description: "film 2 açıklama", imgUrl: "2.jpeg", isPopular: true },
            { id: 3, title: "film 3", description: "film 3 açıklama", imgUrl: "3.jpeg", isPopular: false },
            { id: 4, title: "film 4", description: "film 4 açıklama", imgUrl: "4.jpeg", isPopular: true },
            { id: 5, title: "film 5", description: "film 4-2 açıklama", imgUrl: "4.jpeg", isPopular: true }
        ]
    }

    getMovies(): Movie[] {
        return this.movies;

    }

    getPopularMovies(): Movie[] {
        return this.movies.filter(i => i.isPopular);

    }


    getMovieById(id: number): Movie {
        return this.movies.find(i => i.id == id);
    }

}