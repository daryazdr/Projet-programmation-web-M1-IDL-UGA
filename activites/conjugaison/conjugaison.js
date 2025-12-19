document.addEventListener("DOMContentLoaded", function () {

  const MAX_TOTAL = 5 + 7 + 6;
  let score1 = 0, score2 = 0, score3 = 0;

  function updateGlobalScore() {
    const p = document.getElementById("globalScore");
    const total = score1 + score2 + score3;

    if (p) {
      p.textContent = `Score total : ${total} / ${MAX_TOTAL}`;
    }

    // sauvegarde pour l'accueil
    localStorage.setItem("score_Conjugaison", total);
  }

  function norm(str) {
    return (str || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, "'")
      .replace(/\s+/g, " ");
  }

  function makeSingleSelect(optionsNodeList) {
    optionsNodeList.forEach(opt => {
      opt.addEventListener("click", () => {
        optionsNodeList.forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
      });
    });
  }

  // ===== EXERCICE 1 =====
  (function () {
    const container = document.getElementById("exerc1");
    const checkBtn = document.getElementById("check1");
    const resultP = document.getElementById("result1");
    if (!container || !checkBtn || !resultP) return;

    const correctIndex = [0, 1, 2, 1, 1];
    const phrases = container.querySelectorAll(".phrase");

    phrases.forEach(phrase => {
      makeSingleSelect(phrase.querySelectorAll(".rep_1"));
    });

    checkBtn.addEventListener("click", () => {
      let score = 0;

      container.querySelectorAll(".rep_1").forEach(o =>
        o.classList.remove("correct", "wrong")
      );

      phrases.forEach((phrase, i) => {
        const options = phrase.querySelectorAll(".rep_1");
        const selected = phrase.querySelector(".rep_1.selected");
        if (!selected) return;

        const correct = options[correctIndex[i]];
        if (selected === correct) {
          selected.classList.add("correct");
          score++;
        } else {
          selected.classList.add("wrong");
        }
      });

      resultP.textContent = `Score : ${score}/${correctIndex.length}`;
      score1 = score;
      updateGlobalScore();
    });
  })();

  // ===== EXERCICE 2 =====
  (function () {
    const checkBtn = document.getElementById("check2");
    const resultP = document.getElementById("result2");
    if (!checkBtn || !resultP) return;

    const answers = {
      ex2_pc: "ai prepare",
      ex2_fs: "preparerai",
      ex2_fa: "aurai prepare",
      ex2_imp: "preparais",
      ex2_pqp: "avais prepare",
      ex2_ps: "preparai",
      ex2_pa: "eus prepare"
    };

    checkBtn.addEventListener("click", () => {
      let score = 0;
      const ids = Object.keys(answers);

      ids.forEach(id => {
        const input = document.getElementById(id);
        if (!input) return;

        input.classList.remove("correct", "wrong");

        if (norm(input.value) === norm(answers[id])) {
          input.classList.add("correct");
          score++;
        } else {
          input.classList.add("wrong");
        }
      });

      resultP.textContent = `Score : ${score}/${ids.length}`;
      score2 = score;
      updateGlobalScore();
    });
  })();

  // ===== EXERCICE 3 =====
  (function () {
    const checkBtn = document.getElementById("check3");
    const resultP = document.getElementById("result3");
    const rows = document.querySelectorAll("#exerc3 .ex3-row:not(.example)");
    if (!checkBtn || !resultP || !rows.length) return;

    rows.forEach(row => {
      makeSingleSelect(row.querySelectorAll(".ex3-aux"));
    });

    checkBtn.addEventListener("click", () => {
      let score = 0;

      rows.forEach(row => {
        const expectedAux = row.dataset.aux;
        const expectedPP = row.dataset.pp;
        const input = row.querySelector(".ex3-input");
        const selected = row.querySelector(".ex3-aux.selected");

        input.classList.remove("correct", "wrong");

        const auxOk = selected && norm(selected.textContent) === expectedAux;
        const phraseOk =
          norm(input.value) ===
          ((expectedAux === "etre" ? "est " : "a ") + expectedPP);

        if (auxOk && phraseOk) {
          input.classList.add("correct");
          score++;
        } else {
          input.classList.add("wrong");
        }
      });

      resultP.textContent = `Score : ${score}/${rows.length}`;
      score3 = score;
      updateGlobalScore();
    });
  })();

  // ===== chargement du score enregistré =====
  const saved = localStorage.getItem("score_Conjugaison");
  if (saved !== null) {
    document.getElementById("globalScore").textContent =
      `Score total : ${saved} / ${MAX_TOTAL}`;
  }

  // ===== reinitialisation =====
  const resetBtn = document.getElementById("resetPage");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      score1 = 0;
      score2 = 0;
      score3 = 0;

      localStorage.removeItem("score_Conjugaison");

      updateGlobalScore();

      document.querySelectorAll(".correct, .wrong, .selected").forEach(el =>
        el.classList.remove("correct", "wrong", "selected")
      );

      document.querySelectorAll("input").forEach(i => i.value = "");

      document.getElementById("result1").textContent = "";
      document.getElementById("result2").textContent = "";
      document.getElementById("result3").textContent = "";
    });
  }

  updateGlobalScore();
});