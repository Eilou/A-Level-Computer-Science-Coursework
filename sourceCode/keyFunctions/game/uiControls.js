//CODE TO PAUSE THE GAME AND TO RESET A RUN
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

//used for controlling the game when playing it
function uiControls() {
    if (paused == false && keyCode == 8) {//if esc key is pressed pause the game
        overallTimer.stop();
        levelTimes[player.stageNum].stop();
        enemyTimer.stop();
        prevVelocity = {
            x:player.v.x,
            y:player.v.y
        };
        player.v.x = 0;
        player.v.y = 0;
        paused = true;
        gameState = -1; //sets the game to the pause menu

    }
    else if (paused == true && keyCode == 8) { //if esc key is pressed unpasuse the game
        overallTimer.start();
        levelTimes[player.stageNum].start();
        enemyTimer.start();
        player.v.x = prevVelocity.x;
        player.v.y = prevVelocity.y;
        paused = false;
        if (gameMode == "casual") {
            gameState = 2.2;
        }
        else if (gameMode == "speedrunning") {
            gameState = 2.1;
        }
    }

    if (keyCode == 82) { //if r is pressed reset the game
        overallTimer.reset();
        enemyTimer.reset();
        for (let i = 0; i < levelTimes.length; i++) {
            levelTimes[i].reset();
        }
        player.v.x = 0;
        player.v.y = 0;
        player.dim.x = 25;
        player.dim.y = 830
        player.stageNum = 0;
        playerCoords = [[0,0]];
        counter = 0;
        enemy.v.x = 0;
        enemy.v.y = 0;
        enemy.dim.x = player.dim.x;
        enemy.dim.y = player.dim.y;
    } 
}