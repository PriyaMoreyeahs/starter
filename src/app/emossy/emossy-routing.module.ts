import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmossyComponent } from './emossy/emossy.component';

const routes: Routes = [
  {
    path: "emossy",
    component: EmossyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmossyRoutingModule { }
