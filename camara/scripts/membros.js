
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}

const url = "./dados/membros.json";
const cards = document.querySelector("#members");
const searchInput = document.querySelector("#searchInput");

let allMembers = [];

const membershipLevels = {
    1: "Membro",
    2: "Prata",
    3: "Ouro",
    4: "Diamante"
};

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();

        allMembers = data;

        displayMembers(allMembers);

    } catch (error) {
        console.error("Erro ao carregar membros:", error);

        cards.innerHTML = `
            <p>Não foi possível carregar os dados das empresas.</p>
        `;
    }
}

function displayMembers(members) {

    cards.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("member-card");

       card.innerHTML = `
            <img
            src="${member.image}"
            alt="${member.name}"
            class="company-logo"
            loading="lazy">

        <div>
        <h3>${member.name}</h3>
        </div>

        <div>
        ${member.address}
        </div>

        <div>
        ${member.phone}
        </div>

        <div>
        <a href="${member.website}" target="_blank">
            Website
        </a>
    </div>
`;

        cards.appendChild(card);
    });
}

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const termo = searchInput.value.toLowerCase();

        const filtrados = allMembers.filter(member =>
            member.name.toLowerCase().includes(termo)
        );

        displayMembers(filtrados);
    });
}


const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

if (gridBtn && listBtn && cards) {

    gridBtn.addEventListener("click", () => {

        cards.classList.add("grid");
        cards.classList.remove("list");
    });

   listBtn.addEventListener("click", () => {
    cards.classList.remove("grid");
    cards.classList.add("list");
    });
}

getMembers();