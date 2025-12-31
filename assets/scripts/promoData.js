// export student json from promo.json

export default async function DataFetch() {
    try {
        const RESPONSE = await fetch("./promo.json");

        // HTTP status
        if (!RESPONSE.ok) throw new Error(`Erreur serveur : ${RESPONSE.status} ${RESPONSE.statusText}`);

        const DATA = await RESPONSE.json();

        // check if apprenants is valid (array)
        if (!DATA.apprenants || !Array.isArray(DATA.apprenants)) throw new Error("Format JSON invalide: 'apprenants' manquant ou incorrect.");

        return DATA;
    } catch (error) {
        console.error("Erreur JSON - ", error);

        DisplayError(error.message);
        return null;
    }
}


function DisplayError(message) {
    const MAIN = document.getElementById("students-list");
    MAIN.replaceChildren(); // vidage du main

    const ERROR_DIV = document.createElement("div");
    const TITLE = document.createElement("h2");
    const TXT = document.createElement("p");
    const BTN = document.createElement("button");

    TITLE.textContent = "Erreur de chargement";
    TXT.textContent = message;
    BTN.textContent = "Recharger";
    
    BTN.addEventListener("click", () => location.reload());
    ERROR_DIV.classList.add("error-mesage");

    ERROR_DIV.append(TITLE, TXT, BTN);
    MAIN.appendChild(ERROR_DIV);
}