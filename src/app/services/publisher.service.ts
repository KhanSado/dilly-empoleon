import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PublisherCompany } from '../models/puublisherCompany';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private baseApiUrl:string = environment.baseApiUrl
  private apiUrlPc = `${this.baseApiUrl}publisher-company`

  token = sessionStorage.getItem('x-dilly-token');


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    })
  };

  constructor(private http: HttpClient) { }

  getPublisher(): Observable<any>{
    return this.http.get(this.apiUrlPc, this.httpOptions)
  }

  savePublisher(publisher: PublisherCompany): Observable<PublisherCompany>{
    return this.http.post<PublisherCompany>(this.apiUrlPc, publisher, this.httpOptions)
}
}
