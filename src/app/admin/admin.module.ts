import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgChartsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AdminRoutingModule } from "./admin-routing.module";@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    MatIconModule,
    MatButtonModule,
  ],
})
export class AdminModule {}
