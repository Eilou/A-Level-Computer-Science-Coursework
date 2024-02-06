//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 09/09/22)
//THIS CODE COMPILES ALL THE PREVIOUSLY DEVELOPED FUNCTIONS AND PIECECS TOGETHER THE WHOLE GAME


//BELOW IS THE SECTION WHERE I INSTANCE ALL VARIABLES, OBJECTS AND ARRAYS USED LATER IN THE CODE

let menuButtons = [];

let menuState = 0;
let menuSprites = [[]];

let menuBackground;
let endBackground;

let interval = 1;

let levelTimes = [];
for (let i = 0; i < 10; i++) {
    levelTimes.push(new Timer(interval));
}
let overallTimer = new Timer(interval);
let enemyTimer = new Timer(interval);
let counter = 0;

let playerCoords = [[0,0]];
let player = new Player(25,830, 30,50, 0,0,     0.25,0.25, 10,  7.5,7.5,   9,9,   15);
                      //pX,pY,   pW,pH, pVX,pVY, pAX,pAY,   pJY, pWJX,pWJY, pDX,pDY, pSY;

let enemy = new Enemy(player.dim.x,player.dim.y,30,30, 1);
let enemySprite;

let walls = [[]];

let levelBackgrounds = [];
let playerSprites = [];

let hPresses = 1;

let paused = false;
let gameState = 1; //0 is menu screen, 1 is main game, 2 is leaderboard, any decimal states are subsection gamestates like a settings screen. 
let gameMode = "";

loadWalls(walls);


function preload() {
    loadLevelBackgrounds(levelBackgrounds);
    loadPlayerSprites(playerSprites);
    loadMenuSprites();
    enemySprite = loadImage("sprites/interactables/enemy.gif");
    menuBackground = loadImage("sprites/menuAndEnd/menuBackground.png");
    endBackground = loadImage("sprites/menuAndEnd/endBackground.png");
}

//THIS IS ONLY RUN ONCE
function setup() {
    createCanvas(1920,1080);
    loadMenuButtons(menuButtons);
}

//THIS BIT OF CODE IS RUN REPEATEDLY 
function draw() {

    //MENU SYSTEM
    if (gameState == 1) {
        background(menuBackground);
        // for (let i = 0; i < menuButtons[menuState].length; i++) {
        //     menuButtons[menuState][i].show();
        // }
        showButtonThumbnails();
        menuScreenText();
        menuControls();
    }

    //MAIN GAME
    else if (Math.trunc(gameState) == 2) { //if gameState begins with a 2
        // background(220);
        playGame();

        if (gameState == 2.1) { //if speedrunning
            displayTimers();
            gameMode = "speedrunning";
        }
        else if (gameState == 2.2) {//if casual
            //don't display timers
            overallTimer.stop();
            for (let j = 0; j < levelTimes.length; j++) {
                levelTimes[j].stop;
            }
            gameMode = "casual";
        }
        
    }

    else if (gameState == -1) { //if paused
        pauseScreen();
    }

    //LEADERBOARD CODE
    else if (gameState == 3) {
        overallTimer.stop()
        noLoop(); //means that you don't get thousands of readings to the local storage
        if (gameMode == "speedrunning") {
            let bestTimes = getBestTimes();
            leaderboard(bestTimes,enemy);
        }
        else {
            casualEndScreen();
        }
        
    }

}

//CODE USED TO MAKE THE GAME FULLSCREEN
function mouseClicked() {

    //fullscreens the canvas
    let fs = fullscreen();
    if(!fs) { 
        fullscreen(!fs);
    }

    //if in the menus
    if (gameState == 1) {
        for (let i = 0; i < menuButtons[menuState].length; i++) {
            if (checkButtonClicked(menuButtons, menuState, i) == true) {
                if (menuState == 2) { //if on difficulty screen different response as not for changing menus
                    menuButtons[menuState][i].checkClicked(mouseX, mouseY);
                } 
                else if (menuState == 5){
                    setPlayerStart(menuButtons,menuState,i);
                    gameState = menuButtons[menuState][i].startAtLevel(gameState,player); //if specific level in casual playthrough pressed
                }
                else if (menuButtons[menuState][i].screen == 11) { //if speedrunning button pressed
                    gameState = 2.1;
                }
                else { //otherwise change screen
                    menuState = menuButtons[menuState][i].changeScreen(menuState);
                    break; //so can only press one button at once
                }
            }
        }
    }
}

function keyReleased() {
    if (Math.trunc(gameState) == 2 || gameState == -1) {
        uiControls();
    }
}