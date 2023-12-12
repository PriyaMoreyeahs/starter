import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationRoutingModule } from './notification-routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { NotificationComponent } from './notification/notification.component';@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,

  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NotificationModule { }
