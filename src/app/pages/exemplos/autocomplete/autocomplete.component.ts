import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  searchMoviesCtrl = new FormControl();
  idMovie: string = '';
  filteredMovies: any;
  isLoading: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(400),
        tap(() => {
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap((value) =>
          this.movieService.findAll(value).pipe(
            finalize(() => {
              this.isLoading = false;
            })
          )
        )
      )
      .subscribe((data: any) => {
        if (data.Search == undefined) {
          this.filteredMovies = [];
          this.idMovie = '';
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
