var menuResponse = {
  done: function() {
    return true;
  },
  throneDialogue2: function() {
    setTimeout(function() { showMenu(creativeContent.throneDialogue2); }, 10);
    return false;
  },
  throneDialogue3: function() {
    setTimeout(function() { showMenu(creativeContent.throneDialogue3); }, 10);
    return false;
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
    "-": multiplyBy12(multiplyBy32([0, 0])),
    "#": multiplyBy12(multiplyBy32([1, 0])),
    "@": multiplyBy12(multiplyBy32([2, 0])),
    "a": multiplyBy12(multiplyBy32([3, 0])),
    "a": multiplyBy12(multiplyBy32([4, 0])),
    "a": multiplyBy12(multiplyBy32([5, 0])),
    "a": multiplyBy12(multiplyBy32([6, 0])),
    "a": multiplyBy12(multiplyBy32([7, 0])),
    "a": multiplyBy12(multiplyBy32([0, 1])),
    "a": multiplyBy12(multiplyBy32([1, 1])),
    "a": multiplyBy12(multiplyBy32([2, 1])),
    "a": multiplyBy12(multiplyBy32([3, 1])),
    "a": multiplyBy12(multiplyBy32([4, 1])),
    "a": multiplyBy12(multiplyBy32([5, 1])),
    "a": multiplyBy12(multiplyBy32([6, 1])),
    "a": multiplyBy12(multiplyBy32([7, 1])),
    "a": multiplyBy12(multiplyBy32([0, 2])),
    "a": multiplyBy12(multiplyBy32([1, 2])),
    "a": multiplyBy12(multiplyBy32([2, 2])),
    "a": multiplyBy12(multiplyBy32([3, 2])),
    "a": multiplyBy12(multiplyBy32([4, 2])),
    "a": multiplyBy12(multiplyBy32([5, 2])),
    "a": multiplyBy12(multiplyBy32([6, 2])),
    "a": multiplyBy12(multiplyBy32([7, 2])),
    "a": multiplyBy12(multiplyBy32([0, 3])),
    "a": multiplyBy12(multiplyBy32([1, 3])),
    "a": multiplyBy12(multiplyBy32([2, 3])),
    "a": multiplyBy12(multiplyBy32([3, 3])),
    "a": multiplyBy12(multiplyBy32([4, 3])),
    "a": multiplyBy12(multiplyBy32([5, 3])),
    "a": multiplyBy12(multiplyBy32([6, 3])),
    "a": multiplyBy12(multiplyBy32([7, 3])),


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
  
  
  draculaThrone: function() {
    var throneRoom = [];
    var emptyCell = null;
    
    throneRoom[0] = Game.createMap(creativeContent.throneTile, creativeContent.masterPngLegend, 0, "Arena");
    emptyCell = throneRoom[0].randomEmptyCellCoords();
    throneRoom[0].addObjectToMap(new Object(char = "!", name = "Throne", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.throneDialogue, portraitChar = "-"), 10, 10);
    throneRoom[0].addObjectToMap(new Object(char = "a", name = "Scott Dracula", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.gameBeginDialogue, portraitChar = "#"), 11, 10);
    return throneRoom;
  },
  
  fireUniverse: function() {
    var fireUniverse = [];
    var emptyCell = null;
    
    for (var i = 0; i < 5; i++) {
      fireUniverse[i] = Game.createMap(creativeContent.fireTile, creativeContent.masterPngLegend, i);
      
      emptyCell = fireUniverse[i].randomEmptyCellCoords();
      fireUniverse[i].addObjectToMap(new Object(char = "!", name = "Fire Plant", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.defaultDialogue, portraitChar = "-"), emptyCell.x, emptyCell.y);
      
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
  
  defaultDialogue: {
      textStrings: ["I don't know what this is!"],
      spaces: [1],
      fgColours: ["white"],
      responseFunction: {}
  },
  
  gameBeginDialogue: {
      textStrings: ["Scott Dracula", "I'm sending you back in time.  Get ready.", "{I'm ready}"],
      spaces: [0, 1, 1],
      fgColours: ["red", "white", "white"],
      responseFunction: {"{I'm ready}": menuResponse.gameBeginDialogue}
  },
  
  throneDialogue: {
      textStrings: ["Throne", "Hello what are you doing here?", "Name Example", "{Tell me More}"],
      spaces: [0, 1, 0],
      fgColours: ["blue", "white", "red", "white"],
      responseFunction: {"{Tell me More}": menuResponse.throneDialogue2}
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




