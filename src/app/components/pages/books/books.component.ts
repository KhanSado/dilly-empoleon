import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Author } from 'src/app/Author';
import { Book } from 'src/app/Book';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  trashIcon = faTrash
  penIcon = faPen

  books: Book[] = []
  allBooks: Book[] = []
  btnText = 'Adicionar'

  constructor(private bookService: BookService, private router: Router){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((items) => {
        console.log(items);
        this.allBooks = items
        this.books = items

        
        console.log(this.books);
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
