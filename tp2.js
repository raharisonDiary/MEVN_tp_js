
// Exercice 1 – Déclaration et manipulation des objets----DIARY

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


// Exercice 2 – Manipulation des tableaux (map, filter)-----FITIAVANA

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


// Exercice 3 – Fonctions fléchées et template literals----LUCAS

console.log("\n--- Exercice 3 : Fonctions fléchées et Template literals ---");

// 1 & 2. Fonction fléchée ; template literals (backticks ``)
const afficherEtudiant = (etudiant) => {
    console.log(`L’étudiant ${etudiant.nom} de la filière ${etudiant.filiere} a une moyenne de ${etudiant.moyenne}`);
};

// fonction de Rakoto
afficherEtudiant(etudiants[0]);


// Exercice 4 – Programmation asynchrone (async / await)---BRYAN

console.log("\n--- Exercice 4 : Programmation asynchrone ---");

// Simulation API 
function chargerEtudiants() { 
    return new Promise((resolve) => { 
        setTimeout(() => { 
            resolve(etudiants); 
        }, 2000); 
    }); 
}

// 1-4. Fonction async/await; try/catch 
async function initialiserApplication() {
    console.log("Chargement des données en cours...");
    try {
        const data = await chargerEtudiants();
        console.log("Liste des étudiants récupérée avec succès :");
        console.table(data); 
    } catch (error) {
        console.error("Une erreur est survenue lors du chargement :", error);
    }
}

// Exercice 5 – Calcul de la moyenne générale (Reduce)--STEEVE

console.log("\n--- Exercice 5 : Moyenne générale de la classe ---");

// reduce()moyenne ;"somme" 
const sommeMoyennes = etudiants.reduce((total, e) => total + e.moyenne, 0);
const moyenneGenerale = sommeMoyennes / etudiants.length;

console.log(`La moyenne générale de la classe est de : ${moyenneGenerale}`);

initialiserApplication();