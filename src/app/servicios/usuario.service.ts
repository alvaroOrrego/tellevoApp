import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

  cargarDatos() : Observable<any>
  {
    return this.http.get<any>(this.url)
  }
}
