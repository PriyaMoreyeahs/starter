// import { Direction } from '@angular/cdk/bidi';
import { Direction } from '@angular/cdk/bidi';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from '@shared/UnsubscribeOnDestroyAdapter';
import { PopupFunctionService } from '@shared/global-functions/popup-function.service';
import { AdvanceTable } from 'app/advance-table/advance-table.model';
import { AdvanceTableService } from 'app/advance-table/advance-table.service';
// import { FormDialogComponent } from 'app/advance-table/dialogs/form-dialog/form-dialog.component';
import { EdittaskPopupComponent } from 'app/project-module/edittask-popup/edittask-popup.component';
import { ProjectService } from 'app/project-module/project.service';
import { CRUDFunction } from 'app/shared/global-functions/crudFunctions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent
extends UnsubscribeOnDestroyAdapter
 implements OnInit{
  @Input() item: number;
  allTask=[];
  advanceTable?: AdvanceTable;
  exampleDatabase?: AdvanceTableService;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  editTask:FormGroup;
  config: { itemsPerPage: number; currentPage: number; id: string; totalItems: string; };
  isCreateTaskPermissionnewemp: boolean;
  isExeclUploadePermissionnewemp: boolean;
  isDeletedPermissionnewemp: boolean;
  isBoardVisible: boolean;
  isUpdate: boolean;
  WorkTypeId:number;
  GetTaskType=[];
  getAllProject=[];
  projectId:number;
  ProjectSelectedId:number;
  GetAllAssignee=[];assignee=[];assigneeId:number;AllsubProject=[];AllSprintData=[];geteditTaskData={};GetPriority=[];BillingStatus=[];result:string;TaskType:string;allstatus=[];taskId:string
  constructor(private TimesheetrService: ProjectService,  private snackBar: MatSnackBar,private CRUDFunction: CRUDFunction,private formBuilder: FormBuilder,private popupFunctionService: PopupFunctionService,public dialog: MatDialog, public advanceTableService: AdvanceTableService,){
    super();
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      id: "BackLogData",
      totalItems: "",
    };
  }
  ngOnInit() {
    this.TimesheetrService.currentID.subscribe((data) => {
      if (data == 1) {
        this.getAllTAsk();
        this.getpermissiondata(this.item)
        this.projectId = this.item
        this.getPriority();
        this.getstatus();
        this.getalltasktypeenum();
        this.GetAllProject();
        this.getallbillingstatus();
        this.GetAssignee( this.item);
        this.GetSpring( this.item);
        this.ProjectSelection( this.item);
        this.editTaskForms();
      }
    });

  }

 getAllTAsk(){
  this.TimesheetrService.getalltask(this.item,this.config.itemsPerPage,this.config.currentPage).subscribe((res)=>{
    this.allTask = this.CRUDFunction.responceBinding(res);
  })
 }

   //#region For Get All Task Type
   getalltasktypeenum() {
    this.TimesheetrService.getalltasktypeenum().subscribe((res: any) => {
      this.GetTaskType = this.CRUDFunction.responceBinding(res);
    });
  }
  //#endregion



   //#region For validation in Edit task form
   get task() {
    return this.editTask.controls;
  }
  //#endregion

  //#region Delete Task
  delete(data) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FA543D",
      confirmButtonText: "Yes, delete it!",
      input: "text",
      inputPlaceholder: "Enter Reason For Delete",
      inputValidator: (value) => {
        if (!value) {
          return "You need to enter Reason!";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const post = {
          taskId: data,
          deleteRegion: result.value,
        };
        this.TimesheetrService.deletetask(post).subscribe(
          (data: any) => {
            if (data.status) {
              this.getAllTAsk();
              // this.spinnerService.hide();
              // this.ToastrService.success(data.message);
              // this.ngOnInit();
            } else {
              // this.spinnerService.hide();
            }
          },
          // (error: HttpErrorResponse) => {
          //   // this.spinnerService.hide();
          // },
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  //#endregion

    //#region Get Permission
    getpermissiondata(id) {
      this.TimesheetrService.checkPermissionn(id).subscribe((res: any) => {
        // this.spinnerService.hide();
        this.isCreateTaskPermissionnewemp = res.data.isCreateTask;
        this.isExeclUploadePermissionnewemp = res.data.isExeclUploade;
        this.isDeletedPermissionnewemp = res.data.isDeleteTask;
        this.isCreateTaskPermissionnewemp == res.data.isCreateTask;
        this.isBoardVisible = res.data.isBoardVisible;
        this.isUpdate = res.data.isUpdate;
      });
    }
    //#endregion

    //#region 
    editTaskForms(){
      this.editTask = this.formBuilder.group({
        TaskTitle: ["", [Validators.required, Validators.pattern(".*[^ ].*")]],
        Project: ["", [Validators.required, Validators.pattern(".*[^ ].*")]],
        Assignee: ["", [Validators.required, Validators.pattern(".*[^ ].*")]],
        Description: ["", [Validators.required]],
        OriginalEstimate: [""],
        Startdate: ["", [Validators.required, Validators.pattern(".*[^ ].*")]],
        Enddate: ["", [Validators.required, Validators.pattern(".*[^ ].*")]],
        Priority: ["", [Validators.required, Validators.pattern(".*[^ ].*")]],
        TaslType: ["", [Validators.required, Validators.pattern(".*[^ ].*")]],
        TaskBilling: ["", [Validators.required, Validators.pattern(".*[^ ].*")]],
        Milstone: [""],
      });
    }
    //#endregion

  //#region function to open the popup for the add the warehouse
  EditPrTask(taskId?) {
    this.editTaskForms();
     this.gettaskbyid(taskId);
    this.popupFunctionService.poupOpenFunction(EdittaskPopupComponent, 'lg');
  }
  //#endregion

  //#region 
  gettaskbyid(Id){

    this.TimesheetrService.gettaskbytaskid(Id).subscribe((res: any) => {
      this.TaskType = res.data.taskType;
    this.geteditTaskData = this.CRUDFunction.responceBinding(res);
    this.addNew()
      // this.Time = res.data.estimateTime1;
      // this.SpentTime = res.data.spentTime;
    });
  }
  //#endregion
   //#region   // get all project//
   GetAllProject() {
    const post = {
      projectStatus: 1,
      search: "",
    };
    this.TimesheetrService.assignprojectsubproject(post).subscribe((res: any) => {
      this.getAllProject = res.data;
      const id = this.getAllProject.filter((x) => x.projectId == this.projectId);
      if (id.length != 0) {
        this.editTask.patchValue({
          Project: id[0]["projectId"],
        });
      }
    });
  }
  //#endregion

  selectProject(value) {
    this.ProjectSelectedId = value;
    this.GetAssignee(value);
    this.ProjectSelection(value);
  }
  ProjectSelection(value) {
    this.TimesheetrService.apigetsubproject(value).subscribe((res: any) => {
      this.AllsubProject = res.data;
    });
  }

    //#region //For Getting Employees ByProject Id
//***************************************************************************** */
GetAssignee(Id) {
  this.TimesheetrService.GetAssignibyProjectId(Id).subscribe(
    (res: any) => {
      this.GetAllAssignee = this.CRUDFunction.responceBinding(res);
    },
    () => {},
    () => {
      this.assignee = this.GetAllAssignee.filter(
        (x) => x.employeeId == this.assigneeId,
      );
    },
  );
}
//#endregion
 //#region Select Work Type Function
WorkType(event) {
this.WorkTypeId = event;
}
//#endregion
  //#region Get Spring
  GetSpring(Id) {
    this.TimesheetrService.getsprint(Id).subscribe((res: any) => {
      this.AllSprintData = res.data;
    });
  }
  //#endregion

//#region get Priority
getPriority() {
  this.TimesheetrService.GetTaskPriority().subscribe((res: any) => {
    this.GetPriority = this.CRUDFunction.responceBinding(res);
  });
}
//#endregion

  //#region Get All Billing Status
  getallbillingstatus() {
    this.TimesheetrService.getallbillingstatus().subscribe((res: any) => {
      this.BillingStatus = res.data;
    });
  }
  //#endregion

    //#region For Time format on edit task (Estimate Time)
myFunction2(Checkcase) {
  if (Checkcase != "" && Checkcase != null) {
    if (!Checkcase.includes(".") && !Checkcase.includes(":")) {
      if (Checkcase >= 10) {
        this.result = Checkcase + ".00";
      } else {
        this.result = "0" + Checkcase + ".00";
      }
      this.patchVaue1(this.result);
    } else {
      if (Checkcase.includes(":")) {
        Checkcase = Checkcase.replace(":", ".");
      }
      Checkcase = Checkcase.split(".");
      if (Checkcase[0] == "" && Checkcase[1] == "") {
        this.result = "00.00";
      } else if (Checkcase[0] == "" && Checkcase[1] != "") {
        if (Checkcase[1] >= 10) {
          this.result = "00." + Checkcase[1];
        } else {
          this.result = "00." + Checkcase[1] + "0";
        }
      } else if (Checkcase[0] != "" && Checkcase[1] != "") {
        if (Checkcase[0] >= 10 && Checkcase[1] >= 10) {
          this.result = Checkcase[0] + "." + Checkcase[1];
        } else if (Checkcase[0] <= 10 && Checkcase[1] >= 10) {
          if (Checkcase[0].includes("0")) {
            this.result = Checkcase[0] + "." + Checkcase[1];
          } else {
            this.result = "0" + Checkcase[0] + "." + Checkcase[1];
          }
        } else if (Checkcase[0] >= 10 && Checkcase[1] <= 10) {
          if (Checkcase[1].includes("0")) {
            this.result = Checkcase[0] + "." + Checkcase[1];
          } else {
            this.result = Checkcase[0] + "." + Checkcase[1] + "0";
          }
        } else {
          if (Checkcase[0].includes("0") && Checkcase[1].includes("0")) {
            this.result = Checkcase[0] + "." + Checkcase[1];
          } else if (
            Checkcase[0].includes("0") &&
            !Checkcase[1].includes("0")
          ) {
            this.result = Checkcase[0] + "." + Checkcase[1] + "0";
          } else if (
            !Checkcase[0].includes("0") &&
            Checkcase[1].includes("0")
          ) {
            this.result = "0" + Checkcase[0] + "." + Checkcase[1];
          } else {
            this.result = "0" + Checkcase[0] + "." + Checkcase[1] + "0";
          }
        }
      } else if (Checkcase[0] != "" && Checkcase[1] == "") {
        if (Checkcase[0] >= 10) {
          this.result = Checkcase[0] + ".00";
        } else {
          if (Checkcase[0].includes("0")) {
            this.result = Checkcase[0] + ".00";
          } else {
            this.result = "0" + Checkcase[0] + ".00";
          }
        }
      }
      this.patchVaue1(this.result);
    }
  } else {
    this.result = "00.00";
    this.patchVaue1(this.result);
  }
}
patchVaue1(result) {
  this.editTask.patchValue({ OriginalEstimate: result });
}
//#endregion

  //#region get all status
  getstatus() {
    this.TimesheetrService.getallstatusenum().subscribe((res: any) => {
      this.allstatus = res.data;
    });
  }
  //#endregion
  addNew() {
    // let tempDirection: Direction;
    // if (localStorage.getItem('isRtl') === 'true') {
    //   tempDirection = 'rtl';
    // } else {
    //   tempDirection = 'ltr';
    // }
 console.log(this.geteditTaskData);
 
    const dialogRef = this.dialog.open(EdittaskPopupComponent, {
    
      data: {
        advanceTable: this.geteditTaskData,
        action: 'edit',
      },
      // direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.exampleDatabase?.dataChange.value.unshift(
          this.advanceTableService.getDialogData()
        );
        this.refreshTable();
        this.showNotification(
          'snackbar-success',
          'Add Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }

  editCall(){
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(EdittaskPopupComponent, {
      data: {
        advanceTable: this.geteditTaskData,
        action: 'edit',
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        // Then you update that record using data from dialogData (values you enetered)
            this.advanceTableService.getDialogData();
          // And lastly refresh table
          this.refreshTable();
          this.showNotification(
            'black',
            'Edit Record Successfully...!!!',
            'bottom',
            'center'
          );
      }
    });
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
  // addNew(ID) {
  //   let tempDirection: Direction;
  //   this.taskId = ID
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(EdittaskPopupComponent, {
  //     data: {
  //       advanceTable: this.taskId,
  //       action: 'add',
  //     },
  //     direction: tempDirection,
  //   });
  //   this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
  //     if (result === 1) {
  //       // After dialog is closed we're doing frontend updates
  //       // For add we're just pushing a new row inside DataService
  //       this.exampleDatabase?.dataChange.value.unshift(
  //         this.advanceTableService.getDialogData()
  //       );
  //       // this.refreshTable();
  //       this.showNotification(
  //         'snackbar-success',
  //         'Add Record Successfully...!!!',
  //         'bottom',
  //         'center'
  //       );
  //     }
  //   });
  // }
  }
