import { Injectable } from '@angular/core';
import { Pagamento } from '../shared/interfaces/pagamento';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private principal_url = 'https://pagamento-reference.herokuapp.com';
  private efectuar_pagamento_url = `${this.principal_url}/pagamento`;

  constructor(private http: HttpClient) { }

  postPagamento(pagamento: Pagamento): Observable<Pagamento> {
    /*const authHeader = this.createBasicAuth();
    const header = new HttpHeaders({
      Authorization: authHeader
    });*/
    return this.http.post<Pagamento>(this.efectuar_pagamento_url, pagamento/*,
      {headers : header}*/);
  }

  createBasicAuth() {
    // tslint:disable-next-line:max-line-length
    const cabecalho = 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDcxMTE0NzEsImlzcyI6IlBST1BST1giLCJzdWIiOiJFc2FsZGlubyIsImV4cCI6MTU0NzE5Nzg3MX0.euegJ_657XkS8wDkKyuIpTtj9S41HnSNqfz1s-pp9NXk1ej__CSe10XR0fETufkxB2s6YiJlX-JQzPjG2mKGTQ';
    const authHeader = 'Bearer ' + (cabecalho);
    return authHeader;
  }
}
