export default function InitTable(json) {
    // Create table
    let tab = createTable();

    let tabBody = tab.querySelector("#table-body");
    
    // Set rows in tab
    for (const STUDENT of json?.apprenants) {
        tabBody.appendChild(createRow(STUDENT));
    }

    return tab;
}

function createTable() {
    // Create table & caption
    const TABLE = document.createElement("table");
    const TABLE_CAPTION = document.createElement("caption");
    TABLE_CAPTION.textContent = "Liste des apprenants";

    // Create head and row head
    const T_HEAD = document.createElement("thead");
    const T_BODY = document.createElement("tbody");
    T_BODY.id = "table-body";
    const TR = document.createElement("tr");

    // Create column head
    const HEADERS = ["Nom", "Prénom", "Ville", ""];
    HEADERS.forEach(text => {
        const TH = document.createElement("th");
        TH.textContent = text;
        TR.append(TH);
    });

    // Set everything together
    TABLE.append(TABLE_CAPTION, T_HEAD, T_BODY);
    T_HEAD.appendChild(TR);

    return TABLE;
}

function createRow(student) {
    // Create row with id
    const TR = document.createElement("tr");
    TR.id = student.id;

    // Create cells
    const TD_NOM = document.createElement("td");
    const TD_PRENOM = document.createElement("td");
    const TD_VILLE = document.createElement("td");
    const TD_DETAIL = document.createElement("td");

    // Set content in cells
    TD_NOM.textContent = student.nom.toUpperCase() ?? "???";
    TD_PRENOM.textContent = student.prenom ?? "???";
    TD_VILLE.textContent = student.ville ?? "???";

    const TD_DETAIL_DIV = document.createElement("div");
    TD_DETAIL_DIV.classList.add("detail");
    TD_DETAIL_DIV.textContent = "Détail";
    TD_DETAIL.appendChild(TD_DETAIL_DIV);

    // Add cells in row
    TR.append(TD_NOM, TD_PRENOM, TD_VILLE, TD_DETAIL);
    return TR;
}
