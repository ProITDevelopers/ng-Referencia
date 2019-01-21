import { Injectable } from '@angular/core';
import { Referencia } from '../shared/interfaces/referencia';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {
  private principal_url = 'https://proxy-reference.herokuapp.com/reference';
 // private gerar_Referencia_url = `${this.principal_url}/reference`;

  constructor(private http: HttpClient) { }

  postReferencia(referencia: Referencia): Observable<Referencia> {
    const authHeader = this.createBasicAuth();
    const header = new HttpHeaders({
      Authorization: authHeader
    });
    return this.http.post<Referencia>(this.principal_url, referencia,
      {headers : header});
  }

  createBasicAuth() {
    // tslint:disable-next-line:max-line-length
    const cabecalho = '3f44e0a0120743e4883f3653a2c54999';
    const authHeader = 'key ' + (cabecalho);
    return authHeader;
  }
}
