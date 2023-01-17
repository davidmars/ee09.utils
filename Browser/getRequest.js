const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
/**
 * Renvoie un paramètre de la query string.
 * @param {string} queryString la query string recherchée
 * @param {string} ifNull Valeur à renvoyer si null
 * @return {string|null}
 */
export default function (queryString,ifNull){
    let r=params[queryString];
    if(r){
        return r;
    }
    return ifNull;
}