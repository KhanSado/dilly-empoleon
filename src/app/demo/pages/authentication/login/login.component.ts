// angular import
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserLogin } from 'src/app/models/UserLogin';
import { LoginService } from 'src/app/services/login.service';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit{

  btnText = 'Entrar'


  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {

  }

  async loginHandler(user: UserLogin){
    const userLoginPayload = {
      "username": user.username,
      "password": user.password
    };

    this.loginService.login(userLoginPayload).subscribe(
      (response: any) => {
        const token = response.result.token;
        sessionStorage.setItem('x-dilly-token', `Bearer ${token}`)
        this.router.navigate(["/home"])
      }
    )

  }
}
