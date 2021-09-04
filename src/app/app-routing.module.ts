import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './pages/auth/auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exemplos',
    pathMatch: 'full',
  },
  {
    path: 'exemplos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/exemplos/exemplos.module').then((m) => m.ExemplosModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
