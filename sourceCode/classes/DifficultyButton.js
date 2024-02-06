//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 06/10/22)
//IT IS THE CLASS FOR THE DIFFICULTY BUTTONS DISPLAYED

class DifficultyButton {
    constructor(pX,pY,pW,pH,pDirection) {
        this.dim = {
            x: pX,
            y: pY,
            w: pW,
            h: pH
        }
        this.direction = pDirection;
    }
    
    show() {
        noFill();
        stroke(255,0,0);
        rect(this.dim.x,this.dim.y,this.dim.w,this.dim.h);
    }
    
    checkClicked(mouseX, mouseY) {
        if (mouseX > this.dim.x &&
            mouseX < this.dim.x + this.dim.w &&
            mouseY > this.dim.y &&
            mouseY < this.dim.y + this.dim.h) {
                if (this.direction == "left") {
                    this.decreaseDifficulty(enemy);
                } else {
                    this.increaseDifficulty(enemy);
                }
            }
    }
    
    decreaseDifficulty(enemy) {
        if (enemy.difficulty == 0) {//if pressing the left button don't go into negatives 
            enemy.difficulty = 0;
        }
        else {
            enemy.difficulty--;
        }
        enemy.setDelay();
    }
    
    increaseDifficulty(enemy) {
        if (enemy.difficulty == 2) {
            enemy.difficulty = 2;
        } else {
            enemy.difficulty++;
        }
        enemy.setDelay();
    }
    
}