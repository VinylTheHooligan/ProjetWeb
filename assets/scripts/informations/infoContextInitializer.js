export default function InfoContextInitializer(json) {
    const PROMO_DATE = document.getElementById("promo-date");
    const PROMO_COUNT = document.getElementById("promo-count");
    const PROMO_DESC = document.getElementById("promo-desc");

    const DATE_DEBUT = json.dateDebut;
    const DATE_FIN = json.dateFin;
    const STUDENTS_COUNT = json.apprenants.length;
    const DESC = json.description;

    PROMO_DATE.textContent = `Formation du ${DATE_DEBUT} au ${DATE_FIN}`;
    PROMO_COUNT.textContent = `Nombre d'apprenants: ${STUDENTS_COUNT}`;
    PROMO_DESC.textContent = DESC;
}