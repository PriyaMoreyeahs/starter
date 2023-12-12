import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EfmsComponent } from './efms/efms.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { EndoresementComponent } from './endoresement/endoresement.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackreportComponent } from './feedbackreport/feedbackreport.component';
import { GoalmanagementComponent } from './goalmanagement/goalmanagement.component';
import { SkillsComponent } from './skills/skills.component';
import { TeamsComponent } from './teams/teams.component';
import { SkillsreportComponent } from './skillsreport/skillsreport.component';

const routes: Routes = [
  {
    path: "efms",
    component: EfmsComponent,
  },
  {
    path: "anonymous",
    component: AnonymousComponent,
  },
  {
    path: "endoresement",
    component: EndoresementComponent,
  },
  {
    path: "feedback",
    component: FeedbackComponent,
  },
  {
    path: "reportfeedback",
    component: FeedbackreportComponent,
  },
  {
    path: "goal-management",
    component: GoalmanagementComponent,
  },
  {
    path: "skills",
    component: SkillsComponent,
  },
  {
    path: "reportskills",
    component: SkillsreportComponent,
  },
  {
    path: "teams",
    component: TeamsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EfmsRoutingModule { }
