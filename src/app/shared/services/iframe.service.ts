import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class IframeService {
  baseUrl = environment.config.API_URL;

  constructor(private http: HttpClient) {}

  getalljobs(companyId) {
    return this.http.get(
      `${this.baseUrl}/api/job/getalljobbycompanyid?companyId=${companyId}&search`,
    );
  }
  getjobdetail(jobId, companyId) {
    return this.http.get(
      `${this.baseUrl}/api/job/getbyid?jobId=${jobId}&companyId=${companyId}`,
    );
  }

  uploadreferdoc(data) {
    return this.http.post(
      `${this.baseUrl}/api/contact/uploadReferdocuments`,
      data,
    );
  }
  submitcandidate(data) {
    return this.http.post(`${this.baseUrl}/api/job/addcandidate`, data);
  }

  searchjobs(companyId, searchJob) {
    return this.http.get(
      `${this.baseUrl}/api/job/getalljobbycompanyid?companyId=${companyId}&search=${searchJob}`,
    );
  }

  ///////////////////////////////   Upload Docs Apis ////////////////////////////////////
  getdocslist(candidateId, companyId, orgId, jobId) {
    return this.http.get(
      `${this.baseUrl}/api/preboard/getDocument?candidateId=${candidateId}&companyId=${companyId}&orgId=${orgId}&jobId=${jobId}`,
    );
  }

  getdocslink(file) {
    return this.http.post(`${this.baseUrl}/api/preboard/uploaddocuments`, file);
  }

  submitdocs(data) {
    return this.http.post(`${this.baseUrl}/api/preboard/addDocument`, data);
  }

  ///////////////////////////////// Add Status ////////////////////////////////////'''

  getcandidatedetails(token) {
    return this.http.get(
      `${this.baseUrl}/api/preboard/getcandidatedetailonreview?token=${token}`,
    );
  }
  submitcandidatereview(data) {
    return this.http.post(
      `${this.baseUrl}/api/preboard/addreasonininerview`,
      data,
    );
  }
}
