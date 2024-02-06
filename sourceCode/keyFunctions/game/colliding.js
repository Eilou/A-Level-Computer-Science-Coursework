//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 09/09/22)
//THIS DETECTS ANY OVERLAP BETWEEN RECTANGLES INPUT

//collision detection
function colliding(rect1, rect2) {
    if(rect1.x < rect2.x + rect2.w && 
       rect1.x + rect1.w > rect2.x &&
       rect1.y < rect2.y + rect2.h &&
       rect1.y + rect1.h > rect2.y) {
      //each statement here is checking if the rectangles x coordinates overlap, at the same time that it checks if the y coordinates overlap. if the program returns true, then it means the top line and right line are overlapping therefore the whole rectangle is overlapping
      return true;
    } else {
      return false;
    }
} 