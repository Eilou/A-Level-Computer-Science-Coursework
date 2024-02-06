//CODE FOR ANY BUTTONS USED IN THE MENU SYSTEM
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

class MenuButton {
    constructor(pX,pY,pW,pH,pScreen) {

        this.dim = {
            x : pX,
            y : pY,
            w : pW,
            h : pH
        };

        this.screen = pScreen;
        //0 = screen with buttons
        //1 = play
            //1.01 = speedrun
            //1.02 = casual
                //5.0 -> 5.09 are the buttons to switch into a different level
        //2 = settings
        //3 = controls
        //4 = credits
    }

    show() {
        noFill();
        stroke(255,0,0);
        rect(this.dim.x,this.dim.y,this.dim.w,this.dim.h);
    }

    changeScreen(menuState) {
        menuState = this.screen;
        return menuState;
    }

    startAtLevel(gameState,player){
        player.stageNum = round((this.screen % 5)*100,1)
        return gameState = 2.2; //puts into a casual playthrough 
    }

}