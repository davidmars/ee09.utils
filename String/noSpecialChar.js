/**
 * Renvoie le textes sans accents
 * @param {string} str
 * @return {string}
 */
export default function noSpecialChar(str){
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "")
}