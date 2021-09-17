import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmService } from 'src/app/shared/components/confirm/confirm.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss'],
})
export class DialogsComponent implements OnInit {
  constructor(
    private confirmService: ConfirmService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  openDialog() {
    this.confirmService
      .confirmDialog({
        title: 'Enviar mísseis?',
        message:
          'Deseja realmente enviar os mísseis para Brasília e acabar com todos os políticos?',
        confirmCaption: 'É claro!',
        cancelCaption: 'Vou aguardar o meteoro',
      })
      .subscribe((result) => {
        if (result) {
          this.snackbar.open(
            'Mísseis enviados com sucesso, agora só aguardar para comemorar',
            '',
            {
              duration: 5000,
              panelClass: ['success-snackbar'],
            }
          );
          console.log('Mísseis enviados');
        } else {
          console.log('aguardando meteoro');
        }
      });
  }
}
