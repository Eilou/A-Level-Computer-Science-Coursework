//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 09/09/22)
//IT IS THE CLASS FOR THE PLAYER IN MY PLATFORMER

//player class 
class Player {
    constructor(pX,pY, pW,pH, pVX,pVY, pAX,pAY, pJY, pWJX,pWJY, pDX,pDY, pSY) {
        this.dim = { //positions and height and widht
            x:pX,
            y:pY,
            w:pW,
            h:pH
        };

        this.v = { //velocities
            x: pVX,
            y: pVY
        };

        this.a = { //accelerations
            x: pAX,
            y: pAY
        };

        this.startA = {
            x: pAX,
            y: pAY
        };

        this.resistance = {
            x: 0.1
        };

        this.abilityVelocity = {
            jY: pJY, //jump

            wjX: pWJX, //walljumps
            wjY: pWJY,

            dX: pDX, //dash
            dY: pDY,

            sY: pSY //spring
        };

        this.facing = { //determines which direction to wall jump 
            left: false,
            right: false
        };

        this.dir = {
            u: false,
            d: false,
            l: false,
            r: false
        };

        this.lastCheck = {
            x:0,
            y:0,
            level:0
        };

        this.lastPressed = {
            l: false,
            r: false
        };

        this.stageNum = 0;

        this.currentSprite = 3; //sets the player to spawn with the moving right sprite

        this.canJump;
        this.canDash;
        this.canWalljump;
        this.onFloor;
    }

    show() { //displays the player on the screen
        fill(0,0,255);
        stroke(0,0,255);
        rect(this.dim.x, this.dim.y, this.dim.w, this.dim.h);
    }

    hide() {
        noFill();
        noStroke();
    }

    update() { //update position
        this.v.x += this.a.x;
        this.dim.x += this.v.x;

        this.v.y += this.a.y;
        this.dim.y += this.v.y;

        //set topspeeds
        if (this.v.x >= this.dim.w * 0.3) {
            this.v.x = this.dim.w * 0.3;
        }
        else if (this.v.x <= -1 * this.dim.w * 0.3) {
            this.v.x = -1 * this.dim.w * 0.3;
        }
        if (this.v.y >= this.dim.h) {
            this.v.y = this.dim.h - 1;
        }
    }

    controls() {


        if (keyIsDown(87)) { //assigns the directions so that the player can be //W key pressed
            if (this.canWalljump == true) {
                this.walljump();
            }
            else if (this.canJump == true) {
                this.jump();
            }
            this.dir.u = true;
        } else if (!keyIsDown(87)) {
            this.dir.u = false;
        }

        if (keyIsDown(83)) { //S key pressed
            this.dir.d = true;
        } else if (!keyIsDown(83)) {
            this.dir.d = false;
        }

        if (keyIsDown(65)) {//A key pressed
            this.dir.l = true;
            this.lastPressed.l = true;
            this.lastPressed.r = false;
        } else if (!keyIsDown(65)) {
            this.dir.l = false;
        }

        if (keyIsDown(68)) {//D key pressed
            this.dir.r = true;
            this.lastPressed.l = false;
            this.lastPressed.r = true;
        } else if (!keyIsDown(68)) {
            this.dir.r = false;
        }

        if (this.dir.l == true && this.dir.r == true) { //general controls using acceleration instead of reassiging velocity constantly
            this.a.x = 0;
        } else if (this.dir.l == true) {
            this.a.x = -1 * this.startA.x;
        } else if (this.dir.r == true) {
            this.a.x = this.startA.x;
        } else if (this.dir.l == false && this.dir.r == false) {
            if (this.v.x < 0.25 && this.v.x > -0.25) { //since javascript can be a bit weird when it comes to incrementing numbers, get the value to cover a range
                this.a.x = 0;
                this.v.x = 0;
            }
            else if (this.v.x > 0.25) { //if positive go down to the given range
                this.a.x = -1 * 0.1;
            }
            else if (this.v.x < 0.25) { //if negative go up to the given range
                this.a.x = 0.1;
            }
        }

        if (keyIsDown(32)) { //space
            if (this.canDash == true) {
                this.dash();
            }
        }
    }

