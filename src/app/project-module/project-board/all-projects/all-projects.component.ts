import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'app/project-module/project.service';
import Swal from "sweetalert2";
// import { dateJson } from 'app/project-module/interface/datejason';
import { projectResponse } from 'app/project-module/interface/project-response-interface';
// import { emptyRow } from 'app/project-module/interface/emptyRow';
import { getWeekDays } from 'app/project-module/interface/getWeekTask';
import { CRUDFunction } from 'app/shared/global-functions/crudFunctions.service';
import { allProject } from 'app/project-module/interface/getprojectJason';
import { Router } from '@angular/router';
// import { map } from "rxjs/operators"; 
@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
  providers: [DatePipe],
})
export class AllProjectsComponent implements OnInit{
  // public jsonDate!: dateJson[];
  public projectRes!: projectResponse[];
//   public emptyRow!: emptyRow[];
  public getTaskRes!: getWeekDays[];
  public allProject!: allProject[];
  result: string;
  Data: any = [];
  GetWeekDay: any = [];
  timeSheetForm: FormGroup;
  today: Date;
  post: string | null;
  firstWeekDate: any;
  data: FormGroup
  Year: any;
  lastday: any;
  Dates = [];
  DefaultSelectedProjectName:string
  getallprojectData: any = [];
  totalWorkingTimeInWeek: string
  returnthisweek = false;
   emptyRow = {};
  dateJson=[];
  employeeList=[]
  selecteddata: any;
  weakDate: Date;
  allChecked: any = false;
  submitted: boolean = false;
  projectId:number;
  TaskForm:FormGroup
  timeSheet:FormArray;
  statusEnum=[]
  items: FormArray;
  Priority=[]
  range:FormGroup;
currentItem:number
  selectedIndex:string;assigneeId:string;EmployeName:string;roleType:string;currentURl = this.route.url;
  constructor(
    private datePipe: DatePipe,
    private toastr: ToastrService,
    private route: Router,
    private fb: FormBuilder,
    private TimesheetrService: ProjectService,
    private spinnerService: NgxSpinnerService,
    private CRUDFunction: CRUDFunction,
  ) {}

  ngOnInit() {
    if (this.selectedIndex == undefined || this.selectedIndex == "0") {
      
      this.today = new Date();
      // this.baseURL = location.origin;
      this.assigneeId = localStorage.getItem("employeeId");
      this.returnthisweek = false;
      this.EmployeName = localStorage.getItem("FULLNAME");
      this.roleType = localStorage.getItem("roleType");
      // this.getpermissions(this.projectId);
      this.initForm();
      this.today = new Date();
      this.getallstatusenum();
      this.GetTaskPriority()
      this.weakDate = new Date();
      this.assignprojectsubproject();
      this.getallproject();
      this.TaskForm = this.fb.group({
        Rows: this.fb.array([])
      });
    } else if (this.selectedIndex == "6") {
      // this.getpermissiondata();
      // this.getprojectTeamById();
    }
  }

  get formArr() {
    return this.TaskForm.get("Rows") as FormArray;
  }

