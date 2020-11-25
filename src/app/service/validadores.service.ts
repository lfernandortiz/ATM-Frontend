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


  multiploDeMil(control: FormControl): { [s: string]: boolean } {
    if (control.value % 1000 != 0) {
      return {
        noMil: true
      }
    }

    return null;

  }


  /**
   * Convierte una fechta en formado ISODATE 
   * yyy-mm-ddTHH:mm:ss
   * @param date 
   */
  localISOTime(date: Date) {
    let localOffset = date.getTimezoneOffset() * 60000;
    let localTime = date.getTime();
    date = new Date(localTime - localOffset);
    return date.toISOString();
  }

}
