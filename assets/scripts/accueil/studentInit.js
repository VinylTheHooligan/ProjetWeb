import InitTable from "./tableInit.js";
import InitGrid from "./gridInit.js";
import InitModal, { UpdateModal } from "./modal.js";

export default function StudentInit(json, main) {    
    const INPUT_LIST = document.getElementById("rad-list");

    let listDisplay = InitTable(json);
    let gridDisplay = InitGrid(json);
    let modalDisplay = InitModal();

    main.replaceChildren(listDisplay, modalDisplay);

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener("change", UpdateDisplay);
    });

    main.addEventListener("click", (e) => {
        if (e.target.classList.contains("detail")) {
            UpdateModal(json, e.target);
        }
    });

    function UpdateDisplay() {
        const display = INPUT_LIST.checked ? listDisplay : gridDisplay;
        main.replaceChildren(display, modalDisplay);
    }

    UpdateDisplay();
}