import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IMovie } from 'src/app/core/models/movie';

import { MovieService } from 'src/app/core/services/movie.service';
import { FormModalComponent } from './form-modal/form-modal.component';

interface IMovieWithSelection extends IMovie {
  checked?: boolean;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  movies: IMovieWithSelection[] = [];
  selectAll: boolean = false;
  searchTerm: string = '';

  constructor(
    private movieService: MovieService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
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
        panelClass: ['danger-snackbar'],
      });
    }
  }

  /***
   * abre modal com componente e recebe dados de volta
   */
  edit(movie: IMovie) {
    const dialogRef = this.dialog.open(FormModalComponent, {
      width: '500px',
      data: movie,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
