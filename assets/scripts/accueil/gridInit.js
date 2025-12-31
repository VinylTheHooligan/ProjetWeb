export default function InitGrid(json) {
    const MASTER_CONTAINER = document.createElement("div");
    MASTER_CONTAINER.classList.add("master");

    const CAPTION = document.createElement("h2");
    CAPTION.textContent = "Liste des apprenants";

    const DIV_GRID = document.createElement("div");
    DIV_GRID.classList.add("grid");
    LoopCard(json, DIV_GRID);

    MASTER_CONTAINER.append(CAPTION, DIV_GRID);

    return MASTER_CONTAINER;
}

function LoopCard(json, grid) {
    for (const apprenants of json.apprenants) {
        // Create the card
        const CARD_DIV = document.createElement("div");
        CARD_DIV.classList.add("card");
        CARD_DIV.id = apprenants.id;

        // Create and add the last name
        const CARD_NOM = document.createElement("p");
        CARD_NOM.classList.add("card-nom");
        CARD_NOM.textContent = apprenants.nom.toUpperCase();

        // Create and add the first name
        const CARD_PRENOM = document.createElement("p");
        CARD_PRENOM.classList.add("card-prenom");
        CARD_PRENOM.textContent = apprenants.prenom;
        
        // Create and add the about button
        const CARD_BTN_DIV = document.createElement("div");
        const CARD_DETAIL = document.createElement("button");
        CARD_DETAIL.classList.add("detail");
        CARD_DETAIL.textContent = "Détail";
        CARD_BTN_DIV.appendChild(CARD_DETAIL);

        // Set Card DIV and elements to DIV_GRID
        CARD_DIV.append(CARD_NOM, CARD_PRENOM, CARD_BTN_DIV);
        grid.appendChild(CARD_DIV);
    }
}