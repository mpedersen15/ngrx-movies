import { Action } from '@ngrx/store';
import { Movie } from '../../core/models/movie.model';

export enum MovieActionTypes {
    AddMovie = '[Movie] Add Movie',
    DeleteMovie = '[Movie] Delete Movie',
    WatchMovie = '[Movie] Watch Movie'
}

export class AddMovie implements Action {
    readonly type = MovieActionTypes.AddMovie;

    constructor(public payload: { movie: Movie }) {}
}

export class DeleteMovie implements Action {
    readonly type = MovieActionTypes.DeleteMovie;

    constructor(public payload: { id: number }) {}
}

export class WatchMovie implements Action {
    readonly type = MovieActionTypes.WatchMovie;

    constructor(public payload: { id: number }) {}
}

export type MovieAction = AddMovie | DeleteMovie | WatchMovie;
