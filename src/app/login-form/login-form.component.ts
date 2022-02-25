import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ConnexionService, InscriptionService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  inscriptionForm!: FormGroup;
  attributsConnexion!: {name: string, label: string, class: string, type:string, value: string}[];
  attributsInscription!: {name: string, ngif: boolean, label: string, class: string, type: string, value: string}[];

  constructor(private formBuilder: FormBuilder, private connexionService: ConnexionService, private inscriptionService: InscriptionService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [],
      password: []
    });
    this.inscriptionForm = this.formBuilder.group({
      newName: [],
      newFirstName: [],
      newSiret: [],
      newAddress: [],
      newCode: [],
      newCity: [],
      newPhoneNumber: [],
      newContact: [],
      newEmail: [],
      newUsername: [],
      newPassword: [],
      newPasswordConfirm: []
    });

    this.attributsConnexion = this.connexionService.attributs;
    this.attributsInscription = this.inscriptionService.attributs;
  }

  verifLogin(){
    this.connexionService.verif();
  }

  verifInscription(){
    this.inscriptionService.verif();
  }

  nav(parameter: string){
    if (parameter === 'customer')
      this.inscriptionService.navCustomer();
    if (parameter === 'entreprise')
      this.inscriptionService.navEntreprise();
  }

}
