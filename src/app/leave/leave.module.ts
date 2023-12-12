import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave/leave.component';
import { BookmytravelComponent } from './bookmytravel/bookmytravel.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { WfhComponent } from './wfh/wfh.component';
import { GoalComponent } from './goal/goal.component';
import { JobrequestComponent } from './jobrequest/jobrequest.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    LeaveComponent,
    BookmytravelComponent,
    ReimbursementComponent,
    AttendanceComponent,
    WfhComponent,
    JobrequestComponent,
    GoalComponent,
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,

    SharedModule,
    NgApexchartsModule,
    NgxChartsModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LeaveModule { }
