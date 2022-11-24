
import {Component, Input} from '@angular/core';
import {EChartsOption, EChartsType} from "echarts";
import {ChartsService} from "../services/charts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chart-dead-patients',
  templateUrl: './chart-dead-patients.html',
  styleUrls: ['./chart-dead-patients.scss']
})
export class ChartDeadPatientsComponent {

  @Input() isPageHome?: boolean;
  @Input() typeChart?: any;

  title = 'dead-patient-chart';
  chartOption: EChartsOption  = {};
  isShowMenu = false;
  public myChart: EChartsType | any;

  constructor(private chartsService: ChartsService,
              public route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.init();
  }

  public init() {

    this.typeChart = 'dead-patients';
    this.chartsService.getChart(this.typeChart).subscribe((options: any) => {
      this.chartOption = options
    });

  }

}
