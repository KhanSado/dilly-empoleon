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


  async createHandler(data: { book: Book, authorId: string, genderId: string, publisherCompanyId: string }){

    const bookPayload = {
      "title": data.book.title,
      "subtitle": data.book.subtitle,
      "isReading": false,
      "readed": false,
      "sumary": data.book.sumary
    };

    const books1 = data.book;
    const authorId1 = data.authorId;
    const genderId1 = data.genderId;
    const publisherCompanyId1 = data.publisherCompanyId

    this.bookService.saveBooks(bookPayload, authorId1, genderId1, publisherCompanyId1).subscribe(
      (response: any) => {
        this.router.navigate(["/books"])
      }
    )
  }
}
