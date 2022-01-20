import { Component, OnInit } from '@angular/core';
import { Tache } from '../models/tache.model';
import { TacheService
 } from '../service/tache.service';
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


}
