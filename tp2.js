
// Exercice 1 – Déclaration et manipulation des objets

const etudiants = [ 
    { id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12 }, 
    { id: 2, nom: "Rabe", filiere: "IG", moyenne: 9 },
    { id: 3, nom: "Soa", filiere: "GL", moyenne: 15 },
    { id: 4, nom: "Koto", filiere: "SR", moyenne: 11 }
]; 

// 1. nom
console.log("--- Exercice 1 : Noms des étudiants ---");
etudiants.forEach(etudiant => {
    console.log("Nom : " + etudiant.nom);
});

// 2. "nom" et "moyenne" 
const { nom, moyenne } = etudiants[0];
console.log(`\nDestructuration (Premier étudiant) : ${nom} a une moyenne de ${moyenne}`);


// Exercice 2 – Manipulation des tableaux (map, filter)

console.log("\n--- Exercice 2 : Map et Filter ---");

// 1. filter():moyenne >= 10
const admis = etudiants.filter(e => e.moyenne >= 10);
console.log("Étudiants admis (moyenne >= 10) :", admis);

// 2. map(): tableau 
const nomsEtudiants = etudiants.map(e => e.nom);
console.log("Liste des noms uniquement :", nomsEtudiants);

const etudiantsAvecBonus = etudiants.map(e => ({
    ...e,
    moyenne: e.moyenne + 1
}));
console.log("Étudiants avec bonus de +1 point :", etudiantsAvecBonus);


initialiserApplication();