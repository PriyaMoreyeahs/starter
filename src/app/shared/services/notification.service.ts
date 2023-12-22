import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class NotificationService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  public API = environment.config.API_URL;

  constructor(private http: HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  sendCount(data) {
    this.myMethodSubject.next(data);
  }

  getAllNotification() {
    return this.http.get(`${this.API}/api/notification/getalldata`);
  }
  deletNotification(id) {
    return this.http.delete(`${this.API}/api/notification/removedata?id=${id}`);
  }
  getNotificationById(id) {
    return this.http.get(`${this.API}/api/notification/getbyid?id=${id}`);
  }

  deleteAllNotification() {
    return this.http.delete(
      `${this.API}/api/notification/removeallnotification`,
    );
  }
  getCount() {
    return this.http.get(`${this.API}/api/notification/getcount`);
  }
}
