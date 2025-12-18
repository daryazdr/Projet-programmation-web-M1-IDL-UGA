const containers = document.querySelectorAll(".container");

containers.forEach(container => {
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("up")) {
            const item = e.target.parentElement;
            const prev = item.previousElementSibling;
            if (prev) container.insertBefore(item, prev);
        }

        if (e.target.classList.contains("down")) {
            const item = e.target.parentElement;
            const next = item.nextElementSibling;
            if (next) container.insertBefore(next, item);
        }
    });

    var scoreLecture = 0 // à mettre avant ton calcul de score et à actualiser avec la nouvelle valeur, puis:
    // Stockage dans sessionStorage
    const pageId = "Lecture";
    localStorage.setItem(`score_${pageId}`, scoreLecture);
});
