import { Component, OnInit } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'
import { LoadingService } from 'src/app/core/loading/loading.service'

import { UFService } from 'src/app/shared/services/uf.service'
import { ViacepService } from 'src/app/shared/services/viacep.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  form!: FormGroup
  estados: any[] = [];

  constructor(
    private fb: FormBuilder,
    private ufService: UFService,
    private viacep: ViacepService,
    private loadingService: LoadingService
  ) {
    this.estados = this.ufService.lista()
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cep: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: [''],
      municipio: ['', Validators.required],
      uf: ['', Validators.required],
      aceiteTermos: [false, Validators.requiredTrue],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.form.invalid) {
      return
    }
    this.loadingService.show()

    setTimeout(() => {
      console.log(JSON.stringify(this.form.value, null, 2))
      this.loadingService.hide()
    }, 2000)
  }

  onReset(): void {
    this.form.reset()
  }

  onBlurCep(e: any) {
    const cep = e.target.value.replace(/\D/g, '')
    const validacep = /^[0-9]{8}$/
    if (validacep.test(cep)) {
      this.viacep.getEndereco(cep).subscribe((res: any) => {
        this.form.patchValue({
          logradouro: res.logradouro,
          bairro: res.bairro,
          municipio: res.localidade,
          uf: res.uf,
        })
      })
    }
  }
}
