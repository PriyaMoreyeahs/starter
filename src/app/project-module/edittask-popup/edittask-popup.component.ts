import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../project.service';
import { CRUDFunction } from 'app/shared/global-functions/crudFunctions.service';
import { AdvanceTable } from 'app/advance-table/advance-table.model';
import { DialogData } from 'app/advance-table/dialogs/form-dialog/form-dialog.component';
// import { formatDate } from '@angular/common';
import { AdvanceTableService } from 'app/advance-table/advance-table.service';

@Component({
  selector: 'app-edittask-popup', 
  templateUrl: './edittask-popup.component.html',
  styleUrls: ['./edittask-popup.component.scss']
})
export class EdittaskPopupComponent  implements OnInit{
  action: string;
  dialogTitle: string;
  advanceTableForm: UntypedFormGroup;
  advanceTable: AdvanceTable;
  editTask:FormGroup;
  WorkTypeId:number;
  GetTaskType=[];
  getAllProject=[];
  projectId:number;
  ProjectSelectedId:number;CheckData
  GetAllAssignee=[];assignee=[];assigneeId:number;AllsubProject=[];AllSprintData=[];GetPriority=[];BillingStatus=[];result:string;TaskType:string;allstatus=[];
constructor( public dialogRef: MatDialogRef<EdittaskPopupComponent>,  public advanceTableService: AdvanceTableService,
  private fb: UntypedFormBuilder,  @Inject(MAT_DIALOG_DATA) public data: DialogData,private TimesheetrService: ProjectService,private CRUDFunction: CRUDFunction,private formBuilder: FormBuilder){
      // Set the defaults
      this.action = data.action;
      this.CheckData = data
      if (this.action === 'edit') {
        this.dialogTitle =
          data.advanceTable.fName + ' ' + data.advanceTable.lName;
        this.advanceTable = data.advanceTable;
      } else {
        this.dialogTitle = 'New Record';
        const blankObject = {} as AdvanceTable;
        this.advanceTable = new AdvanceTable(blankObject);
      }
      // this.advanceTableForm = this.createContactForm();
}
formControl = new UntypedFormControl('', [
  Validators.required,
  // Validators.email,
]);
ngOnInit(){
  console.log(this.CheckData);
  this.editTaskForms();
  this.getPriority();
  this.getstatus();
  this.getalltasktypeenum();
  this.GetAllProject();
  this.getallbillingstatus();
  // this.GetAssignee( this.item);
  // this.GetSpring( this.item);
  // this.ProjectSelection( this.item);
  this.editTaskForms();
  this.editTask.patchValue({
    TaskTitle: this.CheckData.advanceTable.taskTitle,
    Assignee: this.CheckData.advanceTable.assignEmployeeId,
    OriginalEstimate: this.CheckData.advanceTable.estimateTime1,
    Priority: this.CheckData.advanceTable.priority,
    TaslType: this.CheckData.advanceTable.taskTypeEnum,
    Project: this.CheckData.advanceTable.projectId,
    TaskBilling: this.CheckData.advanceTable.taskBilling,
    Startdate: this.CheckData.advanceTable.taskStartDate,
    Enddate: this.CheckData.advanceTable.taskEndDate,
    Description: this.CheckData.advanceTable.description,
    Milstone: this.CheckData.advanceTable.sprintId,
  });
}

getErrorMessage() {
  return this.formControl.hasError('required')
    ? 'Required field'
    : this.formControl.hasError('email')
    ? 'Not a valid email'
    : '';
}

submit() {
  // emppty stuff
}
public confirmAdd(): void {
}












   //#region For Get All Task Type
   getalltasktypeenum() {
    this.TimesheetrService.getalltasktypeenum().subscribe((res: any) => {
      this.GetTaskType = this.CRUDFunction.responceBinding(res);
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
      
        onNoClick(): void {
          this.dialogRef.close();
        }

        // createContactForm(): UntypedFormGroup {
        //   return this.formBuilder.group({
        //     id: [this.advanceTable.id],
        //     img: [this.advanceTable.img],
        //     fName: [this.advanceTable.fName, [Validators.required]],
        //     lName: [this.advanceTable.lName, [Validators.required]],
        //     email: [
        //       this.advanceTable.email,
        //       [Validators.required, Validators.email, Validators.minLength(5)],
        //     ],
        //     gender: [this.advanceTable.gender],
        //     bDate: [
        //       formatDate(this.advanceTable.bDate, 'yyyy-MM-dd', 'en'),
        //       [Validators.required],
        //     ],
        //     address: [this.advanceTable.address],
        //     mobile: [this.advanceTable.mobile, [Validators.required]],
        //     country: [this.advanceTable.country],
        //   });
        // }
  }
