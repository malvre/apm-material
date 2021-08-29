import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SearchPipe } from './pipes/search.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ConfirmService } from './services/confirm.service';

import { PrintErrorComponent } from './components/print-error/print-error.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [ConfirmComponent, SearchPipe, PrintErrorComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    CommonModule,
    ConfirmComponent,
    SearchPipe,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PrintErrorComponent,
  ],
  providers: [ConfirmService, MatDatepickerModule],
})
export class SharedModule {}
