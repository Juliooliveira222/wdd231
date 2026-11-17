const forecastElement =
    document.querySelector("#weather-forecast");

const apiKey = "e7d9532c6269460b997b5169d32c78c5";
const lat = -23.10;
const lon = -45.70;

const urlClima =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

async function buscarClima() {
    try {

        const resposta = await fetch(urlClima);

        if (!resposta.ok) {
            throw new Error(
                `Erro HTTP ${resposta.status}`
            );
        }

        const dados = await resposta.json();

        mostrarClima(dados);

    } catch (erro) {

        console.error(
            "Erro ao carregar previsão:",
            erro
        );

        forecastElement.textContent =
            "Não foi possível carregar a previsão.";
    }
}

function mostrarClima(dados) {

    if (!forecastElement) return;

    const previsoes =
        dados.list
            .filter(item =>
                item.dt_txt.includes("12:00:00")
            )
            .slice(0, 3);

    forecastElement.innerHTML = "";

    previsoes.forEach(previsao => {

        const data =
            new Date(previsao.dt_txt);


        const dia = data.toLocaleDateString("pt-BR", {
            weekday: "long"
            });


        const temperatura =
            Math.round(
                previsao.main.temp
            );

        const descricao =
            previsao.weather[0].description;

        const icone =
            previsao.weather[0].icon;

        forecastElement.innerHTML += `
            <div class="weather-day">

                <h3>${dia}</h3>

                <img
                    src="https://openweathermap.org/img/wn/${icone}@2x.png"
                    alt="${descricao}"
                >

                <p>
                    <strong>${temperatura}°C</strong>
                </p>

                <p>${descricao}</p>

            </div>
        `;
    });
}

if (forecastElement) {
    buscarClima();
}