const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");
const links = document.querySelectorAll("#navigation a");

menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✖" : "☰";

    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
    );
});

links.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute(
            "aria-label",
            "Abrir menu de navegação"
        );
    });

});

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        navigation.classList.contains("open")
    ) {

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute(
            "aria-label",
            "Abrir menu de navegação"
        );

        menuButton.focus();
    }
});

const forecast = document.querySelector("#weather-forecast");
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-23.1&lon=-45.7&appid=${apiKey}&units=metric&lang=pt_br`;