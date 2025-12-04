document.addEventListener("click", () => {
    const card = document.querySelector(".card");

    if (!card.classList.contains("show")) {
        card.classList.add("show");
    }
});
