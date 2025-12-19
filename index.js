const pages = [
    "Grammaire",
    "Vocabulaire",
    "Conjugaison",
    "Orthographe",
    "Lecture"
];

// Fonction pour calculer le score global
function calculerScoreGlobal() {
    let total = 0;

    pages.forEach(page => {
        const score = localStorage.getItem(`score_${page}`);
        if (score !== null) {
            total += parseInt(score);
        }
    });

    // Afficher le score immédiatement
    document.getElementById("score-global").textContent =
        `Tu as ${total} bonnes réponses !`;
}

// Réinitialiser tous les scores
function reinitialiserScores() {

    // confirmation avant action
    const confirmation = confirm(
        "Es-tu sûr(e) de vouloir réinitialiser tous les scores ?\nCette action est irréversible."
    );

    if (!confirmation) {
        return; // l'utilisateur annule, rien ne se passe
    }

    // suppression des scores
    pages.forEach(page => {
        localStorage.removeItem(`score_${page}`);
    });

    document.getElementById("score-global").textContent =
        "Tu as 0 bonnes réponses !";

    // message apres action
    const msg = document.getElementById("resetMessage");
    msg.textContent = "Tous les scores ont été réinitialisés";
    msg.style.color = "#4CAF50";

}