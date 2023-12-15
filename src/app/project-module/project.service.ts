import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public API = environment.config.API_URL;
  constructor( private http: HttpClient,) { }

  getAllproject() {
    return this.http.get(
      `${this.API}/api/newsubproject/getallassignprojectforapprovel`,
    );
  }

  newusertimesheetdashboard(date) {
    return this.http.get(
      `${this.API}/api/newtimesheet/getweekdaydatenewtimesheet?dateValue=${date}`,
    );
  }

  submitnewlogtime(post) {
    return this.http.post(
      `${this.API}/api/newtimesheet/submitnewlogtimes`,
      post,
    );
    // return this.http.post(`${this.API}/api/newtimesheet/submitnewlogtime`, post);
  }

  sendforapprovel(post) {
    return this.http.post(`${this.API}/api/taskapprovel/sendforapprovel`, post);
  }
}
