import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpClient) {}
  SERVER_URL = environment.SERVER_URL;
  addToDetails(detail: any): Observable<any> {
    let url = `${this.SERVER_URL}/details/add`;
    return this.http.post<any>(url, detail);
  }
  deleteDetail(index: any): Observable<any> {
    let url = `${this.SERVER_URL}/details/del?index=${index}`;
    return this.http.put<any>(url, null);
  }
  getDetails(): Observable<any> {
    const url = `${this.SERVER_URL}/details/get`;
    return this.http.get<any>(url);
  }
}
