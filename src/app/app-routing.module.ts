
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjetComponent} from "./projet/projet.component";
import {TacheComponent} from "./tache/tache.component";
import {CategorieComponent} from "./categorie/categorie.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projet', component: ProjetComponent },
  { path: 'tache', component: TacheComponent },
  { path: 'categorie', component: CategorieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
