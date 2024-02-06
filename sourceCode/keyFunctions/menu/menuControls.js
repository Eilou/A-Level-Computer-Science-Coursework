//CODE TO REVERT BACK TO THE ORIGINAL START SCREEN
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function menuControls() { //if backspacec key is pressed at any point in menu revert back to first screen
    if (keyIsDown(8) && menuState != 0) {
        menuState = 0;
    }
}