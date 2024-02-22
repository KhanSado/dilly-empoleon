import { Directive, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Directive({
  selector: '[isLogged]',
})
export class IsLoggedDirective implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    const token = sessionStorage.getItem('x-dilly-token');

    console.log(token);
    
    if (!token) {
      this.router.navigate(['/guest/login']);
      return;
    }

    console.log("Está logado!");
  }
}
