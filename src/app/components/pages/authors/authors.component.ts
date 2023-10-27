import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private authorService: AuthorService){}

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((items) => {
        console.log(items);
        this.allAuthors = items
        this.authors = items

        console.log(this.allAuthors);
    })
  }
}
