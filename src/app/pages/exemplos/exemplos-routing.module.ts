import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: 'dialogs', pathMatch: 'full' },
  { path: 'dialogs', component: DialogsComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'event-emitter', component: EventEmitterComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplosRoutingModule {}
