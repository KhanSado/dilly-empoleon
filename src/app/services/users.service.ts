import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment'
import { User } from '../User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}auth/register`

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
      return this.http.post<User>(this.apiUrl, user, httpOptions)
  }
}
