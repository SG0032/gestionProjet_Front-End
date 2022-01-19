import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Responsable } from '../models/responsable.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  ResponsableUrl:string;
  constructor(private http:HttpClient) {
    this.ResponsableUrl = "http://localhost:8088/api/responsable/"
  }

  public findAll(): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(this.ResponsableUrl);
  }
  public getResponsable(idResponsable : BigInteger): Observable<any>{
    return this.http.get(`${this.ResponsableUrl}idResponsable/${idResponsable}`);
  }

  public save(Responsable: Responsable) {
    return this.http.post<Responsable>(this.ResponsableUrl, Responsable);
  }
  update(Responsable: Responsable) {
    return this.http.put(`${this.ResponsableUrl}update`, Responsable);
  }
  delete(idResponsable: BigInteger): Observable<any> {
    return this.http.delete(`${this.ResponsableUrl}idResponsable/${idResponsable}`, { responseType: 'text' });
  }
}