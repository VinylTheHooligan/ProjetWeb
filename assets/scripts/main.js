import DataFetch from "./promoData.js";
import { StorageInit, ThemeInit } from "./storageManager.js";
import StudentInit from "./accueil/studentInit.js";
import InfoContextInitializer from "./informations/infoContextInitializer.js";

const JSON = await GetStudentsJSON();

// retrieves the contents of promo.json (students)
async function GetStudentsJSON() {
    return await DataFetch();
}

function start() {
    const CURRENT_PAGE = document.body.getAttribute("data-page");

    // Set the promo name to the H1 in header
    const PROMO_TITLE = document.getElementById("promo-name");
    PROMO_TITLE.textContent = `Promo ${JSON.nomPromo}`;
    
    PageSelector(CURRENT_PAGE);
}

// initiates instructions for the right page
function PageSelector(page) {
    switch (page) {
        case "home":
            StudentInit(JSON); // run first
            StorageInit();
            break;

        case "pref":
            ThemeInit();
            break;

        case "info":
            InfoContextInitializer(JSON);
            ThemeInit();
            break;
    }
}

// start if only JSON is valid
if (JSON) start();