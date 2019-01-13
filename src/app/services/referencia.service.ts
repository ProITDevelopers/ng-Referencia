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
    const cabecalho = 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDczNjk0NjcsImlzcyI6IlBST1BST1giLCJzdWIiOiJFc2FsZGlubyIsImV4cCI6MTU0NzQ1NTg2N30.tWtNkqL9lnqKvzlnglM57yTOO2mOB_MgZ2nf3GI86E0fCsVkLjEUXo7A4uvT4VWzU-R5hSSHdsfVxyAxDmpt7A';
    const authHeader = 'Bearer ' + (cabecalho);
    return authHeader;
  }
}