    jump() {
        this.v.y = -1 * this.abilityVelocity.jY;
        this.canJump = false;

        if ((this.dir.l == true && this.dir.r == true) || (this.dir.l == false && this.dir.r == false)){
            this.currentSprite = 5;
        } else if (this.dir.r == true) {
            this.currentSprite = 5;
        } else if (this.dir.l == true) {
            this.currentSprite = 4;
        }
    }

    dash() {

        this.a.y = 0;
        this.a.x = 0;

        //diagonals
        if (this.dir.u == true && this.dir.l == true) {//up and left
            this.v.y = this.v.y = -1 * this.abilityVelocity.dY;
            this.v.x = -1 * this.abilityVelocity.dX;
            this.canDash = false;
        } else if (this.dir.u == true && this.dir.r == true) {//up and right 
            this.v.y = this.v.y = -1 * this.abilityVelocity.dY;
            this.v.x = this.abilityVelocity.dX;
            this.canDash = false;
        } else if (this.dir.d == true && this.dir.l == true) {//down and left
            this.v.y = this.abilityVelocity.dY;
            this.v.x = -1 * this.abilityVelocity.dX;
            this.canDash = false;
        } else if (this.dir.d == true && this.dir.r == true) {//down and right
            this.v.y = this.abilityVelocity.dY;
            this.v.x = this.abilityVelocity.dX;
            this.canDash = false;
        }
        //strictly that direction
        else if (this.dir.u == true) {//up
            this.v.y = -1 * this.abilityVelocity.dY;
            this.v.x = 0;
            this.canDash = false;
        }
        else if (this.dir.d == true) {//down
            this.v.y = this.abilityVelocity.dY;
            this.v.x = 0;
            this.canDash = false;
        }
        else if (this.dir.l == true) {//left
            this.v.x = -1 * this.abilityVelocity.dX;
            this.v.y = -2;
            this.canDash = false;
        }
        else if (this.dir.r== true) {//right
            this.v.x = this.abilityVelocity.dX;
            this.v.y = -2;
            this.canDash = false;
        }
    }

    walljump() {
        this.v.y = -1 * this.abilityVelocity.wjY; //this will be a value determined on a suvat equation which is going to tweaked in development
        //it will be set to a value that means the player cannot jump off the wall and come back to it gaining any vertical displacement
        //calcuated using the formala v.yV = 15/8a derived from a series of suvat equations I did
        if (this.facing.right == true) {
            this.v.x = this.abilityVelocity.wjX;
        }
        if (this.facing.left == true) {
            this.v.x = -1 * this.abilityVelocity.wjX;
        }
        this.canWalljump = false; //reassigns to false so cannot inifinitely wall jump
    }

    spring() {
        this.canDash = true;
        this.v.y = -1 * this.abilityVelocity.sY;
    }

    resetDash() {
        this.canDash = true;
    }

    assignCheck(givenWall) {
        this.lastCheck.x = givenWall.dim.x;
        this.lastCheck.y = givenWall.dim.y;
        this.lastCheck.level = this.stageNum;
    }

    restart() {
        this.dim.x = this.lastCheck.x;
        this.dim.y = this.lastCheck.y - this.dim.h;
        this.stageNum = this.lastCheck.level;
    }

    applyGravity() {
        if (this.onFloor != true) {
            this.a.y = 0.25;

        } else if (this.onFloor == true) {
            this.a.y = 0;
            this.v.y = 0;

            
        }
    }

    checkPosition() { //decides which stage should be loaded at any given time
        if (this.dim.x + this.dim.w <= 0) {//load previous level
            if (this.stageNum != 0) {//prevents underflow index error
                this.stageNum--;
                this.dim.x = 1880;

                return true;
            }
            else {
                this.restart();
            }
        }
        else if (this.dim.x >= width) {//load next level
            if (this.stageNum != 10) {//30 is just a filler value for now//prevenets overflow index error
                this.stageNum++;
                this.dim.x = 10;

                return true;
            }
            else {
                this.restart();
            }
        }

        if (this.dim.y + this.dim.h + 10 <= 0) { //checks if above or below the level and then resets them to their last checkpoint
            this.restart();
        }
        else if (this.dim.y - 10 >= height) {
            this.restart();
        }
        
    }

    displaySprite(playerSprites) { //displays the current sprite necessary. 
        image(playerSprites[this.currentSprite], this.dim.x, this.dim.y, this.dim.w, this.dim.h);
    }

}