import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TokenServiceService {
  constructor(private router: Router) {
    // var token = localStorage.getItem('token');
    // var decoded = jwt_decode(token);
  }

  intercept(req, next) {
    // this.loaderService.show();/**UNHIDE FOR LOADER */
    const url = new URL(req.url);
    const urlname = url.pathname.substring(url.pathname.lastIndexOf("/") + 1);

    if (urlname !== "token") {
      let tokenizedReq = req.clone();

      const token = localStorage.getItem("token");

      tokenizedReq = tokenizedReq.clone({
        setHeaders: {
          Authorization: `bearer ${token}`,
        },
        body: tokenizedReq.body,
      });
      return next.handle(tokenizedReq).pipe(
        tap(
          () => {},

          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem(btoa("ROLE"));
                localStorage.removeItem("moduleName");
                localStorage.removeItem("roleType");
                localStorage.removeItem("employeeId");
                localStorage.removeItem("profileImageUrl");
                localStorage.removeItem("companyDomain");
                localStorage.removeItem("companyLogo");
                localStorage.removeItem("STATE");
                localStorage.removeItem("companyId");
                localStorage.removeItem("FULLNAME");
                localStorage.removeItem("userid");
                localStorage.removeItem("USERIMG");
                this.router.navigate(["/authentication/login"]);
              }
            }
          },
        ),
      );
    } else {
      const tokenizedReq = req.clone();
      // const token = localStorage.token;
      // tokenizedReq = tokenizedReq.clone({
      //   setHeaders: {
      //     Authorization: `bearer ${token}`
      //   },
      //   body: tokenizedReq.body
      // });
      return next.handle(tokenizedReq);
    }
  }
}
