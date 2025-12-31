import DataFetch from "./promoData.js";
import InitContext from "./contentInitializer.js";
import StudentInit from "./accueil/studentInit.js";

const JSON = await GetStudentsJSON();

// retrieves the contents of promo.json (students)
async function GetStudentsJSON() {
    return await DataFetch();
}

function start() {
    InitContext(JSON);
    HomePageStudents();
}

// initializes students according to choice (list or grid)
function HomePageStudents() {
    const MAIN = document.getElementById("students-list");
    if (!MAIN) return console.log("studentInit.js not executed. Home page not selected");

    StudentInit(JSON, MAIN);
}

// start if only JSON is valid
if (JSON) start();