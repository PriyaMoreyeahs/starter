import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexResponsive,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
};
@Component({
  selector: 'app-leavegraph',
  templateUrl: './leavegraph.component.html',
  styleUrls: ['./leavegraph.component.scss']
})
export class LeavegraphComponent implements OnInit {
  public areaChartOptions: Partial<ChartOptions>;
  constructor() { }
  leavemenu=[]
  ngOnInit(){
    this.chart1()
     this.leavemenu=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ,"Aug" ,"Sep" ,"Oct" , "Nov" , "Dec"]
  }

  private chart1() {
    this.areaChartOptions = {
      series: [
        {  name: "Requested",
          data: [81, 40, 28, 51, 42, 85, 77 , 50 , 78 , 58 ,25,37],},
        {  name: "Approved",
          data: [ 50 , 78 , 58 ,25,70, 40, 45, 129, 42, 85, 77 ],},
        {  name: "Rejected",
          data: [87, 85, 100 , 50 , 78 , 89 ,25,37,115, 120,25, 129],}

      ],
      chart: {
        height: 250,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      colors: ["#00ADD3","#CDA7F5" ,"#AAE0AA"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        title: {
          text: "Month",
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ,"Aug" ,"Sep" ,"Oct" , "Nov" , "Dec"],
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 0,
      },

      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
}
