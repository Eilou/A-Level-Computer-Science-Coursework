//CODE FOR THE GAMEPLAY
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function playGame() {
    background(levelBackgrounds[player.stageNum]);

    enemy.update();

    checkVelocity(player);

    //THIS CODE DOES THE TIMERS and controls how and when the enemy starts to move
    if (frameCount % interval == 0) {
        overallTimer.count();
        enemyTimer.count();
        levelTimes[player.stageNum].count();

        if (enemyTimer.time >= enemy.delay) { //CODE BELOW DOES ALL THE FUNCTIONALITY AFTER THE ENEMY HAS BEEN RELEASED. 
            enemy.calculateMovementVector(playerCoords,counter,interval);
            counter++;
            if (enemy.difficulty != 0) {
                image(enemySprite,enemy.dim.x,enemy.dim.y);
            }
            if (checkEnemyHitsPlayer(enemy, player, enemyTimer,counter, playerCoords)) {
                enemyTimer.reset();
                playerCoords = [[player.lastCheck.x, player.lastCheck.y]];
                counter = 0;
            }
        }
        playerCoords.push([player.dim.x, player.dim.y]);
    }

    //THE FOLLOWING CODE RUNS FOR EACH WALL
    for (let i = 0; i < walls[player.stageNum].length; i++){
        

        //code for checking collisions
        if (colliding(player.dim,walls[player.stageNum][i].dim)) {
            
            if (collisionResponse(player,walls,i)) { //still runs the function but now I can make use differently scoped variables as a result. 

                //this resets the enemy when they die
                enemy.restart(player);
                counter = 0;
                playerCoords = [[player.dim.x,player.dim.y]];
                enemyTimer.reset();
                break;

            } //used to switch to leaderboard
            else if (collisionResponse(player, walls, i) == false) {
                gameState = 3;
            }
            
        } 

        //used for gravity
        checkOnFloor(player,walls);

        //code block below enables/disables hitboxes
        if (keyIsDown(72)) {  
            hPresses = hPresses + 1;
        }
        if (hPresses % 2 == 0) { //this is where it breaks, the code still uses the i value from above even after the switch to display the checkpoints
            player.show();

            walls[player.stageNum][i].show();

        } else if (hPresses % 2 == 1) {
            player.hide();

            walls[player.stageNum][i].hide();

        }

    }

    //CRUCIAL PARTS OF PLAYER THAT ARE RUN MULTIPLE TIMES
    player.displaySprite(playerSprites);
    player.update();
    player.controls();
    player.applyGravity();

    if (player.checkPosition()) {
        //enemy reset stuff
        enemy.dim.x = player.dim.x;
        enemy.dim.y = player.dim.y;
        enemyTimer.reset();
        counter = 0;
        playerCoords = [[player.dim.x,player.dim.y]];
        enemy.movementVector.x = 0;
        enemy.movementVector.y = 0;
    };
}