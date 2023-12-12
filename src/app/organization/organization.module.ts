import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationtreeComponent } from './organizationtree/organizationtree.component';
import { LeavedashboardComponent } from './leavedashboard/leavedashboard.component';
import { ReimbursementDashboardComponent } from './reimbursement-dashboard/reimbursement-dashboard.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LeavegraphComponent } from './leavegraph/leavegraph.component';
import { LeavecountComponent } from './leavecount/leavecount.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CategoryComponent } from './category/category.component';
import { AmtcategoryComponent } from './amtcategory/amtcategory.component';
import { D3OrgChartComponent } from './d3-org-chart/d3-org-chart.component';
// import { OrgChartModule } from 'angular-org-chart';


@NgModule({
  declarations: [
    OrganizationtreeComponent,
    LeavedashboardComponent,
    ReimbursementDashboardComponent,
    LeavegraphComponent,
    LeavecountComponent,
    CategoryComponent,
    AmtcategoryComponent,
    D3OrgChartComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    NgxChartsModule,
    MatSlideToggleModule,
    OrganizationRoutingModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OrganizationModule { }
