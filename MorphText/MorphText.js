import arrayShuffle from "../Array/arrayShuffle.js";


const possibleChar = "abcdeéèêfghijklmnopqrstuvwxyz_/*!?#";
import ratio from "../Math/ratio.js";
import Ticker from "../Ticker.js";




/**
 *
 */
export default class MorphText{

    /**
     *
     * @param {String} startString Starting text
     * @param {String} targetString
     * @param {Function} onChange Callback on text change
     * @param {Function} onComplete Callback on finished
     * @param {MorphTextOption} options
     */
    to(startString,
       targetString,
       onChange=function (text){},
       onComplete=function (){},
       options
    ){
        let opt=new MorphTextOption();
        Object.assign(opt,options);

        /**
         *
         * @type {string[]}
         */
        let currentStringArray=startString.split("");
        /**
         *
         * @type {string[]}
         */
        let targetStringArray=targetString.split("");
        let initTime=performance.now();
        let finalTime=performance.now()+opt.durationMs;

        //rajoute des espaces pour que les deux textes fassent la même taille
        while(currentStringArray.length<targetStringArray.length){
            currentStringArray.push(" ");
        }
        while(targetStringArray.length<currentStringArray.length){
            targetStringArray.push(" ");
        }

        /**
         *
         * @type {Letter[]}
         */
        let letters=[];
        for (let i = 0; i < currentStringArray.length; i++) {
            let l=new Letter(currentStringArray[i],targetStringArray[i],i);
            if(l.target===" "){
                l.done=true;
            }
            letters.push(l);
        }

        switch (opt.algorithm){
            case "shuffle":
                letters=arrayShuffle(letters);
                break;
        }



        const loop=function(){
            let maxLetter=ratio(performance.now(),initTime,finalTime,0,letters.length-1);
            for (let i = 0; i < letters.length; i++) {
                if(i<maxLetter){
                    letters[i].done=true;
                }
                currentStringArray[letters[i].position]=letters[i].val;
            }
            //callback
            onChange(currentStringArray.join(''));
        }

        let ticker=new Ticker(opt.fps,loop.bind(this));
        setTimeout(function(){
            ticker.stop();
            //clearInterval(interval);
            onChange(targetString);
            onComplete();
        },opt.durationMs)
    }
}

/**
 * Options de configuration de l'animation.
 */
class MorphTextOption{

    constructor() {
        /**
         *
         * @type {"shuffle"|"ltr"}
         */
        this.algorithm="shuffle";
        /**
         * Durée en secondes
         * @type {number}
         */
        this.duration=1;
        /**
         * Frame rate cible
         * @type {number}
         */
        this.fps=30;
    }
    get durationMs(){
        return this.duration*1000;
    }
}

class Letter{
    /**
     *
     * @param {String} current
     * @param {String} target
     * @param {Number} position
     */
    constructor(current,target,position) {
        this.current=current;
        this.target=target;
        this.position=position;
        this.done=false;
    }

    get val(){
        if(this.done){
            return this.target;
        }
        return this._randomSign(possibleChar);
    }

    _randomSign(possibles){
        return possibles.charAt(Math.floor(Math.random() * possibles.length));
    }

}