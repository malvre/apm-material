import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  qtdMessagesBadge: number;

  messages$: Subscription;

  constructor(private messageService: MessageService) {
    this.qtdMessagesBadge = 0;

    this.messages$ = this.messageService.qtdeMessagesObserver.subscribe(
      (val) => {
        this.qtdMessagesBadge = val;
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.messages$) {
      this.messages$.unsubscribe();
    }
  }
}
