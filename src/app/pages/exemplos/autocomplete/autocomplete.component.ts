import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  searchMoviesCtrl = new FormControl();
  idMovie: string = '';
  filteredMovies: any;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.filteredMovies = [];
        }),
        switchMap((value) => this.movieService.findAll(value))
      )
      .subscribe((data: any) => {
        if (data.Search == undefined) {
          this.filteredMovies = [];
        } else {
          this.filteredMovies = data.Search;
        }
      });
  }

  public displayProperty(value: any) {
    if (value) {
      return value.Title;
    }
  }

  onSelect(e: any) {
    this.idMovie = e.option.value.imdbID;
  }
}
