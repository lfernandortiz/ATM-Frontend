import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetiroService {


  url: string = `${environment.HOST}/v1/retiros`;


  constructor(private http: HttpClient) { }


  retiroDinero(valor: number) {
    return this.http.post(this.url, valor);
  }


}
