import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) {
  //   (method) HttpClient.get(url: string, options: {
  //     headers?: HttpHeaders | {
  //         [header: string]: string | string[];
  //     };
  //     context?: HttpContext;
  //     observe?: "body";
  //     params?: HttpParams | {
  //         [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  //     };
  //     reportProgress?: boolean;
  //     responseType: "arraybuffer";
  //     withCredentials?: boolean;
  //     transferCache?: {
  //         includeHeaders?: string[];
  //     } | boolean;
  // }): Observable<ArrayBuffer> (+14 ov
  }

  get(url : string) {
    const httpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('user:password')
    });

    url = 'http://localhost:9090/crud-demo/crud/get-data';
    return this.http.get(url, { headers: httpHeaders },);
  }
}
