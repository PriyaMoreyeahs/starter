import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.spinner.show();
    const token = localStorage['token'];
    request = this.addtoken(request, token);
    this.spinner.hide();

    return next.handle(request).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(["/authentication/login"]);
            } else if (err.status === 404) {
              this.router.navigate(["/authentication/login"]);
            }
          }
        },
      ),
    );
  }

  private addtoken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: { Authorization: "Bearer " + token },
    });
  }
}
