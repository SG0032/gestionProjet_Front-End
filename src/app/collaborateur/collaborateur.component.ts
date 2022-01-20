import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CollaborateurService} from "../service/collaborateur.service";
import {Collaborateur} from "../models/collaborateur.model";
@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {


 //@ts-ignore
 collaborateurs:Collaborateur[]

 //@ts-ignore
 Collaborateur:Collaborateur={
  nom:"",
  prenom:"",
  cin:"",
  telephone:"",
  adresse:"",
 }

 constructor(private  CollaborateurService:CollaborateurService) {

 }

 onGetAllCollaborateurs() {
   this.CollaborateurService.findAll().subscribe(data => {
     this.collaborateurs = data
   })
 }
 ngOnInit(): void {
   this.onGetAllCollaborateurs()
 }

 onDelete(idCollaborateur:BigInteger) {
   if(window.confirm("Etes vous sûr de vouloir supprimer ce Collaborateur ?")) {
     console.log(idCollaborateur)
     this.CollaborateurService.delete(idCollaborateur).subscribe(
       data => {
         console.log(data);
         this.onGetAllCollaborateurs()
         //this.back()
       }, err => {
         console.log(err);
       })
   }
 }

 onAddCollaborateur() {
   this.CollaborateurService.save(this.Collaborateur).subscribe(
     (response : Collaborateur) => {
       this.Collaborateur=response
       console.log("response : ", response);
       // @ts-ignore
       this.closeModal.nativeElement.click()
       this.onGetAllCollaborateurs();
     }
   )
 }


}
