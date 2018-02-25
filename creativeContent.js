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
  LavaPersonDialogue2: function() {
    setTimeout(function() { showMenu(creativeContent.LavaPersonDialogue2); }, 10);
    return false;
  },
  LavaPersonDialogue3: function() {
    setTimeout(function() { showMenu(creativeContent.LavaPersonDialogue3); }, 10);
    return false;
  },
  LavaPerson2Dialogue2: function() {
    setTimeout(function() { showMenu(creativeContent.LavaPerson2Dialogue2); }, 10);
    return false;
  },
   LavaPerson2Dialogue3: function() {
    return true;
  },
  LavaPerson3Dialogue1: function() {
    setTimeout(function() { showMenu(creativeContent.LavaPerson3Dialogue1); }, 10);
    return false;
  },
  garbageBagDialogue2: function() {
    setTimeout(function() { showMenu(creativeContent.garbageBagDialogue2); }, 10);
    return false;
  },
  garbageBag2Dialogue1:function() {
    setTimeout(function() { showMenu(creativeContent.garbageBag2Dialogue1); }, 10);
    return false;
  },
  GarbageCanDialogue1:function() {
    setTimeout(function() { showMenu(creativeContent.GarbageCanDialogue1); }, 10);
    return false;
  },
  GarbageCanDialogue2:function() {
    return true;
  },
  VioletCrystalDialogue1:function() {
    return true;
  },
  SodaCan1Dialogue1:function() {
    return true;
  },
  LavaPersonDialogue4: function() {
    return true;
  },
  LavaPerson3Dialogue3: function() {
    return true;
  },
  garbageBagDialogue3: function() {
    return true;
  },
  garbageBag2Dialogue2: function() {
    return true;
  },
  gameBeginDialogue: function() {
    Game.travelTo(creativeContent.oldPersonUniverse);
    return true;
  },
  
  // Old Person Universe Dialogue/Descripts
  retiredRobocopDialogue: function() {
    setTimeout(function() { showMenu(creativeContent.retiredRobocopDialogue); }, 10);
    return false;
    
  },
  retiredRobocopDialogue2: function() {
     //setTimeout(function() { showMenu(creativeContent.retiredRobocopDialogue2); }, 10);
    return false;
  }
  
  
  
}













