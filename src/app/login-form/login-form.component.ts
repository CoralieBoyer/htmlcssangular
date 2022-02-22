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
  attributsConnexion!: {}[];
  attributsInscription!: {}[];

  constructor(private formBuilder: FormBuilder, private connexionService: ConnexionService, private inscriptionService: InscriptionService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [],
      password: []
    });

    this.attributsConnexion = this.connexionService.attributs;
    this.attributsInscription = this.inscriptionService.attributs;
  }

  verifLogin(){
    this.connexionService.verif();
  }

}
