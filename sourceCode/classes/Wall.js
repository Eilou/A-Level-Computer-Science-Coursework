//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 09/09/22)
//IT IS THE CLASS FOR THE WALLS IN MY PLATFORMER

class Wall { //class of the Wall objects to be drawn
    constructor (pX1,pY1,pW,pH,pType) { //instantiates the class
        this.dim = {
            x: pX1,
            y: pY1,
            w: pW,
            h: pH
        };
        this.type = pType;
    }
    show() { //draws the rectangle on screen
        if (this.type == 0) {
            stroke(255,0,0);
            fill(255,0,0); //red floor
        }
        if (this.type == 1) {
            stroke(0,255,0);
            fill(0,255,0); //green ceiling
        }
        if (this.type == 2) {
            stroke(255,0,255);
            fill(255,0,255); //magenta left wall
        }
        if (this.type == 3) {
            stroke(255,122,0);
            fill(255,122,0); //orange right wall
        }
        if (this.type == 4) {
            stroke(255,140,255);
            fill(255,140,255);//pink spring
        }
        if (this.type == 5) {
            stroke(75,140,255);
            fill(75,140,255); //light blue dash reset
        }
        if (this.type == 6) {
            stroke(0, 50, 114);
            fill(0, 50, 114); //dark blue reset zone
        }
        if (this.type == 7) {
            stroke(255,255,0);
            fill(255,255,0); //yellow checkpoint
        }
        rect(this.dim.x, this.dim.y, this.dim.w, this.dim.h);
    }

    hide() {
        noFill();
        noStroke();
    }
}