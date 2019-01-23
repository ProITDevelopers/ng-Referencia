import { Injectable } from '@angular/core';
import { Pagamento } from '../shared/interfaces/pagamento';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private principal_url = 'https://proit-pagamento.herokuapp.com';
  private efectuar_pagamento_url = `${this.principal_url}/pagamento`;

  constructor(private http: HttpClient) { }

  postPagamento(pagamento: Pagamento): Observable<Pagamento> {
    const authHeader = this.createBasicAuth();
    const header = new HttpHeaders({
      Authorization: authHeader
    });
    return this.http.post<Pagamento>(this.efectuar_pagamento_url, pagamento,
      {headers : header});
  }

  createBasicAuth() {
    // tslint:disable-next-line:max-line-length
    const cabecalho = '4a11a1b8d848431b9b65c2cbaa741beb';
    const authHeader = 'key ' + (cabecalho);
    return authHeader;
  }
}
