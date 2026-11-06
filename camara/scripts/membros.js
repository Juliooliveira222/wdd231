const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");
const links = document.querySelectorAll("#navigation a");

function fecharMenu() {
    navigation.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute(
        "aria-label",
        "Abrir menu de navegação"
    );
}

menuButton.addEventListener("click", () => {

    const menuAberto = navigation.classList.toggle("open");

    menuButton.textContent = menuAberto ? "✖" : "☰";

    menuButton.setAttribute(
        "aria-expanded",
        menuAberto
    );

    menuButton.setAttribute(
        "aria-label",
        menuAberto
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
    );

});

links.forEach(link => {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        navigation.classList.contains("open")
    ) {
        fecharMenu();
        menuButton.focus();
    }

});