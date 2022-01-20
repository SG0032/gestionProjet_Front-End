import { Component, OnInit } from '@angular/core';
import {Projet} from "../models/projet.model";
import {ProjetService} from "../service/projet.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  public projets: Projet[] | undefined

  constructor(private projetService: ProjetService) { }

  ngOnInit(){
    this.getProjets();
  }

  public getProjets() : void{
    this.projetService.findAll().subscribe(
      (response: Projet[]) => {
        this.projets = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  public onDelete(id:any) {
    if(window.confirm("Etes vous sûr de vouloir supprimer ce produit ?")) {
      console.log(id)
      this.projetService.delete(id).subscribe(
        data => {
          console.log(data);
          this.getProjets()
          //this.back()
        }, err => {
          console.log(err);
        })
    }
  }
}
