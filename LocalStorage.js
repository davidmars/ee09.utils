export default class LocalStorage{
    /**
     * Permet de sauvegarder dans le localstorage des variables plus strictes qu'en natif
     */
    constructor(prefix) {
        this.prefix=prefix;
    }

    /**
     * Renvoie un booleen
     * @param prop
     * @param defaultVal
     * @return {boolean|*}
     */
    getBool(prop,defaultVal){
        let v=localStorage.getItem(`${this.prefix}_${prop}`);
        if(v===null){
            return defaultVal;
        }
        return v === "1";

    }
    setBool(prop,val){
        localStorage.setItem(`${this.prefix}_${prop}`,val===true?'1':'0');
        return val;
    }

    /**
     * Renvoie une string
     * @param {string} prop
     * @param {string} defaultVal
     * @return {string}
     */
    getString(prop,defaultVal=""){
        let v=localStorage.getItem(`${this.prefix}_${prop}`);
        if(v===null || v==="undefined"){
            return defaultVal;
        }
        return String(v);
    }

    /**
     * Set une string
     * @param {string} prop
     * @param {string} val
     * @return {string}
     */
    setString(prop,val){
        localStorage.setItem(`${this.prefix}_${prop}`,String(val));
        return val;
    }

    /**
     * Efface la variable
     * @param {string} prop
     */
    removeItem(prop){
       localStorage.removeItem(`${this.prefix}_${prop}`);
    }
}