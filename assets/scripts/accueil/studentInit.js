import InitTable from "./tableInit.js";
import InitGrid from "./gridInit.js";
import InitModal, { UpdateModal } from "./modal.js";

export default function StudentInit(json) {
    const MAIN = document.getElementById("students-list");
    const INPUT_LIST = document.getElementById("rad-list");

    // load both list and grid display + modal
    let listDisplay = InitTable(json);
    let gridDisplay = InitGrid(json);

    let modalDisplay = InitModal();

    MAIN.replaceChildren(listDisplay, modalDisplay);

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener("change", UpdateDisplay);
    });

    MAIN.addEventListener("click", (e) => {
        if (e.target.classList.contains("detail")) {
            UpdateModal(json, e.target);
        }
    });

    function UpdateDisplay() {
        const display = INPUT_LIST.checked ? listDisplay : gridDisplay;
        MAIN.replaceChildren(display, modalDisplay);
    }

    UpdateDisplay();
}