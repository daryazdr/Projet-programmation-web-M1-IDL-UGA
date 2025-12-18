function calculerScoreGlobal(){
    let scoreGlobal = 0;

    // Parcourir toutes les clés de sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);

        // Vérifier si la clé correspond à un score
        if (key.startsWith('score_')) {
            const score = parseInt(sessionStorage.getItem(key));
            scoreGlobal += score;
        }
    }

    return scoreGlobal;
}

// Afficher le score global
function showGlobal(){
const scoreGlobal = calculerScoreGlobal();
document.getElementById('score-global').textContent = `Tu as ${scoreGlobal} bonnes réponses!`;
}
