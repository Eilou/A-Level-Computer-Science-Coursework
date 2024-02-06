//CODE FOR THE SCREEN DISPLAYED AT THE END OF A CASUAL PLAYTHROUGH
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function casualEndScreen() {
    background(endBackground);
    stroke(255);
    fill(255);
    textSize(32);
    textAlign(CENTER,CENTER);
    text("Congratulation", width/2, height/2 - 150);
    text("You have beaten the game in the casual mode", width/2, height/2);
    text("Replay the game in the speedrunning mode to time yourself", width/2, height/2 + 150);

}