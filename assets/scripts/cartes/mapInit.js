export default function MapInit(json) {
    const APPRENANTS = json.apprenants;

    let map = L.map('map').setView([46.75, 2.35], 5);
    let markers = [];

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    APPRENANTS.forEach(apprenant => {
        const LAT = apprenant.coordonnees.latitude;
        const LON = apprenant.coordonnees.longitude;

        const MARKER = L.marker([LAT, LON]).addTo(map)
        
        markers.push(MARKER);
        MARKER.bindPopup(`<strong>${apprenant.nom.toUpperCase()}</strong> ${apprenant.prenom}<br><strong>Ville :</strong> ${apprenant.ville}`);
    });
}