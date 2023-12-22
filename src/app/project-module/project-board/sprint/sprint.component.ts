import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'app/project-module/project.service';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit{
  @Input() item: number;
  SprintName="";
  AllSprint=[];
  ActiveSprintName=[];
  closedSprint=[];
  draftSprint=[];
  rows = [{id: 1, desc: "foo", showDetail: false},{id: 2, desc: "bar", showDetail: false},];
  id = "gsdfjhfue";
  Show:string;
  count=1;
  config: { itemsPerPage: number; currentPage: number; id: string; totalItems: string; };

constructor(private TimesheetrService: ProjectService,){    this.config = {itemsPerPage: 10,currentPage: 1,id: "BackLogData",totalItems: "",};}

  ngOnInit(){  
    this.TimesheetrService.currentID.subscribe((data) => {
    if (data == 2) {
      this.getallprojectsprinttask();  
    }});}
//#region Open And Close sprint card
  ShowHide(value: string, count: number) {
    if (this.Show == value) {
      this.Show = "";
    } else {
      if (count != 0) {
        this.Show = value;
      } else {
        // this.toster.error("No Task Found!");
      }
    }
  }
//#endregion

//#region get all project sprint task
getallprojectsprinttask() {
    this.TimesheetrService.getallprojectsprinttask(this.item).subscribe((res: any) => {
      if (res.status) {
        this.SprintName = null;
        this.AllSprint = res.data["sprintData"];
        this.ActiveSprintName = res.data["activeSprint"];
        this.closedSprint = res.data["closedSprint"];
        this.draftSprint = res.data["draftSprint"];
        // this.config.totalItems = this.AllSprint['sprintData'].length
        this.Show = "";
      } else {
        this.AllSprint = [];
        this.config.totalItems = "";
      }
    });
  }
//#endregion

  SelectSprint(value) {
    this.SprintName = value.value;
    this.GetTaskById(this.SprintName);
  }

  GetTaskById(Id) {
    this.TimesheetrService.getallsprinttask(this.item, Id).subscribe((res: any) => {
      this.AllSprint = res.data;
    });
  }
}
