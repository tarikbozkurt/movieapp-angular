import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  title: string = "Film Listesi";
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;

  searchMovie: string = "";


  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();


  }

  ngOnInit(): void {
  }

  // direkt public olduğu için ulaşılabilir
  // movies = ["film 1", "film 2", "film 3"];







}
