let entreprise = {
    adress :{
        rue:"Hal al amal",
        ville:"Beni mellal",
        codePostal : 23000
    }
}
let produits = [
    {nom:"Phone" , prix:5000 , quantite: 5},
    {nom:"Tablet" , prix:1000 , quantite: 12},
    {nom:"Laptop" , prix:8000 , quantite: 3}
]

for(let i = 0 ; i < produits.length ; i++){
    console.log(produits[i].prix * produits[i].quantite);
}

class Animal {
    constructor(nom , type){
        this.nom = nom;
        this.type = type
    }
    parler = function(sound){
        console.log(sound);
    }
}

let dog = new Animal("Chien","anything");
dog.parler("Haw haw")

let employes = [
    {nom:"ahmed" , salire:3000},
    {nom:"marwan" , salire:3500},
    {nom:"mustapha" , salire:5000},
    {nom:"iman" , salire:4000},
]
for(let index in employes){
    if(employes[index].salire> 3000){
        console.log(employes[index].salire);
    }
}
let newObjet
function cloner(objet){
    newObjet = {...objet}
}
cloner(employes)
console.log(newObjet);


