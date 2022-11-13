import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ //componentleri otomatik "">ng g c" ile ekliyor..
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent
  ],
  imports: [   // Modül, routing, form vb buradan ekliyoruz.
    BrowserModule
  ],
  providers: [],  //services 
  bootstrap: [AppComponent]  //starter component ( uygulama çalıştığı an çağırılacak)
})
export class AppModule { }
