import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class 

ProjectService {
  public API = environment.config.API_URL;
  constructor(  private http: HttpClient,) { }

  getweekdaydate(dateValue, Id) {
    return this.http.get(
      `${this.API}/api/tasklog/getweekdaydate?dateValue=${dateValue}&ProjectId=${Id}`,
    );
    // &subProjectId=${subId}
  }

}
