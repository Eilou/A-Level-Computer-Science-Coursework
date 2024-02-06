//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 06/10/22)
//IT IS THE FUNCTION TO DISPLAY THE OVERALL TIME, LEVEL TIMES AND WHETHER A NEW BEST TIMEH HAS BEEN SET

function leaderboard(bestTimes,enemy) {
    background(endBackground);

    fill(255);
    stroke(255);
    textAlign(CENTER,CENTER);

    //looks through all the previous best times and sees if a new record for that difficulty has been set
    let totalBest = 1000000000000;
    let changed = false;
        
    for (let i = 0; i < bestTimes.length - 1 ; i++) { //checks for the quickest time in the previous times //-1 because end value is the new time anyway
        if (bestTimes[i] <= totalBest) {
            totalBest = bestTimes[i];
        }
    }
    if (overallTimer.time < totalBest) { //checks to see if best of previous records is quicker or not than new time
        totalBest = overallTimer.time;
        changed = true;
    }

    //displays that runs overall time and the individual level times
    text("Overall time at difficulty: " + enemy.difficulty, width/2, 50);
    text(round(overallTimer.time,2), width/2, 80);

    text("Individual Level Times:", width/2, 110);
    for (let i = 0; i < 10; i++) {
        text("Level " + (i+1) + ": " + round(levelTimes[i].time,2), width/2, 140 + i*30); //does the spacing
    }

    //displays the overall record for that difficulty and whether it has been broken or not
    text("OVERALL RECORD for difficulty " + enemy.difficulty, width/2, 600);
    text(round(totalBest,2), width/2, 630);

    if (changed == true) {
        text("NEW RECORD", width/2, 660);
    } else {
        text("NO NEW RECORD", width/2, 660);
    }

}