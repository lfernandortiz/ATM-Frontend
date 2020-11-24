import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }


  esEntero(control: FormControl): { [s: string]: boolean } {
    if (control.value % 1 != 0) {
      return {
        noEntero: true
      }
    }

    return null;

  }
}
