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
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  text: string = "";
  buttonstyle: object;
  public barChartOptions: Partial<ChartOptions>;
  public areaChartOptions: Partial<ChartOptions>;
  colorScheme = {
    domain: ["rgba(211, 229, 255, 1)", "rgba(146, 190, 255, 1)"]
  };
  series = [

    {
      name: "Leaves used",
      value: 70,
      label: "70%"
    },
    {
      name: "Leaves Available ",
      value: 20,
      label: "20%"
    },

  ];
  isgraph:boolean= true;
  constructor() { }

  ngOnInit(): void {
    this.chart1();
    this.chart2();
    //
  }
  private chart2() {
    this.barChartOptions = {
      series: [
        {
          name: "Colds and Flu",
          data: [44, 55, 41, 67, 22, 43],
        },

      ],
      chart: {
        type: "bar",
        height: 230,
        foreColor: "#9aa0ac",
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "category",
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 0.8,
        colors: ["#00ADD3",]
        //  "#374649", "#FD625E", "#F2C80F"],
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

  private chart1() {
    this.areaChartOptions = {
      series: [
        {  name: "New Patients",
          data: [1, 40, 28, 51, 42, 85, 77 , 50 , 78 , 58 ,25,37],}

      ],
      chart: {
        height: 250,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      colors: ["#00ADD3"],
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

  pieChartLabel(series: any[], name: string): string {
    const item = series.filter(data => data.name === name);
    if (item.length > 0) {
      return item[0].label;
    }
    return name;
  }

  onSelect(event) {

  }  leave(value){

   value==="graph" ? this.isgraph =true : this.isgraph= false
  }}