    //#endregion
    newusertimesheetdashboard(data,Id) {
      this.emptyRow = {taskId: "",isChecked: false,disableInput: false,projectName: null,projectId:  this.projectId,employeeId:0,employeeName:"",taskName: "",isBillabel: false,totalWorkingTimeInProject: "00:00",allWorkingTimeInProject: 0.0,projectManagerId: null,taskStatusId: 0,taskRequestName: "Not_Selected",estimateTime: "00:00",startDate: "",endDate: "",re_EvaluteComment: null,isReEvaluet: false,isApproved: false,isSFA: false,estimateTimeLong: 480,description: "",taskIdNumber:null,taskPriorityId: 0,viewSpentTime:"",
      };
      this.allChecked = false;
      this.dateJson=[]
      this.Data=[]
      this.GetWeekDay=[]
      this.totalWorkingTimeInWeek="00:00"
      this.spinnerService.show();
      if (data.toLocaleDateString() == this.today.toLocaleDateString()) {
        this.returnthisweek = false;
      } else {
        this.returnthisweek = true;
      }
      this.initForm();
      this.post = this.datePipe.transform(data, "yyyy/MM/dd");
      this.TimesheetrService.newusertimesheetdashboard(this.post,Id).subscribe(
        (res: any) => {
          this.spinnerService.hide();
          this.GetWeekDay = res.data["helpForDayDates"];
          this.firstWeekDate = this.GetWeekDay[0].date;
          this.Year = this.GetWeekDay[0].viewDate;
          this.lastday = this.GetWeekDay[6].date;
          this.totalWorkingTimeInWeek = res.data['totalWorkingTimeInWeek']
          this.Data = res.data["root"];
          this.dateJson = res.data['dateJson'];
          this.selectassignee(this.projectId)
          if (res.status ) {
            res.data["root"].map((data) => {
              this.Dates = data.dates;
              const a = { ...data, disableInput: true}
              this.initRows(a);
            });
          }
          [...Array(1).keys()].map((data) => {
            data
            this.Dates = this.dateJson;
            this.initRows(this.emptyRow);
          });
        },);
    }


  initRows(data) {
   // console.log(data);
  // console.log(this.Dates);
    const datesArr = [];
    this.Dates.map((date) => {
      datesArr.push(this.fb.group({ ...date }));
    });
    const temp  = this.fb.group({
      taskId: data.taskId,
      projectName: data.projectName,
      projectId: [data.projectId, [Validators.required]],
      isChecked: false,
      disableInput: data.disableInput,
      taskName: [data.taskName, [Validators.required]],
      isBillabel: data.isBillabel,
      totalWorkingTimeInProject: data.totalWorkingTimeInProject,
      allWorkingTimeInProject: data.allWorkingTimeInProject,
      projectManagerId: data.projectManagerId,
      taskStatusId: data.taskStatusId,
      taskRequestName: data.taskRequestName,
      estimateTime: data.estimateTime,
      startDate: [data.startDate, [Validators.required]],
      endDate: [data.endDate, [Validators.required]],
      re_EvaluteComment: data.re_EvaluteComment,
      isReEvaluet: data.isReEvaluet,
      isApproved: data.isApproved,
      isSFA: data.isSFA,
      estimateTimeLong: data.estimateTimeLong,
      description: data.description,
      dates: this.fb.array([...datesArr]),
      taskIdNumber: data.taskIdNumber,
      taskPriorityId: data.taskPriorityId,
      viewSpentTime:data.viewSpentTime,
      employeeName:data.employeeName,
      employeeId:data.employeeId
    });
    this.formArr.push(temp);
  }

