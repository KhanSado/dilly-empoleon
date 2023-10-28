import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  token = sessionStorage.getItem('x-dilly-token');


  constructor(private jwtHelper: JwtHelperService, private router: Router){}

  ngOnInit(): void {
  }

  isTokenValid(): boolean {
    return !this.jwtHelper.isTokenExpired(this.token);
  }

  logout(){
    this.router.navigate(["/"])
    sessionStorage.removeItem('x-dilly-token')
  }
}
