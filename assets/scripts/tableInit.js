export default function InitTable(json) {

    const tabBody = document.getElementById("table-body");
    tabBody.innerHTML = "";
    
    for (const student of json.apprenants) {

        // Create row with id
        const tr = document.createElement("tr");
        tr.setAttribute("id", student.id);

        // Create cells
        const tdLName = document.createElement("td");
        const tdFName = document.createElement("td");
        const tdTown = document.createElement("td");

        // Set content in cells
        tdLName.textContent = student.nom.toUpperCase();
        tdFName.textContent = student.prenom;
        tdTown.textContent = student.ville;

        // Add cells in row
        tr.append(tdLName, tdFName, tdTown);

        // Set rows in tab
        tabBody.appendChild(tr);
    }
}