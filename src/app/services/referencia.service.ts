import { Injectable } from '@angular/core';
import { Referencia } from '../shared/interfaces/referencia';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {
  private principal_url = 'https://proit-ref.herokuapp.com/reference';

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
    const cabecalho = '4a11a1b8d848431b9b65c2cbaa741beb';
    const authHeader = 'key ' + (cabecalho);
    return authHeader;
  }
}
