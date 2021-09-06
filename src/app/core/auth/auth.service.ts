import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

const TOKEN_KEY = 'auth-token'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);

  constructor() {
    this.checkToken()
  }

  checkToken() {
    const res = localStorage.getItem(TOKEN_KEY)
    if (res) {
      this.authenticationState.next(true)
    }
  }

  login() {
    const res = localStorage.setItem(TOKEN_KEY, 'Bearer 1234567')
    this.authenticationState.next(true)
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY)
    this.authenticationState.next(false)
  }

  get isAuthenticated() {
    return this.authenticationState.value
  }
}
