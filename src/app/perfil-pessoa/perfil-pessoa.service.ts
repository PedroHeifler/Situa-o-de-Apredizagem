import { Injectable } from '@angular/core';
import { PessoaFisica } from '../clientes';
import { PessoaJuridica } from '../clientes';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilPessoaService {

  // Define API
  apiURL = '/api';
  constructor(private http: HttpClient) { }

  /*getClientes_fisico():any{
    return this.clientes_fisico;
  }
  
  getClientes_juridico():any{
    return this.clientes_juridico;
  }

  saveClientes_fisico(form:any){
    this.clientes_fisico.push(form);
  }

  saveClientes_juridico(form:any){
    this.clientes_juridico.push(form);
  }*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch Products list
  getPessoaFisicaS(): Observable<PessoaFisica[]> {
    return this.http.get<PessoaFisica[]>(this.apiURL + '/pessoafisica/lista')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getPessoaFisica(id): Observable<PessoaFisica> {
    return this.http.get<PessoaFisica>(this.apiURL + '/pessoafisica/' + id + '/detalhes')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API post() method => Create product
  criarPessoaFisica(pessoafisica): Observable<Number> {
    return this.http.post<Number>(this.apiURL + '/pessoafisica', JSON.stringify(pessoafisica), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Update product
  updatePessoaFisica(id, pessoafisica): Observable<PessoaFisica> {
    return this.http.put<PessoaFisica>(this.apiURL + '/pessoafisica/update' + id, JSON.stringify(pessoafisica), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API delete() method => Delete product
  deletePessoaFisica(id) {
    return this.http.delete<PessoaJuridica>(this.apiURL + '/pessoafisica/deletar/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API get() method => Fetch Products list
  getPessoaJuridicaS(): Observable<PessoaJuridica[]> {
    return this.http.get<PessoaJuridica[]>(this.apiURL + '/pessoajuridica/lista')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getPessoaJuridica(id): Observable<PessoaJuridica> {
    return this.http.get<PessoaJuridica>(this.apiURL + '/pessoajuridica/' + id + '/detalhes')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API post() method => Create product
  criarPessoaJuridica(pessoajuridica): Observable<Number> {
    return this.http.post<Number>(this.apiURL + '/pessoajuridica', JSON.stringify(pessoajuridica), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Update product
  updatePessoaJuridica(id, pessoajuridica): Observable<PessoaJuridica> {
    return this.http.put<PessoaJuridica>(this.apiURL + '/pessoajuridica/update' + id, JSON.stringify(pessoajuridica), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API delete() method => Delete product
  deletePessoaJuridica(id) {
    return this.http.delete<PessoaJuridica>(this.apiURL + '/pessoajuridica/deletar/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
