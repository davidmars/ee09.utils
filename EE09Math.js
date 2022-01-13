export default class EE09Math{
    /**
     *
     * @param {Number} previous
     * @param {Number}target
     * @param {Number} factor
     * @return {number}
     */
    lerp(previous, target, factor){
        return (1 - factor) * previous + factor * target
    }
}