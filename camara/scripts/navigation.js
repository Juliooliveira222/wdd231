const menuBtn =
    document.querySelector("#menu-button");

const menu =
    document.querySelector("#navigation");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("open");

        const aberto =
            menu.classList.contains("open");

        menuBtn.setAttribute(
            "aria-expanded",
            aberto
        );

        menuBtn.textContent =
            aberto ? "✖" : "☰";
    });
}