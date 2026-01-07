import InitTable from "./tableInit.js";
import InitGrid from "./gridInit.js";
import { InitModal, UpdateModal } from "./modal.js";

export default function StudentInit(json) {
    const MAIN = document.getElementById("students-list");
    const INPUT_LIST = document.getElementById("rad-list");

    // load both list and grid display + modal
    const LIST_DISPLAY = InitTable(json);
    const GRID_DISPLAY = InitGrid(json);

    const MODAL_DISPLAY = InitModal();

    MAIN.replaceChildren(LIST_DISPLAY, MODAL_DISPLAY);

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener("click", UpdateDisplay);
    });

    MAIN.addEventListener("click", (e) => {
        if (e.target.classList.contains("detail")) {
            UpdateModal(json, e.target);
        }
    });

    function UpdateDisplay() {
        const DISPLAY = INPUT_LIST.checked ? LIST_DISPLAY : GRID_DISPLAY;
        MAIN.replaceChildren(DISPLAY, MODAL_DISPLAY);
    }

    UpdateDisplay();
}