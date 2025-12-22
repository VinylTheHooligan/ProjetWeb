// export student json from promo.json

export default async function DataFetch() {

    return fetch("./promo.json")
        .then(res => res.json())
        .catch(e => console.error(e.message));
}