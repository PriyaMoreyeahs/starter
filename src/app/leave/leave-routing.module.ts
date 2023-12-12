import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './leave/leave.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { WfhComponent } from './wfh/wfh.component';
import { JobrequestComponent } from './jobrequest/jobrequest.component';
import { GoalComponent } from './goal/goal.component';
import { BookmytravelComponent } from './bookmytravel/bookmytravel.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [

  {
    path: "leave",
    component: LeaveComponent,
  },
  {
    path: "book-my-travel",
    component: BookmytravelComponent,
  },
  {
    path: "reimbursement",
    component: ReimbursementComponent,
  },
  {
    path: "attendance",
    component: AttendanceComponent,
  },
  {
    path: "wfh",
    component: WfhComponent,
  },
  {
    path: "jobrequest",
    component: JobrequestComponent,
  },
  {
    path: "reimbursement",
    component: ReimbursementComponent,
  },
  {
    path: "goal",
    component: GoalComponent,
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
