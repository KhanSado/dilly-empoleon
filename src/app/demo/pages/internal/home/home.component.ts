import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {

  ngOnInit(): void {

  }
 
}

