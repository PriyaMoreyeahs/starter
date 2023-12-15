import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CRUDFunction } from 'src/app/shared/global-functions/crudFunctions.service';
import { AssetsService } from '../Service/assets.service';

@Component({
  selector: 'app-archive-assets',
  templateUrl: './archive-assets.component.html',
  styleUrls: ['./archive-assets.component.scss']
})
export class ArchiveAssetsComponent implements OnInit {
  @Input() item: any = '';
  searchString: any;
  config: { itemsPerPage: number; currentPage: number; totalItems: string; };
  startDate: any;
  endDate: any;
  archiveAssetList: any;

  constructor(private assetsService: AssetsService, private CRUDFunction: CRUDFunction) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: '',
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchString = changes.item.currentValue;
  }

  ngOnInit(): void {
    this.getarchiveassetsitem();
  }

  //#region function to get all the archives assets
  getarchiveassetsitem() {
    let post = {
      startDate: this.startDate,
      endDate: this.endDate,
      searchString: this.searchString,
      page: this.config.currentPage,
      count: this.config.itemsPerPage,
    };
    this.assetsService.getarchiveassetsitem(post).subscribe((res: any) => {
      let data = this.CRUDFunction.responceBindingInPagination(res);
      this.archiveAssetList = data['tableData'];
      this.config.totalItems = data['totalLength'];
    }, (error) => {
      this.CRUDFunction.handleHttpError(error);
    });
  }
  //#endregion

  //#region fuicntion to change the page in the ticket report
  pageChanged(e) {
    this.config.itemsPerPage = e.pageSize;
    this.config.currentPage = e.pageIndex + 1;
    this.getarchiveassetsitem();
  }
  //#endregion

  //#region function to
  //#endregion

  //#region function to
  //#endregion

  //#region function to
  //#endregion

}
