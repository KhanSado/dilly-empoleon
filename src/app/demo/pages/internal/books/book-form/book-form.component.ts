import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Author } from 'src/app/models/Author';
import { Book } from 'src/app/models/Book';
import { Gender } from 'src/app/models/Gender';
import { PublisherCompany } from 'src/app/models/puublisherCompany';
import { AuthorService } from 'src/app/services/author.service';
import { GenderService } from 'src/app/services/gender.service';
import { PublisherService } from 'src/app/services/publisher.service';
import { NewBookComponent } from '../new-book/new-book.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [NewBookComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<{ book: Book, authorId: string, genderId: string, publisherCompanyId: string}>();
  @Input() btnText!: String;

  bookForm!: FormGroup

  authors: Author[] = []
  allAuthors: Author[] = []

  genders: Gender[] = []
  allGenders: Gender[] = []

  publishers: PublisherCompany[] = []
  allPublishers: PublisherCompany[] = []

  constructor(private authorService: AuthorService, private genderService: GenderService, private publisherService: PublisherService) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      subtitle: new FormControl(''),
      sumary: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      publisher: new FormControl('', [Validators.required]),
      readed: new FormControl(''),
      isReading: new FormControl(''),
      qtdPages: new FormControl(''),
      qtdRead: new FormControl(''),
      lastRead: new FormControl('')
    })

    this.getAutors()
    this.getGender()
    this.getPublishers()
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
  get publisher() {
    return this.bookForm.get('publisher')!
  }
  get readed() {
    return Boolean(this.bookForm.get('readed')!.value)
  }
  get isReading() {
    return Boolean(this.bookForm.get('isReading')!.value)
  }
  get qtdPages() {
    return Number(this.bookForm.get('qtdPages')!)
  }
  get qtdRead() {
    return Number(this.bookForm.get('qtdRead')!)
  }
  get lastRead() {
    return this.bookForm.get('lastRead')!
  }

  submit(){
    if(this.bookForm.invalid){
      return;
    }
    // Swal.fire({
    //   title: 'Novo Livro',
    //   text: 'Novo livro adicionado com sucesso.',
    //   icon: 'success'
    // });
      const bookData = this.bookForm.value;
      const authorId = this.author.value;
      const genderId = this.gender.value;
      const publisherCompanyId = this.publisher.value



      const data = { book: bookData, authorId, genderId, publisherCompanyId};

    this.onSubmit.emit(data)
  }


  getAutors(){
    this.authorService.getAuthors().subscribe((items) => {
      this.allAuthors = items
      this.authors = items
  })
  }
  getGender(){
    this.genderService.getGenders().subscribe((items) => {
      this.allGenders = items
      this.genders = items
  })
  }

  getPublishers(){
    this.publisherService.getPublisher().subscribe((items) => {
      this.allPublishers = items
      this.publishers = items
  })
  }
}
