//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 09/09/22)
//IT IS CHECKING IF THE PLAYER IS ON THE FLOOR
function checkOnFloor(player, walls) {
    if (!colliding(player,walls)) {
        player.onFloor = false;
    }
}