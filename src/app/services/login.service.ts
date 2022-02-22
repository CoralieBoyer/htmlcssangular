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
      class: this.classInput
    },
    {
      name: "newContact",
      ngif: this.entreprise,
      label: "Contact",
      class: this.classInput
    },
    {
      name: "newSiret",
      ngif: this.entreprise,
      label: "Numéro SIRET",
      class: this.classInput
    },
    {
      name: "newFirstName",
      ngif: this.customer,
      label: "Prénom",
      class: this.classInput
    },
    {
      name: "newAddress",
      ngif: this.customer,
      label: "Adresse",
      class: this.classInput
    },
    {
      name: "newCode",
      ngif: this.customer,
      label: "Code postal",
      class: this.classInput
    },
    {
      name: "newCity",
      ngif: this.customer,
      label: "Ville",
      class: this.classInput
    },
    {
      name: "newPhoneNumber",
      ngif: this.customer,
      label: "Téléphone",
      class: this.classInput
    },
    {
      name: "newEmail",
      ngif: this.customer,
      label: "E-mail",
      class: this.classInput
    },
    {
      name: "newUsername",
      ngif: true,
      label: "Nom d'utilisateur",
      class: this.classInput
    },
    {
      name: "newPassword",
      ngif: true,
      label: "Mot de passe",
      class: this.classInput
    },
    {
      name: "newPasswordConfirm",
      ngif: true,
      label: "Confirmer le mot de passe",
      class: this.classInput
    }
  ];
}
