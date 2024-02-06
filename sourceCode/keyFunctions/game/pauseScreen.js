//CODE FOR THE SCREEN TO BE DISPLAYED WHEN PAUSED
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function pauseScreen() {
    textAlign(CENTER,CENTER);
    fill(0,5);
    stroke(0);
    rect(0,0,1920,1080);
    fill(255,0,0);
    stroke(255,0,0);
    textSize(32);
    text("Game paused", width/2, height/2);
}