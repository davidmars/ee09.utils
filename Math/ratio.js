/**
 * Renvoie une valeur en fonction d'un autre espace de valeur
 * @param {Number} input
 * @param {Number} maxInput
 * @param {Number} maxOutput
 * @param {Number} minInput
 * @param {Number} minOutput
 * @return {Number}
 */
export default function ratio (input,minInput, maxInput,minOutput, maxOutput) {
    let factor = (input - minInput) / (maxInput - minInput);
    return ((maxOutput - minOutput) * factor) + minOutput;
}