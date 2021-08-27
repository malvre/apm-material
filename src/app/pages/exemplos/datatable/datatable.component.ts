import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  movies: any[] = [];
  displayedColumns: string[] = ['imdbID', 'Title', 'Type', 'Year'];
  selectAll: boolean = false;
  searchTerm: string = '';

  constructor(
    private movieService: MovieService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.movieService.findAll('lost').subscribe((result) => {
      this.movies = result.Search;
    });
  }

  /***
   * marca e desmarca todos os itens
   */
  updateCheck() {
    if (this.selectAll === true) {
      this.movies.map((movie) => (movie.checked = true));
    } else {
      this.movies.map((movie) => (movie.checked = false));
    }
  }

  /***
   * exibe os itens selecionados
   */
  showSelectedMovies() {
    // pega os IDs dos filmes selecionados
    const selectedMovies = this.movies
      .filter((movie) => movie.checked === true)
      .map((movie) => movie.imdbID);

    // exibe os filmes selecionados
    if (selectedMovies.length > 0) {
      this.snackbar.open(selectedMovies.join(', '), 'OK');
    } else {
      this.snackbar.open('Selecione pelo menos um filme', undefined, {
        duration: 2000,
      });
    }
  }
}
