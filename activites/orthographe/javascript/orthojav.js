function toggleHelp() {
  hiddiv = document.getElementById("answer");
  if (hiddiv.style.display === "none") {
    hiddiv.style.display = "flex";
  } else {
    hiddiv.style.display = "none";
  }
}

function verifierReponses() {
    const reponse1 = document.getElementById("reponse1").value;
    const reponse2 = document.getElementById("reponse2").value;
    const reponse3 = document.getElementById("reponse3").value;
    const reponse4 = document.getElementById("reponse4").value;
    const reponse5 = document.getElementById("reponse5").value;
    const reponse6 = document.getElementById("reponse6").value;
    const reponse7 = document.getElementById("reponse7").value;
    const reponse8 = document.getElementById("reponse8").value;
    const reponse9 = document.getElementById("reponse9").value;
    const reponse10 = document.getElementById("reponse10").value;

    const bonneReponse1 = "court";
    const bonneReponse2 = "paissent";
    const bonneReponse3 = "cascadant";
    const bonneReponse4 = "temple";
    const bonneReponse5 = "féconder";
    const bonneReponse6 = "scieries";
    const bonneReponse7 = "hangars";
    const bonneReponse8 = "débitent";
    const bonneReponse9 = "centaines";
    const bonneReponse10 = "fraîche";

    let compteRep = 10;

    let resultat = document.getElementById("verifier");
    let total = document.getElementById("score_total");

    if (reponse1 === bonneReponse1 && reponse2 === bonneReponse2 && reponse3 === bonneReponse3 && reponse4 === bonneReponse4 && reponse5 === bonneReponse5 && reponse6 === bonneReponse6 && reponse7 === bonneReponse7 && reponse8 === bonneReponse8 && reponse9 === bonneReponse9 && reponse10 === bonneReponse10) {
        resultat.textContent = "Bravo ! Toutes les réponses sont correctes.";
        resultat.style.color = "#4CAF50";
    } else {
        resultat.innerHTML = "Certaines réponses sont incorrectes. <br>";
        if (reponse1 !== bonneReponse1) {
            resultat.innerHTML += `La bonne réponse pour le 1er trou est : <strong>${bonneReponse1}</strong><br>`;
            compteRep -= 1
        }
        if (reponse2 !== bonneReponse2) {
            resultat.innerHTML += `La bonne réponse pour le 2ème trou est : <strong>${bonneReponse2}</strong><br>`;
            compteRep -= 1
        }
        if (reponse3 !== bonneReponse3) {
            resultat.innerHTML += `La bonne réponse pour le 3ème trou est : <strong>${bonneReponse3}</strong><br>`;
            compteRep -= 1
        }
        if (reponse4 !== bonneReponse4) {
            resultat.innerHTML += `La bonne réponse pour le 4ème trou est : <strong>${bonneReponse4}</strong><br>`;
            compteRep -= 1
        }
        if (reponse5 !== bonneReponse5) {
            resultat.innerHTML += `La bonne réponse pour le 5ème trou est : <strong>${bonneReponse5}</strong><br>`;
            compteRep -= 1
        }
        if (reponse6 !== bonneReponse6) {
            resultat.innerHTML += `La bonne réponse pour le 6ème trou est : <strong>${bonneReponse6}</strong><br>`;
            compteRep -= 1
        }
        if (reponse7 !== bonneReponse7) {
            resultat.innerHTML += `La bonne réponse pour le 7ème trou est : <strong>${bonneReponse7}</strong><br>`;
            compteRep -= 1
        }
        if (reponse8 !== bonneReponse8) {
            resultat.innerHTML += `La bonne réponse pour le 8ème trou est : <strong>${bonneReponse8}</strong><br>`;
            compteRep -= 1
        }
        if (reponse9 !== bonneReponse9) {
            resultat.innerHTML += `La bonne réponse pour le 9ème trou est : <strong>${bonneReponse9}</strong><br>`;
            compteRep -= 1
        }
        if (reponse10 !== bonneReponse10) {
            resultat.innerHTML += `La bonne réponse pour le dernier trou est : <strong>${bonneReponse10}</strong><br>`;
            compteRep -= 1
        }
        resultat.style.color = "#f44336";
    }
if (compteRep===10){
    total.innerHTML = `Félicitations! Tu as un score parfait! Passe à l'exercice suivant.`;
    total.style.color = "#E0115F";
} else {
    if (compteRep >= 5) {
    total.innerHTML = `Bravo! Tu as ${compteRep} bonnes réponses!`;
    total.style.color = "#4CAF50";
    } else {
    total.innerHTML = `Dommage! Tu as ${compteRep} bonnes réponses, continue tes efforts!`;
    total.style.color = "#FF5E4D";
    }
}
}
