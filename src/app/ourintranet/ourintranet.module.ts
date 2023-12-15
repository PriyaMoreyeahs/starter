import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurintranetRoutingModule } from './ourintranet-routing.module';
import { OurintranetComponent } from './ourintranet/ourintranet.component';@NgModule({
  declarations: [
    OurintranetComponent
  ],
  imports: [
    CommonModule,
    OurintranetRoutingModule
  ]
})
export class OurintranetModule { }
