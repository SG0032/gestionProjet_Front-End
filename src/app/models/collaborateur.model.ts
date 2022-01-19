import { Projet } from "./projet.model";
export class Collaborateur {
  constructor(
        public idCollab: BigInteger,
        public nom: string,
        public prenom: string,
        public cin: string,
        public telephone: string,
        public adresse: string,
        public projets: Projet[]
    ) {}

}

