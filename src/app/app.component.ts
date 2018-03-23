import { MovieAction } from './state/movies/movie.actions';
import { Component } from '@angular/core';
import { Movie } from './core/models/movie.model';
import { Store, select } from '@ngrx/store';
import * as MovieActions from './state/movies/movie.actions';
import { Observable } from 'rxjs/Observable';
interface AppState  {
  movies: Movie[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentId: number = 0;
  movies$: Observable<Array<Movie>>;

  constructor(private store: Store<AppState>) {
    this.movies$ = store.pipe(select('movies'));
  }

  addMovie(title: string) {
    this.store.dispatch(new MovieActions.AddMovie({
      movie: new Movie(this.currentId++, title)
    }));
  }

  deleteMovie(id: number) {
    this.store.dispatch(new MovieActions.DeleteMovie({ id }));
  }

  watchMovie(id: number) {
    this.store.dispatch(new MovieActions.WatchMovie({ id }));
  }
}
