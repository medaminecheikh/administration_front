import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";
import {catchError, mergeMap, switchMap, throwError} from "rxjs";
import {AuthService} from "./auth.service";

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService, private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.tokenStorage.getToken();
    console.log(token);
    if (token !== null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`)});
    }
    return next.handle(authReq).pipe(
      catchError(errordata => {
        if (errordata.status === 401) {
          // need to implement logout
          this.authService.refreshToken();
          // refresh token logic
          //  return this.handleRefrehToken(request, next);
        }
        return throwError(errordata);
      })
    );

  }
}

