import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Author } from 'src/app/Author';
import { User } from 'src/app/User';

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
    return this.authorForm.get('username')!
  }
  get name() {
    return this.authorForm.get('name')!
  }

  submit(){
    if(this.authorForm.invalid){
      return;
    }
    console.log(this.authorForm.value);
    this.onSubmit.emit(this.authorForm.value)
  }

}
