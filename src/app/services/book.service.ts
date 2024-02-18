import { HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseApiUrl:string = environment.baseApiUrl
  private apiUrlBooks = `${this.baseApiUrl}books`

  token = sessionStorage.getItem('x-dilly-token');


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    })
  };

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any>{
    return this.http.get(this.apiUrlBooks, this.httpOptions)
  }

  saveBooks(book: Book, authorId: string, genderId: string, publisherCompanyId: string): Observable<Book>{
    let params = new HttpParams()
    .set('authorId', authorId)
    .set('genderId', genderId)
    .set('publisherCompanyId', publisherCompanyId);

    let headers = new HttpHeaders()
    .set('Authorization', `${this.token}`);

    const options = {
      params: params,
      headers: headers
    }

    return this.http.post<Book>(this.apiUrlBooks, book, options)
}

  deleteBook(bookId?: string): Observable<any>{
      console.log(`Book with id ${bookId} deleted`);
      
      return this.http.delete<Book>(`${this.apiUrlBooks}/${bookId}`, this.httpOptions)
  }
}
