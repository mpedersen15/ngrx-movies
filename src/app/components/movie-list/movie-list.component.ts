import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies;
  @Output() deleteMovie = new EventEmitter<number>();
  @Output() watchMovie = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(id: number) {
    this.deleteMovie.emit(id);
  }

  onWatched(id: number) {
    this.watchMovie.emit(id);
  }

}
