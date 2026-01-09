// for home page, set the display type according to localstorage value
export function DisplayInit() {
    const DISPLAY_INIT = GetOrSetDefault("displayType", "list");
    const LIST_RADIO = document.getElementById("rad-list");
    const GRID_RADIO = document.getElementById("rad-grid");

    if (DISPLAY_INIT === "grid" && GRID_RADIO) {
        GRID_RADIO.click();
    } else if (LIST_RADIO) {
        LIST_RADIO.click();
    }
}

// Initializes the preferences page
export function PreferenceInit() {
    const SELECT_THEME = document.getElementById("theme");
    const SUBMIT = document.getElementById("settings-form");

    const CURRENT_THEME = GetLocalStorageKey("theme");
    let currentDisplay = GetLocalStorageKey("displayType");
    if (!currentDisplay) GetOrSetDefault("displayType", "list");

    const RADIO_LIST = document.getElementById("radio-list");
    const RADIO_GRID = document.getElementById("radio-grid");
    const RADIOS = [RADIO_LIST, RADIO_GRID];

    let currentRadioChecked;

    if (currentDisplay && currentDisplay === "list") {
        RADIO_LIST.checked = true;
        currentRadioChecked = "list";
    } else if (currentDisplay && currentDisplay === "grid") {
        RADIO_GRID.checked = true;
        currentRadioChecked = "grid";
    }

    SELECT_THEME.value = CURRENT_THEME ?? "light";

    RADIOS.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked && radio === RADIO_LIST) currentRadioChecked = "list";
            else if (radio.checked && radio === RADIO_GRID) currentRadioChecked = "grid";
        });
    });

    SUBMIT.addEventListener("submit", () => {
        SetLocalStorageKey("theme", SELECT_THEME.value);
        SetLocalStorageKey("displayType", currentRadioChecked);
    });
    
}

// search in localstorage, return its content, and set a default if nothing is found
function GetOrSetDefault(key, defaultValue) {
    let value = GetLocalStorageKey(key);
    if (value === null || value === undefined) {
        SetLocalStorageKey(key, defaultValue); // set theme/list by default
        value = defaultValue;
    }
    return value;
}

function GetLocalStorageKey(key) {
    const ALLOWED = [
        "theme",
        "displayType"
    ];

    if (ALLOWED.includes(key)) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.warn(`Erreur dans LocalStorage : ${error.message}`);
        }
    }
    return null;
}

function SetLocalStorageKey(key, value) {
    const ALLOWED = {
        theme: ["light", "dark"],
        displayType: ["list", "grid"]
    };

    if (ALLOWED[key]?.includes(value)) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.warn(`Erreur dans LocalStorage : ${error.message}`);
        }
    } else {
        console.warn(`Valeur "${value}" non autorisée pour "${key}".`);
        localStorage.setItem(key, key[0]);
    }
}
