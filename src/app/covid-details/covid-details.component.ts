import { Component, OnInit } from '@angular/core';
import { ProServiceService } from '../pro-service.service';
import AOS from 'aos';


@Component({
  selector: 'app-covid-details',
  templateUrl: './covid-details.component.html',
  styleUrls: ['./covid-details.component.css']
})
export class CovidDetailsComponent implements OnInit {
   details;
  constructor(private covidService:ProServiceService) { }

  ngOnInit(): void {
    AOS.init();
  this.covidService.getData().subscribe((item) => {
     this.details = item;
  })
  
  }

}
