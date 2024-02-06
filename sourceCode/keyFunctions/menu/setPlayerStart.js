//CODE TO SPAWN THE PLAYER AT THE CORRECT POINT WHEN SELECTING CASUAL PLAY
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function setPlayerStart(menuButtons,menuState,i) {
    let startingLevel = round((menuButtons[menuState][i].screen % 5)*100,1)
    if (startingLevel == 0) {
        player.dim.x = 14;
        player.dim.y = 825;
    }
    else if (startingLevel == 1) {
        player.dim.x = 16;
        player.dim.y = 916;
    }
    else if (startingLevel == 2) {
        player.dim.x = 11;
        player.dim.y = 373;
    }
    else if (startingLevel == 3) {
        player.dim.x = 16;
        player.dim.y = 630;
    }
    else if (startingLevel == 4) {
        player.dim.x = 73;
        player.dim.y = 944;
    }
    else if (startingLevel == 5) {
        player.dim.x = 16;
        player.dim.y = 320;
    }
    else if (startingLevel == 6) {
        player.dim.x = 23;
        player.dim.y = 674;
    }
    else if (startingLevel == 7) {
        player.dim.x = 26;
        player.dim.y = 428;
    }
    else if (startingLevel == 8) {
        player.dim.x = 89;
        player.dim.y = 949;
    }
    else if (startingLevel == 9) {
        player.dim.x = 31;
        player.dim.y = 249;
    }

}