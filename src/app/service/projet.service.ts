import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Projet } from '../models/projet.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  ProjetUrl:string;
  constructor(private http:HttpClient) {
    this.ProjetUrl = "http://localhost:8080/api/projet/"
  }

  public findAll(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.ProjetUrl);
  }
  public getProjet(idProjet : BigInteger): Observable<any>{
    return this.http.get(`${this.ProjetUrl}idProjet/${idProjet}`);
  }

  public save(Projet: Projet) {
    return this.http.post<Projet>(this.ProjetUrl, Projet);
  }
  update(Projet: Projet) {
    return this.http.put(`${this.ProjetUrl}update`, Projet);
  }
  delete(idProjet: BigInteger): Observable<any> {
    return this.http.delete(`${this.ProjetUrl}idProjet/${idProjet}`, { responseType: 'text' });
  }
}