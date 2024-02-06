//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 06/10/22)
//IT IS THE CLASS FOR THE ENEMY CHASING THE PLAYER

class Enemy {
    constructor (pX, pY, pW, pH, pDifficulty) {
        this.dim = {
            x: pX,
            y: pY,
            w: pW,
            h: pH
        }
        
        this.movementVector = {
            x: 0,
            y: 0
        }
        
        this.difficulty = pDifficulty; //0 = no chase, 1 = delay of 5 seconds, 2 = delay of 2 seconds
        this.delay = 5;
    }

    show() {
        if (this.difficulty != 0) {
            fill(222);
            stroke(255);
            rect(this.dim.x,this.dim.y,this.dim.w,this.dim.h);
        }
        
    }

    update() {
        if (this.difficulty != 0) {
            this.dim.x += this.movementVector.x;
            this.dim.y += this.movementVector.y;
        }
        
    }

    setDelay() {
        if (this.difficulty == 1) {
            this.delay = 5;
        }
        else if (this.difficulty == 2) {
            this.delay = 2;
        }
        else {
            this.delay = 999999999999;
        }

    }

    calculateMovementVector(playerCoords,counter,interval) {
        if (this.delay != 0) {
            let xDiff = playerCoords[counter][0] - this.dim.x;
            let yDiff = playerCoords[counter][1] - this.dim.y;
    
            this.movementVector.x = xDiff / interval;
            this.movementVector.y = yDiff / interval;
        }
        //playerCoords is a list of positions the player has been at
        //counter is to keep up with which set of coordinates to use
        //interval is the time the player did their movement in so it is included to keep enemy velocity at the same value

    }

    restart(player) {
        this.dim.x = player.lastCheck.x;
        this.dim.y = player.lastCheck.y;
        this.movementVector.x = 0;
        this.movementVector.y = 0;

        // counter = 0;
        // playerCoords = [[0,0]];
        // enemyTimer.time = 0;
        
    }

}