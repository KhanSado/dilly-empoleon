// angular import
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/app/models/User';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent  implements OnInit{

  btnText = 'vamos nessa!'

  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit(): void {

  }

  async createHandler(user: User){

    const userPayload = {
      "username": user.username,
      "name": user.name,
      "email": user.email,
      "password": user.password
    };
    this.registerService.createUser(userPayload).subscribe(
      (response: any) => {
        const token = response.result.token;
        sessionStorage.setItem('x-dilly-token', `Bearer ${token}`)
        this.router.navigate(["/home"])
      }
    )
  }
}

