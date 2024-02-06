//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 06/10/22)
//IT IS THE FUNCTION TO GET ANY RECORDS FROM THE LOCAL STORAGE, UPDATE THEM, PASS THEM BACK INTO LOCAL STORAGE AND RETURN THE SET OF RECORDS RELEVANT TO THE RUNS DIFFICULTY

function getBestTimes() {
    //wants to see if there are no values first
    //if values, want to keep going down the list until it is in the right spot

    let storedRecords = JSON.parse(localStorage.getItem("records"));
    let relevantRecords = [];
    if (storedRecords == null) {
        storedRecords = [[]];
    }
    storedRecords.push([overallTimer.time,enemy.difficulty]);
    localStorage.setItem("records", JSON.stringify(storedRecords));


    for (let i = 0; i < storedRecords.length; i++) { //for every song in the songs
        if (storedRecords[i][1] == enemy.difficulty) { //if record being looked at is on the same difficulty as the one just done
            relevantRecords.push(storedRecords[i][0]); //add record to list of ones to be displayed later
        }
    }

    return relevantRecords;
    
}