import { Component } from '@angular/core';
import { OrganizationService } from '../service/organization.service';

@Component({
    selector: 'app-organizationtree',
  templateUrl: './organizationtree.component.html',
  styleUrls: ['./organizationtree.component.scss']
})
export class OrganizationtreeComponent{
  data:any=[];
  showImg: boolean = false;
  orgtree: any = []
  role: string;

 constructor(private OrganizationService: OrganizationService){

 }

  ngOnInit(){
    this.role = localStorage.getItem('roleType')
    this.OrganizationService.getemployeeorgtreenode().subscribe((res: any) => {
      if (res.status) {
        this.showImg = res.status;  
        this.orgtree = res.data
      }
      else {
        this.showImg = res.status
      }
    })
  }
}
