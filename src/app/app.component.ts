import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './pages/auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apm-material';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authenticationState.subscribe((state) => {
      if (state) {
        this.router.navigate(['exemplos'])
      } else {
        this.router.navigate(['auth'])
      }
    })
  }
}
