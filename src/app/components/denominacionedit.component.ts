import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidadoresService } from '../service/validadores.service';

@Component({
  selector: 'app-denominacionedit',
  templateUrl: './denominacionedit.component.html',
  styles: ['./denominacionedit.component.css']
})
export class DenominacioneditComponent implements OnInit {

  formDenominaciones: FormGroup;

  constructor(private fb: FormBuilder,
    private _validadores: ValidadoresService) { }

  ngOnInit() {
    this.formDenominaciones = this.fb.group({
      denominacion: [null, [Validators.required, this._validadores.esEntero]],
      cantidad: [null, [Validators.required, this._validadores.esEntero]],
    });

  }




  guardarDenominacion() {

    let denominacion

    console.log("creando denominacions")

  }






}
