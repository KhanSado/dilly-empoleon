import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment'
import { User } from '../User';
import { UserLogin } from '../UserLogin';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseApiUrl:string = environment.baseApiUrl
  private apiUrlRegister = `${this.baseApiUrl}auth/register`
  private apiUrlLogin = `${this.baseApiUrl}auth/login`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User>{
      return this.http.post<User>(this.apiUrlRegister, user, this.httpOptions)
  }

  login(user: UserLogin): Observable<UserLogin>{
      return this.http.post<UserLogin>(this.apiUrlLogin, user, this.httpOptions)
  }
}
