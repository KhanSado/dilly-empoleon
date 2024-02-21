import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Author } from 'src/app/Author';
import { User } from 'src/app/User';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Author>()
  @Input() btnText!: String;

  authorForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.authorForm = new FormGroup({
      id: new FormControl(''),
      lastname: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    })
  }

  get lastname() {
    return this.authorForm.get('lastname')!
  }
  get name() {
    return this.authorForm.get('name')!
  }

  submit(){
    if(this.authorForm.invalid){
      return;
    }
    Swal.fire({
      title: 'Novo Auto',
      text: 'Novo Autor adicionado com sucesso.',
      icon: 'success'
    });
    this.onSubmit.emit(this.authorForm.value)
  }

}
