// Pour éviter les erreurs de type
function chancesDeToucher(chances) {
	return chances > 0 && chances <= 1;
  }
  
  function esquiver(chances) {
	return chances > 0 && chances <= 1;
  }
  

// Définition des variables
let jason = {
	vies: 100,
  };
  let survivants = [
	{
	  nom: "Toto",
	  vies: 100,
	},
	{
	  nom: "Titi",
	  vies: 100,
	},
	{
	  nom: "Tata",
	  vies: 100,
	},
	{
	  nom: "Titi",
	  vies: 100,
	},
	{
	  nom: "Toto",
	  vies: 100,
	},
  ];
  
  // Fonction pour calculer les chances de toucher
  function chancesDeToucher(chances) {
	return Math.random() <= chances;
  }
  
  // Fonction pour faire attaquer un survivant
  function attaquer(survivant, jason) {
	if (chancesDeToucher(survivant.chancesDeToucher)) {
	  jason.vies -= survivant.degats;
	  console.log(`${survivant.nom} a infligé 10 dégâts à Jason`);
	}
  }
  
  // Fonction pour faire esquiver un survivant
  function esquiver(survivant) {
	return Math.random() <= survivant.chancesDesquive;
  }
  
  // Boucle de jeu
  while (jason.vies > 0 && survivants.length > 0) {
	// On attaque tous les survivants
	for (let survivant of survivants) {
	  if (esquiver(survivant)) {
		console.log(`${survivant.nom} a esquivé l'attaque de Jason`);
	  } else {
		attaquer(survivant, jason);
		if (survivant.vies <= 0) {
		  survivants.splice(survivants.indexOf(survivant), 1);
		  console.log(`${survivant.nom} est mort`);
		}
	  }
	}
  
	// Jason attaque un survivant aléatoire
	let survivantAlAlea = survivants[Math.floor(Math.random() * survivants.length)];
	attaquer(survivantAlAlea, jason);
	if (survivantAlAlea.vies <= 0) {
	  survivants.splice(survivants.indexOf(survivantAlAlea), 1);
	  console.log(`${survivantAlAlea.nom} est mort`);
	}
  }
  
  // Affichage du résultat
  if (jason.vies > 0) {
	console.log("Jason a gagné !");
  } else {
	console.log("Les survivants ont gagné !");
  }
  
  // Fonction pour lancer le jeu
  function startGame() {
	jason.vies = 100;
	survivants.forEach((survivant) => {
	  survivant.vies = 100;
	});
	console.log("Le jeu a commencé !");
  }
  
  // Exécution de la fonction startGame() par défaut
  startGame();