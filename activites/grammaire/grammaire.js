document.addEventListener("DOMContentLoaded", () => {
  const PAGE_ID = "Grammaire";
  let scorePage = 0;

  const bonnesReponses = {
    q1: "coi",
    q2: "sujet",
    q3: "verbe",
    q4: "cod",
    q5: "sujet"
  };

  function sauvegarderScore() {
    localStorage.setItem(`score_${PAGE_ID}`, scorePage);
  }

  function chargerScore() {
    const saved = localStorage.getItem(`score_${PAGE_ID}`);
    if (saved !== null) scorePage = parseInt(saved);
  }

  document.getElementById("verifier").addEventListener("click", () => {
    scorePage = 0;
    Object.keys(bonnesReponses).forEach(q => {
      const checked = document.querySelector(`input[name="${q}"]:checked`);
      if (checked && checked.value === bonnesReponses[q]) scorePage++;
    });

    document.getElementById("resultats").innerHTML =
      `<h3>Résultat : ${scorePage}/5</h3>`;

    sauvegarderScore();
  });

  document.getElementById("resetPage").addEventListener("click", () => {
    scorePage = 0;
    localStorage.removeItem(`score_${PAGE_ID}`);
    document.getElementById("message-reset").textContent =
      "Score de Grammaire réinitialisé !";
  });

  chargerScore();
});
