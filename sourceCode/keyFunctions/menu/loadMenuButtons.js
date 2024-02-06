//CODE TO INSTANTIATE THE MENU BUTTONS
//WRITTEN BY LOUIE BROOKS (as of 03/11/22)

function loadMenuButtons() {
    //menuState 0
    menuButtons.push([new MenuButton(width/2 - 100, height/2 - 400, 200, 125, 1),      //play
                      new MenuButton(width/2 - 100, height/2 - 200, 200, 125, 2),   //settings
                      new MenuButton(width/2 - 100, height/2, 200, 125, 3),   //controls
                      new MenuButton(width/2 - 100, height/2 + 200, 200, 125, 4)]);   //credits

//0 = screen with buttons
//1 = play
    //1.01 = speedrun
    //1.02 = casual
        //5.0 -> 5.09 are the buttons to switch into a different level
//2 = settings
//3 = controls
//4 = credits

    //menuState 1
    menuButtons.push([new MenuButton(width/2 - 550, 290, 500, 500, 11), //speedrunning button
                      new MenuButton(width/2 + 50, 290, 500, 500,5)]); //casual button (using 5 as needs to be an integer when changing levels as used as an array index)

    //menuState 2
    menuButtons.push([new DifficultyButton(width/2 - 350, height/2 - 150, 300, 300, "left"),
                      new DifficultyButton(width/2 + 50, height/2 - 150, 300, 300, "right")]);

    //
    
    menuButtons.push([]);
    menuButtons.push([]);

    menuButtons.push([]);
    //^ used to hold the level selection buttons

    let levelCounter = 5.0;
    for (let i = 0; i < 3; i++) {//3 rows
        for (let j = 0; j < 4; j++) {//4 columns
            if (menuButtons[5].length < 10) { //once enough have been made for each level
                menuButtons[5].push(new MenuButton((j*400)+210, (i*300)+156, 300, 169, levelCounter)); //did some maths to get the boxes evenly spaced and centered.
                levelCounter = levelCounter + 0.01
            }
            else {
                break; //just speeds up the process
            }
        }
    }
}