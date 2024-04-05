import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class addTokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let jwtToken: string = '';

    if (localStorage.getItem("jwtToken")) {
      jwtToken = localStorage.getItem("jwtToken") as string;
    }

    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${jwtToken}`),
    });

    return next.handle(modifiedReq);
  }
}

