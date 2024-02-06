//CODE TO CHECK IF A BUTTON HAS BEEN PRESSED
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function checkButtonClicked(menuButtons, menuState, i) {

    if (mouseX > menuButtons[menuState][i].dim.x &&
        mouseX < menuButtons[menuState][i].dim.x + menuButtons[menuState][i].dim.w &&
        mouseY > menuButtons[menuState][i].dim.y &&
        mouseY < menuButtons[menuState][i].dim.y + menuButtons[menuState][i].dim.h) {

        return true
    } else {
        return false
    }

}