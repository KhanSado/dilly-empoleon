import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{

  btnText = 'Novo'

  constructor(private bookService: BookService, private router: Router){}

  ngOnInit(): void {

  }


  async createHandler(book: Book){

    const bookPayload = {
      "title": book.title,
      "subtitle": book.subtitle,
      "sumary": book.sumary
    };

    this.bookService.saveBooks(bookPayload, 1, 5).subscribe(
      (response: any) => {
        this.router.navigate(["/books"])
      }
    )
  }
}
