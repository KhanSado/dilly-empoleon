import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Author } from 'src/app/Author';
import { Book } from 'src/app/Book';
import { Gender } from 'src/app/Gender';
import { AuthorService } from 'src/app/services/author.service';
import { GenderService } from 'src/app/services/gender.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<{ book: Book, authorId: number, genderId: number }>();
  @Input() btnText!: String;

  bookForm!: FormGroup


  authors: Author[] = []
  allAuthors: Author[] = []

  genders: Gender[] = []
  allGenders: Gender[] = []

  constructor(private authorService: AuthorService, private genderService: GenderService) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      subtitle: new FormControl(''),
      sumary: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required])
    })

    this.getAutors()
    this.getGender()
  }

  get title() {
    return this.bookForm.get('title')!
  }
  get subtitle() {
    return this.bookForm.get('subtitle')!
  }
  get sumary() {
    return this.bookForm.get('sumary')!
  }
  get author() {
    return this.bookForm.get('author')!
  }
  get gender() {
    return this.bookForm.get('gender')!
  }

  submit(){
    if(this.bookForm.invalid){
      return;
    }
    console.log(this.bookForm.value);
    Swal.fire({
      title: 'Novo Livro',
      text: 'Novo livro adicionado com sucesso.',
      icon: 'success'
    });
      const bookData = this.bookForm.value;
      const authorId = this.author.value;
      const genderId = this.gender.value;

      console.log(`Authorid ${authorId} --- genderId ${genderId}`);


      const data = { book: bookData, authorId, genderId };

    this.onSubmit.emit(data)
  }


  getAutors(){
    this.authorService.getAuthors().subscribe((items) => {
      this.allAuthors = items
      this.authors = items
      console.log(this.allAuthors);
  })
  }
  getGender(){
    this.genderService.getGenders().subscribe((items) => {
      this.allGenders = items
      this.genders = items
      console.log(this.allGenders);
  })
  }
}
