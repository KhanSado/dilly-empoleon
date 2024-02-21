import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { UserLogin } from 'src/app/UserLogin';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<UserLogin>()
  @Input() btnText!: String;

  loginForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get username() {
    return this.loginForm.get('username')!
  }

  get password() {
    return this.loginForm.get('password')!
  }

  submit(){
    if(this.loginForm.invalid){
      return;
    }
    this.onSubmit.emit(this.loginForm.value)
  }


}
