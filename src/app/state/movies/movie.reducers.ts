import { Action } from '@ngrx/store';
import { MovieActionTypes, MovieAction } from './movie.actions';

export const initialState = [];

export function movieReducer(state = initialState, action: MovieAction) {
    switch(action.type) {
        case MovieActionTypes.AddMovie:
            return [...state, { ...action.payload.movie, watched: false }]
        case MovieActionTypes.DeleteMovie:
            return state.filter(movie => movie.id !== action.payload.id);
        case MovieActionTypes.WatchMovie:
            return state.map(movie => movie.id === action.payload.id ? { ...movie, watched: !movie.watched } : movie);
        default:
            return state;
    }
}