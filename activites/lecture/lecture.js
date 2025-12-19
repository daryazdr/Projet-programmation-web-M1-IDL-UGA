const PAGE_ID = "Lecture";
let lectureScore = 0;

function chargerScore() {
    const saved = localStorage.getItem(`score_${PAGE_ID}`);
    if (saved !== null) lectureScore = parseInt(saved);
    afficherBilan();
}

function sauvegarderScore() {
    localStorage.setItem(`score_${PAGE_ID}`, lectureScore);
}

function afficherBilan() {
    const total = document.querySelectorAll(".check").length;
    document.getElementById("bilan-lecture").textContent =
        `Lecture : ${lectureScore} / ${total}`;
}

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

function reinitialiserLecture() {
    lectureScore = 0;
    localStorage.removeItem(`score_${PAGE_ID}`);
    document.querySelectorAll(".check").forEach(b => b.dataset.valid = "false");
    afficherBilan();
}

chargerScore();
