import { Injectable } from '@angular/core';
import { Usuarios } from '../usuarios';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {
  // Define API
  apiURL = '/api';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getUsuario(id): Observable<Usuarios> {
    return this.http.get<Usuarios>(this.apiURL + '/usuario/' + id + '/detalhes')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API get() method => Fetch usuario list
  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.apiURL + '/usuario/lista')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Criar usuario
  criarUsuario(usuario): Observable<Number> {
    return this.http.post<Number>(this.apiURL + '/usuario', JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Update usuario
  updateUsuario(id, usuario): Observable<Usuarios> {
    return this.http.put<Usuarios>(this.apiURL + '/usuario/update' + id, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API delete() method => Delete usuario
  deleteUsuario(id) {
    return this.http.delete<Usuarios>(this.apiURL + '/usuario/deletar' + id, this.httpOptions)
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
