export default function InitTable(json) {
    const tabBody = document.getElementById("table-body");
    tabBody.innerHTML = "";
    
    // Set rows in tab
    for (const student of json.apprenants) {
        tabBody.appendChild(createRow(student));
    }
}

function createRow(student) {
    // Create row with id
    const tr = document.createElement("tr");
    tr.id = student.id;

    // Create cells
    const tdNom = document.createElement("td");
    const tdPrenom = document.createElement("td");
    const tdVille = document.createElement("td");
    const tdDetail = document.createElement("td");

    // Set content in cells
    tdNom.textContent = student.nom.toUpperCase();
    tdPrenom.textContent = student.prenom;
    tdVille.textContent = student.ville;

    const tdDetailDiv = document.createElement("div");
    tdDetailDiv.classList.add("detail");
    tdDetail.textContent = "Détail";
    tdDetailDiv.appendChild(tdDetail);

    // Add cells in row
    tr.append(tdNom, tdPrenom, tdVille, tdDetailDiv);
    return tr;
}