export default function InitContext(json) {
    const PROMO_TITLE = document.getElementById("promo-name");
    const PROMO_DESC = document.getElementById("promo-desc");
    const PROMO_COUNT = document.getElementById("promo-count");
    const JSON_APR_COUNT = json.apprenants.length;

    PROMO_TITLE.textContent = `Promo ${json.nomPromo} du ${json.dateDebut} au ${json.dateFin}`;
    PROMO_DESC.textContent = json.description;
    PROMO_COUNT.textContent = `Nombre d'apprenants : ${JSON_APR_COUNT}`;
}