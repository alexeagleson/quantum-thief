var creativeContent = {
  throneTile: "https://i.imgur.com/lSASTwO.png",
  
  throneLegend: {
    "#": multiplyBy32([1, 0]),
    ".": multiplyBy32([2, 0]),
    "@": multiplyBy32([0, 0]),
    "!": multiplyBy32([1, 2]),
    ">": multiplyBy32([3, 0]),
    "<": multiplyBy32([4, 0])
  },
  
  scottDracula: new Object(char = "@", name = "Scott Dracula", wall = false, alive = true),
  
  iceUniverse: function() {
    var iceUniverse = [];
    emptyCell = null;
    
    for (var i = 0; i < 5; i++) {
      iceUniverse[i] = Game.createMap(creativeContent.throneTile, creativeContent.throneLegend, i);
      
      emptyCell = iceUniverse[i].randomEmptyCellCoords();
      iceUniverse[i].addObjectToMap(new Object(char = "!", name = "Throne", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.throneDialogue), emptyCell.x, emptyCell.y);
      
      if (i != 0) {
        emptyCell = iceUniverse[i].randomEmptyCellCoords();
        iceUniverse[i].addObjectToMap(new Object(char = "<", name = "Downstairs", wall = false, alive = false, clickFunction = "floor down"), emptyCell.x, emptyCell.y);
      }
      
      if (i != 4) {
        emptyCell = iceUniverse[i].randomEmptyCellCoords();
        iceUniverse[i].addObjectToMap(new Object(char = ">", name = "Upstairs", wall = false, alive = false, clickFunction = "floor up"), emptyCell.x, emptyCell.y);
      }
      
    }
    
    emptyCell = iceUniverse[0].randomEmptyCellCoords();
    iceUniverse[0].addObjectToMap(creativeContent.scottDracula, emptyCell.x, emptyCell.y);
    
    return iceUniverse;
  },
  
  
  
  throneDialogue: {
      textStrings: ["pipp", "Hello what are you doing here?", "bimmyjo", "tell me more", "asdsadsad", "that is cool"],
      spaces: [0, 1, 0, 1, 0,],
      fgColours: ["blue", "white", "red", "white", "white", "white"],
      responseFunction: {"tell me more": menuResponse.throneDialogue2}
  },
  
  throneDialogue2: {
      textStrings: ["piasdasdasd", "Hsdsdsdre?", "bimsdddd", "Oh I'masdasdasdasdr things.", "jimmyjo", "that is cool"],
      spaces: [0, 1, 0, 1, 0,],
      fgColours: ["blue", "white", "red", "white", "blue", "white"],
      responseFunction: {}
  }
  
}










