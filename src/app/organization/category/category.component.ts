import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  reimbursementData:any=[
    {
      amount:89,
      description:"Approve Amount",
      img:"../../../assets/images/card8aug.png"
    },
    {
      amount:89,
      description:"Approve Amount",
      img:"../../../assets/images/card8aug.png"
    },
    {
      amount:894,
      description:"Approve Amount",
      img:"../../../assets/images/card8aug.png"
    },
    {
      amount:89,
      description:"Approve Amount",
      img:"../../../assets/images/card8aug.png"
    },
   ]
  constructor() { }

  ngOnInit(): void {
    
  }

}

 