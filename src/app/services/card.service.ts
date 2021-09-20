import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class CardService {


    constructor(private http: HttpClient){}

    userDetail(url){
        return this.http.get(environment.sysConfig.apiUrl + 'client-side/user-detail',{params:{url: url}}).pipe(
            map(response => {
              return response;
            }), catchError( err => {
              const errorArray = [];
              errorArray.push(err);
              return errorArray;
            })
          );
    }

    emailInformation(data){
      interface Response {
        error: any;
        status: any;
      }
      return this.http.post<Response>(environment.sysConfig.apiUrl + 'mailer/info', data,).pipe(
        map(response => {
          return response;
        }),catchError(err => {
          return throwError(err);
        })
      );

    }


}