import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [BookFormComponent],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss'
})
export class NewBookComponent implements OnInit{

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
      "lastRead": new Date(data.book.lastRead), //new Date().toISOString(),// new Date().toLocaleDateString(), //TODO: MUDAR PARA PEGAR DATA DO USUÁRIO, DATEPICKER
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
