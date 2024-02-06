//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 06/10/22)
//IT IS THE FUNCTION TO DETECT COLLISION BETWEEN THE ENEMY AND THE PLAYER

function checkEnemyHitsPlayer(enemy, player) {
    if (colliding(enemy.dim, player.dim)) {
        player.restart();
        enemy.restart(player);

        return true; //used to address issue of byRef and byVal
    }
} 
