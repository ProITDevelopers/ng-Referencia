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
    const authHeader = this.createBasicAuth();
    const header = new HttpHeaders({
      Authorization: authHeader
    });
    return this.http.post<Pagamento>(this.efectuar_pagamento_url, pagamento,
      {headers : header});
  }

  createBasicAuth() {
    // tslint:disable-next-line:max-line-length
    const cabecalho = '4c890bafb7034fa1b57c5bad9b0b380e';
    const authHeader = 'key ' + (cabecalho);
    return authHeader;
  }
}
