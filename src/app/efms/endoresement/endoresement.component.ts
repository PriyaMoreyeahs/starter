import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PopupFunctionService } from 'src/app/shared/global-functions/popup-function.service';
@Component({
  selector: 'app-endoresement',
  templateUrl: './endoresement.component.html',
  styleUrls: ['./endoresement.component.scss']
})
export class EndoresementComponent implements OnInit {
  addPayGroupForm: FormGroup;
  config: any;
  searchString:any;

  @Input() items: any[];
  constructor( private popupservice :PopupFunctionService , private formBuilder :FormBuilder) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };

  }
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
    },  ]

  ngOnInit() {
    this.addPayGroupForm = this.formBuilder.group({
      username: [''],
      description:[ '']
    });
    this.getreimbursement();
  }

  createEndorsement(category){
    this.popupservice.poupOpenFunction(category, 'lg')
  }

  submitPayGroup(formValue) {

  }

  getreimbursement() {
    this.tableData = {
      tableHead: this.tableHeadings,
      tableDetails: this.reimburseData,
      id: ['reimburseid']
    }
  }

}
