import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherCompany } from 'src/app/models/puublisherCompany';
import { PublisherService } from 'src/app/services/publisher.service';

@Component({
  selector: 'app-publisher',
  standalone: true,
  imports: [],
  templateUrl: './publisher.component.html',
  styleUrl: './publisher.component.scss'
})
export class PublisherComponent implements OnInit{

  publishers: PublisherCompany[] = []
  allPublishers: PublisherCompany[] = []
  btnText = 'Novo'

  constructor(private publishserService: PublisherService, private router: Router){}

  ngOnInit(): void {
    this.publishserService.getPublisher().subscribe((items) => {
        this.allPublishers = items
        this.publishers = items
    })
  }
}
