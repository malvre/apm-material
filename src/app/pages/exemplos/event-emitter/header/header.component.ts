import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('shake', [
      state(
        'shake-start',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'shake-end',
        style({
          transform: 'scale(1)',
        })
      ),
      transition(
        'shake-start => shake-end',
        animate(
          '400ms ease-in',
          keyframes([
            style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.1 }),
            style({ transform: 'translate3d(2px, 0, 0)', offset: 0.2 }),
            style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.3 }),
            style({ transform: 'translate3d(4px, 0, 0)', offset: 0.4 }),
            style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.5 }),
            style({ transform: 'translate3d(4px, 0, 0)', offset: 0.6 }),
            style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.7 }),
            style({ transform: 'translate3d(2px, 0, 0)', offset: 0.8 }),
            style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.9 }),
          ])
        )
      ),
    ]),
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  qtdMessagesBadge: number;

  messages$: Subscription;

  shakeState: string = 'shake-start';

  constructor(private messageService: MessageService) {
    this.qtdMessagesBadge = 0;

    this.messages$ = this.messageService.qtdeMessagesObserver.subscribe(
      (val) => {
        this.qtdMessagesBadge = val;

        if (this.qtdMessagesBadge > 0) {
          this.shakeState = 'shake-end';
          setTimeout(() => {
            this.shakeState = 'shake-start';
          }, 400);
        }
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
