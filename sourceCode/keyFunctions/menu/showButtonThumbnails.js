//CODE TO DISPLAY THE SPRITES OF THE MENU BUTTONS
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function showButtonThumbnails() {
    for (let k = 0; k < menuButtons[menuState].length; k++) {
        image(menuSprites[menuState][k], menuButtons[menuState][k].dim.x, menuButtons[menuState][k].dim.y, menuButtons[menuState][k].dim.w, menuButtons[menuState][k].dim.h)
    }
}