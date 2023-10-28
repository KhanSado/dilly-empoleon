import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  token = sessionStorage.getItem('x-dilly-token');


  constructor(private jwtHelper: JwtHelperService){}

  ngOnInit(): void {
  }

  isTokenValid(): boolean {
    return !this.jwtHelper.isTokenExpired(this.token);
  }
}
