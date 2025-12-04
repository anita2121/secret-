const letter = document.getElementById("letter");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

// Klik kertas → naik + buka popup
letter.addEventListener("click", () => {
    letter.classList.add("open");

    setTimeout(() => {
        popup.style.display = "flex";
    }, 450);
});

// Tutup popup
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    letter.classList.remove("open");
});

// Klik area luar popup → tutup
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        letter.classList.remove("open");
    }
});
