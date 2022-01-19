import { Projet } from "./projet.model";
export class Categorie {
    constructor(
          public idCategorie: BigInteger,
          public nomCategorie: string,
          public sousCategorie: string,
          public projets: Projet[]
      ) {}
  
  }
