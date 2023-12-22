import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TimesheetService {
  public API = environment.config.API_URL;

  constructor(private http: HttpClient) {}

  getAlldepartments() {
    return this.http.get(`${this.API}/api/departmentnew/getallactivedeparment`);
  }
  getAllproject() {
    return this.http.get(`${this.API}/api/project/GetProject`);
  }
  addentry(data) {
    return this.http.post(`${this.API}/api/timesheet/addnewtimesheet`, data);
  }
}