var creativeContent = {

  allFacePortraits:"https://i.imgur.com/SMQFIia.png",
  defaultBlackHUD:"https://i.imgur.com/VQ2sSG2.png",
  
  throneTile: "https://i.imgur.com/cnFUoqC.png",
  fireTile: "https://i.imgur.com/P9IXmPt.png",
  oldPersonTile: "https://i.imgur.com/S535JYS.png",

  
  
  
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
    "o": multiplyBy32([4, 3]),
    "p": multiplyBy32([5, 3]),
    "q": multiplyBy32([6, 3]),
    "r": multiplyBy32([7, 3]),
    
    "~": multiplyBy32([7, 7])
  },
  
  
  
  
  
  
  
  
  
  
  draculaThrone: function() {
    var throneRoom = [];
    var emptyCell = null;
    
    throneRoom[0] = Game.createMap(creativeContent.throneTile, creativeContent.masterPngLegend, 0, "Arena", visible = true);
    emptyCell = throneRoom[0].randomEmptyCellCoords();
    throneRoom[0].addObjectToMap(new Object(char = "!", name = "Throne", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.throneDialogue, portraitChar = "-"), 10, 10);
    throneRoom[0].addObjectToMap(new Object(char = "*", name = "Scott Dracula", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.gameBeginDialogue, portraitChar = "#"), 11, 10);
    return throneRoom;
  },
  
  
  fireUniverse: function() {
    var fireUniverse = [];
    var emptyCell = null;
    
    for (var i = 0; i < 3; i++) {
      fireUniverse[i] = Game.createMap(creativeContent.fireTile, creativeContent.masterPngLegend, i);
      
       // stuff here will appear on every floor
      emptyCell = fireUniverse[i].randomEmptyCellCoords();
      fireUniverse[i].addObjectToMap(new Object(char = "!", name = "Fire Plant", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.defaultDialogue, portraitChar = "-"), emptyCell.x, emptyCell.y);
      
      if (i != 0) {
        emptyCell = fireUniverse[i].randomEmptyCellCoords();
        fireUniverse[i].addObjectToMap(new Object(char = ">", name = "Downstairs", wall = false, alive = false, clickFunction = "floor down"), emptyCell.x, emptyCell.y);
      }
      
      if (i != 2) {
        emptyCell = fireUniverse[i].randomEmptyCellCoords();
        fireUniverse[i].addObjectToMap(new Object(char = "<", name = "Upstairs", wall = false, alive = false, clickFunction = "floor up"), emptyCell.x, emptyCell.y);
      }
    }
    
    // put stuff on specific floors
    emptyCell = fireUniverse[2].randomEmptyCellCoords();
    fireUniverse[2].addObjectToMap(new Object(char = "q", name = "Garbage Can", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.GarbageCanDialogue, portraitChar = "-"), emptyCell.x, emptyCell.y);
    
    emptyCell = fireUniverse[2].randomEmptyCellCoords();
    fireUniverse[2].addObjectToMap(new Object(char = "h", name = "Violet Crystal", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.VioletCrystalDialogue, portraitChar = "-"), emptyCell.x, emptyCell.y);

    emptyCell = fireUniverse[0].randomEmptyCellCoords();
    fireUniverse[0].addObjectToMap(new Object(char = "p", name = "Garbage Bag", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.garbageBagDialogue, portraitChar = "-"), emptyCell.x, emptyCell.y);

    emptyCell = fireUniverse[1].randomEmptyCellCoords();
    fireUniverse[1].addObjectToMap(new Object(char = "o", name = "Garbage Bag 2", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.garbageBag2Dialogue, portraitChar = "-"), emptyCell.x, emptyCell.y);
    
    emptyCell = fireUniverse[0].randomEmptyCellCoords();
    fireUniverse[0].addObjectToMap(new Object(char = "*", name = "Lava Person1", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.LavaPerson1Dialogue, portraitChar = "l", moveType = "follow"), emptyCell.x, emptyCell.y);
    
    emptyCell = fireUniverse[0].randomEmptyCellCoords();
    fireUniverse[0].addObjectToMap(new Object(char = "+", name = "Lava Person2", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.LavaPerson2Dialogue, portraitChar = "m", moveType = "follow"), emptyCell.x, emptyCell.y);
    
    emptyCell = fireUniverse[1].randomEmptyCellCoords();
    fireUniverse[1].addObjectToMap(new Object(char = "$", name = "Lava Person3", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.LavaPerson3Dialogue, portraitChar = "n", moveType = "random"), emptyCell.x, emptyCell.y);
    
    emptyCell = fireUniverse[1].randomEmptyCellCoords();
    fireUniverse[1].addObjectToMap(new Object(char = "k", name = "Soda Can", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.SodaCan1Dialogue, portraitChar = "-"), emptyCell.x, emptyCell.y);
    
    return fireUniverse;
  },
  
  
  
  
  
  
  oldPersonUniverse: function() {
    var oldPersonUniverse = [];
    var emptyCell = null;
    
    for (var i = 0; i < 3; i++) {
      oldPersonUniverse[i] = Game.createMap(creativeContent.oldPersonTile, creativeContent.masterPngLegend, i);
      
       // stuff here will appear on every floor

      
      if (i != 0) {
        emptyCell = oldPersonUniverse[i].randomEmptyCellCoords();
        oldPersonUniverse[i].addObjectToMap(new Object(char = ">", name = "Downstairs", wall = false, alive = false, clickFunction = "floor down"), emptyCell.x, emptyCell.y);
      }
      
      if (i != 2) {
        emptyCell = oldPersonUniverse[i].randomEmptyCellCoords();
        oldPersonUniverse[i].addObjectToMap(new Object(char = "<", name = "Upstairs", wall = false, alive = false, clickFunction = "floor up"), emptyCell.x, emptyCell.y);
      }
    }
    
    // put stuff on specific floors

    emptyCell = oldPersonUniverse[0].randomEmptyCellCoords();
    oldPersonUniverse[0].addObjectToMap(new Object(char = "*", name = "Robocop - Retired", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.retiredRobocopDialogue, portraitChar = "-", moveType = "follow"), emptyCell.x, emptyCell.y);

  return oldPersonUniverse;
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
    
  GarbageCanDialogue: {
      textStrings: ["Trash Can", "The sides of this tin warrior bulge with the infinite elbows of a wasteful society. You've been around the block a few times but you've never seen a cram like this before.", "{Can you tell me how to get to--}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{Can you tell me how to get to--}": menuResponse.GarbageCanDialogue1}
  },
    
  GarbageCanDialogue1: {
      textStrings: ["Trash Can", "Nope.", "{Well what good are you?}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{Well what good are you?}": menuResponse.GarbageCanDialogue2}
  },
  
  garbageBagDialogue: {
      textStrings: ["Garbage Bag", "I'm so full of garbage, I'm about ready to BURST! I think someone put a diaper in here..", "{I'm so ready,}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{I'm so ready,}": menuResponse.garbageBagDialogue2}
  },  
    
  garbageBag2Dialogue: {
      textStrings: ["Another Garbage Bag", "So you just go around in caves talking to bags of strange garbage?", "{So what if I do!?!?}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{So what if I do!?!?}": menuResponse.garbageBag2Dialogue1}
  },  
  
  garbageBag2Dialogue1: {
      textStrings: ["Another Garbage Bag", "Nuthin baby nevermind, you do you.", "{I will! I will do me!}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{I will! I will do me!}": menuResponse.garbageBag2Dialogue2}
  },
  
  garbageBagDialogue2: {
      textStrings: ["Garbage Bag", "GROSS! Ready for WHAT??.", "{Yah no nevermind.}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{Yah no nevermind.}": menuResponse.garbageBagDialogue3}
  },  

  LavaPerson1Dialogue: {
      textStrings: ["Hunk, The Lava Person", "A fresh face, don't get too many visitors down here these days.. R U Cool?", "{Ice cold, baby.}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{Ice cold, baby.}": menuResponse.LavaPersonDialogue2}
  },  
  
  LavaPersonDialogue2: {
      textStrings: ["Hunk, The Lava Person", "Heck yeah that's what I'm talking about! So do you have any on you? Any of that sweet stuff?", "{Errrr...}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{Errrr...}": menuResponse.LavaPersonDialogue3}
  },
  
  LavaPersonDialogue3: {
      textStrings: ["Hunk, The Lava Person", "Look dude if you don't have any SPIZ on you just take a hike.", "{Whatever.}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{Whatever.}": menuResponse.LavaPersonDialogue4}
  },
  
  LavaPerson2Dialogue: {
      textStrings: ["Flipp Smokewiff, The Lava Person", "I had a dream once that there were HEAPS of worlds beyond this one, bro can you even imagine?", "{Yeah, I actually can.}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{Yeah, I actually can.}": menuResponse.LavaPerson2Dialogue2}
  },
  
  LavaPerson2Dialogue2: {
      textStrings: ["Flipp Smokewiff, The Lava Person", "You must be absolutely wrecked on candy right now! I had so much this morning I'm ready to believe in anything. Like a whole WORLD made of old-ass retired cyborg cops!", "{Wait, now I actually can't.}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{Wait, now I actually can't.}": menuResponse.LavaPerson2Dialogue3}
  },
  
  LavaPerson3Dialogue: {
      textStrings: ["Gatcha Cablebinder, The Grabby Lava Person", "Just.. a little bit.. closer..", "{I can totally see AND hear you, dude.}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{I can totally see AND hear you, dude.}": menuResponse.LavaPerson3Dialogue1}
  },
  
  LavaPerson3Dialogue1: {
      textStrings: ["Gatcha Cablebinder, The Grabby Lava Person", "EMPTY YOUR POCKETS, KNAVE! I need the STICKY stuff! The Melty, chocolatey, messy NASTY stuff!", "{Yeah no. Seems like everyone down here is addicted to sugar.}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{Yeah no. Seems like everyone down here is addicted to sugar.}": menuResponse.LavaPerson3Dialogue3}
  },

  SodaCan1Dialogue: {
      textStrings: ["A Fast Looking Soda Can", "This can isn't alive and can't speak, but you get the impression that if WAS speaking you couldn't keep up with it.", "{RIP, Recycle.}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{RIP, Recycle.}": menuResponse.SodaCan1Dialogue1}
  },
  
  VioletCrystalDialogue: {
      textStrings: ["A Mysterious Violet Crystal", "This strange crystaline formation almost pulses with weird energy. You could get lost gazing into its lovely facetous depths.", "{But I'm a pirate so *FART* YEAAAARRRR!}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{But I'm a pirate so *FART* YEAAAARRRR!}": menuResponse.VioletCrystalDialogue1}
  },
  
  gameBeginDialogue: {
      textStrings: ["Scott Dracula", "SCARLIC! I am feeling bored and lazy... Prepare your pirate body to be sent far into the depths of Space and Time for my amusement.", "{YAARR!}"],
      spaces: [1, 2, 1],
      fgColours: ["red", "lightyellow", "#b0ec62"],
      responseFunction: {"{YAARR!}": menuResponse.gameBeginDialogue}
  },
    
  throneDialogue: {
      textStrings: ["Throne", "Hello what are you doing here?", "Name Example", "{Tell me More}"],
      spaces: [0, 1, 0],
      fgColours: ["red", "white", "red", "white"],
      responseFunction: {"{Tell me More}": menuResponse.throneDialogue2}
  },
  
  throneDialogue2: {
      textStrings: ["Throne", "there is not much more to tell"],
      spaces: [0, 1],
      fgColours: ["red", "white"],
      responseFunction: {"there is not much more to tell": menuResponse.throneDialogue3}
  },
  
  throneDialogue3: {
      textStrings: ["Throne", "stop asking"],
      spaces: [0, 1],
      fgColours: ["red", "white"],
      responseFunction: {}
  },
  
  // OldPersonUniverse Dialogue

  retiredRobocopDialogue: {
      textStrings: ["Robocop - Retired", "Hello there, Sonny. You look strong and... er, smart. Can you help out a Robo Pop in need?", "{Yar, not another has-been looking for favours!}"],
      spaces: [0, 1],
      fgColours: ["red", "lightyellow", "#b0ec62", "lightyellow"],
      responseFunction: {"{Yar, another has-been looking for favours?}": menuResponse.retiredRobocopDialogue2}
  },
  retiredRobocopDialogue2: {
      textStrings: ["Robocop - Retired", "Well sure, I'm just a retired cop looking for the REAL Good Stuff. Not the Regular Good Ones. You know the ones I mean.", "...", "Ah that sweet mess. Where have my robotic dentures got to now?"],
      spaces: [0, 1, 1, 1],
      fgColours: ["red", "lightyellow", "#b0ec62", "lightyellow"],
      responseFunction: {}
  }
}





