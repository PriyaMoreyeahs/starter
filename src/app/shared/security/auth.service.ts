import { Role } from "./role";
import { User } from "./user";
import { Injectable } from "@angular/core";
import { BehaviorSubject, of, Subject } from "rxjs";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLogin = false;
  roleAs: string;
  authToken: any;
  subject = new Subject<any>();
  // users: User[] = [
  //   {
  //     id: 1,
  //     img: 'assets/images/user/admin.jpg',
  //     username: 'admin',
  //     password: 'admin',
  //     firstName: 'Sarah',
  //     lastName: 'Smith',
  //     role: Role.Admin,
  //   },
  //   {
  //     id: 2,
  //     img: 'assets/images/user/doctor.jpg',
  //     username: 'doctor',
  //     password: 'doctor',
  //     firstName: 'Ashton',
  //     lastName: 'Cox',
  //     role: Role.Doctor,
  //   },
  //   {
  //     id: 3,
  //     img: 'assets/images/user/patient.jpg',
  //     username: 'patient',
  //     password: 'patient',
  //     firstName: 'Cara',
  //     lastName: 'Stevens',
  //     role: Role.Patient,
  //   },
  // ];
  users: User[] = [
    {
      id: 1,
      img: "assets/images/user/admin.jpg",
      username: "admin",
      password: "admin",
      firstName: "Sarah",
      lastName: "Smith",
      role: Role.Admin,
    },
    {
      id: 2,
      img: "assets/images/user/doctor.jpg",
      username: "Human Resorce Desk",
      password: "HR_Desk",
      firstName: "Ashton",
      lastName: "Cox",
      role: Role.HR_Desk,
    },
    {
      id: 3,
      img: "assets/images/user/patient.jpg",
      username: "Information Technology Desk",
      password: "IT_Desk",
      firstName: "Cara",
      lastName: "Stevens",
      role: Role.IT_Desk,
    },
    {
      id: 4,
      img: "assets/images/user/patient.jpg",
      username: "Employee",
      password: "Employee",
      firstName: "Cara",
      lastName: "Stevens",
      role: Role.Employee,
    },
    {
      id: 5,
      img: "assets/images/user/patient.jpg",
      username: "Account Desk",
      password: "Account_Desk",
      firstName: "Cara",
      lastName: "Stevens",
      role: Role.Account_Desk,
    },
    {
      id: 6,
      img: "assets/images/user/patient.jpg",
      username: "Project Manager Desk",
      password: "PM_Desk",
      firstName: "Cara",
      lastName: "Stevens",
      role: Role.PM_Desk,
    },
  ];

  public API = environment.config.API_URL;
  public headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  login(uname: string, pwd: string) {
    const user = this.users.find(
      (x) => x.username === uname && x.password === pwd,
    );

    if (user) {
      this.roleAs = user.role;
      localStorage.setItem("STATE", "true");
      localStorage.setItem("TOKEN", "accesToken");
      localStorage.setItem("ROLE", user.role);
      localStorage.setItem("USERIMG", user.img);
      localStorage.setItem("FULLNAME", user.firstName + " " + user.lastName);
      this.isLogin = true;
    } else {
      this.roleAs = "";
      this.isLogin = false;
      localStorage.setItem("STATE", "false");
    }
    return of({ success: this.isLogin, role: this.roleAs });
  }

  logout() {
    this.isLogin = false;
    this.roleAs = "";
    localStorage.setItem("STATE", "false");
    localStorage.setItem("ROLE", "");
    localStorage.setItem("FULLNAME", "");
    localStorage.setItem("USERIMG", "");
    return of({ success: this.isLogin, role: "" });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem("STATE");
    if (loggedIn === "true") {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    return this.isLogin;
  }

  getRole() {
    const NewRole = localStorage.getItem(btoa("ROLE"));

    const userRole = JSON.parse(atob(NewRole));

    return userRole;
  }
  getUserFullName() {
    return localStorage.getItem("FULLNAME");
  }
  getUserImg() {
    // return  localStorage.getItem('USERIMG');
    return "assets/images/user/dumy-profile.png";
  }

  // Login User API old
  loginUser(userValue) {
    return this.http.post(`${this.API}/api/accounts/userlogin`, userValue);
  }
  passwordReset(userValue) {
    return this.http.post(`${this.API}/api/accounts/resetpassword`, userValue);
  }

  /**
   * Logins user api new api to login
   * @param userValue
   * @returns
   */
  loginUserApi(userValue) {
    return this.http.post(`${this.API}/api/userlogin/login`, userValue);
  }

  /**
   * Gets role by employee id
   * @param userId
   * @returns
   */
  // getRoleByEmployeeId(userId) {
  //   // this.loadToken();
  //   // const head = this.headers.append('Authorization', this.authToken);
  //   return this.http.get(`${this.API}/api/employees/GetRoleByEmpId?EmployeeId=${userId}`);
  // }

  // getloginrole() {
  //   return this.http.get(`${this.API}/api/employeenew/getloginrole`);
  // }

  getrole() {
    return this.http.get(`${this.API}/api/employees/getloginrole`);
  }

  //Chhaya changes

  genratetoken(post) {
    return this.http.post(`${this.API}/oauth/token`, post);
  }

  userlogin(post) {
    return this.http.post(`${this.API}/api/accounts/userlogin`, post);
  }

  newuserlogin(post) {
    return this.http.post(`${this.API}/api/accounts/newuserlogin`, post);
  }

  ExternalLogins(url) {
    return this.http.get(
      `${this.API}/api/accounts/ExternalLogins?returnUrl=${url}`,
    );
  }

  // Send FCMId
  SendFcm(post) {
    return this.http.post(`${this.API}/api/notification/checkfcm`, post);
  }

  newSendFCM(post) {
    return this.http.post(`${this.API}/api/notification/addupdatetoken`, post);
  }

  ///////////////////// Side Bar  ////////////////

  sendSidebarClick(message: any) {
    this.subject.next(message);
  }

  getSidebarClick() {
    return this.subject.asObservable();
  }

  private logoutsidebar = new BehaviorSubject({ data: false });
  currentMessage = this.logoutsidebar.asObservable();

  changeMessage(message: any) {
    this.logoutsidebar.next(message);
  }
}
