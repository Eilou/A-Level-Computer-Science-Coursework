//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 09/09/22)
//THIS LOADS IN THE PLAYER SPRITES 
function loadPlayerSprites(playerSprites) {
    playerSprites[0] = loadImage("sprites/player/playerIdleLeft.gif");
    playerSprites[1] = loadImage("sprites/player/playerIdleRight.gif");
    playerSprites[2] = loadImage("sprites/player/playerMovingLeft.gif");
    playerSprites[3] = loadImage("sprites/player/playerMovingRight.gif");
    playerSprites[4] = loadImage("sprites/player/playerDashLeft.gif");
    playerSprites[5] = loadImage("sprites/player/playerDashRight.gif");
    playerSprites[6] = loadImage("sprites/player/playerDashLeftStill.png");
    playerSprites[7] = loadImage("sprites/player/playerDashRightStill.png");
    playerSprites[8] = loadImage("sprites/player/playerSlideLeft.png");
    playerSprites[9] = loadImage("sprites/player/playerSlideRight.png");
}