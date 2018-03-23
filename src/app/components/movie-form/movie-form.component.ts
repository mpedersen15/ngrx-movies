import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  @Output() addMovie = new EventEmitter<String>();
  constructor(private fb: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.movieForm = this.fb.group({
      title: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log('Submitting the form!');
    if (this.movieForm.valid) {
      this.addMovie.emit(this.movieForm.get('title').value);
      this.movieForm.reset();
    }
  }
}
