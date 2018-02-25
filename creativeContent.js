var menuResponse = {
  done: function() {
    return true;
  },
  throneDialogue2: function() {
    setTimeout(function() { showMenu(creativeContent.throneDialogue2); }, 10);
    return true;
  },
  throneDialogue3: function() {
    setTimeout(function() { showMenu(creativeContent.throneDialogue3); }, 10);
    return true;
  },
  gameBeginDialogue: function() {
    Game.travelTo(creativeContent.fireUniverse);
    return true;
  }
}

var creativeContent = {

  allFacePortraits:"https://i.imgur.com/nKkmYRG.png",
  defaultBlackHUD:"https://i.imgur.com/VQ2sSG2.png",
  
  throneTile: "https://i.imgur.com/C2pOPKO.png",
  fireTile: "https://i.imgur.com/M4rxuYB.png",
  
  faceLegend: {
    "#": multiplyBy12(multiplyBy32([0, 0])),
    "@": multiplyBy12(multiplyBy32([1, 0])),
    ".": multiplyBy12(multiplyBy32([2, 0])),
    "a": multiplyBy12(multiplyBy32([3, 0])),
  },
  
  masterPngLegend: {
    "@": multiplyBy32([0, 0]),
    "#": multiplyBy32([1, 0]),
    ".": multiplyBy32([2, 0]),
    "!": multiplyBy32([1, 2]),
    ">": multiplyBy32([3, 0]),
    "<": multiplyBy32([4, 0]),
    "a": multiplyBy32([7, 0])
  },
  
  mainPlayer: new Object(char = "@", name = "Scarlic", wall = false, alive = true, clickFunction = null, myDialogue = null, portraitChar = "@"),
  
  
  draculaThrone: function() {
    var throneRoom = [];
    var emptyCell = null;
    
    throneRoom[0] = Game.createMap(creativeContent.throneTile, creativeContent.masterPngLegend, 0, "Arena");
    emptyCell = throneRoom[0].randomEmptyCellCoords();
    throneRoom[0].addObjectToMap(new Object(char = "!", name = "Throne", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.throneDialogue, portraitChar = "a"), 10, 10);
    throneRoom[0].addObjectToMap(new Object(char = "a", name = "Scott Dracula", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.gameBeginDialogue, portraitChar = "@"), 11, 10);
    return throneRoom;
  },
  
  
  
  fireUniverse: function() {
    var fireUniverse = [];
    var emptyCell = null;
    
    for (var i = 0; i < 5; i++) {
      fireUniverse[i] = Game.createMap(creativeContent.fireTile, creativeContent.masterPngLegend, i);
      
      emptyCell = fireUniverse[i].randomEmptyCellCoords();
      fireUniverse[i].addObjectToMap(new Object(char = "!", name = "Throne", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.throneDialogue), emptyCell.x, emptyCell.y);
      
      if (i != 0) {
        emptyCell = fireUniverse[i].randomEmptyCellCoords();
        fireUniverse[i].addObjectToMap(new Object(char = "<", name = "Downstairs", wall = false, alive = false, clickFunction = "floor down"), emptyCell.x, emptyCell.y);
      }
      
      if (i != 4) {
        emptyCell = fireUniverse[i].randomEmptyCellCoords();
        fireUniverse[i].addObjectToMap(new Object(char = ">", name = "Upstairs", wall = false, alive = false, clickFunction = "floor up"), emptyCell.x, emptyCell.y);
      }
      
    }
    
    return fireUniverse;
  },
  
  gameBeginDialogue: {
      textStrings: ["Scott Dracula", "I'm sending you back in time.  Get ready."],
      spaces: [0, 1],
      fgColours: ["red", "white"],
      responseFunction: {"I'm sending you back in time.  Get ready.": menuResponse.gameBeginDialogue}
  },
  


  throneDialogue: {
      textStrings: ["pipp", "Hello what are you doing here?", "bimmyjo", "tell me more"],
      spaces: [0, 1, 0],
      fgColours: ["blue", "white", "red", "white"],
      responseFunction: {"tell me more": menuResponse.throneDialogue2}
  },
  
  throneDialogue2: {
      textStrings: ["Throne", "there is not much more to tell"],
      spaces: [0, 1],
      fgColours: ["blue", "white"],
      responseFunction: {"there is not much more to tell": menuResponse.throneDialogue3}
  },
  
  throneDialogue3: {
      textStrings: ["Throne", "stop asking"],
      spaces: [0, 1],
      fgColours: ["blue", "white"],
      responseFunction: {}
  }
  
  

  
}




