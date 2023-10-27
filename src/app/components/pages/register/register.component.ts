import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  btnText = 'Registar'

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {

  }

  async createHandler(user: User){

    const userPayload = {
      "username": user.username,
      "name": user.name,
      "email": user.email,
      "password": user.password
    };
    this.userService.createUser(userPayload).subscribe(
      (response: any) => {
        const token = response.result.token;
        sessionStorage.setItem('x-dilly-token', `Bearer ${token}`)
        this.router.navigate(["/home"])
      }
    )
  }
}
