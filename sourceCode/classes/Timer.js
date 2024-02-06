//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 06/10/22)
//IT IS THE CLASS FOR THE TIMERS USED THROUGHOUT THE GAME

class Timer {
    constructor(pIncrement) {
        this.time = 0;
        this.state = 1; //0 is stopped, 1 is counting
        this.increment = pIncrement;
    }
 
    start() {
        this.state = 1;
    }
 
    stop() {
        this.state = 0;
    }
 
    count() {
        if (this.state == 1) {
            this.time += this.increment/60;
        }
    }
 
    reset() {
        this.time = 0;
    }
}
