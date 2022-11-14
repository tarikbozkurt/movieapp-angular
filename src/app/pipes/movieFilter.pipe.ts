
import { Pipe, PipeTransform } from "@angular/core";
import { Movie } from "../models/movie";


@Pipe({
    name: 'movieFilter'
})
export class MovieFilter implements PipeTransform {



    transform(movies: Movie[], searchMovie: string): Movie[] {

        searchMovie = searchMovie.toLowerCase();

        console.log(searchMovie);
        console.log(movies);

        // Burada searchMovie Varsa eğer movies'i filter ile her bir elemanının title ını lambda fonksiyonu ile geziyoruz.. bu değer -1 se eğer öyle bir değer yok anlamına gelir.. searchMovie yoksa eğer movies'i geri yönelendiririz.
        return searchMovie ? movies.filter((m: Movie) =>
            m.title.toLowerCase().indexOf(searchMovie) !== -1 || m.description.toLowerCase().indexOf(searchMovie) !== -1) : movies;

        // hepsini düzgün aram için küçük harfe çevirirz. -1 den büyükse 0,1,2.. bulmuştur demektir..

    }
}