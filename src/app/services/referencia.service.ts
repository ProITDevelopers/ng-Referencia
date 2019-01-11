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
    const cabecalho = 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDcyMDQxNDcsImlzcyI6IlBST1BST1giLCJzdWIiOiJFc2FsZGlubyIsImV4cCI6MTU0NzI5MDU0N30.ZshDBtYHamHDqgggkpdY0axk1WhINa52CesiXtSD70zfCo1gOX0Ief120AiC9e-qQwWeYrCPqX6fTVVkwLOw_w';
    const authHeader = 'Bearer ' + (cabecalho);
    return authHeader;
  }
}
