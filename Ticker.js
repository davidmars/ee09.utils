/**
 * Classe qui permet de gérer une boucle requestAnimationFrame
 */
export default class Ticker{

    /**
     *
     * @param {Number} targetFps Le framerate maximum
     * @param {function} render La fonction à appeler en boucle
     */
    constructor(targetFps=30,render) {
        this.targetFps=targetFps;
        /**
         *
         * @type {DOMHighResTimeStamp}
         * @private
         */
        this._lastRender=performance.now();
        /**
         *
         * @type {DOMHighResTimeStamp}
         * @private
         */
        this._lastTick=performance.now();
        /**
         * Le frame rate réel de rendu
         * @type {number}
         */
        this.fpsRender=0;
        /**
         * Le frame rate théorique (supérieur à fpsRender)
         * @type {number}
         */
        this.fpsTick=0;
        /**
         * La fonction de rendu à appeler
         * @type {Function}
         */
        this.render=render;
        /**
         * En train de jouer ou non ?
         * @type {boolean}
         * @private
         */
        this._playing=true;
        // go !
        this.tick();



    }

    /**
     * La fonction récursive
     * @private
     */
    tick(){
        const now=performance.now();
        this.fpsRender = 1 / ((now - this._lastRender) / 1000);
        this.fpsTick = 1 / ((now - this._lastTick) / 1000);
        this._lastTick=now;
        if(this.fpsRender<this.targetFps){
            this._lastRender=now;
            this.render();
        }
        if(this._playing){
            requestAnimationFrame(this.tick.bind(this));
        }
    }
    get playing() {
        return this._playing;
    }

    set playing(value) {
        if(value !==this._playing){
            this._playing = value;
            if(value){
                this.tick(this);
            }
        }
    }
    stop() {
        this.playing=false;
    }
    play(){
        this.playing=true;
    }
}