  addNewRow(row) {
    this.initRows(row);
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  NewRow(data){data}

  getallstatusenum(){
    this.TimesheetrService.getallstatusenum().subscribe((res: any) => {
      this.statusEnum = this.CRUDFunction.responceBinding(res);
    });
  }

  selectassignee(Id){
    this.TimesheetrService.selectassignee(Id).subscribe((res)=>{
      this.employeeList = this.CRUDFunction.responceBinding(res);
    })
  }


  getallproject() {
    this.TimesheetrService.getAllproject().subscribe((res: any) => {
      this.getallprojectData = res.data;
    });
  }

  initForm() {
    this.TaskForm = this.fb.group({
      allChecked: false,
      Rows: new FormArray([]), //FormARRAY
    });
  }

  getDateControls(form) {
    return form.controls.dates.controls;
  } 

  deleteForm(i: number) {
    this.timeSheet.removeAt(i);
  }

  Add() {
    const post = [];
    console.log(this.TaskForm.value.Rows);
    this.TaskForm.value.Rows.map((sheet) => {
      if (sheet.projectId && sheet.taskName && sheet.startDate && sheet.endDate) {
        post.push({
          ...sheet,
          startDate: this.formatDate(sheet.startDate),
          endDate: this.formatDate(sheet.endDate),
        });
      }else{
        this.toastr.error("All Fields are Requered");
      }
    });
    this.TimesheetrService.submitnewlogtime(post).subscribe((res: any) => {
      if (res.status == true) {
        this.toastr.success(res.message);
        this.newusertimesheetdashboard(this.today,this.projectId);
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
        this.selecteddata = this.TaskForm.value.Rows.filter(
          (x) => x.isChecked == true && x.isSFA == false,
        );
        if (this.selecteddata.length == 0) {
          return this.toastr.error("Please select Task");
        }
        const post = [];
        this.selecteddata.map((sheet) => {
          if (
            sheet.projectId &&
            sheet.taskName &&
            sheet.startDate &&
            sheet.endDate
          ) {
            post.push({
              ...sheet,
              startDate: this.formatDate(sheet.startDate),
              endDate: this.formatDate(sheet.endDate),
            });
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
    this.newusertimesheetdashboard(this.weakDate,this.projectId);
  }

  nextWeak(data) {
    this.weakDate.setDate(this.weakDate.getDate() + data);
    this.newusertimesheetdashboard(this.weakDate,this.projectId);
  }

  currentWeak() {
    this.weakDate = this.today;
    this.newusertimesheetdashboard(this.today,this.projectId);
  }

  checkall(event) {
    this.allChecked = event;
    this.TaskForm.value.Rows.forEach((element) => {
      element.isChecked = event;
    });
  }

  checkedFun() {
    let count = 0;
    this.TaskForm.value.Rows.forEach((element) => {
      if (!element.isSFA) {
        count = count + 1;
      }
    });
    let checkedCount = 0;
    this.TaskForm.value.Rows.forEach((element) => {
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
    this.TaskForm.controls['Rows']['controls'][i].value.dates[id].viewSpentTime = value;
  }

  myFunction(Checkcase, data, id, i) {
    console.log(Checkcase, data, id, i);
    
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
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      // eslint-disable-next-line prefer-const
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [month, day, year].join("/");
  }

  assignprojectsubproject() {
    const post = {
      projectStatus: 1,
    //   search: "",
    };
    this.TimesheetrService.assignprojectsubproject(post).subscribe((res: any) => {
      this.allProject = this.CRUDFunction.responceBinding(res);
      this.DefaultSelectedProjectName =  this.allProject[1].projectName
      this.projectId = this.allProject[1].projectId;
      this.currentItem = this.projectId
      this.newusertimesheetdashboard(this.today,this.projectId);
    });
  }

  changeproject(data){
    this.DefaultSelectedProjectName = data.projectName
    this.projectId = data.projectId
    this.currentItem = this.projectId
    this.newusertimesheetdashboard(this.today,this.projectId);
  }
  GetTaskPriority(){
    this.TimesheetrService.GetTaskPriority().subscribe((res:any)=>{
      this.Priority = this.CRUDFunction.responceBinding(res);
    })
  }
  disableDate(date) {
    return new Date(date).getTime() > this.today.getTime();
  }

  selectMatTab(selectedIndex) {
    this.selectedIndex = selectedIndex;
    sessionStorage.setItem( "selectedIndex" , this.selectedIndex);
    sessionStorage.setItem("selectedURl", this.currentURl);
    this.ngOnInit();
    if (selectedIndex == 2) {
      this.TimesheetrService.changeID(2);
    } else if (selectedIndex == 1) {
      this.TimesheetrService.changeID(1);
    } else if (selectedIndex == 4) {
      this.TimesheetrService.changeID(4);
    } else if (selectedIndex == 5) {
      this.TimesheetrService.changeID(5);
    } else if (selectedIndex == 3) {
      this.TimesheetrService.changeID(3);
    } else if (selectedIndex == 0) {
      this.TimesheetrService.changeID(0);
    }
  }

  filterOpen(){

  }
}