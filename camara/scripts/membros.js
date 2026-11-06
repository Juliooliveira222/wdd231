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

const forecastElement = document.querySelector("#weather-forecast");

const apiKey = "e7d9532c6269460b997b5169d32c78c5";
const lat = -23.10;
const lon = -45.70;

const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

async function buscarClima() {
    try {

        const resposta = await fetch(urlClima);

        if (!resposta.ok) {
            throw new Error("Erro ao buscar previsão");
        }

        const dados = await resposta.json();

        mostrarClima(dados);

    } catch (erro) {

        forecastElement.textContent =
            "Não foi possível carregar a previsão.";

        console.error(erro);
    }
}

function mostrarClima(dados) {

    const temperatura = Math.round(dados.main.temp);
    const descricao = dados.weather[0].description;
    const icone = dados.weather[0].icon;

    forecastElement.innerHTML = `
        <div class="weather-info">
            <img
                src="https://openweathermap.org/img/wn/${icone}@2x.png"
                alt="${descricao}"
            >
            <p><strong>${temperatura}°C</strong></p>
            <p>${descricao}</p>
        </div>
    `;
}

if (forecastElement) {
    buscarClima();
}