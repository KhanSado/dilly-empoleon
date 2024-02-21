import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLogin } from 'src/app/models/UserLogin';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  styleUrl: './login-form.component.scss'
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
    console.log("click");
    
    // if(this.loginForm.invalid){
    //   return;
    // }
    this.onSubmit.emit(this.loginForm.value)
  }
}
