import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, mergeAll, Observable, of, tap} from 'rxjs';
import {EChartsOption} from "echarts";

@Injectable({
  providedIn: 'root'
})


export class ChartsService {
  chartOption = {};
  constructor(
    private http: HttpClient,
  ) {
  }

  public getVaccination(): Observable<any> {
    return this.http.get<any>(`assets/json/vaccinations.json`)
  }

  public getAverageInfected(): Observable<any> {
    return this.http.get<any>(`assets/json/averageInfected.json`)
  }

  public getJson(type: any): Observable<any> {
    let url = `assets/json/`;
    switch (type) {
      case 'vaccinations':
        url += `vaccinations.json`;
        break;
      case 'average-infected':
        url += `averageInfected.json`;
        break;
      case 'dead-patients':
        url += `deadPatients.json`;
        break;
    }
    return this.http.get<any>(url)
  }

  public getChart(typeChart: any): Observable<any> {
   return this.getJson(typeChart).pipe(map((res: any) => {
      let arrayData: any[] = [];
      let arraydataXAxis: any[] = [];
      let arraySeries: any[] = [];
      if (typeChart === 'vaccinations') {
        arrayData = ['first_dose', 'second_dose', 'third_dose', 'fourth_dose'];
        arraydataXAxis = res.map((c: any) => c.age_group);
        arraySeries = [{
          name: 'first_dose',
          data: res.map((c: any) => c.percent_vaccinated_first_dose),
          type: 'line',
          areaStyle: {}
        },
          {
            name: 'second_dose',
            data: res.map((c: any) => c.persent_vaccinated_second_dose),
            type: 'line',
            areaStyle: {}
          },
          {
            name: 'third_dose',
            data: res.map((c: any) => c.persent_vaccinated_third_dose),
            type: 'line',
            areaStyle: {}
          },
          {
            name: 'fourth_dose',
            data: res.map((c: any) => c.persent_vaccinated_fourth_dose),
            type: 'line',
            areaStyle: {}
          }
        ];
      } else if (typeChart === 'average-infected') {
        arrayData = ['averageInfected'];
        arraydataXAxis = res.map((c: any) => new Date(c.begin_date).toLocaleDateString() + '-' + new Date(c.end_date).toLocaleDateString());
        arraySeries = [
          {
            name: 'averageInfected',
            data: res.map((c: any) => c.averageInfected),
            type: 'line',
          }
        ];
      }
      else if (typeChart === 'dead-patients'){
        arrayData = ['average-dead','amount']
        arraydataXAxis = res.map((c: any) => new Date(c.date).toLocaleDateString());
        arraySeries = [
            {
              name: 'average-dead',
              data: res.map((c: any) => c.countDeadAvg7days),
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            },
            {
              name: 'amount',
              data: res.map((c: any) => c.amount),
              type: 'line',
            }
          ];
         }
      this.chartOption = {
        legend: {
          data: arrayData
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: arraydataXAxis,
        },
        yAxis: {
          type: 'value',
        },
        series: arraySeries
      };
     return this.chartOption;
     }));
  }
}
