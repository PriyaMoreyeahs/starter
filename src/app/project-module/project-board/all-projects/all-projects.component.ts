import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'app/project-module/project.service';
import Swal from "sweetalert2";
import { dateJson } from 'app/project-module/interface/datejason';
import { projectResponse } from 'app/project-module/interface/project-response-interface';
import { emptyRow } from 'app/project-module/interface/emptyRow';
import { getWeekDays } from 'app/project-module/interface/getWeekTask';
// import { map } from "rxjs/operators"; 
@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
  providers: [DatePipe],
})
export class AllProjectsComponent implements OnInit{
  public jsonDate!: dateJson[];
  public projectRes!: projectResponse[];
  public emptyRow!: emptyRow[];
  public getTaskRes!: getWeekDays[];
  result: string ;
  GetWeekDay = [];
  timeSheetForm: FormGroup;
  today: Date ;
  post: string ;
  firstWeekDate: Date;
  Year: number;
  lastday: Date;
  Dates = [];
  getallprojectData = {};
  returnthisweek = false;
  selecteddata=[]
  weakDate: Date;
  allChecked = false;
  submitted: boolean = false;
  data: FormGroup

  constructor(
    private datePipe: DatePipe,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private spinnerService: NgxSpinnerService,
    private TimesheetrService: ProjectService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.today = new Date();
    this.weakDate = new Date();
    this.newusertimesheetdashboard(this.today);
    this.getallproject();
  }
  disableDate(date) {
    return new Date(date).getTime() > this.today.getTime();
  }
  getallproject() {
    this.TimesheetrService.getAllproject().subscribe((projectRes) => {
      this.getallprojectData = projectRes
    });
  }

  initForm() {
    this.timeSheetForm = this.fb.group({
      allChecked: false,
      timeSheet: this.fb.array([]), //FormARRAY
    });
  }
  //#region  Form Array time shee
  get timeSheet(): FormArray {
    return this.timeSheetForm.controls["timeSheet"] as FormArray;
  }

  getDateControls(form) {
    return form.controls.dates.controls;
  }

  addForm(emptyRow) {
    this.timeSheetForm.get("allChecked").setValue(false);
    const datesArr = [];
    this.Dates.map((date) => {
      datesArr.push(this.fb.group({ ...date }));
    });
    const temp = this.fb.group({
      taskId: emptyRow?.taskId,
      projectName: emptyRow?.projectName,
      projectId: [emptyRow?.projectId, [Validators.required]],
      isChecked: false,
      disableInput: emptyRow?.disableInput,
      taskName: [emptyRow?.taskName, [Validators.required]],
      isBillabel: emptyRow?.isBillabel,
      totalWorkingTimeInProject: emptyRow?.totalWorkingTimeInProject,
      allWorkingTimeInProject: emptyRow?.allWorkingTimeInProject,
      projectManagerId: emptyRow?.projectManagerId,
      taskRequestId: emptyRow?.taskRequestId,
      taskRequestName: emptyRow?.taskRequestName,
      estimateTime: emptyRow?.estimateTime,
      startDate: [emptyRow?.startDate, [Validators.required]],
      endDate: [emptyRow?.endDate, [Validators.required]],
      re_EvaluteComment: emptyRow?.re_EvaluteComment,
      isReEvaluet: emptyRow?.isReEvaluet,
      isApproved: emptyRow?.isApproved,
      isSFA: emptyRow?.isSFA,
      estimateTimeLong: emptyRow?.estimateTimeLong,
      description: emptyRow?.description,
      dates: this.fb.array([...datesArr]),
    });
    this.timeSheet.push(temp);

  }

  deleteForm(i: number) {
    this.timeSheet.removeAt(i);
  }

  addRow() {
    this.Dates = this.jsonDate;
    this.addForm(this.emptyRow);
  }
  //#endregion
  newusertimesheetdashboard(data) {
    this.allChecked = false;
    this.spinnerService.show();
    if (data.toLocaleDateString() == this.today.toLocaleDateString()) {
      this.returnthisweek = false;
    } else {
      this.returnthisweek = true;
    }
    this.initForm();
    this.post = this.datePipe.transform(data, "yyyy/MM/dd");
    this.TimesheetrService.newusertimesheetdashboard(this.post).subscribe(
      (getTaskRes) => {
        this.spinnerService.hide();
        this.GetWeekDay = getTaskRes?.['data']["helpForDayDates"];
        this.firstWeekDate = this.GetWeekDay[0].date;
        this.Year = this.GetWeekDay[0].viewDate;
        this.lastday = this.GetWeekDay[6].date;
        this.jsonDate = getTaskRes?.['dateJson'];
        if (getTaskRes?.['status']) {
          getTaskRes['data']["root"].map((data) => {
            this.Dates = data.dates;
            this.addForm({ ...data, disabledInput: true });
          });
        }
        [...Array(5).keys()].map(() => {
          this.Dates = this.jsonDate;
          this.addForm(this.emptyRow);
        });
      },
    );
  }

  Add() {
    let post:[]
    this.timeSheetForm.value.timeSheet.map((sheet) => {
      if (
        sheet.projectId &&
        sheet.taskName &&
        sheet.startDate &&
        sheet.endDate
      ) {
        // post.push({
        //   ...sheet,
        //   startDate: this.formatDate(sheet.startDate),
        //   endDate: this.formatDate(sheet.endDate),
        // });
      }
    });

    this.TimesheetrService.submitnewlogtime(post).subscribe((res: any) => {
      if (res.status == true) {
        this.toastr.success(res.message);
        this.newusertimesheetdashboard(this.today);
      } else {
        this.toastr.error(res.message);
      }
    });
  }

