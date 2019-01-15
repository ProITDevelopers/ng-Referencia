import { Injectable } from '@angular/core';
import { Referencia } from '../shared/interfaces/referencia';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {
  private principal_url = 'https://proxy-reference.herokuapp.com';
  private gerar_Referencia_url = `${this.principal_url}/reference`;

  constructor(private http: HttpClient) { }

  postReferencia(referencia: Referencia): Observable<Referencia> {
    const authHeader = this.createBasicAuth();
    const header = new HttpHeaders({
      Authorization: authHeader
    });
    return this.http.post<Referencia>(this.gerar_Referencia_url, referencia,
      {headers : header});
  }

  createBasicAuth() {
    // tslint:disable-next-line:max-line-length
    const cabecalho = 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDc1NDQ4MjgsImlzcyI6IlBST1BST1giLCJzdWIiOiJFc2FsZGlubyIsImV4cCI6MTU0NzYzMTIyOH0.ej7-4lTL8zH0uuYOJ0kgHsBCPAYFFf23nUlIPPAz4aXv5lOgRNkIpsQHESUY5xsi_WKSFrSreEQ042VbA93KPw';
    const authHeader = 'Bearer ' + (cabecalho);
    return authHeader;
  }
}
