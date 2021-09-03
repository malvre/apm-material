import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private qtdMessages: number

  qtdeMessagesObserver = new BehaviorSubject<number>(0);

  constructor() {
    this.qtdMessages = 0
  }

  limpar() {
    this.qtdMessages = 0
    this.qtdeMessagesObserver.next(this.qtdMessages)
  }

  novaMensagem() {
    this.qtdMessages += 1
    this.qtdeMessagesObserver.next(this.qtdMessages)
  }
}
