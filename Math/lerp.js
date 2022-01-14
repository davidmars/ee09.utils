/**
 * Un lerp :)
 * @param {Number} previous
 * @param {Number} target
 * @param {Number} factor
 * @return {number}
 */
export default function lerp(previous, target, factor){
    return (1 - factor) * previous + factor * target;
}