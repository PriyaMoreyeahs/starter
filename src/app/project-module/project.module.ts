import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { MatTabsModule } from '@angular/material/tabs';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllProjectsComponent } from './project-board/all-projects/all-projects.component';
import { AssetsComponent } from './project-board/assets/assets.component';
import { DeletedTaskComponent } from './project-board/deleted-task/deleted-task.component';
import { DocumentComponent } from './project-board/document/document.component';
import { KanbanComponent } from './project-board/kanban/kanban.component';
import { MyTasksComponent } from './project-board/my-tasks/my-tasks.component';
import { PermissionComponent } from './project-board/permission/permission.component';
import { ProjectFinanceComponent } from './project-board/project-finance/project-finance.component';
import { SprintComponent } from './project-board/sprint/sprint.component';
import { ProjectExpenseComponent } from './project-expense/project-expense.component';
import { ProjectMasterComponent } from './project-master/project-master.component';
import { ProjectReportsComponent } from './project-reports/project-reports.component';
import { TaskApprovalComponent } from './task-approval/task-approval.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    AllProjectsComponent,
    AssetsComponent,
    DeletedTaskComponent,
    DocumentComponent,
    KanbanComponent,
    MyTasksComponent,
    PermissionComponent,
    ProjectFinanceComponent,
    SprintComponent,
    ProjectExpenseComponent,
    ProjectMasterComponent,
    ProjectReportsComponent,
    TaskApprovalComponent
  ],
  imports: [
    SharedModule,
    A11yModule,
     MatExpansionModule,
    CdkAccordionModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    MatIconModule,
    MatStepperModule,
    // NgxChartsModule,
    // CKEditorModule,
    // InfiniteScrollModule,
    CommonModule,
    ProjectRoutingModule,
    // NgxPaginationModule,
    // chartjsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    // Ng2SearchPipeModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSortModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatRadioModule,
    DragDropModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    NgbModule,
    MatTooltipModule,
    // PickerModule,
    // AngularEditorModule,
  ]
})
export class ProjectModule { }
