class MenuButton { //menu button class
    constructor(pX,pY,pW,pH,pScreen) {
        this.dim = {
            x: pX,
            y: py,
            w: pW,
            h: pH
        }
        this.screen = pScreen //determines which menu screen to take the player to
        //0 = screen with buttons
        //1 = play
            //1.01 = speedrun
            //1.02 = casual
                //5.0 -> 5.09 are the buttons to switch into a different level
        //2 = settings
        //3 = controls
        //4 = credits
    }

    show() {
        fill(255,0,0);
        stroke(255,0,0);
        rect(this.dim.x,this.dim.y,this.dim.w,this.dim.h);
    }

    changeScreen(menuState) { //changes the menu screen.
        menuState = this.screen;
        return menuState
    }

    startAtLevel(gameState,player) {
        player.stageNum = Math.round((5.10 % 5) * 100, 1); //Math bit used to take only the decimal and convert it to an integer part
        return gameState = 2.2;
    }
    
}

//used for controlling the game when playing it
function uiControls() {
    if (keyIsDown(27) && paused == false) {//if esc key is pressed pause the game
        overallTimer.stop();
        levelTimers[player.stageNum].stop();
        enemyTimer.stop();
        prevVelocity = {
            x:player.v.x,
            y:player.v.y
        };
        player.v.x = 0;
        player.v.y = 0;
        paused = true;
    }
    else if (keyIsDown(27 && paused == true)) { //if esc key is pressed unpasuse the game
        overallTimer.start();
        levelTimers[player.stageNum].start();
        enemyTimer.start();
        player.v.x = prevVelocity.x;
        player.v.y = prevVelocity.y;
        paused = false;
    }

    if (keyIsDown(82)) { //if r is pressed reset the game
        overallTimer.reset();
        enemyTimer.reset();
        for (let i = 0; i < levelTimers.length; i++) {
            levelTimers[i].reset();
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
        return true; //used to then break out of the for loop of walls
    } 
}

function menuControls() { //if esc key is pressed at any point in menu revert back to first screen
    if (keyIsDown(27) && menuState != 0) {
        menuState = 0;
    }
}

function endScreen() { //screen to be displayed instead of leaderboard
    text("Congratulation", width/2, 50);
    text("You have beaten the game in the casual mode", width/2, 100);
    text("Replay the game in the speedrunning mode to time yourself", width/2, 150);
}

function loadMenuButtons() { //using same logic as for levels, means cannot click two buttons on separate screens at once

    menuButtons.push([new MenuButton(width/2 - 50, height/2 + 150, 100, 50, 1),      //play
                    new MenuButton(width/2 - 50, height/2 + 50, 100, 50, 2),   //settings
                    new MenuButton(width/2 - 50, height/2 - 50, 100, 50, 3),   //controls
                    new MenuButton(width/2 - 50, height/2 - 150, 100, 50, 4)]);   //credits
    
    menuButtons.push([]);
    //^^^ to be used to hold the level selection buttons

    let levelCounter = 5.0;
    for (let i = 0; i < 3; i++) { //3 rows
        for (let j = 0 < 4; i++) { //4 columns

            if (menuButtons[1].length <= 10) { //once enough levels have been made
            //will draw a images in rows
                menuButtons[1].push(new MenuButton((i*50)+50, (j*50)+50), 455, 245, levelCounter);
                //x, y, width, height, screen
                levelCounter = levelCounter + 0.01;
            }
            else {
                break;
            }
        }
    }
}

function loadMenuBackgrounds() {
    menuBackground.push(loadImage("sprites/menu/...."));
    ...
}

function checkButtonClicked() {
    
    if (mouseX > menuButtons[menuState][i].dim.x &&
        mouseX < menuButtons[menuState][i].dim.x + menuButtons[menuState][i].dim.w &&
        mouseY > menuButtons[menuState][i].dim.y &&
        mouseY < menuButtons[menuState][i].dim.y + menuButtons[menuState][i].dim.h) {
        
        return true;
    }
    else {
        return false;
    }
}

function playGame() {
    ... //this will hold all of the algorithms code for the game to run from previous iterations
}

//section to be added to the sketch.js file
let menuButtons = [[]];
let menuBackground = [];
loadMenuButtons();

let gameType;
let menuState;

instatiate all the variables and array 

setup canvas

preload images

function draw() {
    if (gameState == 1) {
        background(menuBackground[menuState]);
        for (let i = 0; i < menuButtons[menuState].length; i++) {
            if (checkButtonClicked() == true) {
                if (menuButtons[menuState][i].type == 1.01) {
                    gameState = 2.1; //start speedrun mode
                }
                else if (menuButtons[menuState][i].type >= 5) {
                    gameState = menuButtons[menuState][i].startAtLevel(gameState,player);
                }
                else {
                    menuState = menuButtons[menuState][i].changeScreen(menuState)
                }
            }
        }
        
    }
    if (round(gameState,0) == 2) {//if the main game is playing
        if (gameState == 2.1) {//if in speedrun mode
            displayTimers();
            gameType = "speedrun";
        }
        else {
            gameType = "casual";
        }
        playGame();
    }

    ...

        //to switch to leaderboard screen
        else if (collisionResponse(player, walls, i) == false) {
            gameState = 3;
        }

    if (gameState = 3) {
        if (gameType == "casual") {
            endScreen();
        } else if (gameType == "speedrun") {
            ... //insert previous leaderboard code here
        }
    }
}
