import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidDetailsComponent } from './covid-details/covid-details.component';
import { IndiawiseComponent } from './indiawise/indiawise.component';
import { ChartComponent } from './chart/chart.component';
import { DistrictComponent } from './district/district.component';
const routes: Routes = [
  { path: 'state', component: CovidDetailsComponent },
  { path: 'india', component: IndiawiseComponent },
  { path: 'chart', component: ChartComponent},
  { path: '', component: ChartComponent},
  { path: 'dis', component: DistrictComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
