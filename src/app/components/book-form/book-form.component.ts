import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/Book';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Book>()
  @Input() btnText!: String;

  bookForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      subtitle: new FormControl(''),
      sumary: new FormControl('', [Validators.required])
    })
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
    this.onSubmit.emit(this.bookForm.value)
  }

}
