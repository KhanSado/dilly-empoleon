import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Author } from 'src/app/Author';
import { Book } from 'src/app/Book';
import { BookRoot } from 'src/app/BookRoot';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  trashIcon = faTrash
  penIcon = faPen

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

  async getBook(apiUrlBooks: string = `${this.apiUrlBooks}`,  page: number = 1, pageSize: number = 20 ) {
   
    this.bookService.getBooks(apiUrlBooks).subscribe((items) => {
      this.allBooks = items.result.books
      this.books = items.result.books
      this.resources = items.result
      console.log(this.resources);
    })
  }

  async deleteBook(bookId?: string){
    this.bookService.deleteBook(bookId).subscribe((item) => {
      console.log(item);
      this.ngOnInit()
    })
  }

  editBook(){
    console.log("EDIT BOOK");
  }
}
