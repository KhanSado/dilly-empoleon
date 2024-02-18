import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherCompany } from 'src/app/puublisherCompany';
import { PublisherCompanyService } from 'src/app/services/publisher-company.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrl: './add-publisher.component.css'
})
export class AddPublisherComponent implements OnInit{

  btnText = 'Novo'

  constructor(private publisherService: PublisherCompanyService, private router: Router){}

  ngOnInit(): void {

  }


  async createHandler(publisher: PublisherCompany){

    const publisherPayload = {
      "name": publisher.name,
    };

    this.publisherService.savePublisher(publisherPayload).subscribe(
      (response: any) => {
        this.router.navigate(["/publishers-company"])
      }
    )
  }
}

