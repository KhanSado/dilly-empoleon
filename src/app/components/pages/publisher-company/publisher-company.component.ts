import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherCompany } from 'src/app/puublisherCompany';
import { PublisherCompanyService } from 'src/app/services/publisher-company.service';

@Component({
  selector: 'app-publisher-company',
  templateUrl: './publisher-company.component.html',
  styleUrl: './publisher-company.component.css'
})
export class PublisherCompanyComponent  implements OnInit{

  publishers: PublisherCompany[] = []
  allPublishers: PublisherCompany[] = []
  btnText = 'Novo'

  constructor(private publishserService: PublisherCompanyService, private router: Router){}

  ngOnInit(): void {
    this.publishserService.getPublisher().subscribe((items) => {
        console.log(items);
        this.allPublishers = items
        this.publishers = items

        console.log(this.publishers);
    })
  }
}
