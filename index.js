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
    pages.forEach(page => {
        localStorage.removeItem(`score_${page}`);
    });

    document.getElementById("score-global").textContent =
        "Tu as 0 bonnes réponses !";
}