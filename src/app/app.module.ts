import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProjetComponent } from './projet/projet.component';
import { TacheComponent } from './tache/tache.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ProjetComponent,
    TacheComponent,
    ResponsableComponent,
    CollaborateurComponent,
=======
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {  GoogleLoginProvider } from 'angularx-social-login';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdComponent } from './prod/prod.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdComponent
>>>>>>> b32074f4c43fee7426aa8675fdbef38c3b5ee685
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
=======
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    NgbModule
>>>>>>> b32074f4c43fee7426aa8675fdbef38c3b5ee685
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '748912804218-ov2b63es57ai7brte4ut8mlr4uk9plvc.apps.googleusercontent.com'
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent,
    HomeComponent]
})

export class AppModule { }
