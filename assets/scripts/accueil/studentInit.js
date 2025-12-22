import InitTable from "./tableInit.js";
import InitGrid from "./gridInit.js";

export default function StudentInit(json, main) {    
    const INPUT_LIST = document.getElementById("rad-list");

    let listDisplay = InitTable(json);
    let gridDisplay = InitGrid(json);

    main.replaceChildren(listDisplay);

    const INPUTS = document.querySelectorAll("input");

    INPUTS.forEach(input => {
        input.addEventListener("change", () => {
            if (INPUT_LIST.checked) {
                main.replaceChildren(listDisplay);            
            }
            else main.replaceChildren(gridDisplay);
        });
    });
}