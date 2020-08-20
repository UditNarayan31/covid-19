import { Component, OnInit } from '@angular/core';
import { ProServiceService } from '../pro-service.service';
import AOS from 'aos';
@Component({
  selector: 'app-indiawise',
  templateUrl: './indiawise.component.html',
  styleUrls: ['./indiawise.component.css']
})
export class IndiawiseComponent implements OnInit {
 indiaDetails;
  constructor(private covidService:ProServiceService) { }

  ngOnInit(): void {
    AOS.init();
    this.covidService.getIndiaUrl().subscribe((item)=>{
      this.indiaDetails = item;
    })
  }

}
