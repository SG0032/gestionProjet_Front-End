import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Categorie } from '../models/categorie.models';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categorieUrl:string;
  constructor(private http:HttpClient) {
    this.categorieUrl = "http://localhost:8080/api/categorie/"
  }

  public findAll(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.categorieUrl);
  }
  public getcategorie(idCategorie : BigInteger): Observable<any>{
    return this.http.get(`${this.categorieUrl}id/${idCategorie}`);
  }

  public save(categorie: Categorie) {
    return this.http.post<Categorie>(this.categorieUrl, categorie);
  }
  update(categorie: Categorie) {
    return this.http.put(`${this.categorieUrl}update`, categorie);
  }
  delete(idCategorie: BigInteger): Observable<any> {
    return this.http.delete(`${this.categorieUrl}id/${idCategorie}`, { responseType: 'text' });
  }
}
