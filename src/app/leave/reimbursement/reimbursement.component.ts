import { Component, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.scss']
})
export class ReimbursementComponent implements OnInit {
  config: any;
  searchString:any;
  constructor() {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
   }
  @Input() items: any[];

  tableHeadings = [

    { name: 'Expense Title', id: 'expensetitle' },
    { name: 'Currency', id: 'currency' },
    { name: 'Expense Amt', id: 'expenseamt' },
    { name: 'Approved Amt', id: 'approvedamt' },
    { name: 'Approved\Rejected By', id: 'rejectedby' },
    { name: 'Merchant Name', id: 'merchantname' },
    { name: 'Bill No', id: 'billnumber' },
    { name: 'Status', id: 'status' },

  ]

  tableData: any;
  reimburseData =[
    {
      "expensetitle": "IT",
      "currency": "₹" ,
      "expenseamt": 500,
      "approvedamt": 500,
      "rejectedby": "Yes",
      "merchantname": "Anjali",
      "billnumber": "346536",
      "status": "Pending"
    },
    {
      "expensetitle": "IT",
      "currency": "₹" ,
      "expenseamt": 500,
      "approvedamt": 500,
      "rejectedby": "Yes",
      "merchantname": "Anjali",
      "billnumber": "346536",
      "status": "Pending"
    },
    {
      "expensetitle": "IT",
      "currency": "₹" ,
      "expenseamt": 500,
      "approvedamt": 500,
      "rejectedby": "Yes",
      "merchantname": "Anjali",
      "billnumber": "346536",
      "status": "Pending"
    },
    {
      "expensetitle": "IT",
      "currency": "₹" ,
      "expenseamt": 500,
      "approvedamt": 500,
      "rejectedby": "Yes",
      "merchantname": "Anjali",
      "billnumber": "346536",
      "status": "Pending"
    },
    {
      "expensetitle": "IT",
      "currency": "₹" ,
      "expenseamt": 500,
      "approvedamt": 500,
      "rejectedby": "Yes",
      "merchantname": "Anjali",
      "billnumber": "346536",
      "status": "Pending"
    },


  ]
  ngOnInit() {
    this.getreimbursement();
  }

    //#region api to get the data of band

    getreimbursement() {
      this.tableData = {
        tableHead: this.tableHeadings,
        tableDetails: this.reimburseData,
        id: ['reimburseid']
      }
    }  }

    //#endregion
