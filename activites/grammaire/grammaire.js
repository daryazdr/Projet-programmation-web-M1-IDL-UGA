document.addEventListener('DOMContentLoaded', function() {
    const conteneurResultats = document.getElementById('resultats');
    const boutonVerif = document.getElementById('verifier');

    const reponseJuste = {
        q1 : 'coi',
        q2 : 'sujet',
        q3 : 'verbe',
        q4 : 'cod',
        q5 : 'sujet',
    };

    boutonVerif.addEventListener('click', function() {
    let scoreGrammaire = 0;
    let total = Object.keys(reponseJuste).length;

    for (let question in reponseJuste) {
      const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === reponseJuste[question]) {
        scoreGrammaire++;
      }
    }

    conteneurResultats.innerHTML = `
      <h3>Résultat : ${scoreGrammaire}/${total}</h3>
      <p>Taux de réussite : ${Math.round((scoreGrammaire / total) * 100)}%</p>
    `;

    
    // Stockage dans sessionStorage
    const pageId = "Gram";
    localStorage.setItem(`score_${pageId}`, scoreGrammaire);

  });
})

