import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProjetComponent } from './projet/projet.component';
import { TacheComponent } from './tache/tache.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ProjetComponent,
    TacheComponent,
    ResponsableComponent,
    CollaborateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
