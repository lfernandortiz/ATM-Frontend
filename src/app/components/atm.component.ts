import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../service/validadores.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styles: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  formAtm: FormGroup;

  constructor(private fb: FormBuilder,
    private _validadores: ValidadoresService) { }

  ngOnInit() {


    this.formAtm = this.fb.group({
      valorRetiro: [null, [Validators.required, this._validadores.esEntero, this._validadores.multiploDeMil]],
    });

  }

}
