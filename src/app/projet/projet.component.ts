import {Component, OnInit} from '@angular/core';
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

  //@ts-ignore
  public projet: Projet = {
    titreProjet: "",
    descriptionProjet: "",
    idProjet: new Uint8Array
  }

  constructor(private projetService: ProjetService) {

  }

  ngOnInit() {
    this.getProjets();
  }

  public getProjets(): void {
    this.projetService.findAll().subscribe(
      (response: Projet[]) => {
        this.projets = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  public onDelete(id: any) {
    if (window.confirm("Etes vous sûr de vouloir supprimer ce produit ?")) {
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

  onAddProjet() {
    this.projetService.save(this.projet).subscribe(
      (response: Projet) => {
        this.projet = response
        console.log("response : ", response);
        // @ts-ignore
        this.closeModal.nativeElement.click()
        this.getProjets();
      }
    )
  }

  public onUpdateProjet(projet: Projet): void {
    this.projetService.update(projet).subscribe(
      data => {
        console.log(data);
        this.getProjets()
        //this.back()
      }, err => {
        console.log(err);
      })
  }

  public onOpenModal(projet: Projet, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'edit') {
      this.projet = projet;
      button.setAttribute('data-target', '#updateProjetModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

}
