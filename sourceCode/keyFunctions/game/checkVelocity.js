//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 09/09/22)
//THIS CODE CHECKS THE VELCOITY TO DECIDED WHICH SPRITE TO USE
function checkVelocity(player) {
    if ((player.v.y <= 0.1 || player.v.y >= -0.1) && (player.v.x <= 0.1 || player.v.x >= -0.1)) { //if player is idle
        if (player.lastPressed.l == true) {
            player.currentSprite = 0;
        } else if (player.lastPressed.r == true) {
            player.currentSprite = 1;
        }
    }

    if ((player.v.y <= 0.1 || player.v.y >= -0.1) && (player.v.x > 0.1 || player.v.x < -0.1)) { //if player is moving about on ground
        if (player.lastPressed.l == true) {
            player.currentSprite = 2;
        } else if (player.lastPressed.r == true) {
            player.currentSprite = 3;
        }
    }

    if ((player.v.y >= 0.1 || player.v.y <= -0.1)) { //if player is in the air
        if (player.lastPressed.l == true) {
            player.currentSprite = 6;
        } else if (player.lastPressed.r == true) {
            player.currentSprite = 7;
        }
    }
}