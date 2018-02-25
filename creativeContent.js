var menuResponse = {
  
  // return true if there are no more text menus to display
  // return false if there are
  
  // your dialogue at the bottom should link back up here, then back down to the bottom again to start a new dialogue
  
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
  garbageBagDialogue2: function() {
    setTimeout(function() { showMenu(creativeContent.garbageBagDialogue2); }, 10);
    return false;
  },
  garbageBagDialogue3: function() {
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
  
  throneTile: "https://i.imgur.com/cnFUoqC.png",
  fireTile: "https://i.imgur.com/P9IXmPt.png",
  
  
  
  faceLegend: {
    "-": multiplyBy12(multiplyBy32([0, 0])),
    "#": multiplyBy12(multiplyBy32([1, 0])),
    "@": multiplyBy12(multiplyBy32([2, 0])),
    "a": multiplyBy12(multiplyBy32([3, 0])),
    "b": multiplyBy12(multiplyBy32([4, 0])),
    "c": multiplyBy12(multiplyBy32([5, 0])),
    "d": multiplyBy12(multiplyBy32([6, 0])),
    "e": multiplyBy12(multiplyBy32([7, 0])),
    "f": multiplyBy12(multiplyBy32([8, 0])),
    "g": multiplyBy12(multiplyBy32([9, 0])),
    "h": multiplyBy12(multiplyBy32([10, 0])),
    "i": multiplyBy12(multiplyBy32([11, 0])),
    "j": multiplyBy12(multiplyBy32([12, 0])),
    "k": multiplyBy12(multiplyBy32([13, 0])),
    "l": multiplyBy12(multiplyBy32([14, 0])),
    "m": multiplyBy12(multiplyBy32([15, 0])),
    "n": multiplyBy12(multiplyBy32([0, 1])),
    "o": multiplyBy12(multiplyBy32([1, 1])),
    "p": multiplyBy12(multiplyBy32([2, 1])),
    "q": multiplyBy12(multiplyBy32([3, 1])),
    "r": multiplyBy12(multiplyBy32([4, 1])),
    "s": multiplyBy12(multiplyBy32([5, 1])),
    "t": multiplyBy12(multiplyBy32([6, 1])),
    "u": multiplyBy12(multiplyBy32([7, 1])),
    "v": multiplyBy12(multiplyBy32([8, 1])),
    "w": multiplyBy12(multiplyBy32([9, 1])),
    "x": multiplyBy12(multiplyBy32([10, 1])),
    "y": multiplyBy12(multiplyBy32([11, 1])),
    "z": multiplyBy12(multiplyBy32([12, 1])),
  },
  
  masterPngLegend: {
    "@": multiplyBy32([0, 0]),
    "#": multiplyBy32([1, 0]),
    ".": multiplyBy32([2, 0]),
    ">": multiplyBy32([3, 0]),
    "<": multiplyBy32([4, 0]),
    "(": multiplyBy32([5, 0]),
    ")": multiplyBy32([6, 0]),
    "*": multiplyBy32([7, 0]),
    
    "+": multiplyBy32([0, 1]),
    "$": multiplyBy32([1, 1]),
    "&": multiplyBy32([2, 1]),
    "^": multiplyBy32([1, 1]),
    "?": multiplyBy32([3, 1]),
    "{": multiplyBy32([4, 1]),
    "}": multiplyBy32([5, 1]),
    "a": multiplyBy32([6, 1]),
    "b": multiplyBy32([7, 1]),
    
    "c": multiplyBy32([0, 2]),
    "!": multiplyBy32([1, 2]),
    "e": multiplyBy32([2, 2]),
    "f": multiplyBy32([3, 2]),
    "g": multiplyBy32([4, 2]),
    "h": multiplyBy32([5, 2]),
    "i": multiplyBy32([6, 2]),
    "j": multiplyBy32([7, 2]),
    
    "k": multiplyBy32([0, 3]),
    "l": multiplyBy32([1, 3]),
    "m": multiplyBy32([2, 3]),
    "n": multiplyBy32([3, 3]),
    "h": multiplyBy32([4, 3]),
    "i": multiplyBy32([5, 3]),
    "j": multiplyBy32([6, 3]),
    "k": multiplyBy32([7, 3]),
    
    "~": multiplyBy32([7, 7])
    

  },
  
  
  
  
  
  
  
  
  
  
  draculaThrone: function() {
    var throneRoom = [];
    var emptyCell = null;
    
    throneRoom[0] = Game.createMap(creativeContent.throneTile, creativeContent.masterPngLegend, 0, "Arena");
    emptyCell = throneRoom[0].randomEmptyCellCoords();
    throneRoom[0].addObjectToMap(new Object(char = "!", name = "Throne", wall = true, alive = false, clickFunction = "talk", myDialogue = creativeContent.throneDialogue, portraitChar = "-"), 10, 10);
    throneRoom[0].addObjectToMap(new Object(char = "*", name = "Scott Dracula", wall = true, alive = true, clickFunction = "talk", myDialogue = creativeContent.gameBeginDialogue, portraitChar = "#"), 11, 10);

    return throneRoom;
  },
  
  
  fireUniverse: function() {
    var fireUniverse = [];
    var emptyCell = null;
    
    for (var i = 0; i < 5; i++) {
      fireUniverse[i] = Game.createMap(creativeContent.fireTile, creativeContent.masterPngLegend, i);
      
       // stuff here will appear on every floor
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
    
    // put stuff on specific floors
    emptyCell = fireUniverse[0].randomEmptyCellCoords();
    fireUniverse[0].addObjectToMap(new Object(char = "i", name = "Garbage Bag", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.garbageBagDialogue, portraitChar = "g", moveType = "random"), emptyCell.x, emptyCell.y);
    
    return fireUniverse;
  },
  
  
  
  
  
  
  
  
  // object name colour: "red"
  // text colour: "lightyellow"
  // Response colour: "#b0ec62"
  
  defaultDialogue: {
      textStrings: ["I don't know what this is!"],
      spaces: [1],
      fgColours: ["white"],
      responseFunction: {}
  },
  
  garbageBagDialogue: {
      textStrings: ["Garbage Bag", "I am so full of garbage.", "{I'm so ready for your sweet sweet garbage}"],
      spaces: [0, 1, 1],
      fgColours: ["red", "yellow", "green"],
      responseFunction: {"{I'm so ready for your sweet sweet garbage}": menuResponse.garbageBagDialogue2}
  },  
  
  garbageBagDialogue2: {
      textStrings: ["Garbage Bag", "GROSS!? FOR WHAT!?.", "{I'm so sorry}"],
      spaces: [0, 1, 1],
      fgColours: ["red", "yellow", "green"],
      responseFunction: {"{I'm so sorry}": menuResponse.garbageBagDialogue3}
  },  

  
  gameBeginDialogue: {
      textStrings: ["Scott Dracula", "I'm sending you back in time.  Get ready.", "{I'm ready}"],
      spaces: [0, 1, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
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




