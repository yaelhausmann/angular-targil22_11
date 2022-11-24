import {Component, Input} from '@angular/core';
import {EChartsOption, EChartsType} from "echarts";
import {ChartsService} from "../services/charts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chart-infected',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsInfectedComponent {

  @Input() isPageHome?: boolean;
  @Input() typeChart?: any;

  title = 'infected-chart';
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

   this.typeChart = 'average-infected';
   this.chartsService.getChart(this.typeChart).subscribe((options: any) => {
     this.chartOption = options
   });

    }

}
