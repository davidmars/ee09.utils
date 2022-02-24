/**
 * Renvoie une valeur aléatoire entre min et max
 * @return {Number}
 * @param {Number} min
 * @param {Number} max
 * @param {boolean} integer
 * @return {Number}
 */
export default function rand (min,max,integer=true) {
    let r = Math.random() * (max - min) + min;
    if(integer){
        r=Math.round(r);
    }
    return r;
}