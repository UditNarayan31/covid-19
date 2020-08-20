import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProServiceService {
stateUrl = "https://api.covid19india.org/data.json";
indiaUrl = "https://api.covidindiatracker.com/total.json";
districtUrl = "https://api.covid19india.org/state_district_wise.json";
  constructor( private http: HttpClient) { }

  getData(){
    return this.http.get(this.stateUrl);
  }
  getIndiaUrl(){
    return this.http.get(this.indiaUrl);
  }
  getDistrict(){
    return this.http.get(this.districtUrl)
  }
}
