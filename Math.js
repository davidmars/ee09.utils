/**
 * @param {Number} previous
 * @param {Number} target
 * @param {Number} factor
 * @return {number}
 */
function lerp(previous, target, factor){
    return (1 - factor) * previous + factor * target;
}

/**
 * Renvoie une valeur en fonction d'un autre espace de valeur
 * @param {Number} input
 * @param {Number} maxInput
 * @param {Number} maxOutput
 * @param {Number} minInput
 * @param {Number} minOutput
 * @return {Number}
 */
function ratio (input,minInput, maxInput,minOutput, maxOutput) {
    let factor = (input - minInput) / (maxInput - minInput);
    return ((maxOutput - minOutput) * factor) + minOutput;
}

export {lerp,ratio};
