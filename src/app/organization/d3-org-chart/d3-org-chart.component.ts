
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import  * as TreeChart from 'd3-org-chart';
@Component({
  selector: 'app-d3-org-chart',
  templateUrl: './d3-org-chart.component.html',
  styleUrls: ['./d3-org-chart.component.scss']
})
export class D3OrgChartComponent implements OnInit {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  @Input() data: any[];
  chart;
  treeChart;
  constructor() { }

  ngOnInit() {

    let array = []
    this.data.map((d) => {
      array.push({
        ...d,
        nodeContent:
          `
        <div style="margin-left:1px;height:${d.height}px;border-radius:2px;overflow:visible;color:black;">
          <div style="height:${d.height}px;padding-top:0px;background-color:white;border:1px solid lightgray;">
            <img src=" ${d.nodeImage.url}" style="margin-left:${d.width / 2 - 30}px;border-radius:100px;width:60px;height:60px;" />
            <div style="margin-right:10px;margin-top:15px;float:right;color:black;">ID:${d.nodeId}</div>
            <div style="margin-top:-30px;background-color:#ff6154;height:10px;width:${d.width /2 -30}px;border-radius:1px"></div>
            <div style="padding:20px 20px 5px;text-align:center">
              <div style="color:#111672;font-size:16px;font-weight:bold">${d.displayName||'ANJALI DUBEY'}</div>
              <div style="color:#404040;font-size:14px;margin-top:4px">${d.designation||'ANJALI DUBEY DESIGNATION'}</div>
            </div>
            <div style="display:flex;justify-content:space-between;padding-left:5px;padding-right:5px;color:black;">
              <div style="font-size: 13px;">✉️: ${d.officeEmail}</div>
            </div>
          </div>
        </div>
                `,

      })

    })

    this.data = array;
  }

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new TreeChart.OrgChart()

    }
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }

  updateChart() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }

    this.chart.container(this.chartContainer.nativeElement)
      .data(this.data).nodeContent(d=>d.data.nodeContent)
      .svgWidth(`100vw`)
      .initialZoom(0.8)
      .render();
  }}
