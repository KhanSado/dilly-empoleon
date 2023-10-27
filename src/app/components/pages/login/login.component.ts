import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserLogin } from 'src/app/UserLogin';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  btnText = 'Entrar'


  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {

  }

  async loginHandler(user: UserLogin){
    const userLoginPayload = {
      "username": user.username,
      "password": user.password
    };

    this.userService.login(userLoginPayload).subscribe(
      (response: any) => {
        const token = response.result.token;
        sessionStorage.setItem('x-dilly-token', `Bearer ${token}`)
        this.router.navigate(["/home"])
      }
    )

  }
}
