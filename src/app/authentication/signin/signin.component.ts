import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PayrollService } from "./../../shared/services/payroll.service";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '@core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  authForm!: UntypedFormGroup;
  submitted = false;
  profiledata = {};
  loading = false;
 login : boolean
  error = '';
  hide = true;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private ToastrService : ToastrService,
    private PayrollService: PayrollService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  // onSubmit() {
  //   this.submitted = true;
  //   this.loading = true;
  //   this.error = '';
  //   if (this.authForm.invalid) {
  //     this.error = 'Username and Password not valid !';
  //     return;
  //   } else {
  //     this.subs.sink = this.authService
  //       .login(this.f['username'].value, this.f['password'].value)
  //       .subscribe({
  //         next: (res) => {
  //           if (res) {
  //             if (res) {
  //               const token = this.authService.currentUserValue.token;
  //               if (token) {
  //                 this.router.navigate(['/dashboard/dashboard1']);
  //               }
  //             } else {
  //               this.error = 'Invalid Login';
  //             }
  //           } else {
  //             this.error = 'Invalid Login';
  //           }
  //         },
  //         error: (error) => {
  //           this.error = error;
  //           this.submitted = false;
  //           this.loading = false;
  //         },
  //       });
  //   }
  // }

  onSubmit(value: boolean) {
    this.login = value;
    this.submitted = true;
    if (
      this.authForm.value.username == "" ||
      this.authForm.value.password == ""
    ) {
      this.login = false;
      return this.ToastrService.error("Please Use Login Credentials For Login");
    }
    if (this.authForm.invalid) {
      this.login = false;
      return this.ToastrService.error(
        "Please Use Proper Login Credentials For Login",
      );
    }
    const post = {
      username: this.authForm.value.username,
      password: this.authForm.value.password,
    };


    this.authService.loginUser(post).subscribe((data: any) => {
      debugger
      if (data.status) {
        localStorage.setItem("token", data.acces_Token);
        console.log(data.acces_Token);
        this.userdetails(data.acces_Token);
        this.sendFCMToken();
        this.login = false;
      } else {
        this.login = false;
        this.ToastrService.error(data.message);
      }
    });
  }

  userdetails(data) {
    this.PayrollService.getuserlogindetail(data).subscribe((data: any) => {
      if (data != null) {
        this.profiledata = data;
        this.login = false;
        if (this.profiledata['roleType'] == "SuperAdmin") {
          this.router
            .navigate(["/super-admin/superadmin-dasboard"])
            .then(() => {});
          localStorage.setItem(
            btoa("ROLE"),
            btoa(JSON.stringify("SuperAdmin")),
          );
        } else {
          this.router.navigate(["/project/project-board"]).then(() => {});
          localStorage.setItem(btoa("ROLE"), btoa(JSON.stringify("Users")));
        }
        localStorage.setItem("roleType", data.roleType);
        localStorage.setItem("employeeId", data.employeeId);
        localStorage.setItem("profileImageUrl", data.profileImage);
        localStorage.setItem("companyDomain", data.companyDomain);
        localStorage.setItem("companyLogo", data.companyLogo);
        localStorage.setItem("STATE", "true");
        localStorage.setItem("companyId", data.companyId);
        // localStorage.setItem("FULLNAME", this.profiledata.displayName);
        // localStorage.setItem("userid", this.profiledata.employeeId);
        localStorage.setItem("USERIMG", "assets/images/user/admin.jpg");
        // this.ToastrService.success("Welcome " + this.profiledata.displayName);
        const menuOption = "menu_dark";
        localStorage.setItem("choose_logoheader", "logo-black");
        localStorage.setItem("menuOption", menuOption);
        localStorage.setItem("companyWebSiteURL", data.companyWebSiteURL);
        localStorage.setItem("isAdminInCompany", data.isAdminInCompany);
        localStorage.setItem("employeeCode", data.employeeCode);
      }
    });
  }

  sendFCMToken() {
    const FCM = localStorage.getItem("FCM");
    const post = {
      FCMToken: "",
      PCFCMToken: FCM,
    };
    this.authService.newSendFCM(post).subscribe(() => {
      return;
    });
  }
}
