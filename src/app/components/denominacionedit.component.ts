import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-denominacionedit',
  templateUrl: './denominacionedit.component.html',
  styles: ['./denominacionedit.component.css']
})
export class DenominacioneditComponent implements OnInit {

  formDenominaciones: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formDenominaciones = this.fb.group({
      denominacion: [null],
      cantidad: [null],
    });

  }




  guardarDenominacion() {

  }

}
