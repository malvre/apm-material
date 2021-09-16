import { NgModule } from '@angular/core';

import { ExemplosRoutingModule } from './exemplos-routing.module';

import { DialogsComponent } from './dialogs/dialogs.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatatableComponent } from './datatable/datatable.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';

import { FormularioComponent } from './formulario/formulario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormModalComponent } from './datatable/form-modal/form-modal.component';
import { HeaderComponent } from './event-emitter/header/header.component';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { MultiComponent } from './multi/multi.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DialogsComponent,
    AutocompleteComponent,
    EventEmitterComponent,
    DatatableComponent,
    FormularioComponent,
    FormModalComponent,
    HeaderComponent,
    SearchPipe,
    MultiComponent,
  ],
  imports: [SharedModule, ExemplosRoutingModule, NgxMaskModule.forChild()],
})
export class ExemplosModule {}
