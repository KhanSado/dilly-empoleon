import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseApiUrl:string = environment.baseApiUrl
  private apiUrlAuthor = `${this.baseApiUrl}author`

  token = sessionStorage.getItem('x-dilly-token');


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    })
  };

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<any>{
    return this.http.get(this.apiUrlAuthor, this.httpOptions)
  }

  saveAuthor(author: Author): Observable<Author>{
    return this.http.post<Author>(this.apiUrlAuthor, author, this.httpOptions)
}
}
