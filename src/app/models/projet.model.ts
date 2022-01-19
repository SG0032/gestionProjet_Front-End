import { Tache } from './tache.model';
import {Collaborateur} from './collaborateur.model';
import { Categorie } from './categorie.models';
import { Responsable } from './responsable.model';
export class Projet {
  constructor(
    public idProjet: BigInteger,
    public titreProjet: string,
    public descriptionProjet: string,
    public responsables: Responsable[],
    public taches: Tache[],
    public collaborateurs : Collaborateur[],
    public categories : Categorie[],
  ) {

  }

}
