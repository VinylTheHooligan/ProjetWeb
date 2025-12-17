import InitTable from "./tableInit.js";
import DataFetch from "./promoData.js";  

async function start() {
    SetTable();
}

async function SetTable() {
    const json = await DataFetch();
    InitTable(json);
}

start();