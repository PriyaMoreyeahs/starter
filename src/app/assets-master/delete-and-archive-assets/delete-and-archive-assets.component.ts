import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-and-archive-assets',
  templateUrl: './delete-and-archive-assets.component.html',
  styleUrls: ['./delete-and-archive-assets.component.scss']
})
export class DeleteAndArchiveAssetsComponent implements OnInit {
  pageName: any = [
    { name: 'Deleted Assets', id: '1', class: 'activeButton' },
    { name: 'Archive Assets', id: '2', class: 'releaseButton' },
  ];
  activePageId: any = '1';
  searchString: string = '';
  item: string;

  constructor() { }

  ngOnInit(): void {
  }

  //#region function for make the active button change
  activePageSelectoin(id) {
    this.activePageId = id;
    this.pageName.map(pageName => {
      if (pageName.id == id) {
        pageName.class = 'activeButton'
      } else {
        pageName.class = 'releaseButton'
      }
    });
  }
  //#endregion

  //#region function for send the search string to the child components
  searchInput(value) {
    if (value.length > 2) {
      this.searchString = value;
      this.item = this.searchString;
    } else {
      this.searchString = '';
    }
  }
  //#endregion
}
