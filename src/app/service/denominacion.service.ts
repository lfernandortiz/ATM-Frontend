import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Denominacion } from '../model/denominacion';

@Injectable({
  providedIn: 'root'
})
export class DenominacionService {

  url: string = `${environment.HOST}/v1/denominaciones`;


  constructor(private http: HttpClient) { }


  listar() {
    return this.http.get<Denominacion[]>(this.url);
  }


  obtenerPorId(idDenominacion: number) {
    return this.http.get<Denominacion>(`${this.url}/${idDenominacion}`);
  }


  registrar(Denominacion: Denominacion) {
    return this.http.post(this.url, Denominacion);
  }


  actualizar(Denominacion: Denominacion) {
    return this.http.put(`${this.url}`, Denominacion);
  }


  eliminar(idDenominacion: number) {
    return this.http.delete(`${this.url}/${idDenominacion}`);
  }
}
