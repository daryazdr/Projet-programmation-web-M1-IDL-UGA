// Fonction pour calculer le score global
function calculerScoreGlobal() {
    let scoreGlobal = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('score_')) {
            scoreGlobal += parseInt(localStorage.getItem(key));
        }
    }
    return scoreGlobal;
}

// Fonction pour afficher le score global
function showGlobal() {
    const scoreGlobal = calculerScoreGlobal();
    document.getElementById('score-global').textContent = `Tu as ${scoreGlobal} bonnes réponses!`;
}

// Écouteur pour le bouton
document.getElementById('total').addEventListener('click', () => {
    showGlobal();
});

