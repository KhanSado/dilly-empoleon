import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/UserLogin';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService  {

  private baseApiUrl:string = environment.baseApiUrl
  private apiUrlRegister = `${this.baseApiUrl}auth/register`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User>{
      return this.http.post<User>(this.apiUrlRegister, user, this.httpOptions)
  }
}