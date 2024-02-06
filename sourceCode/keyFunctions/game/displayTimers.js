//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 06/10/22)
//IT IS THE FUNCTION TO DISPLAY THE TIMER FOR THE GIVEN LEVEL AND THE OVERALL TIMER

function displayTimers() {
    stroke(0,255,0);
    fill(0,255,0);
    textAlign(LEFT,TOP);
    text("Overall Time:       " + round(overallTimer.time,2), 0, 0);
    text("Current Level Time: " + round(levelTimes[player.stageNum].time,2), 0, 30);
}