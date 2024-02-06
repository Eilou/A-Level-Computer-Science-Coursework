//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 09/09/22)
//THIS CODE TELLS THE PLAYER HOW TO RESPOND TO DIFFERENT TYPES OF WALLS
//CODE FOR IMPROVED COLLISION RESPONSE
function collisionResponse(player, walls, i) {

    if (walls[player.stageNum][i].type == 0) {//if wall is a floor
        player.canJump = true;
        player.canDash = true;
        player.canWalljump = false;
        player.onFloor = true;
        player.dim.y = walls[player.stageNum][i].dim.y - player.dim.h ;

        player.v.y = 0; //fixes infinite speed on floor.
        player.a.y = 0;

        if ((player.dir.l == true && player.dir.r == true) || (player.dir.l == false && player.dir.r == false)) { //overall loop determines which animation to play when on the ground, needs to be in here as the onFloor attribute technically never is true due to how everything works.
            if (player.lastPressed.r == true) { //this loop decides which idle animation to play
                player.currentSprite = 1;
            } else if (player.lastPressed.l == true) {
                player.currentSprite = 0;
            }
        } else if (player.dir.l == true) {
            player.currentSprite = 2;
        } else if (player.dir.r == true) {
            player.currentSprite = 3;
        }

    } 

    if (walls[player.stageNum][i].type == 1) {//if wall is a ceiling
        player.v.y = Math.max(player.v.y, 0);
        player.dim.y = walls[player.stageNum][i].dim.y + 1; //add one so they don't remain clipped into the ceiling
    }

    if (walls[player.stageNum][i].type == 2) {//if wall is a left wall
        player.canWalljump = true;
        player.facing.left = false;
        player.facing.right = true;
        player.dim.x = walls[player.stageNum][i].dim.x + walls[player.stageNum][i].dim.w + 1;

        if (player.v.y >= 0) {
            player.v.y = 1.5;
        }

        player.currentSprite = 9;
        
    } 

    if (walls[player.stageNum][i].type == 3) {//if wall is a right wall
        player.canWalljump = true;
        player.facing.left = true;
        player.facing.right = false;
        player.dim.x = walls[player.stageNum][i].dim.x - player.dim.w - 1;

        if (player.v.y >= 0) {
            player.v.y = 1.5;
        }

        player.currentSprite = 8;
    }

    if (walls[player.stageNum][i].type == 4) { //if wall is a spring
        player.spring();
    }

    if (walls[player.stageNum][i].type == 5) { //if wall is a dash reset 
        player.resetDash();
    }

    if (walls[player.stageNum][i].type == 6) { //if wall is a reset zone
        player.restart();
        return true;
    }

    if (walls[player.stageNum][i].type == 7) { //if wall is a check
        player.assignCheck(walls[player.stageNum][i]);
    }

    if (walls[player.stageNum][i].type == 8) { //if wall is the very last checkpoint
        return false;
    }
}