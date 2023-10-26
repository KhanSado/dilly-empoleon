import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register-user-form',
  templateUrl: './register-user-form.component.html',
  styleUrls: ['./register-user-form.component.css']
})
export class RegisterUserFormComponent implements OnInit {

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
    if(this.userForm.invalid){
      return;
    }
    console.log(this.userForm.value);
    this.onSubmit.emit(this.userForm.value)
  }

}
