import { Component, OnInit } from '@angular/core'
import { LoadingService } from 'src/app/core/loading/loading.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void { }

  onLogin() {
    this.loadingService.show()
    setTimeout(() => {
      this.authService.login()
      this.loadingService.hide()
    }, 1500)
  }
}
