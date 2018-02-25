var creativeContent = {

  allFacePortraits:"https://i.imgur.com/wb3gFai.png",
  
  throneTile: "https://i.imgur.com/C2pOPKO.png",
  fireTile: "https://i.imgur.com/M4rxuYB.png",
  
  faceLegend: {
    "#": multiplyBy12(multiplyBy32([1, 0])),
    "@": multiplyBy12(multiplyBy32([0, 0])),
    "a": multiplyBy12(multiplyBy32([2, 0])),
  },
  
  throneLegend: {
    "#": multiplyBy32([1, 0]),
    ".": multiplyBy32([2, 0]),
    "@": multiplyBy32([0, 0]),
    "!": multiplyBy32([1, 2]),
    ">": multiplyBy32([3, 0]),
    "<": multiplyBy32([4, 0]),
    "a": multiplyBy32([7, 0])
  },
  
  scottDracula: new Object(char = "@", name = "Scott Dracula", wall = false, alive = true),
  
  
  draculaThrone: function() {
    var throneRoom = [];
    var emptyCell = null;
    
    throneRoom[0] = Game.createMap(creativeContent.throneTile, creativeContent.throneLegend, 0, "Arena");
    emptyCell = throneRoom[0].randomEmptyCellCoords();
    throneRoom[0].addObjectToMap(new Object(char = "!", name = "Throne", wall = false, alive = false, clickFunction = ""), 10, 10);
    throneRoom[0].addObjectToMap(new Object(char = "a", name = "Scott Dracula", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.gameBeginDialogue), 11, 10);
    return throneRoom;
  },
  
  
  
  iceUniverse: function() {
    var iceUniverse = [];
    var emptyCell = null;
    
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
    
    return iceUniverse;
  },
  
  gameBeginDialogue: {
      textStrings: ["Scott Dracula", "I'm sending you back in time.  Get ready."],
      spaces: [0, 1],
      fgColours: ["red", "white"],
      responseFunction: {"I'm sending you back in time.  Get ready.": menuResponse.gameBeginDialogue}
  },
  

  
  throneDialogue: {
      textStrings: ["pipp", "Hello what are you doing here?", "bimmyjo", "tell me more", "asdsadsad", "that is cool"],
      spaces: [0, 1, 0, 1, 0,],
      fgColours: ["blue", "white", "red", "white", "white", "white"],
      responseFunction: {"tell me more": menuResponse.throneDialogue2}
  },
  
  throneDialogue2: {
      textStrings: ["Throne", "there is not much more to tell"],
      spaces: [0, 1],
      fgColours: ["blue", "white"],
      responseFunction: {}
  }
  
  
  
  
  
}




