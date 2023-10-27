import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/Author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit{

  btnText = 'Novo'

  constructor(private authorService: AuthorService, private router: Router){}

  ngOnInit(): void {

  }


  async createHandler(author: Author){

    const authorPayload = {
      "name": author.name,
      "lastname": author.lastname
    };

    this.authorService.saveAuthor(authorPayload).subscribe(
      (response: any) => {
        this.router.navigate(["/authors"])
      }
    )
  }
}