  sendForApproval() {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to submit week timesheet for approval!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FA543D",
      confirmButtonText: "Yes, submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.selecteddata = this.timeSheetForm.value.timeSheet.filter(
          (x) => x.isChecked == true && x.isSFA == false,
        );
        if (this.selecteddata?.length == 0) {
          return this.toastr.error("Please select Task");
        }
        let post: [];
        this.selecteddata?.map((sheet) => {
          if (
            sheet.projectId &&
            sheet.taskName &&
            sheet.startDate &&
            sheet.endDate
          ) {
            // post.push({
            //   ...sheet:,
            //   startDate: this.formatDate(sheet.startDate),
            //   endDate: this.formatDate(sheet.endDate),
            // });
          }
        });
        this.TimesheetrService.sendforapprovel(post).subscribe((data: any) => {
          if (data.status == true) {
            Swal.fire("Submitted Successfully!").then(() => {
              this.ngOnInit();
            });
          }
        });
      }
    });
  }

  prevWeak(data) {
    this.weakDate.setDate(this.weakDate.getDate() - data);
    this.newusertimesheetdashboard(this.weakDate);
  }

  nextWeak(data) {
    this.weakDate.setDate(this.weakDate.getDate() + data);
    this.newusertimesheetdashboard(this.weakDate);
  }

  currentWeak() {
    this.weakDate = this.today;
    this.newusertimesheetdashboard(this.today);
  }

  checkall(event) {
    this.allChecked = event;
    this.timeSheetForm.value.timeSheet.forEach((element) => {
      element.isChecked = event;
    });
  }

  checkedFun() {
    let count = 0;
    this.timeSheetForm.value.timeSheet.forEach((element) => {
      if (!element.isSFA) {
        count = count + 1;
      }
    });
    let checkedCount = 0;
    this.timeSheetForm.value.timeSheet.forEach((element) => {
      if (element.isChecked && !element.isSFA) {
        checkedCount = checkedCount + 1;
      }
    });
    if (checkedCount == count) {
      this.allChecked = true;
      this.timeSheetForm.get("allChecked").setValue(true);
    } else {
      this.allChecked = false;
      this.timeSheetForm.get("allChecked").setValue(false);
    }
  }

  fillData(value, data, id, i) {
    this.timeSheetForm.value.timeSheet[i].dates[id].viewSpentTime = value;
  }

  myFunction(Checkcase, data, id, i) {
    if (Checkcase != "" && Checkcase != null) {
      if (!Checkcase.includes(".") && !Checkcase.includes(":")) {
        if (Checkcase >= 10) {
          this.result = Checkcase + ":00";
        } else {
          this.result = "0" + Checkcase + ":00";
        }
        this.fillData(this.result, data, id, i);
      } else {
        if (Checkcase.includes(".")) {
          Checkcase = Checkcase.replace(".", ":");
        }
        Checkcase = Checkcase.split(":");
        if (Checkcase[0] == "" && Checkcase[1] == "") {
          this.result = "00:00";
        } else if (Checkcase[0] == "" && Checkcase[1] != "") {
          if (Checkcase[1] >= 10) {
            this.result = "00:" + Checkcase[1];
          } else {
            this.result = "00:" + Checkcase[1] + "0";
          }
        } else if (Checkcase[0] != "" && Checkcase[1] != "") {
          if (Checkcase[0] >= 10 && Checkcase[1] >= 10) {
            this.result = Checkcase[0] + ":" + Checkcase[1];
          } else if (Checkcase[0] <= 10 && Checkcase[1] >= 10) {
            if (Checkcase[0].includes("0")) {
              this.result = Checkcase[0] + ":" + Checkcase[1];
            } else {
              this.result = "0" + Checkcase[0] + ":" + Checkcase[1];
            }
          } else if (Checkcase[0] >= 10 && Checkcase[1] <= 10) {
            if (Checkcase[1].includes("0")) {
              this.result = Checkcase[0] + ":" + Checkcase[1];
            } else {
              this.result = Checkcase[0] + ":" + Checkcase[1] + "0";
            }
          } else {
            if (Checkcase[0].includes("0") && Checkcase[1].includes("0")) {
              this.result = Checkcase[0] + ":" + Checkcase[1];
            } else if (
              Checkcase[0].includes("0") &&
              !Checkcase[1].includes("0")
            ) {
              this.result = Checkcase[0] + ":" + Checkcase[1] + "0";
            } else if (
              !Checkcase[0].includes("0") &&
              Checkcase[1].includes("0")
            ) {
              this.result = "0" + Checkcase[0] + ":" + Checkcase[1];
            } else {
              this.result = "0" + Checkcase[0] + ":" + Checkcase[1] + "0";
            }
          }
        } else if (Checkcase[0] != "" && Checkcase[1] == "") {
          if (Checkcase[0] >= 10) {
            this.result = Checkcase[0] + ":00";
          } else {
            if (Checkcase[0].includes("0")) {
              this.result = Checkcase[0] + ":00";
            } else {
              this.result = "0" + Checkcase[0] + ":00";
            }
          }
        }
        this.fillData(this.result, data, id, i);
      }
    } else {
      this.result = "00:00";
      this.fillData(this.result, data, id, i);
    }
  }

  formatDate(date) {
    // eslint-disable-next-line prefer-const
    let d:Date = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      
    // eslint-disable-next-line prefer-const
    year: number = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [month, day, year].join("/");
  }
}
