/**
 * Renvoie une copie mélangée du tableau
 * @param {Array} arr
 * @returns {Array}
 */
export default function arrayShuffle(arr){
    return arr.sort(function(){return 0.5 - Math.random()})
}