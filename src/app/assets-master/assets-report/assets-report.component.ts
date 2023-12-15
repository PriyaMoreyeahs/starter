import { Component, OnInit, ViewChild } from '@angular/core';
import { AssetsService } from '../Service/assets.service';
import { CRUDFunction } from '../../shared/global-functions/crudFunctions.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-assets-report',
  templateUrl: './assets-report.component.html',
  styleUrls: ['./assets-report.component.scss']
})
export class AssetsReportComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchString: string = '';
  config: { itemsPerPage: number; currentPage: number; totalItems: string; };
  assestsReportList: any;
  warehouseList: any[];
  warehouseId: any[];
  baseCategoryList: any[];
  baseCategoryId: any[];
  categoryList: any[];
  categoryId: any[];
  statusList: any[];
  statusId: any[];
  conditionList: any[];
  conditionId: any[];

  constructor(private assetsService: AssetsService, private CRUDFunction: CRUDFunction) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: '',
    };
  }

  ngOnInit(): void {
    this.getassestreport();
    this.getallwarehousefordropdown();
    this.getallbasecategoryfordropdown();
    this.getasseststatusenum();
    this.getallconditionenum();
  }

  //#region function for send the search string to the child components
  searchInput(value) {
    if (value.length > 2) {
      this.searchString = value;
    } else {
      this.searchString = '';
    }
  }
  //#endregion

  //#region function for get the report of assets
  getassestreport() {
    let post = {
      assetsStatus: this.statusId,
      condition: this.conditionId,
      baseCategoryId: this.baseCategoryId,
      categoryId: this.categoryId,
      warehouseIds: this.warehouseId,
      page: this.config.currentPage,
      count: this.config.itemsPerPage,
    };
    this.assetsService.getassestreport(post).subscribe((res: any) => {
      let post = this.CRUDFunction.responceBindingInPagination(res);
      this.assestsReportList = post['tableData'];
      this.config.totalItems = post['totalLength'];
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    })
  }
  //#endregion

  //#region fuicntion to change the page in the ticket report
  pageChanged(e) {

    this.config.itemsPerPage = e.pageSize;
    this.config.currentPage = e.pageIndex + 1;
    this.getassestreport();
  }
  //#endregion  //#region function for get the warehouse list
  getallwarehousefordropdown() {
    this.assetsService.getallwarehousefordropdown().subscribe((res: any) => {
      this.warehouseList = this.CRUDFunction.responceBinding(res);
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region function for get all of the basecategory
  getallbasecategoryfordropdown() {
    this.assetsService.getallbasecategoryfordropdown().subscribe((res: any) => {
      this.baseCategoryList = this.CRUDFunction.responceBinding(res);
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region function for get all of the status enum
  getasseststatusenum() {
    this.assetsService.getasseststatusenum().subscribe((res: any) => {
      this.statusList = this.CRUDFunction.responceBinding(res);
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region function for get all of the condition enum
  getallconditionenum() {
    this.assetsService.getallconditionenum().subscribe((res: any) => {
      this.conditionList = this.CRUDFunction.responceBinding(res);
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region function for get the category using base category id
  baseCategorySelection(baseCategoryId) {
    let post = {
      id: baseCategoryId,
    }
    this.assetsService.getallbasecategorymulltipel(post).subscribe((res: any) => {
      this.categoryList = this.CRUDFunction.responceBinding(res);
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region function for search in the assets report
  searchAssetsReports() {
    this.paginator.firstPage();
  }
  //#endregion
}
