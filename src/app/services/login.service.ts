import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  private baseApiUrl:string = environment.baseApiUrl
  private apiUrlLogin = `${this.baseApiUrl}auth/login`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(user: UserLogin): Observable<UserLogin>{
      return this.http.post<UserLogin>(this.apiUrlLogin, user, this.httpOptions)
  }
}
