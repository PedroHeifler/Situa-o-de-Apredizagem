import { Injectable } from '@angular/core';
import { Enderecos } from '../endereco';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  // Define API
  apiURL = '/api';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getEnderecos(): Observable<Enderecos[]> {
    return this.http.get<Enderecos[]>(this.apiURL + '/usuario/lista')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create product
  criarEndereco(usuario): Observable<Number> {
    return this.http.post<Number>(this.apiURL + '/anuncio', JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Update product
  updateEndereco(id, endereco): Observable<Enderecos> {
    return this.http.put<Enderecos>(this.apiURL + '/produto/update' + id, JSON.stringify(endereco), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API delete() method => Delete product
  deleteEndereco(id) {
    return this.http.delete<Enderecos>(this.apiURL + '/produto/deletar' + id, this.httpOptions)
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

