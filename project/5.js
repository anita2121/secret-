let step = 0;
let paperShown = false; // WAJIB ADA

const paper = document.getElementById("paper");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const bgm = document.getElementById("bgm"); // AMBIL AUDIO

document.addEventListener("click", () => {
    step++;

    // Klik pertama: tarik kertas + mulai musik
    if (!paperShown) {
        paper.classList.add("show");
        paperShown = true;

        // mulai musik setelah klik pertama
        try { 
            bgm.play(); 
        } catch (e) {}

        return;
    }

    // Klik kedua → popup muncul
    if (step === 2) {
        popup.style.display = "flex";
        return;
    }
});

// Tombol close popup
closeBtn.addEventListener("click", (e) => {
    popup.style.display = "none";
    e.stopPropagation();
});
