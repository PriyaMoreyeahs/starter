import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CareerJobsService {
  public API = environment.config.API_URL;

  constructor(private http: HttpClient) {}

  getjoblistfilter(value) {
    return this.http.get(
      `${this.API}/api/job/getjoblistfilter?isCareer=${value}`,
    );
    // On Internal HRMS isCareer always false.
  }

  jobdetailscareer(jobId) {
    return this.http.get(
      `${this.API}/api/job/jobdetailscareer?jobPostId=${jobId}`,
    );
  }

  jobfiltercareer() {
    return this.http.get(
      `${this.API}/api/job/jobfiltercareer?locationId&departmentId&jopPostId&isCareer=false`,
    );
  }

  getalllocation() {
    return this.http.get(`${this.API}/api/extramaster/getalllocation`);
  }

  getallactivedeparmentlist() {
    return this.http.get(
      `${this.API}/api/departmentnew/getallactivedeparmentlist`,
    );
  }
  getAllJobsList() {
    return this.http.get(`${this.API}/api/job/getalljob`);
  }
  getjobFilterById(locationid, departmentid, jobid) {
    return this.http.get(
      `${this.API}/api/job/jobfiltercareer?isCareer=true&locationId=${locationid}&departmentId=${departmentid}&jopPostId=${jobid}`,
    );
  }
}
