import { Projet } from "./projet.model";
export class Responsable {
    constructor(
      public idResponsable: BigInteger,
      public projets: Projet[]
  
    ) {}
  }

