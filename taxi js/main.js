// main.js

let mentalHealth = 10;
let redLightsPassed = 0;
const maxRedLights = 30;
const songs = ["Anissa", "Song1", "Song2", "Song3", "Song4"];

function playRandomSong() {
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  console.log("Chanson actuelle : " + randomSong);

  if (randomSong === "Anissa") {
    mentalHealth -= 1; // Réduction de la santé mentale si c'est la chanson "Anissa"
    console.log("La chanson a affecté votre santé mentale. Santé mentale actuelle : " + mentalHealth);
  }
}

function advanceGame() {
  console.log("Tour avancé.");
  playRandomSong();

  // Ici, vous pouvez ajouter la logique pour gérer la santé mentale et les feux rouges
  redLightsPassed += 1; // Exemple d'augmentation du nombre de feux rouges passés

  if (mentalHealth <= 0 || redLightsPassed >= maxRedLights) {
    endGame();
  } else {
    setTimeout(advanceGame, 1000); // Avance le jeu automatiquement toutes les 1000 millisecondes (1 seconde)
  }
}

function startGame() {
  console.log("Bienvenue dans le jeu ! Le jeu va commencer automatiquement.");
  advanceGame();
}

function endGame() {
  console.log("Fin du jeu !");
  console.log("Appuyez sur S pour redémarrer le jeu.");
  
  // Attendez l'entrée du joueur pour redémarrer le jeu
  document.addEventListener("keydown", function (event) {
    if (event.key === "s" || event.key === "S") {
      resetGame();
    }
  });
}

function resetGame() {
  mentalHealth = 10;
  redLightsPassed = 0;
  startGame(); // Redémarre le jeu
}

startGame();