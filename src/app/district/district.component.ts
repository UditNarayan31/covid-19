import { Component, OnInit } from '@angular/core';
import { ProServiceService } from '../pro-service.service';
import AOS from 'aos';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  district;
 
  constructor(private covidService:ProServiceService) { }

  ngOnInit(): void {
    AOS.init();
     this.covidService.getDistrict().subscribe(item => {
       this.district = item;
     })
   }
}
