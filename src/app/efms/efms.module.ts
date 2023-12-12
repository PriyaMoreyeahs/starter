import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EfmsRoutingModule } from './efms-routing.module';
import { EfmsComponent } from './efms/efms.component';
import { TeamsComponent } from './teams/teams.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackreportComponent } from './feedbackreport/feedbackreport.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { EndoresementComponent } from './endoresement/endoresement.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsreportComponent } from './skillsreport/skillsreport.component';
import { GoalmanagementComponent } from './goalmanagement/goalmanagement.component';
import { ComponentsModule } from '../shared/components/components.module';
import { AnnualfeedbackComponent } from './annualfeedback/annualfeedback.component';
import { AveragescoreComponent } from './averagescore/averagescore.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../shared/shared.module';@NgModule({
  declarations: [
    EfmsComponent,
    TeamsComponent,
    FeedbackComponent,
    FeedbackreportComponent,
    AnonymousComponent,
    EndoresementComponent,
    SkillsComponent,
    SkillsreportComponent,
    GoalmanagementComponent,
    AnnualfeedbackComponent,
    AveragescoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EfmsRoutingModule,
    NgApexchartsModule,
    NgxChartsModule
  ]
})
export class EfmsModule { }
