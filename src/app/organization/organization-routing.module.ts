import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationtreeComponent } from './organizationtree/organizationtree.component';
import { LeavedashboardComponent } from './leavedashboard/leavedashboard.component';
import { ReimbursementDashboardComponent } from './reimbursement-dashboard/reimbursement-dashboard.component';

const routes: Routes = [
  {
    path: "orgtree",
    component: OrganizationtreeComponent,
  },
  {
    path: "leavedashboard",
    component: LeavedashboardComponent,
  },
  {
    path: "reimbursement_dashboard",
    component: ReimbursementDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
