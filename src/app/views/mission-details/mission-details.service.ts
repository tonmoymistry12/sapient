import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionDetailsService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
      //"access-control-allow-origin": "*",
      //'Content-Type': 'application/json',
    }),
    params: new HttpParams(),
  };
  getAllMissionDetails(): Observable<any> {
    const url = environment.missionService + 'launches?limit=100';
    return this.http.get<any>(url, {
      headers: this.httpOptions.headers,
    });
  }
}
