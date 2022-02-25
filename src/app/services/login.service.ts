export class ConnexionService {
  classInput = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
  attributs = [
    {
      name: "name",
      label: "Nom",
      class: this.classInput,
      type: 'text',
      value: ''
    },
    {
      name: "password",
      label: "Mot de passe",
      class: this.classInput,
      type: 'password',
      value: ''
    }
    ];

  verif(){
    const message = window.document.getElementById("messageConnexion")!;
    message.innerHTML = '';

    for (let attribut of this.attributs){
      attribut.class = this.classInput;
      if (attribut.value.length < 1) {
        message.innerHTML = 'Remplir tous les champs.';
        attribut.class += " border-red-500";
      }
    }
    if(message.innerHTML === ''){
      this.login();
    }
  }

  login(){
    console.log("Connexion réussie !");
    //connexion à la bdd (peut etre pas là)
  }
}

export class InscriptionService{
  classInput = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
  customer = true;
  entreprise = false;

  attributs = [
    {
      name: "newName",
      ngif: true,
      label: "Nom",
      class: this.classInput,
      type: "text",
      value: ""
    },
    {
      name: "newContact",
      ngif: this.entreprise,
      label: "Contact",
      class: this.classInput,
      type: "text",
      value: ""
    },
    {
      name: "newSiret",
      ngif: this.entreprise,
      label: "Numéro SIRET",
      class: this.classInput,
      type: "number",
      value: ""
    },
    {
      name: "newFirstName",
      ngif: this.customer,
      label: "Prénom",
      class: this.classInput,
      type: "text",
      value: ""
    },
    {
      name: "newAddress",
      ngif: this.customer,
      label: "Adresse",
      class: this.classInput,
      type: "text",
      value: ""
    },
    {
      name: "newCode",
      ngif: this.customer,
      label: "Code postal",
      class: this.classInput,
      type: "number",
      value: ""
    },
    {
      name: "newCity",
      ngif: this.customer,
      label: "Ville",
      class: this.classInput,
      type: "text",
      value: ""
    },
    {
      name: "newPhoneNumber",
      ngif: this.customer,
      label: "Téléphone",
      class: this.classInput,
      type: "number",
      value: ""
    },
    {
      name: "newEmail",
      ngif: this.customer,
      label: "E-mail",
      class: this.classInput,
      type: "email",
      value: ""
    },
    {
      name: "newUsername",
      ngif: true,
      label: "Nom d'utilisateur",
      class: this.classInput,
      type: "text",
      value: ""
    },
    {
      name: "newPassword",
      ngif: true,
      label: "Mot de passe",
      class: this.classInput,
      type: "password",
      value: ""
    },
    {
      name: "newPasswordConfirm",
      ngif: true,
      label: "Confirmer le mot de passe",
      class: this.classInput,
      type: "password",
      value: ""
    }
  ];

  navCustomer(){
    let buttonClient = window.document.getElementById("buttonNavClient");
    let buttonEntreprise = window.document.getElementById("buttonNavEntreprise");
    let message = window.document.getElementById("messageInscription")!;

    buttonClient!.className = "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-800 font-semibold";
    buttonEntreprise!.className = "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-700 font-semibold";
    message.innerHTML = '';

    this.customer = true;
    this.entreprise = false;

    for (let attribut of this.attributs)
      attribut.class = this.classInput;
    for (let i=1; i<=2; ++i)
      this.attributs[i].ngif = this.entreprise;
    for (let i=3; i<=8; ++i)
      this.attributs[i].ngif = this.customer;
  }

  navEntreprise(){
    let buttonClient = window.document.getElementById("buttonNavClient");
    let buttonEntreprise = window.document.getElementById("buttonNavEntreprise");
    let message = window.document.getElementById("messageInscription")!;

    buttonClient!.className = "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-700 font-semibold";
    buttonEntreprise!.className= "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-800 font-semibold";
    message.innerHTML = '';

    this.customer = false;
    this.entreprise = true;

    for (let attribut of this.attributs)
      attribut.class = this.classInput;
    for (let i=1; i<=2; ++i)
      this.attributs[i].ngif = this.entreprise;
    for (let i=3; i<=8; ++i)
      this.attributs[i].ngif = this.customer;
  }

  verif(){
    let message = window.document.getElementById("messageInscription")!;
    message.innerHTML = '';

    for (let attribut of this.attributs){
      attribut.class = this.classInput;
      if (attribut.value.length < 1 && attribut.ngif) {
        message.innerHTML = 'Remplir tous les champs.';
        attribut.class += " border-red-500";
      }
    }
    if(message.innerHTML === ''){
      this.inscription();
    }
  }

  inscription(){
    console.log("Inscription réussie !");
    //connexion à la bdd (peut etre pas là)
  }
}
