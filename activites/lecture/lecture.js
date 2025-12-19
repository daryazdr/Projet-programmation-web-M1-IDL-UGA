let lectureScore = 0;

/* Deplacement des etiquettes */

document.querySelectorAll(".container").forEach(container => {
    container.addEventListener("click", (e) => {

        if (!e.target.classList.contains("up") &&
            !e.target.classList.contains("down")) return;

        const item = e.target.closest(".item");
        if (!item) return;

        if (e.target.classList.contains("up")) {
            const prev = item.previousElementSibling;
            if (prev && prev.classList.contains("item")) {
                container.insertBefore(item, prev);
            }
        }

        if (e.target.classList.contains("down")) {
            const next = item.nextElementSibling;
            if (next && next.classList.contains("item")) {
                container.insertBefore(next, item);
            }
        }
    });
});

/* Ordres corrects */

const correctOrders = [
    [
        "L'ours blanc est aussi appelé l'ours polaire.",
        "Il vit au pôle Nord.",
        "C'est un animal très solitaire.",
        "À l'âge adulte, il mesure de deux à trois mètres et il pèse huit cents kilos.",
        "Il peut parcourir jusqu'à cent kilomètres sans se reposer !"
    ],
    [
        "Pour préparer des petites pizzas, il te faut : du pain de mie, de la sauce tomate, des olives et du fromage râpé.",
        "D'abord, étale la sauce tomate sur une tranche de pain de mie.",
        "Coupe la tartine en quatre puis ajoute le fromage râpé et une demi olive.",
        "Fais cuire cinq minutes au four.",
        "Tu feras plaisir à tes amis."
    ],
    [
        "Voici la vie de mon voisin.",
        "Le matin, il se lève, s'étire et va vite boire son café.",
        "Il sort ensuite dans le jardin pour nourrir son chien et part travailler.",
        "Quand il a terminé sa journée de travail, il aime jouer aux cartes avec ses amis ou regarder la télévision.",
        "Mais ce que préfère mon voisin, c'est faire une sieste dans son hamac sous les arbres de son jardin."
    ]
];

/* Verification + feedback */

document.querySelectorAll(".check").forEach((button) => {
    button.addEventListener("click", () => {
        const container = button.closest(".container");
        const phrases = container.querySelectorAll(".item p");

        // Normalise les espaces multiples ET trim
        const userOrder = Array.from(phrases).map(p =>
            p.textContent.trim().replace(/\s+/g, ' ')
        );

        const feedback = container.querySelector(".feedback");
        const exIndex = parseInt(button.dataset.exercise, 10);

        // Normalise aussi l'ordre correct pour la comparaison
        const correctOrder = correctOrders[exIndex].map(s => s.trim().replace(/\s+/g, ' '));

        // Debug: affiche dans la console pour voir ce qui est comparé
        console.log("Exercice", exIndex + 1);
        console.log("User order:", userOrder);
        console.log("Correct order:", correctOrder);
        console.log("Match:", JSON.stringify(userOrder) === JSON.stringify(correctOrder));

        if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
            feedback.textContent = "Bravo ! L'ordre est correct.";
            feedback.style.color = "green";

            if (button.dataset.valid !== "true") {
                lectureScore++;
                button.dataset.valid = "true";
            }
        } else {
            feedback.textContent = "Ce n'est pas encore le bon ordre. Réessaie !";
            feedback.style.color = "red";
            button.dataset.valid = "false";
        }

        updateBilanLecture();
    });
});


/* Bilan de l'activite */

function updateBilanLecture() {
    const total = document.querySelectorAll(".check").length;
    document.getElementById("bilan-lecture").textContent =
        `Lecture : ${lectureScore} / ${total} points`;
}

// Initialise le bilan au chargement
updateBilanLecture();

// Pour stocker le score et l'ajouter aux autres pages sur l'accueil
scoreLecture = lectureScore
const pageId = "Lecture";

localStorage.setItem(`score_${pageId}`, scoreLecture);