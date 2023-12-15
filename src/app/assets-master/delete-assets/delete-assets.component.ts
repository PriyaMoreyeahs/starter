import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CRUDFunction } from 'src/app/shared/global-functions/crudFunctions.service';
import { AssetsService } from '../Service/assets.service';

@Component({
  selector: 'app-delete-assets',
  templateUrl: './delete-assets.component.html',
  styleUrls: ['./delete-assets.component.scss']
})
export class DeleteAssetsComponent implements OnInit {
  @Input() item: any = '';
  searchString: any;
  config: { itemsPerPage: number; currentPage: number; totalItems: string; };
  deletedAssetsList: any;

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
    this.getdeletedassets();
  }

  //#region function for get the list of deleted assets
  getdeletedassets() {
    let post = {
      searchString: this.searchString,
      page: this.config.currentPage,
      count: this.config.itemsPerPage,
    }
    this.assetsService.getdeletedassets(post).subscribe((res: any) => {
      let data = this.CRUDFunction.responceBindingInPagination(res);
      this.deletedAssetsList = data['tableData'];
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
    this.getdeletedassets();
  }
  //#endregion

  //#region function for
  //#endregion

  //#region function for
  //#endregion

  //#region function for
  //#endregion

}
