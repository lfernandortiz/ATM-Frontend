import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListDenominacionDTO } from '../model/listdenominaciondto';
import { RetiroService } from '../service/retiro.service';
import { ValidadoresService } from '../service/validadores.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styles: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  formAtm: FormGroup;
  errorSaldo: boolean = false;
  txExitosa: boolean = false;
  mensajeError: string;
  billetesEntregados: string = '';
  valorSolicitado: number;


  constructor(private fb: FormBuilder,
    private _validadores: ValidadoresService,
    private _retiroService: RetiroService) { }

  ngOnInit() {


    this.formAtm = this.fb.group({
      valorRetiro: [null, [Validators.required, this._validadores.esEntero, this._validadores.multiploDeMil]],
    });

  }



  retiro() {

    this.reset();

    let valorRetiro = this.formAtm.get('valorRetiro').value;

    this._retiroService.retiroDinero(valorRetiro).subscribe((data: ListDenominacionDTO[]) => {
      console.log(data)
      data.forEach(element => {
        this.billetesEntregados += ` ${element.total} (${element.denominacion.toLocaleString()}) `;
      });
      this.txExitosa = true;



    }, (err) => {
      if (err.status == 500) {
        this.mensajeError = err.error.mensaje;
        this.errorSaldo = true;
        console.log(err);
        console.log(this.mensajeError);
      }
    });

  }


  reset() {
    this.billetesEntregados = '';
    this.mensajeError = '';
    this.errorSaldo = false;
    this.txExitosa = false;
  }

}
