import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProdComponent} from './prod/prod.component';
import {CategorieComponent} from './categorie/categorie.component';
import {ProjetComponent} from './projet/projet.component';
import {TacheComponent} from './tache/tache.component';
import {ResponsableComponent} from './responsable/responsable.component';
import {CollaborateurComponent} from './collaborateur/collaborateur.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ProjetComponent,
    TacheComponent,
    ResponsableComponent,
    CollaborateurComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    NgbModule
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
