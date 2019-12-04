import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pessoas } from '../pessoas';

@Injectable({
  providedIn: 'root'
})
export class PerfilPessoaService {

  // Define API
  apiURL = '/api';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch Products list
  getPessoas(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(this.apiURL + '/pessoa/lista')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getPessoa(id): Observable<Pessoas> {
    return this.http.get<Pessoas>(this.apiURL + '/pessoa/' + id + '/detalhes')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API post() method => Create
  criarPessoa(pessoas): Observable<Number> {
    return this.http.post<Number>(this.apiURL + '/pessoa', JSON.stringify(pessoas), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Update 
  updatePessoa(id, pessoa): Observable<Pessoas> {
    return this.http.put<Pessoas>(this.apiURL + '/pessoa/update' + id, JSON.stringify(pessoa), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API delete() method => Delete
  deletePessoa(id) {
    return this.http.delete<Pessoas>(this.apiURL + '/pessoa/deletar/' + id, this.httpOptions)
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
