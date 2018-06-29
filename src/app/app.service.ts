import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  WebApiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  fnPageSourcedata<T>(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.WebApiUrl)
        .subscribe((response: any) => {
          if (response) {
            resolve(response);
          }
        }, reject);
    });
  }
}

// {
//   providedIn: 'root'
// }
// http://jsonplaceholder.typicode.com/posts

