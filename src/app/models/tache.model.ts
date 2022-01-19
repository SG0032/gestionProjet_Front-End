import { Projet } from "./projet.model";
export class Tache {
  constructor(
    public idTache: BigInteger,
    public titreTache: string,
    public descriptionTache: string,
    public dateDebut: Date,
    public dateFin: Date,
    public etatAvancement: string,
    public projets: Projet[]

  ) {}
}

