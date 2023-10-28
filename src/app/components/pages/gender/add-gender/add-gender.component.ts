import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/Author';
import { Gender } from 'src/app/Gender';
import { AuthorService } from 'src/app/services/author.service';
import { GenderService } from 'src/app/services/gender.service';

@Component({
  selector: 'app-add-gender',
  templateUrl: './add-gender.component.html',
  styleUrls: ['./add-gender.component.css']
})
export class AddGenderComponent implements OnInit{

  btnText = 'Novo'

  constructor(private genderServicce: GenderService, private router: Router){}

  ngOnInit(): void {

  }


  async createHandler(gender: Gender){

    const genderPayload = {
      "name": gender.name,
      "description": gender.description
    };

    this.genderServicce.saveGender(genderPayload).subscribe(
      (response: any) => {
        this.router.navigate(["/genders"])
      }
    )
  }
}

