import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MainComponent } from './main/main.component'
import { LoadingComponent } from './loading/loading.component'
import { SharedModule } from '../shared/shared.module'



@NgModule({
  declarations: [
    MainComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    MainComponent, LoadingComponent
  ]
})
export class CoreModule { }
