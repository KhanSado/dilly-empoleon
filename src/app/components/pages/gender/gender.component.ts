import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gender } from 'src/app/Gender';
import { GenderService } from 'src/app/services/gender.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent  implements OnInit{

  genders: Gender[] = []
  allGenders: Gender[] = []
  btnText = 'Novo'

  constructor(private genderService: GenderService, private router: Router){}

  ngOnInit(): void {
    this.genderService.getGenders().subscribe((items) => {
        this.allGenders = items
        this.genders = items
    })
  }
}
