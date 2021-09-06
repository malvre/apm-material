import { Component, OnInit } from '@angular/core'
import { MessageService } from 'src/app/core/services/message.service'

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.scss'],
})
export class EventEmitterComponent implements OnInit {
  constructor(private messageService: MessageService) { }

  ngOnInit(): void { }

  limpar() {
    this.messageService.limpar()
  }

  novaMensagem() {
    this.messageService.novaMensagem()
  }
}
