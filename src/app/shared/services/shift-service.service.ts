import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ShiftServiceService {
  baseUrl = environment.config.API_URL;
  constructor(private http: HttpClient) {}
  //Shift And Week Off Code By Priya Jadhav
  GetAllShift() {
    return this.http.get(`${this.baseUrl}/api/shiftmaster/getshiftgoruptimimg`);
  }

  // api/shiftmaster/getshiftgoruptimimgById?shiftgoupId=
  GetShiftGroupTimingById(Id) {
    return this.http.get(
      `${this.baseUrl}/api/shiftmaster/getshiftgoruptimimgById?shiftgoupId=${Id}`,
    );
  }

  getshifttimingbeforeadd() {
    return this.http.get(
      `${this.baseUrl}/api/shiftmaster/getshifttimingbeforeadd`,
    );
  }

  // api/shiftmaster/updatenewshift
  UpdateShift(data) {
    return this.http.put(
      `${this.baseUrl}/api/shiftmaster/updatenewshift`,
      data,
    );
  }

  AddShift(post) {
    return this.http.post(`${this.baseUrl}/api/shiftmaster/addnewshift`, post);
  }

  // api/shiftmaster/getshiftgoruptimimgById?ShiftGoupId
  GetShiftGoupId(id) {
    return this.http.get(
      `${this.baseUrl}/api/shiftmaster/getshiftgoruptimimgById?ShiftGoupId=${id}`,
    );
  }

  // api/shiftmaster/deleteshift?shiftgroupId
  DeleteShift(shiftgroupId) {
    return this.http.delete(
      `${this.baseUrl}/api/shiftmaster/deleteshift?shiftgroupId=${shiftgroupId}`,
    );
  }

  // api/shiftmaster/getweekday
  GetWeekDay() {
    return this.http.get(`${this.baseUrl}/api/shiftmaster/getweekday`);
  }

  GetDayByWeekDay() {
    return this.http.get(`${this.baseUrl}/api/shiftmaster/getweekoffday`);
  }

  // api/shiftmaster/addweekoffs
  addweekoffs(post) {
    return this.http.post(`${this.baseUrl}/api/shiftmaster/addweekoffs`, post);
  }
  // api/shiftmaster/getallweekoffs
  GetAllWeekOffs() {
    return this.http.get(`${this.baseUrl}/api/shiftmaster/getallweekoffs`);
  }

  // GetWeekOffByweekOfId(id){
  //
  //   return this.http.get(`${this.baseUrl}/api/shiftmaster/getweekoffdetailbyid?weekOfId=${id}`);
  // }

  //api/shiftmaster/getweekoffdetailbyid
  GetWeekOffDetailById(id) {
    return this.http.get(
      `${this.baseUrl}/api/shiftmaster/getweekoffdetailbyid?weekOfId=${id}`,
    );
  }

  // api/shiftmaster/updateweekoff
  UpdateWeekOffs(data) {
    return this.http.put(`${this.baseUrl}/api/shiftmaster/updateweekoff`, data);
  }

  // api/shiftmaster/deleteweekoff?weekOffId
  DeleteWeekOff(id) {
    return this.http.delete(
      `${this.baseUrl}/api/shiftmaster/deleteweekoff?weekOffId=${id}`,
    );
  }
}
