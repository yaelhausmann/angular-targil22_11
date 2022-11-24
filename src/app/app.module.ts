import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import  {  CommonModule  }  from  "@angular/common" ;
import { DashboardComponent } from './dashboard/dashboard';
import { HeaderComponent } from './header/header.component';
import { GraphVaccinationComponent } from './graph-vaccination/graph-vaccination';
import {NgxEchartsModule} from "ngx-echarts";
import { ChartsInfectedComponent } from './chart-infected/charts.component';
import { ChartDeadPatientsComponent } from './chart-dead-patients/chart-dead-patients';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/chartsVaccinations', component: GraphVaccinationComponent },
  { path: 'dashboard/chartsInfected', component: ChartsInfectedComponent},
  { path: 'dashboard/chartsDeadPatients', component: ChartDeadPatientsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    GraphVaccinationComponent,
    ChartsInfectedComponent,
    ChartDeadPatientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

