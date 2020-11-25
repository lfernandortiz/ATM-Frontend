import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Denominacion } from '../model/denominacion';
import { DenominacionDTO } from '../model/denominaciondto';
import { ListDenominacionDTO } from '../model/listdenominaciondto';
import { DenominacionService } from '../service/denominacion.service';
import { ValidadoresService } from '../service/validadores.service';

@Component({
  selector: 'app-denominacionedit',
  templateUrl: './denominacionedit.component.html',
  styles: ['./denominacionedit.component.css']
})
export class DenominacioneditComponent implements OnInit {

  formDenominaciones: FormGroup;
  aviso: boolean = false;

  listDenominacion: ListDenominacionDTO[] = [];

  constructor(private fb: FormBuilder,
    private _denominacionService: DenominacionService,
    private _validadores: ValidadoresService) { }

  ngOnInit() {
    this.formDenominaciones = this.fb.group({
      idDenominacion: [0],
      valorDescripcion: [null, [Validators.required, this._validadores.esEntero, this._validadores.multiploDeMil]],
      cantidad: [null, [Validators.required, this._validadores.esEntero]],
    });


    //inicializa la tabla de todas las denominaciones disponibles
    this.listarDenominaciones();

  }




  guardarDenominacion() {

    let denominacion = new Denominacion();
    denominacion.idDenominacion = this.formDenominaciones.get('idDenominacion').value;
    denominacion.valorDescripcion = this.formDenominaciones.get('valorDescripcion').value;


    let dto = new DenominacionDTO()
    dto.denominacion = denominacion;
    dto.cantidad = this.formDenominaciones.get('cantidad').value;
    dto.fechaTx = this._validadores.localISOTime(new Date());

    this._denominacionService.registrar(dto).subscribe(data => {

      console.log(data);

      //muestra un aviso de exito
      this.aviso = true;
      setTimeout(() => {
        this.aviso = false;
      }, 3500);


      //limpia el form
      this.formDenominaciones.reset();

      //refresco la tabla de inventario
      this.listarDenominaciones();
    })


  }



  listarDenominaciones() {

    this._denominacionService.listarDetalleDenominacion().subscribe((data) => {
      this.listDenominacion = data;
    });

  }





}
