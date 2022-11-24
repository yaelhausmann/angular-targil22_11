import {Component, Input, Output, EventEmitter} from '@angular/core';
import { EChartsOption } from 'echarts';
import {ChartsService} from "../services/charts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-graph-vaccination',
  templateUrl: './graph-vaccination.html',
  styleUrls: ['./graph-vaccination.scss']
})
export class GraphVaccinationComponent {

  @Input() isPageHome?: boolean;
  @Input() typeChart?: any;
  public resVaccinations = [];

  title = 'vaccination-chart';
  chartOption: EChartsOption  = {};
  isShowMenu = false;
  constructor(private chartsService: ChartsService,
              public route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.typeChart = 'vaccinations';
    this.chartsService.getChart(this.typeChart).subscribe((options: any) => {
      this.chartOption = options
    });
  }

}
