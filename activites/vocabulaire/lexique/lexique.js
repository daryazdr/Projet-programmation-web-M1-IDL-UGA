const PAGE_ID = "Lexique";
let scorePage = 0;
let totalZones = 0;

const draggableImages = document.querySelectorAll(".draggable-img");

draggableImages.forEach(img => {
  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("word", img.dataset.word);
    e.dataTransfer.setData("imgId", img.id);
  });
});

const dropzones = document.querySelectorAll(".dropzone, .bg-target");


dropzones.forEach(zone => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();  
    zone.style.background = "rgba(180, 220, 255, 0.4)";
  });

  zone.addEventListener("dragleave", () => {
    zone.style.background = "";  
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    if (zone.querySelector("img")) {
      return;
    }

    const word = e.dataTransfer.getData("word");
    const imgId = e.dataTransfer.getData("imgId");
    const img = document.getElementById(imgId);

    zone.appendChild(img);

    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";

    zone.classList.remove("correct", "wrong");
    if (zone.dataset.word === word) {
      zone.classList.add("correct");
    } else {
      zone.classList.add("wrong");
    }
    calculerScoreFinal();
  });

});
function calculerScoreFinal() {
  const score = document.querySelectorAll(".dropzone.correct").length;
  localStorage.setItem("score_Lexique", score);
}
