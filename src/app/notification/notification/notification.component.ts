import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

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

    { name: 'Requested By', id: 'requestedby' },
    { name: 'Leave Type', id: 'leavetype' },
    { name: 'Status', id: 'status' },
    { name: 'Leave Dates', id: 'leavedate' },
    { name: 'Leave Note', id: 'leavenote' },
  ]

  tableData: any;
  notificationData =[
    {
      "requestedby": "Bhavendra Singh Jat",
      "leavetype": "Un-Paid" ,
      "status": "Approved",
      "leavedate": "Feb 12 - Feb 16, 2023 (4 days)",
      "leavenote": "To attend my Brother’s Wedding",
    },
    {
      "requestedby": "Bhavendra Singh Jat",
      "leavetype": "Un-Paid" ,
      "status": "Approved",
      "leavedate": "Feb 12 - Feb 16, 2023 (4 days)",
      "leavenote": "To attend my Brother’s Wedding",
    },
    {
      "requestedby": "Bhavendra Singh Jat",
      "leavetype": "Un-Paid" ,
      "status": "Approved",
      "leavedate": "Feb 12 - Feb 16, 2023 (4 days)",
      "leavenote": "To attend my Brother’s Wedding",
    },
    {
      "requestedby": "Bhavendra Singh Jat",
      "leavetype": "Un-Paid" ,
      "status": "Approved",
      "leavedate": "Feb 12 - Feb 16, 2023 (4 days)",
      "leavenote": "To attend my Brother’s Wedding",
    },

  ]
  ngOnInit() {
    this.getnotification();
  }

    //#region api to get the data of band

    getnotification() {
      this.tableData = {
        tableHead: this.tableHeadings,
        tableDetails: this.notificationData,
        id: ['notificationid']
      }
    }}
