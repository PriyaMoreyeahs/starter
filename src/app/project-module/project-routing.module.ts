import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './project-board/all-projects/all-projects.component';
import { TaskApprovalComponent } from './task-approval/task-approval.component';
import { ProjectReportsComponent } from './project-reports/project-reports.component';
import { ProjectExpenseComponent } from './project-expense/project-expense.component';
import { ProjectMasterComponent } from './project-master/project-master.component';

const routes: Routes = [
  {
    path: 'project-master',
    component: ProjectMasterComponent,
  },
  {
    path: 'project-board',
    component: AllProjectsComponent,
  },
  {
    path: 'Task-Approval',
    component: TaskApprovalComponent,
  },
  {
    path: 'Project-Reports',
    component: ProjectReportsComponent,
  },
  {
    path: 'Project-Expense',
    component: ProjectExpenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
