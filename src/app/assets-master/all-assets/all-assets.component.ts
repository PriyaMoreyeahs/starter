import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
import { CRUDFunction } from 'src/app/shared/global-functions/crudFunctions.service';
import { AssetsService } from '../Service/assets.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ExportExcelComponent } from 'src/app/shared/components/export-excel/export-excel.component';
import { PopupFunctionService } from '../../shared/global-functions/popup-function.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-all-assets',
  templateUrl: './all-assets.component.html',
  styleUrls: ['./all-assets.component.scss']
})
export class AllAssetsComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  assetsTypeIdList: any[];
  baseCategoryList: any[];
  categoryList: any[];
  assetsTypeId: any;
  baseCategoryId: any[];
  categoryId: any[];
  conditionList: any[];
  statusList: any[];
  employeeList: any[];
  employeeId: any[];
  allAssetsList: any[];
  assetStatusId: any[];
  conditionId: any[];
  config: { itemsPerPage: number; currentPage: number; totalItems: any; };
  @Input() item: any = '';
  @Input() customExports: any = '';
  searchString: any;
  customExport: any;
  api = environment.config.API_URL;
  customExportArray: any = [
    { name: 'Asset Name', bindableValue: 'itemName', isDate: false },
    { name: 'Item Code', bindableValue: 'itemCode', isDate: false },
    { name: 'Warehouse', bindableValue: 'assetsBaseCategoryName', isDate: false },
    { name: 'Asset Base Category', bindableValue: 'assetsCategoryName', isDate: false },
    { name: 'Asset Category', bindableValue: 'assetsSerialNo', isDate: false },
    { name: 'Serial Number', bindableValue: 'assetsLocation', isDate: false },
    { name: 'Location', bindableValue: 'assetsCondition', isDate: false },
    { name: 'Asset Condition', bindableValue: 'assetsDescription', isDate: false },
    { name: 'Asset Description', bindableValue: 'assetsTypeName', isDate: false },
    { name: 'Asset Type', bindableValue: 'assetsinvoiceNumber', isDate: false },
    { name: 'Invoice Number', bindableValue: 'invoiceNumber', isDate: false },
    { name: 'Purchase Date', bindableValue: 'warrantyExpDate', isDate: true },
    { name: 'Warranty Expiry Date', bindableValue: 'LicenseKey', isDate: true },
    { name: 'License Key', bindableValue: 'licenseStartdate', isDate: false },
    { name: 'License Start Date', bindableValue: 'licenseExpirydate', isDate: true },
    { name: 'License Expiry Date', bindableValue: 'assetsPrice', isDate: true },
    { name: 'Price', bindableValue: 'warehouse', isDate: false },
  ];
  assetsIcon: any = [{ name: 'beach_access', assetsIconId: '1', }, { name: 'stay_primary_portrait', assetsIconId: '2', }, { name: 'devices', assetsIconId: '3', }, { name: 'computer', assetsIconId: '4', }, { name: 'desktop_mac', assetsIconId: '5', }, { name: 'desktop_windows', assetsIconId: '6', }, { name: 'developer_board', assetsIconId: '7', }, { name: 'dock', assetsIconId: '8', }, { name: 'headset', assetsIconId: '9', }, { name: 'headset_mic', assetsIconId: '10', }, { name: 'keyboard', assetsIconId: '11', }, { name: 'laptop', assetsIconId: '12', }, { name: 'mouse', assetsIconId: '13', }, { name: 'phone_android', assetsIconId: '14', }, { name: 'phone_iphone', assetsIconId: '15', }, { name: 'sim_card', assetsIconId: '16', }, { name: 'speaker', assetsIconId: '17', }, { name: 'speaker_group', assetsIconId: '18', }, { name: 'tablet_android', assetsIconId: '19', }, { name: 'tablet_mac', assetsIconId: '20', }, { name: 'watch', assetsIconId: '21', }, { name: 'tv', assetsIconId: '22', }, { name: 'videogame_asset', assetsIconId: '23', }, { name: 'tablet_mac', assetsIconId: '24', }, { name: 'camera_alt', assetsIconId: '25', }, { name: 'camera_roll', assetsIconId: '26', }, { name: 'flight', assetsIconId: '27', }, { name: 'local_shipping', assetsIconId: '28', }, { name: 'alarm', assetsIconId: '29', }, { name: 'android', assetsIconId: '30', }, { name: 'assignment_ind', assetsIconId: '31', }, { name: 'important_devices', assetsIconId: '32', }, { name: 'battery_charging_full', assetsIconId: '33', }, { name: 'build', assetsIconId: '34', }, { name: 'work', assetsIconId: '35', }, { name: 'call', assetsIconId: '36', }, { name: 'print', assetsIconId: '37', }, { name: 'settings_bluetooth', assetsIconId: '38', }, { name: 'location_on', assetsIconId: '39', }, { name: 'rss_feed', assetsIconId: '40', }, { name: 'videocam', assetsIconId: '41', }, { name: 'scanner', assetsIconId: '42', }, { name: 'watch', assetsIconId: '43', }, { name: 'timer', assetsIconId: '44', }, { name: 'local_dining', assetsIconId: '45', }, { name: 'domain', assetsIconId: '46', },];
  excelList: any;

  constructor(private assetsService: AssetsService, private CRUDFunction: CRUDFunction, public dialog: MatDialog, private popupFunctionService: PopupFunctionService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: '',
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchString = changes?.item?.currentValue;
  }

  ngOnInit(): void {
    this.dataFromURL();
    this.getassettype();
    this.getallconditionenum();
    this.getasseststatusenum();
    this.getallemployeelist();
    this.getallassestitemmaster();
  }

  //#region function to get the data from the url
  dataFromURL() {
    let data = this.CRUDFunction.dataDecoding();
    if (data.isDashboard) {
      switch (data.id) {
        case '1':
          this.assetsTypeId = 1;
          break;
        case '2':
          this.assetsTypeId = 1;
          this.assetStatusId = [1];
          break;
        case '3':
          this.assetsTypeId = 1;
          this.assetStatusId = [2];
          break;
        case '4':
          this.assetsTypeId = 1;
          this.assetStatusId = [4];
          break;
        case '5':
          this.assetStatusId = [3];
          break;
        case '6':
          this.assetsTypeId = 2;
          break;
        case '7':
          this.assetsTypeId = 2;
          this.assetStatusId = [1];
          break;
        case '8':
          this.assetsTypeId = 2;
          this.assetStatusId = [2];
          break;
      }
    } else {
      console.log("data", data);

    }
    this.getallassestitemmaster();
  }
  //#endregion

  //#region function to open popup for export
  customExportDefaultExportPopUp() {
    let post = {
      employeeId: this.employeeId,
      assetsType: this.assetsTypeId,
      assetsStatus: this.assetStatusId,
      condition: this.conditionId,
      baseCategoryId: this.baseCategoryId,
      categoryId: this.categoryId,
      searchString: this.searchString,
      page: this.config.currentPage,
      count: this.config.totalItems,
    }
    this.assetsService.getallassestitemmaster(post).subscribe((res: any) => {
      let post = this.CRUDFunction.responceBindingInPagination(res);
      this.excelList = post['tableData'];
      let information = {
        checkBoxArray: this.customExportArray,
        visibleTableList: this.excelList,
      }
      this.popupFunctionService.matDialogBoxPopup(ExportExcelComponent, information, '1000px');
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region function for export the excel of the assets
  exportAssetsExcel(selectedFields) {
    console.log(selectedFields, this.config.totalItems);
    this.getallassestitemmaster();
  }
  //#endregion

  //#region function for get the asset type enum
  getassettype() {
    this.assetsService.getassetstypeenum().subscribe((res: any) => {
      this.assetsTypeIdList = res.data
    })
  }
  //#endregion

  //#region function will hit after the selection of assets type and provide the list of base categories
  assetTypeSelection(assetsTypeId) {
    console.log(assetsTypeId);
    let post = {
      type: assetsTypeId,
    }
    this.assetsService.getbasecategorybyassetstypeid(post).subscribe((res: any) => {
      this.baseCategoryList = this.CRUDFunction.responceBinding(res);
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

  //#region function for get  the condition enum
  getallconditionenum() {
    this.assetsService.getallconditionenum().subscribe((res: any) => {
      this.conditionList = this.CRUDFunction.responceBinding(res);
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region function for get the status enum
  getasseststatusenum() {
    this.assetsService.getasseststatusenum().subscribe((res: any) => {
      this.statusList = this.CRUDFunction.responceBinding(res);
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region function for get the list of employee
  getallemployeelist() {
    this.assetsService.getallemployeelist().subscribe((res: any) => {
      this.employeeList = this.CRUDFunction.responceBinding(res);
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region function for get the all the assets iin the company
  getallassestitemmaster() {
    let post = {
      employeeId: this.employeeId,
      assetsType: this.assetsTypeId,
      assetsStatus: this.assetStatusId,
      condition: this.conditionId,
      baseCategoryId: this.baseCategoryId,
      categoryId: this.categoryId,
      searchString: this.searchString,
      page: this.config.currentPage,
      count: this.config.itemsPerPage,
    }
    let routeData = {
      isDashboard: false,
      post,
    };
    this.CRUDFunction.routingWithData('assets-master/company-assets', routeData);
    this.assetsService.getallassestitemmaster(post).subscribe((res: any) => {
      let post = this.CRUDFunction.responceBindingInPagination(res);
      this.allAssetsList = post['tableData'];
      this.config.totalItems = post['totalLength'];
      this.allAssetsList.map((item) => {
        this.assetsIcon.filter(icon => {
          if (icon.assetsIconId == item.assetsIconId) {
            let assetsIconName = icon.name;
            item.assetsIconName = assetsIconName;
          }
        })
        return item;
      });
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region fuicntion to change the page in the ticket report
  pageChanged(e) {
    this.config.itemsPerPage = e.pageSize;
    this.config.currentPage = e.pageIndex + 1;
    this.getallassestitemmaster();
  }
  //#endregion

  //#region function for delete or archive the assets
  deleteOrArchiveAsset(assetId, check) {
    Swal.fire({
      title: "Are you sure you want to " + (check ? "delete?" : "archive?"),
      icon: "warning",
      input: 'text',
      inputValidator: (value) => {
        return !value && 'Reason is mendatory to ' + (check ? "delete!" : "archive!")
      },
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FA543D",
      confirmButtonText: check ? "Yes, delete it!" : "Yes, Archive it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let post = {
          itemId: assetId,
          reason: result.value
        }
        let apiName = ''
        check ? apiName = 'deleteitem' : apiName = 'archiveassetsitem';
        this.assetsService[apiName](post).subscribe((data: any) => {
          if (data.status) {
            Swal.fire(
              check ? "Deleted" : "Archived",
              "Your file has been " + (check ? "Deleted" : "Archived"),
              "success"
            ).then(() => {
              this.getallassestitemmaster();
            });
          }
        });
      }
    });
  }
  //#endregion

  //#region function for route to the page for the add assets
  addAssets(assetsId) {
    this.CRUDFunction.routingWithData('assets-master/add-update-assets', assetsId);
  }
  //#endregion

  //#region function for hit on the click of search button
  searchButtonClick() {
    let routeData = {
      isDashboard: false,
    };
    this.CRUDFunction.routingWithData('assets-master/company-assets', routeData);
    this.paginator.firstPage();
    this.getallassestitemmaster();
  }
  //#endregion
}
