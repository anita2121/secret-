let step = 0;

const paper = document.getElementById("paper");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

document.addEventListener("click", () => {
    step++;

        // Klik pertama
    if (!paperShown) {
        paper.classList.add("show");
        paperShown = true;

        // mulai musik setelah klik pertama
        try { bgm.play(); } catch(e) {}

        return;
    }


    // Klik kedua → popup muncul
    if (step === 2) {
        popup.style.display = "flex";
        return;
    }
});

// Tombol close
closeBtn.addEventListener("click", (e) => {
    popup.style.display = "none";
    e.stopPropagation(); // Biar tidak memicu klik global
});
