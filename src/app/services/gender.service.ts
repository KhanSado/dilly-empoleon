import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gender } from '../Gender';

@Injectable({
  providedIn: 'root'
})
export class GenderService  {

  private baseApiUrl:string = environment.baseApiUrl
  private apiUrlGender = `${this.baseApiUrl}gender`

  token = sessionStorage.getItem('x-dilly-token');


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    })
  };

  constructor(private http: HttpClient) { }

  getGenders(): Observable<any>{
    return this.http.get(this.apiUrlGender, this.httpOptions)
  }

  saveGender(gender: Gender): Observable<Gender>{
    return this.http.post<Gender>(this.apiUrlGender, gender, this.httpOptions)
}
}
