import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProjectService } from '../project-service/project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
  providers: [DatePipe],
})
export class AllProjectsComponent implements OnInit {
  dates=[]
  lastdate: any;
  newDate: any;
  totalWorkingEstTime: any;
  totalWorkingTimeInWeek: any;
  IstrueDot: string;
  lastday: any;
  Year: any;
  firstWeekDate: any;
  GetWeekDay=[]
  Data=[]
  showBTN = false;
  firstDay: any;
  projectId: any;
  returnthisweek = false;
  WeekView: boolean;
  DayView: boolean;
  Show = false
  constructor( private datePipe: DatePipe,private spinnerService: NgxSpinnerService,private PrService : ProjectService) { }
  ngOnInit(): void {
  }

  //#region For Back Week Day
  backDates = (X) => {
    if (this.dates.length == 0) {
      for (let I = 0; I < Math.abs(X); I++) {
        let newDate = new Date(
          new Date().getTime() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000,
        );
        this.dates.push(newDate);
      }
      this.lastdate = this.dates[7];
      this.lastdate = this.datePipe.transform(this.lastdate, "yyyy/MM/dd");
      this.newDate = this.lastdate;
    } else {
      this.lastdate = this.dates[7];
      this.dates = [];
      for (let I = 0; I < Math.abs(X); I++) {
        this.dates.push(
          new Date(
            this.lastdate - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000,
          ),
        );
      }
      this.lastdate = this.dates[7];
      this.lastdate = this.datePipe.transform(this.lastdate, "yyyy/MM/dd");
      this.newDate = this.lastdate;
    }
    this.spinnerService.show();
    this.PrService.getweekdaydate(this.lastdate, this.projectId).subscribe(
      (res: any) => {
        this.spinnerService.hide();
        if (res.status) {
          this.showBTN = true;
          res;
          this.totalWorkingTimeInWeek = res.data.totalWorkingTimeInWeek;
          this.totalWorkingEstTime = res.data.totalWorkingEstTime;
          this.Data = res.data["root"];
          this.GetWeekDay = res.data["helpForDayDates"];
          this.firstWeekDate = this.GetWeekDay[0].date;
          this.Year = this.GetWeekDay[0].viewDate;
          this.lastday = this.GetWeekDay[6].date;
          this.IstrueDot = "";
          this.returnthisweek = true;
        } else {
          this.showBTN = false;
          this.totalWorkingTimeInWeek = 0;
          this.Data = [];
          this.GetWeekDay = res.data["helpForDayDates"];
          this.firstWeekDate = this.GetWeekDay[0].date;
          this.Year = this.GetWeekDay[0].viewDate;
          this.lastday = this.GetWeekDay[6].date;
          this.IstrueDot = "";
          this.returnthisweek = true;
          this.totalWorkingTimeInWeek = res.data.totalWorkingTimeInWeek;
          this.totalWorkingEstTime = res.data.totalWorkingEstTime;
        }
      },
      (e) => {},
      () => {
        let lastdata = this.datePipe.transform(this.dates[7], "yyyy/MM/dd");
        let todaydate = this.datePipe.transform(this.firstDay, "yyyy/MM/dd");
        if (lastdata == todaydate) {
          this.returnthisweek = false;
        } else {
          this.returnthisweek = true;
        }
      },
    );
  };
  //#endregion

  //#region For PridAte 
  priDates = (X) => {
    if (this.dates.length == 0) {
      for (let I = 0; I < Math.abs(X); I++) {
        let newDate = new Date(
          new Date().getTime() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000,
        );
        this.dates.push(newDate);
      }
      this.lastdate = this.dates[7];
      this.lastdate = this.datePipe.transform(this.lastdate, "yyyy/MM/dd");
      this.newDate = this.lastdate;
    } else {
      this.lastdate = this.dates[7];
      this.dates = [];
      for (let I = 0; I < Math.abs(X); I++) {
        this.dates.push(
          new Date(
            this.lastdate - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000,
          ),
        );
      }
      this.lastdate = this.dates[7];
      this.lastdate = this.datePipe.transform(this.lastdate, "yyyy/MM/dd");
      this.newDate = this.lastdate;
    }
    this.PrService.getweekdaydate(this.lastdate, this.projectId).subscribe(
      (res: any) => {
        if (res.status) {
          res;
          this.totalWorkingTimeInWeek = res.data.totalWorkingTimeInWeek;
          this.totalWorkingEstTime = res.data.totalWorkingEstTime;
          this.Data = res.data["root"];
          this.GetWeekDay = res.data["helpForDayDates"];
          this.Year = this.GetWeekDay[0].viewDate;
          this.firstWeekDate = this.GetWeekDay[0].date;
          this.lastday = this.GetWeekDay[6].date;
          this.IstrueDot = "";
          this.showBTN = true;
        } else {
          this.showBTN = false;
          this.Data = [];
          this.GetWeekDay = res.data["helpForDayDates"];
          this.Year = this.GetWeekDay[0].viewDate;
          this.firstWeekDate = this.GetWeekDay[0].date;
          this.lastday = this.GetWeekDay[6].date;
          this.IstrueDot = "";
          this.totalWorkingTimeInWeek = res.data.totalWorkingTimeInWeek;
          this.totalWorkingEstTime = res.data.totalWorkingEstTime;
        }
      },
      (e) => {},
      () => {
        let lastdata = this.datePipe.transform(this.dates[7], "yyyy/MM/dd");
        let todaydate = this.datePipe.transform(this.firstDay, "yyyy/MM/dd");

        if (lastdata == todaydate) {
          this.returnthisweek = false;
        } else {
          this.returnthisweek = true;
        }
      },
    );
  };
  //#endregion

  //#region Week
  Week() {
    this.WeekView = true;
    this.DayView = false;
  }
  //#endregion

  ShowCard(){
    this.Show = !this.Show
  }
}
