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
    let score = 0;
    let total = Object.keys(reponseJuste).length;

    for (let question in reponseJuste) {
      const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === reponseJuste[question]) {
        score++;
      }
    }

    conteneurResultats.innerHTML = `
      <h3>Résultat : ${score}/${total}</h3>
      <p>Taux de réussite : ${Math.round((score / total) * 100)}%</p>
    `;

  });
})

