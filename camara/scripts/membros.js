const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");
const links = document.querySelectorAll("#navigation a");

function fecharMenu() {
    navigation.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu de navegação");
}

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✖" : "☰";
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
});

links.forEach(link => {
    link.addEventListener("click", () => {
        fecharMenu();
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("open")) {
        fecharMenu();
        menuButton.focus(); 
    }
});

const forecast = document.querySelector("#weather-forecast");
const apiKey = "e7d9532c6269460b997b5169d32c78c5";
const lat = "-23.1";
const lon = "-45.7";

const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

const forecastElement = document.querySelector("#weather-forecast");

async function buscarClima() {
  try {
    const resposta = await fetch(urlClima);
    
    if (!resposta.ok) {
      throw new Error(`Erro de rede: ${resposta.status}`);
    }

    const dados = await resposta.json();
    
    exibirClima(dados);
  } catch (erro) {
    console.error("Erro ao carregar o clima:", erro);
    forecastElement.innerHTML = `<p>Não foi possível carregar a previsão no momento.</p>`;
  }
}

function exibirClima(dados) {

  const temperatura = Math.round(dados.main.temp);
  const descricao = dados.weather[0].description;
  const iconeCodigo = dados.weather[0].icon;
  const iconeUrl = `https://openweathermap.org/img/wn/${iconeCodigo}@2x.png`;

  forecastElement.innerHTML = `
    <div class="weather-info">
      <img src="${iconeUrl}" alt="${descricao}">
      <p><strong>${temperatura}°C</strong></p>
      <p style="text-transform: capitalize;">${descricao}</p>
    </div>
  `;
}

buscarClima();