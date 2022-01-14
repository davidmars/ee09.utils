/**
 * Classe qui permet d'encader
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
        // go !
        this.tick();

    }

    tick(){
        const now=performance.now();
        this.fpsRender = 1 / ((now - this._lastRender) / 1000);
        this.fpsTick = 1 / ((now - this._lastTick) / 1000);
        this._lastTick=now;
        if(this.fpsRender<this.targetFps){
            //console.log(`::render ${this.fpsRender}`)
            this._lastRender=now;
            this.render();
        }
        //console.log(`::tick ${this.fpsTick}`)
        requestAnimationFrame(this.tick.bind(this));
    }
}