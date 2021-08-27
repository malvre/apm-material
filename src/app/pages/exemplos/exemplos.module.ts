import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExemplosRoutingModule } from './exemplos-routing.module';

import { DialogsComponent } from './dialogs/dialogs.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatatableComponent } from './datatable/datatable.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { HeaderComponent } from './event-emitter/header/header.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    DialogsComponent,
    AutocompleteComponent,
    EventEmitterComponent,
    HeaderComponent,
    DatatableComponent,
    SearchPipe,
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    ExemplosRoutingModule,
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
  ],
})
export class ExemplosModule {}
