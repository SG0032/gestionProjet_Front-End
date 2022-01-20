import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ResponsableService} from "../service/responsable.service";
import {Responsable} from "../models/responsable.model";
@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent implements OnInit {

 //@ts-ignore
 responsables:Responsable[]

 //@ts-ignore
 Responsable:Responsable={

 }

 constructor(private  ResponsableService:ResponsableService) {

 }

 onGetAllResponsables() {
   this.ResponsableService.findAll().subscribe(data => {
     this.responsables = data
   })
 }
 ngOnInit(): void {
   this.onGetAllResponsables()
 }

 onDelete(idResponsable:BigInteger) {
   if(window.confirm("Etes vous sûr de vouloir supprimer ce Responsable ?")) {
     console.log(idResponsable)
     this.ResponsableService.delete(idResponsable).subscribe(
       data => {
         console.log(data);
         this.onGetAllResponsables()
         //this.back()
       }, err => {
         console.log(err);
       })
   }
 }

 onAddCesponsable() {
   this.ResponsableService.save(this.Responsable).subscribe(
     (response : Responsable) => {
       this.Responsable=response
       console.log("response : ", response);
       // @ts-ignore
       this.closeModal.nativeElement.click()
       this.onGetAllResponsables();
     }
   )
 }

}
