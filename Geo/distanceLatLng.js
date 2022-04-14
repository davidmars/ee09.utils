import deg2rad from "../Math/deg2rad.js";
/**
 * Renvoie la distance en mètre entre les deux coordonnées
 * @param {Number} lat1
 * @param {Number} lng1
 * @param {Number} lat2
 * @param {Number} lng2
 * @return {number} la distance en mètre entre les deux coordonnées
 */
export default function distanceLatLng(lat1,lng1,lat2,lng2){

    let R = 6371; // km
    let dLat = deg2rad(lat2-lat1);
    let dLon = deg2rad(lng2-lng1);
    lat1 = deg2rad(lat1);
    lat2 = deg2rad(lat2);

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c;
    return d *1000;
}