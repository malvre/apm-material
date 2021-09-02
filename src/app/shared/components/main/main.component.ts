import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @ViewChild('drawer', { static: false }) drawer!: MatSidenav;
  isLoading: boolean = false;

  menuData = [
    {
      title: 'Home',
      link: '/exemplos/dashboard',
      icon: 'home',
    },
    {
      title: 'Dialogs',
      link: '/exemplos/dialogs',
      icon: 'announcement',
    },
    {
      title: 'AutoComplete',
      link: '/exemplos/autocomplete',
      icon: 'keyboard',
    },
    {
      title: 'Comunicação entre componentes',
      link: '/exemplos/event-emitter',
      icon: 'notifications',
    },
    {
      title: 'Datatable',
      link: '/exemplos/datatable',
      icon: 'view_list',
    },
    {
      title: 'Formulário',
      link: '/exemplos/formulario',
      icon: 'edit',
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    public loadingService: LoadingService
  ) {
    this.loadingService.loading.subscribe(() => {
      this.isLoading = this.loadingService.isLoading;
    });
  }

  closeDrawer() {
    this.isHandset$.subscribe((isVisible) => {
      if (isVisible) {
        this.drawer.close();
      }
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
