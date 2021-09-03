import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { MessageService } from 'src/app/shared/services/message.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  valorBadge: number

  messages$: Subscription

  constructor(private messageService: MessageService) {
    this.valorBadge = 0

    this.messages$ = this.messageService.qtdeMessagesObserver.subscribe(
      (val) => {
        this.valorBadge = val
      }
    )
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.messages$) {
      this.messages$.unsubscribe()
    }
  }
}
