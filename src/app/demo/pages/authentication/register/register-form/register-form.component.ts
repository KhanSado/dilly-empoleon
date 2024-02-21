import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<User>()
  @Input() btnText!: String;

  userForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get username() {
    return this.userForm.get('username')!
  }
  get name() {
    return this.userForm.get('name')!
  }
  get email() {
    return this.userForm.get('email')!
  }
  get password() {
    return this.userForm.get('password')!
  }

  submit(){
    // if(this.userForm.invalid){
    //   return;
    // }
    this.onSubmit.emit(this.userForm.value)
  }

}