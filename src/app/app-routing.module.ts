<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjetComponent} from "./projet/projet.component";
import {TacheComponent} from "./tache/tache.component";
import {CategorieComponent} from "./categorie/categorie.component";
=======
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
>>>>>>> b32074f4c43fee7426aa8675fdbef38c3b5ee685

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
