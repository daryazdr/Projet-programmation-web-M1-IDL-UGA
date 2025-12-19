// identifiant de la page pour stocker le score dans le localstorage
const PAGE_ID = "Vocabulaire";

// variable qui contient le score actuel de l'utilisateur
let vocabulaireScore = 0;

// nombre total de zones de dépôt (objets à placer)
const totalZones = 5;

// fonction qui charge le score sauvegardé depuis le localstorage
function chargerScore() {
  const saved = localStorage.getItem(`score_${PAGE_ID}`);
  if (saved !== null) vocabulaireScore = parseInt(saved);
  afficherBilan();
}

// fonction qui sauvegarde le score actuel dans le localstorage
function sauvegarderScore() {
  localStorage.setItem(`score_${PAGE_ID}`, vocabulaireScore);
}

// fonction qui affiche le bilan (score actuel sur total d'objets)
function afficherBilan() {
  document.getElementById("bilan-vocabulaire").textContent =
    `Vocabulaire : ${vocabulaireScore} / ${totalZones}`;
}

// fonction pour calculer le score en comptant les bonnes réponses
function calculerScore() {
  vocabulaireScore = document.querySelectorAll(".dropzone.correct").length;
  sauvegarderScore();
  afficherBilan();
}

// fonction pour remettre à zéro l'exercice
function reinitialiserVocabulaire() {
  vocabulaireScore = 0;
  localStorage.removeItem(`score_${PAGE_ID}`);

  // remettre toutes les images à leur position initiale
  document.querySelectorAll(".draggable-img").forEach(img => {
    const word = img.dataset.word;
    const originalTarget = document.getElementById(`t-${word}`);
    originalTarget.appendChild(img);

    // réinitialiser le style de l'image
    img.style.width = "100%";
    img.style.height = "100%";
  });

  // enlever les classes correct/wrong de toutes les dropzones
  document.querySelectorAll(".dropzone").forEach(zone => {
    zone.classList.remove("correct", "wrong");
    // vider les dropzones
    while (zone.firstChild) {
      zone.removeChild(zone.firstChild);
    }
  });

  afficherBilan();
  document.getElementById("message-reset").textContent = "L'activité a été réinitialisée !";
  setTimeout(() => {
    document.getElementById("message-reset").textContent = "";
  }, 3000);
}

// ajouter l'événement au bouton de réinitialisation
document.getElementById("resetPage").addEventListener("click", reinitialiserVocabulaire);

// sélectionner toutes les images draggables
const draggableImages = document.querySelectorAll(".draggable-img");

// pour chaque image, ajouter l'événement de début de glissement
draggableImages.forEach(img => {
  img.addEventListener("dragstart", (e) => {
    // stocker le mot et l'id de l'image lors du drag
    e.dataTransfer.setData("word", img.dataset.word);
    e.dataTransfer.setData("imgId", img.id);
  });
});

// sélectionner toutes les zones où on peut déposer (dropzones et bg-targets)
const dropzones = document.querySelectorAll(".dropzone, .bg-target");

// pour chaque zone de dépôt
dropzones.forEach(zone => {
  // quand on survole la zone avec un élément draggable
  zone.addEventListener("dragover", (e) => {
    e.preventDefault(); // permet de déposer l'élément
    zone.style.background = "rgba(180, 220, 255, 0.4)"; // changer la couleur de fond
  });

  // quand on quitte la zone sans déposer
  zone.addEventListener("dragleave", () => {
    zone.style.background = ""; // remettre le fond normal
  });

  // quand on dépose l'image dans la zone
  zone.addEventListener("drop", (e) => {
    e.preventDefault();

    // vérifier si la zone contient déjà une image
    if (zone.querySelector("img")) {
      return; // ne rien faire si déjà occupée
    }

    // récupérer les données de l'image déplacée
    const word = e.dataTransfer.getData("word");
    const imgId = e.dataTransfer.getData("imgId");
    const img = document.getElementById(imgId);

    // ajouter l'image dans la zone
    zone.appendChild(img);

    // adapter la taille de l'image à la zone
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";

    // enlever les anciennes classes de validation
    zone.classList.remove("correct", "wrong");

    // vérifier si c'est la bonne réponse (seulement pour les dropzones)
    if (zone.classList.contains("dropzone")) {
      if (zone.dataset.word === word) {
        zone.classList.add("correct"); // bonne réponse
      } else {
        zone.classList.add("wrong"); // mauvaise réponse
      }
    }

    // recalculer le score après chaque dépôt
    calculerScore();
  });
});

// charger le score au démarrage de la page
chargerScore();