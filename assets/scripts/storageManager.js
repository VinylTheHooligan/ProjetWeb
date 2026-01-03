// for home page
export function StorageInit() {
    ThemeInit();
    DisplayInit();
}

// triggers the theme initialization 
export function ThemeInit() {
    const THEME = GetOrSetDefault("theme", "light");
    UpdateTheme(THEME);
}

function DisplayInit() {
    const DISPLAY_INIT = GetOrSetDefault("displayType", "list");
    UpdateDisplay(DISPLAY_INIT);
}

function UpdateTheme(currentTheme) {
    const THEMES = {
        light: {
            "--back-color": "#f7f7f7",
            "--med-color": "#e0e0e0", 
            "--light-med-color": "#f0f0f0",
            "--front-color": "#1a1a1a"
        },
        dark: {
            "--back-color": "#0f1115",
            "--med-color": "#134a7f",
            "--light-med-color": "#1a1f26", 
            "--front-color": "#e6e6e6"
        }
    }

    const SELECTED_THEME = THEMES[currentTheme] || THEMES.light;

    Object.entries(SELECTED_THEME).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });
}

function UpdateDisplay(displayType) {
    const LIST_RADIO = document.getElementById("rad-list");
    const GRID_RADIO = document.getElementById("rad-grid");

    if (displayType === "grid" && GRID_RADIO) {
        GRID_RADIO.checked = true;
    } else if (LIST_RADIO) {
        LIST_RADIO.checked = true;
    }
}

// search in localstorage, return its content, and set a default if nothing is found
function GetOrSetDefault(key, defaultValue) {
    try {
        let value = localStorage.getItem(key);
        if (!value) {
            localStorage.setItem(key, defaultValue); // set theme/list by default
            value = defaultValue;
        }
        return value;
    } catch (error) {
        console.warn(`Erreur dans LocalStorage : ${error.message}`);
        return defaultValue;
    }
}