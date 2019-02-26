import { Injectable } from '@angular/core';
import { Pagamento } from '../shared/interfaces/pagamento';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private principal_url = 'https://paymentreference.herokuapp.com/api';
  private efectuar_pagamento_url = `${this.principal_url}/transacao`;

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
    const cabecalho = '10dd5a2847a44979b5d8f6bb0b9bdf29';
    const authHeader = 'key ' + (cabecalho);
    return authHeader;
  }
}
