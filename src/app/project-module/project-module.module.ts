import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModuleRoutingModule } from './project-module-routing.module';
import { AllProjectsComponent } from './project-board/all-projects/all-projects.component';
import { MyTasksComponent } from './project-board/my-tasks/my-tasks.component';
import { SprintComponent } from './project-board/sprint/sprint.component';
import { KanbanComponent } from './project-board/kanban/kanban.component';
import { DocumentComponent } from './project-board/document/document.component';
import { DeletedTaskComponent } from './project-board/deleted-task/deleted-task.component';
import { PermissionComponent } from './project-board/permission/permission.component';
import { AssetsComponent } from './project-board/assets/assets.component';
import { ProjectFinanceComponent } from './project-board/project-finance/project-finance.component';
import { ProjectMasterComponent } from './project-master/project-master.component';
import { ProjectExpenseComponent } from './project-expense/project-expense.component';
import { ProjectReportsComponent } from './project-reports/project-reports.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
  
    AllProjectsComponent,
       MyTasksComponent,
       SprintComponent,
       KanbanComponent,
       DocumentComponent,
       DeletedTaskComponent,
       PermissionComponent,
       AssetsComponent,
       ProjectFinanceComponent,
       ProjectMasterComponent,
       ProjectExpenseComponent,
       ProjectReportsComponent
  ],
  imports: [
    CommonModule,
    ProjectModuleRoutingModule,
    MatTabsModule,
  ]
})
export class ProjectModuleModule { }
