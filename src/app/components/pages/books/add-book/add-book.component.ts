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
      "isReading": data.book.isReading,
      "readed": data.book.readed,
      "qtdPages": data.book.qtdPages,
      "qtdRead": data.book.qtdRead, 
      "lastRead": "2023-12-11T10:55:15-03:00",// new Date().toLocaleDateString(), //TODO: MUDAR PARA PEGAR DATA DO USUÁRIO, DATEPICKER
      "sumary": data.book.sumary
    };

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
