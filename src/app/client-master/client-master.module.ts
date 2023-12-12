import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientMasterRoutingModule } from './client-master-routing.module';
import { ClientMasterComponent } from './client-master/client-master.component';@NgModule({
  declarations: [
    ClientMasterComponent
  ],
  imports: [
    CommonModule,
    ClientMasterRoutingModule
  ]
})
export class ClientMasterModule { }
