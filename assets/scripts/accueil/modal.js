export default function InitModal(currentTheme) {

    const DRAG_ICON = currentTheme === "sombre" ? "drag-white.svg" : "drag-black.svg";

    // Create main modal wrapper
    const MODAL = document.createElement("div");
    MODAL.id = "modal";
    MODAL.classList.add("modal-hidden");

    // Create close button
    const CLOSE_BTN = document.createElement("span");
    CLOSE_BTN.textContent = 'X';

    // Create drag button
    const DRAG_BTN = document.createElement("img");
    DRAG_BTN.src = `./assets/images/icons/${DRAG_ICON}`;
    DRAG_BTN.id = "drag";

    // Create container for avatar + info
    const MODAL_CONTAINER = document.createElement("div");
    MODAL_CONTAINER.id = "modal-container";

    // Create avatar img
    const IMG = document.createElement("img");
    IMG.alt = "Image d'avatar";

    // Create info section (Nom / Prénom / Ville)
    const MODAL_INFO = document.createElement("div");
    MODAL_INFO.id = "modal-info";

    // Create each info line
    const DIV_NOM = createInfoLine("Nom", "modal-nom");
    const DIV_PRENOM = createInfoLine("Prénom", "modal-prenom");
    const DIV_VILLE = createInfoLine("Ville", "modal-ville");

    // Add info lines to info section
    MODAL_INFO.append(DIV_NOM, DIV_PRENOM, DIV_VILLE);

    // Add avatar + info section inside main container
    MODAL_CONTAINER.append(IMG, MODAL_INFO);

    // Creates the wrapper for the anecdote
    const ANECDOTE_WRAPPER = document.createElement("div");

    // Creates the title of the anecdote section
    const ANECDOTE_TITLE = document.createElement("p");
    ANECDOTE_TITLE.textContent = "Anecdote sur l'apprenant :";

    // Creates the anecdote container
    const ANECDOTE_CONTAINER = document.createElement("div");
    ANECDOTE_CONTAINER.id = "modal-container-anecdote";
    
    // Creates the text of the anecdote (empty at first)
    const ANECDOTE_TEXT = document.createElement("p");
    ANECDOTE_TEXT.id = "modal-anecdote";

    // Add the text to the anecdote container
    ANECDOTE_CONTAINER.appendChild(ANECDOTE_TEXT);

    // Adds the title and anecdote container to the wrapper
    ANECDOTE_WRAPPER.append(ANECDOTE_TITLE, ANECDOTE_CONTAINER);

    // Assemble all elements in the modal
    MODAL.append(CLOSE_BTN, MODAL_CONTAINER, ANECDOTE_WRAPPER);

    CLOSE_BTN.addEventListener("click", () => {
        MODAL.classList.toggle("modal-active");
        MODAL.classList.toggle("modal-hidden");
    });

    return MODAL;
}

function createInfoLine(label, idValue) {

    const WRAPPER = document.createElement("div");
    const LABEL = document.createElement("p");
    LABEL.textContent = label;

    const VALUE = document.createElement("p");
    VALUE.id = idValue;

    WRAPPER.append(LABEL, VALUE);
    return WRAPPER;
}

export function UpdateModal(json, input) {
    const MODAL = document.getElementById("modal");
    const IMG = MODAL.querySelector("img");

    // Add "modal-active" class if it doesn't contain it
    if (!MODAL.classList.contains("modal-active")) {
        MODAL.classList.toggle("modal-active");
        MODAL.classList.toggle("modal-hidden");
    }

    const id = input.parentNode.parentNode.id;
    const apprenant = json.apprenants[id - 1];
    
    const fields = {
        "modal-nom": apprenant.nom ?? "???",
        "modal-prenom": apprenant.prenom ?? "???",
        "modal-ville": apprenant.ville ?? "???",
        "modal-anecdote": apprenant.anecdotes ?? "???"
    };

    for (const [id, value] of Object.entries(fields)) {
        document.getElementById(id).textContent = value || "";
    }

    IMG.src = apprenant.avatar 
        ? IMG.src = `./assets/images/avatar/${apprenant.avatar}`
        : IMG.src = "./assets/images/avatar/avatar.png";
}