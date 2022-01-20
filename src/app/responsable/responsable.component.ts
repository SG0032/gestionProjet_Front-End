import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ResponsableService} from "../service/responsable.service";
import {Responsable} from "../models/responsable.model";
import {HttpErrorResponse} from "@angular/common/http";
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

 onAddResponsable() {
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
 
 public getResponsables(): void {
  this.ResponsableService.findAll().subscribe(
    (response: Responsable[]) => {
      this.responsables = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}
 public onUpdateResponsable(responsable: Responsable): void {
  this.ResponsableService.update(responsable).subscribe(
    data => {
      console.log(data);
      this.getResponsables()
      //this.back()
    }, err => {
      console.log(err);
    })
}
 public onOpenModal(responsable: Responsable, mode: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');

  if (mode === 'edit') {
    this.Responsable = responsable;
    button.setAttribute('data-target', '#updateResponsableModal');
  }
  // @ts-ignore
  container.appendChild(button);
  button.click();
}

}
