import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  TacheUrl:string;
  constructor(private http:HttpClient) {
    this.TacheUrl = "http://localhost:8080/api/tache/"
  }

  public findAll(): Observable<Tache[]> {
    return this.http.get<Tache[]>(this.TacheUrl);
  }
  public getTache(idTache : BigInteger): Observable<any>{
    return this.http.get(`${this.TacheUrl}id/${idTache}`);
  }

  public save(Tache: Tache) {
    return this.http.post<Tache>(this.TacheUrl, Tache);
  }
  update(Tache: Tache) {
    return this.http.put(`${this.TacheUrl}update`, Tache);
  }
  delete(idTache: BigInteger): Observable<any> {
    return this.http.delete(`${this.TacheUrl}id/${idTache}`, { responseType: 'text' });
  }
}
