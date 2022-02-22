import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { ConnexionService, InscriptionService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    ConnexionService,
    InscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
