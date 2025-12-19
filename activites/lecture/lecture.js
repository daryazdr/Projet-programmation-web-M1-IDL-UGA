// identifiant de la page pour stocker le score dans le localstorage
const PAGE_ID = "Lecture";

// variable qui contient le score actuel de l'utilisateur
let lectureScore = 0;

// fonction qui charge le score sauvegardé depuis le localstorage
function chargerScore() {
    const saved = localStorage.getItem(`score_${PAGE_ID}`);
    if (saved !== null) lectureScore = parseInt(saved);
    afficherBilan();
}

// fonction qui sauvegarde le score actuel dans le localstorage
function sauvegarderScore() {
    localStorage.setItem(`score_${PAGE_ID}`, lectureScore);
}

// fonction qui affiche le bilan (score actuel sur total d'exercices)
function afficherBilan() {
    const total = document.querySelectorAll(".check").length;
    document.getElementById("bilan-lecture").textContent =
        `Lecture : ${lectureScore} / ${total}`;
}

// pour chaque bouton "vérifier", on ajoute un écouteur d'événement
document.querySelectorAll(".check").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.valid !== "true") {
            lectureScore++;
            btn.dataset.valid = "true";
            sauvegarderScore();
        }
        afficherBilan();
    });
});

// fonction pour remettre à zéro tous les exercices de cette page
function reinitialiserLecture() {
    lectureScore = 0;
    localStorage.removeItem(`score_${PAGE_ID}`);
    document.querySelectorAll(".check").forEach(b => b.dataset.valid = "false");
    afficherBilan();
}

// au chargement de la page, on charge le score sauvegardé
chargerScore();