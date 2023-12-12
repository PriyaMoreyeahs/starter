import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmossyRoutingModule } from './emossy-routing.module';
import { EmossyComponent } from './emossy/emossy.component';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';@NgModule({
  declarations: [
    EmossyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmossyRoutingModule
  ]
})
export class EmossyModule { }
