//CODE TO DISPLAY TEXT ON SCREEN IN THE MENUS
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function menuScreenText() {
    textAlign(CENTER,TOP);
    fill(255);
    stroke(255);
    textSize(32);

    if (menuState == 0) {
        text("Play", width/2, height/2 - 400 - 40);
        text("Settings", width/2, height/2 - 200 - 40);
        text("Controls", width/2, height/2 - 40);
        text("Credits", width/2, height/2 + 200 - 40);
    }
    else if (menuState == 1) {
        text("Speedrun", width/2 - 300, 240);
        text("Casual", width/2 + 300, 240);
    }
    else if (menuState == 2) {
        text("Decrease Difficulty", width/2 - 200, 350);
        text("Increase Difficulty", width/2 + 200, 350);
        text("Current Difficulty: " + enemy.difficulty, width/2, 750)
    }
    else if (menuState == 3) {
        text("Movement Controls", width/2, height/2 - 275);
        text("WASD for general movement", width/2, height/2 - 225);
        text("SPACE to dash in the direction held by WASD ", width/2, height/2 - 175);
        text("Menu Controls", width/2, height/2 -75);
        text("BACKSPACE (in the menus) to go back to the start screen", width/2, height/2 -25);
        text("UI Controls", width/2, height/2 + 75);
        text("BACKSPACE to pause the game", width/2, height/2 + 125);
        text('"R" to reset a run', width/2, height/2 + 275);
        text('"H" to show hitboxes', width/2, height/2 + 325)
    }
    else if (menuState == 4) {
        text("This program was written by Louie Brooks", width/2, height/2+200);
        text("It was made for his A Level Computer Science Coursework", width/2, height/2);
        text("It makes use of the open source P5.js library", width/2, height/2-200);
    }
    else if (menuState == 5) {
        for (let j = 0; j < menuButtons[5].length; j++) {
            text(j+1, menuButtons[5][j].dim.x + 25, menuButtons[5][j].dim.y+5);
        }
    }
}