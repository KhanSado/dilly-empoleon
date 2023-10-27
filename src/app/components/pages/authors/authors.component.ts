import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/Author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit{


  authors: Author[] = []
  allAuthors: Author[] = []

  constructor(private authorService: AuthorService, private router: Router){}

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((items) => {
        console.log(items);
        this.allAuthors = items
        this.authors = items

        console.log(this.allAuthors);
    })
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
