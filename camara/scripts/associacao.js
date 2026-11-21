document.addEventListener("DOMContentLoaded", () => {

    const currentYear = document.querySelector("#currentYear");

    if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
    }

    const timestampField = document.querySelector("#timestamp");

    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    function setupModal(openId, closeId, modalId) {

        const openBtn = document.querySelector(openId);
        const closeBtn = document.querySelector(closeId);
        const modal = document.querySelector(modalId);

        if (!openBtn || !closeBtn || !modal) {
            return;
        }

        openBtn.addEventListener("click", () => {
            modal.showModal();
        });

        closeBtn.addEventListener("click", () => {
            modal.close();
        });
    }

    setupModal("#npBtn", "#closeNp", "#npModal");
    setupModal("#bronzeBtn", "#closeBronze", "#bronzeModal");
    setupModal("#silverBtn", "#closeSilver", "#silverModal");
    setupModal("#goldBtn", "#closeGold", "#goldModal");

    const form = document.querySelector("form");
    const formMessage = document.querySelector("#formMessage");

    if (!form || !formMessage) {
        return;
    }

    form.addEventListener("submit", (event) => {

        formMessage.textContent = "";

        const firstName =
            document.querySelector("#fname").value.trim();

        const lastName =
            document.querySelector("#lname").value.trim();

        const phone =
            document.querySelector("#phone").value.trim();

        const organization =
            document.querySelector("#organization").value.trim();

        const membership =
            document.querySelector("#membership").value;

        if (firstName.length < 2) {

            event.preventDefault();

            formMessage.textContent =
                "Informe um nome válido.";

            return;
        }

        if (lastName.length < 2) {

            event.preventDefault();

            formMessage.textContent =
                "Informe um sobrenome válido.";

            return;
        }

        if (phone.length < 8) {

            event.preventDefault();

            formMessage.textContent =
                "Informe um telefone válido.";

            return;
        }

        if (organization.length < 2) {

            event.preventDefault();

            formMessage.textContent =
                "Informe a empresa ou organização.";

            return;
        }

        if (membership === "") {

            event.preventDefault();

            formMessage.textContent =
                "Selecione um nível de associação.";
        }

    });

});

const lastModified = document.querySelector("#lastModified");

if (lastModified) {

    const modifiedDate = new Date(document.lastModified);

    const formattedDate = modifiedDate.toLocaleDateString(
        "pt-BR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

    const formattedTime = modifiedDate.toLocaleTimeString(
        "pt-BR",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

    lastModified.textContent =
        `${formattedDate} às ${formattedTime}`;
}