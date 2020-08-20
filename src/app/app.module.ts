import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidDetailsComponent } from './covid-details/covid-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndiawiseComponent } from './indiawise/indiawise.component';
import { ChartComponent } from './chart/chart.component';
import { DistrictComponent } from './district/district.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidDetailsComponent,
    NavbarComponent,
    IndiawiseComponent,
    ChartComponent,
    DistrictComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
