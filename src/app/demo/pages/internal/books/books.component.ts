import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Book } from 'src/app/models/Book';
import { BookRoot } from 'src/app/models/BookRoot';
import { BookService } from 'src/app/services/book.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { environment } from 'src/environments/environment';
import { IsLoggedDirective } from 'src/app/directives/is-logged.directive';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, NgFor, NgIf],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{

  range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

  resources: BookRoot = {
    books: [], 
    currentPage: 0, 
    nextPage: "",
    prevPage: "", 
    qtdBooks: 0,
    qtdPages:  0
  };
  books: Book[] = []
  allBooks: Book[] = []
  btnText = 'Adicionar'

   baseApiUrl:string = environment.baseApiUrl
   apiUrlBooks = `${this.baseApiUrl}books`

  constructor(private bookService: BookService, private router: Router){}

  ngOnInit(): void {
    this.getBook()
  }

  async getBook(apiUrlBooks: string = `${this.apiUrlBooks}`) {
    this.bookService.getBooks(apiUrlBooks).subscribe((items) => {
      this.allBooks = items.result.books
      this.books = items.result.books
      this.resources = items.result
    })
  }

  async deleteBook(bookId?: string){
    this.bookService.deleteBook(bookId).subscribe((item) => {
      this.ngOnInit()
    })
  }

  editBook(){
  }
}
