import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Collaborateur } from '../models/collaborateur.model';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {
  CollaborateurUrl:string;
  constructor(private http:HttpClient) {
    this.CollaborateurUrl = "http://localhost:8080/api/collaborateur/"
  }

  public findAll(): Observable<Collaborateur[]> {
    return this.http.get<Collaborateur[]>(this.CollaborateurUrl);
  }
  public getCollaborateur(idCollab : BigInteger): Observable<any>{
    return this.http.get(`${this.CollaborateurUrl}idCollab/${idCollab}`);
  }

  public save(Collaborateur: Collaborateur) {
    return this.http.post<Collaborateur>(this.CollaborateurUrl, Collaborateur);
  }
  update(Collaborateur: Collaborateur) {
    return this.http.put(`${this.CollaborateurUrl}update`, Collaborateur);
  }
  delete(idCollab: BigInteger): Observable<any> {
    return this.http.delete(`${this.CollaborateurUrl}idCollab/${idCollab}`, { responseType: 'text' });
  }
}