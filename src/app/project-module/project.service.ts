import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public API = environment.config.API_URL;
  private SendID = new BehaviorSubject(0);
  currentID = this.SendID.asObservable();
  constructor(private http: HttpClient) {}

  changeID(id: any) {this.SendID.next(id);}

  getAllproject() { return this.http.get( `${this.API}/api/newsubproject/getallassignprojectforapprovel` ); }

  newusertimesheetdashboard(date,Id) { return this.http.get( `${this.API}/api/newtimesheet/getweekdaydatenewtimesheetsp?dateValue=${date}&projectId=${Id}` ); }

  assignprojectsubproject(search) { return this.http.post( `${this.API}/api/newsubproject/getassignprojectsubproject`, search ); }

  submitnewlogtime(post) { return this.http.post( `${this.API}/api/newtimesheet/submitnewlogtimes`, post ); }

  getweekdaydate(dateValue, Id) { return this.http.get( `${this.API}/api/tasklog/getweekdaydate?dateValue=${dateValue}&ProjectId=${Id}` ); }

  sendforapprovel(post) { return this.http.post(`${this.API}/api/taskapprovel/sendforapprovel`, post); }

  getallstatusenum() { return this.http.get(`${this.API}/api/taskcreation/getallstatusenum`); }

  GetTaskPriority() { return this.http.get(`${this.API}/api/taskcreation/getalltaskpriority`); }

  selectassignee(id) {return this.http.get( `${this.API}/api/tasklog/selectassignee?ProjectId=${id}`,);}

  getalltask(Id, count, page) { return this.http.get(`${this.API}/api/taskcreation/getalltask?ProjectId=${Id}&count=${count}&page=${page}`,);}

  getalltaskForExcel(Id) {return this.http.get(`${this.API}/api/taskcreation/getalltask?ProjectId=${Id}&count=${null}&page=${null}`,);}

  deletetask(post) {
    return this.http.post(`${this.API}/api/taskcreation/deletetask`, post);
  }
  checkPermissionn(Id) {
    return this.http.get(
      `${this.API}/api/taskpermissons/checkpermissions?ProjectId=${Id}`,
    );
  }
  gettaskbytaskid(id) {
    return this.http.get(
      `${this.API}/api/taskcreation/gettaskbytaskid?TaskId=${id}`,
    );
  }
  getalltasktypeenum() {
    return this.http.get(`${this.API}/api/taskcreation/getalltasktypeenum`);
  }
  GetAssignibyProjectId(id) {
    return this.http.get(
      `${this.API}/api/tasklog/getassignemployebyprojectid?ProjectId=${id}`,
    );
  }
  apigetsubproject(Id) {
    return this.http.get(
      `${this.API}/api/subproject/apigetsubproject?projectId=${Id}`,
    );
  }
  getsprint(Id) {
    return this.http.get(
      `${this.API}/api/projectmilestone/getallmilestone?projectId=${Id}`,
    );
  }
  getallbillingstatus() {
    return this.http.get(`${this.API}/api/taskcreation/getallbillingstatus`);
  }
  getallprojectsprinttask(Id) {
    return this.http.get(
      `${this.API}/api/projectmilestone/getallprojectsprinttask?projectId=${Id}`,
    );
  }
  getallsprinttask(projectId, sprintId) {
    return this.http.get(
      `${this.API}/api/projectmilestone/getallprojectsprinttaskbysprintid?projectId=${projectId}&sprintId=${sprintId}`,
    );
  }
}
