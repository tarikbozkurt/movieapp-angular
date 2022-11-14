import { Movie } from "./movie";

export class MovieRepository {

    private movies: Movie[];

    constructor() {
        this.movies = [

            { id: 2, title: "film 2", description: "Deneme Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sint. Tempore qui vero tempora, assumenda, voluptates ullam ab eos aperiam minus nihil labore repellendus amet modi esse veniam hic cumque", imgUrl: "2.jpeg", isPopular: true, datePublished: new Date(1990, 10, 10) },
            { id: 3, title: "film 3", description: "fLorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sint. Tempore qui vero tempora, assumenda, voluptates ullam ab eos aperiam minus nihil labore repellendus amet modi esse veniam hic cumque", imgUrl: "3.jpeg", isPopular: false, datePublished: new Date(1990, 10, 10) },
            { id: 4, title: "film 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sint. Tempore qui vero tempora, assumenda, voluptates ullam ab eos aperiam minus nihil labore repellendus amet modi esse veniam hic cumque", imgUrl: "4.jpeg", isPopular: true, datePublished: new Date(1990, 10, 10) },
            { id: 5, title: "film 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sint. Tempore qui vero tempora, assumenda, voluptates ullam ab eos aperiam minus nihil labore repellendus amet modi esse veniam hic cumque", imgUrl: "4.jpeg", isPopular: true, datePublished: new Date(1990, 10, 10) }
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