import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  btnText = 'Registar'

  constructor(private userService: UsersService) {}

  ngOnInit(): void {

  }

  async createHandler(user: User){

    const userPayload = {
      "username": user.username,
      "name": user.name,
      "email": user.email,
      "password": user.password
    };
    await this.userService.createUser(userPayload).subscribe(
      (data) => {
        console.log('Dados enviados com sucesso!', data);
      },
      (error) => {
        console.error('Erro ao enviar dados para a API', error);
      }
    )

  }

}
