import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {CategorieService} from "../service/categorie.service";
import {Categorie} from "../models/categorie.models";
import { FormsModule } from '@angular/forms';
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

 //@ts-ignore
 categories:Categorie[]

 //@ts-ignore
 Categorie:Categorie={
  nomCategorie:"",
  sousCategorie:"",
 }

 constructor(private  CategorieService:CategorieService) {

 }

 onGetAllCategories() {
   this.CategorieService.findAll().subscribe(data => {
     this.categories = data
   })
 }
 ngOnInit(): void {
   this.onGetAllCategories()
 }

 public getCategories(): void {
  this.CategorieService.findAll().subscribe(
    (response: Categorie[]) => {
      this.categories = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}

 onDelete(idCategorie:BigInteger) {
   if(window.confirm("Etes vous sûr de vouloir supprimer ce Categorie ?")) {
     console.log(idCategorie)
     this.CategorieService.delete(idCategorie).subscribe(
       data => {
         console.log(data);
         this.onGetAllCategories()
         //this.back()
       }, err => {
         console.log(err);
       })
   }
 }

 onAddCategorie() {
   this.CategorieService.save(this.Categorie).subscribe(
     (response : Categorie) => {
       this.Categorie=response
       console.log("response : ", response);
       // @ts-ignore
       this.closeModal.nativeElement.click()
       this.onGetAllCategories();
     }
   )
 }

 public onUpdateCategorie(categorie: Categorie): void {
  this.CategorieService.update(categorie).subscribe(
    data => {
      console.log(data);
      this.getCategories()
      //this.back()
    }, err => {
      console.log(err);
    })
}


 public onOpenModal(categorie: Categorie, mode: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');

  if (mode === 'edit') {
    this.Categorie = categorie;
    button.setAttribute('data-target', '#updateCategorieModal');
  }
  // @ts-ignore
  container.appendChild(button);
  button.click();
}
}
