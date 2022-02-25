import arrayShuffle from "./arrayShuffle.js";

/**
 * Renvoie une entrée aléatoire du tableau
 * @param {Array} arr
 * @return {null|*}
 */
export default function randomEntry(arr){
    if(arr.length>0){
        return arrayShuffle(arr)[0];
    }
    return null;
}