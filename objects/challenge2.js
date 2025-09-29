//Challenge 2


//1


const prompt = require("prompt-sync")()

let etudiant = {
  nom: "marouane",
  age: 21,
  sePresenter: function () {
    console.log(`Bounjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  },
};

etudiant.sePresenter();

// 2

let personne = {
  nom: "Marouane",
  prenom: "Bounou",
  age: 21,
  ville: "Beni mellal",
};

for (let index in personne) {
  console.log(personne[index]);
}

// 3

let classe = {
  etudiants: ["Marouane", "Ahmed", "yassin"],
  afficherEtudiants: function () {
    for (let index in classe.etudiants) {
      console.log(classe.etudiants[index]);
    }
  },
};

classe.afficherEtudiants();

// 4 

let livres = [
  { titre: "A Tale of Two Cities", auteur: "Charles Dickens", annee: 1978 },
  { titre: "The Little Prince",auteur: "Antoine de Saint-Exupéry",anne: 1943,},
  { titre: "The Alchemist", auteur: "The Alchemist", anne: 1988 },
  trouverLivre = function(nom){
       return livres.find(livre => livre.titre.toLowerCase() === nom.toLowerCase())
  }
];

for (let i = 0; i < livres.length -1; i++) {
  console.log(livres[i].titre);
}

// 5 
let nom =prompt("Entre un nome de livre : ")

console.log(trouverLivre(nom));


