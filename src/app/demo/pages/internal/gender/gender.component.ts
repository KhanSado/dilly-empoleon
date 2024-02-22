import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAccordionItem, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { Gender } from 'src/app/models/Gender';
import { GenderService } from 'src/app/services/gender.service';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [NgbAccordionModule, CommonModule, NgFor, NgIf],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss'
})
export class GenderComponent implements OnInit{

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

