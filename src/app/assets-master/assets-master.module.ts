import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { AssetsDashboardComponent } from './assets-dashboard/assets-dashboard.component';
import { AssetsMasterRoutingModule } from './assets-master-routing.module';
import { AssetsReportComponent } from './assets-report/assets-report.component';
import { AssetsWarehouseAndCategoryComponent } from './assets-warehouse-and-category/assets-warehouse-and-category.component';
import { CompanyAssetsComponent } from './company-assets/company-assets.component';
import { ExpireDashboardComponent } from './expire-dashboard/expire-dashboard.component';
import { TrackAssetsComponent } from './track-assets/track-assets.component';
import { DeleteAndArchiveAssetsComponent } from './delete-and-archive-assets/delete-and-archive-assets.component';
import { DeleteAssetsComponent } from './delete-assets/delete-assets.component';
import { ArchiveAssetsComponent } from './archive-assets/archive-assets.component';
import { AddUpdateAssetsComponent } from './add-update-assets/add-update-assets.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AssetsDashboardComponent,
    ExpireDashboardComponent,
    CompanyAssetsComponent,
    AssetsReportComponent,
    AssetsWarehouseAndCategoryComponent,
    AllAssetsComponent,
    TrackAssetsComponent,
    DeleteAndArchiveAssetsComponent,
    DeleteAssetsComponent,
    ArchiveAssetsComponent,
    AddUpdateAssetsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AssetsMasterRoutingModule,
    NgxChartsModule,
    FormsModule,
    MatSelectModule,
    NgSelectModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
  ]
})
export class AssetsMasterModule { }
