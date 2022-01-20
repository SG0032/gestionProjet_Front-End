import { Component, OnInit } from '@angular/core';
import { Tache } from '../models/tache.model';
import { TacheService } from '../service/tache.service';
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {



 //@ts-ignore
 taches:Tache[]

 //@ts-ignore
 tache:Tache={
  titreTache:"",
  descriptionTache:"",
  etatAvancement:"",
 }

 constructor(private  TacheService:TacheService) {

 }

 public getTaches(): void {
  this.TacheService.findAll().subscribe(
    (response:Tache[]) => {
      this.taches = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}

 onGetAllTaches() {
   this.TacheService.findAll().subscribe(data => {
     this.taches = data
   })
 }
 ngOnInit(): void {
   this.onGetAllTaches()
 }

 onDelete(idTache:BigInteger) {
   if(window.confirm("Etes vous sûr de vouloir supprimer ce Tache ?")) {
     console.log(idTache)
     this.TacheService.delete(idTache).subscribe(
       data => {
         console.log(data);
         this.onGetAllTaches()
         //this.back()
       }, err => {
         console.log(err);
       })
   }
 }

 onAddTache() {
   this.TacheService.save(this.tache).subscribe(
     (response : Tache) => {
       this.tache=response
       console.log("response : ", response);
       // @ts-ignore
       this.closeModal.nativeElement.click()
       this.onGetAllTaches();
     }
   )
 }

 public onUpdateTache(tache: Tache): void {
  this.TacheService.update(tache).subscribe(
    data => {
      console.log(data);
      this.getTaches()
      //this.back()
    }, err => {
      console.log(err);
    })
}

public onOpenModal(tache: Tache, mode: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');

  if (mode === 'edit') {
    this.tache = tache;
    button.setAttribute('data-target', '#updateTacheModal');
  }
  // @ts-ignore
  container.appendChild(button);
  button.click();
}


}
