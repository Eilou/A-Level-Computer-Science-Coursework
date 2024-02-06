//CODE TO LOAD THE VISUALS OF THE DIFFERENT BUTTONS
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function loadMenuSprites() {
    menuSprites = [];
    menuSprites.push([loadImage("sprites/menuAndEnd/playButton.png"),loadImage("sprites/menuAndEnd/settingsButton.png"),loadImage("sprites/menuAndEnd/controlsButton.png"), loadImage("sprites/menuAndEnd/creditsButton.png")]);
    menuSprites.push([loadImage("sprites/menuAndEnd/speedrunningButton.png"),loadImage("sprites/menuAndEnd/casualButton.png")]);
    menuSprites.push([loadImage("sprites/interactables/difficultyButtonLeft.png"), loadImage("sprites/interactables/difficultyButtonRight.png")]);
    menuSprites.push([]);
    menuSprites.push([]);
    menuSprites.push([]);
    for (let k = 0; k < levelBackgrounds.length; k++) {
        menuSprites[5].push(levelBackgrounds[k]);
    }

}