var randomFloor = 0;

var menuResponse = {
  
  // return true if there are no more text menus to display
  // return false if there are
  
  // your dialogue at the bottom should link back up here, then back down to the bottom again to start a new dialogue
  
  // Throne room Dialogue/Descripts
  
//coleslaw in index.html, copy/paste line 6 to change 'test map yo' in window.
  
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
  
bootyDescript: function() {
    setTimeout(function() { showMenu(creativeContent.bootyDescript); }, 10);
    return false;
  },
  fernDescript: function() {
    setTimeout(function() { showMenu(creativeContent.fernDescript); }, 10);
    return false;
  },
  fernDescript: function() {
    setTimeout(function() { showMenu(creativeContent.fernDescript); }, 10);
    return false;
  },
  visionTreeDescript: function() {
    setTimeout(function() { showMenu(creativeContent.visionTreeDescript); }, 10);
    return false;
  },
  figTreeDescript: function() {
    setTimeout(function() { showMenu(creativeContent.figTreeDescript); }, 10);
    return false;
  },
  bloodMagicDescript: function() {
    setTimeout(function() { showMenu(creativeContent.bloodMagicDescript); }, 10);
    return false;
  },
  ornateChestDescript: function() {
    setTimeout(function() { showMenu(creativeContent.ornateChestDescript); }, 10);
    return false;
  },
  enchantedChestDescript: function() {
    setTimeout(function() { showMenu(creativeContent.enchantedChestDescript); }, 10);
    return false;
  },
  rubiesDescript: function() {
    setTimeout(function() { showMenu(creativeContent.rubiesDescript); }, 10);
    return false;
  },
  emeraldsDescript: function() {
    setTimeout(function() { showMenu(creativeContent.emeraldsDescript); }, 10);
    return false;
  },
  

  
  //LAVAWORLD
  
  // fire Universe Dialogue/Descripts
  
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
  SodaBlue1Dialogue: function() {
    return true;
  },
  SodaBlue1Dialogue: function() {
    return true;
  },
  LavaPerson4Dialogue: function() {
    return true;
  },
  VolcanoDescription: function() {
    return true;
  },
  SPIZDescription: function() {
    return true;
  },
  BlueCrystalDescription: function() {
    return true;
  },
  YumBarDescription: function() {
    return true;
  },
  LavaPerson5Dialogue: function() {
    return true;
  },
  LavaPerson6Dialogue: function() {
    return true;
  },
  //LAVAWORLD ends
  
  
  gameBeginDialogue: function() {
    // hd7fdhdf78
    Game.travelToRandomUnvisitedUniverse();
    return true;
  },
  // snorkelbutt - nurse Rachet dialogue created
  // Old Person Universe Dialogue/Descripts
  retiredRobocopDialogue: function() {
    setTimeout(function() { showMenu(creativeContent.retiredRobocopDialogue); }, 10);
    return false; 
  },
  retiredRobocopDialogue2: function() {
    setTimeout(function() { showMenu(creativeContent.retiredRobocopDialogue2); }, 10);
    return false;
  },
  retiredRobocopDialogue3: function() {
    setTimeout(function() { showMenu(creativeContent.retiredRobocopDialogue3); }, 10);
    return false;
  },
  retiredRobocop2Dialogue2: function() {
    setTimeout(function() { showMenu(creativeContent.retiredRobocop2Dialogue2); }, 10);
    return false;
  },
  retiredRobocop2Dialogue3: function() {
    setTimeout(function() { showMenu(creativeContent.retiredRobocop2Dialogue3); }, 10);
    return false;
  },
  retiredRobocop3Dialogue: function() {
    return true;
  },  
  retiredRobocop4Dialogue: function() {
    return true;
  },
  nurseRachetDialogue: function() {
    return true;
  },  
  werthersDescript: function() {
    return true;
  },  
  wheelchairDescript: function() {
    return true;
  },  
  crosswordDescript: function() {
    return true;
  },  
  mentosDescript: function() {
    return true;
  },  
  badOnesDescript: function() {
    return true;
  },  
  funOnesDescript: function() {
    return true;
  },  
  goodOnesDescript: function() {
    return true;
  },
  
  
  // Ice Universe Dialogue/Descripts
  
YollandaDialogue1: function() { 
    return true;
  },
  
  PickAxeDescript: function() {
    return true;
  },
  
  ICEBUSHDescript: function() {
    return true;
  },
  
  FrozenPizzaDescript: function() {
    return true;
  },
  
  FrancisBubblesmithDescript: function() {
    return true;
  },
  
  ShiraBalewaDescript: function () {
    return true;
  },
  
  GreenFishDescription: function () {
    return true;
  },
  
  YippersDescription: function () {
    return true;
  },
  
  MacReadyDescription: function () {
    return true;
  },
  
  TheThingDescription: function () {
    return true;
  },
  
  BlueFishDescription: function () {
    return true;
  },
  
  IceFishingRodDescription: function () {
    return true;
  },
  
  SweetheartOctopussDescription: function () {
    return true;
  },
  
  // Robocop Universe Dialogue/Descripts
  
  robocopDialogue: function () {
  return true;
  },
  robocop2Dialogue: function () {
    return true;
  },
  robocop3Dialogue: function () {
    return true;
  },
  popCopDialogue: function () {
    return true;
  },

 rickDogDialogue: function () {
    return true;
  },
 trashCanDialogue: function () {
    return true;
    },
 cheeseburgerpDialogue: function () {
    return true;
  },
  wiresDialogue: function () {
    return true;
  },
  handDialogue: function () {
    return true;
  },
  legDialogue: function () {
    return true;
  },

  // Hotdog Universei Dialogue/Descripts
//Description Functions

// snorkelbutt - hot dog text updated - all  
  fryGuyDescript: function() {
    setTimeout(function() { showMenu(creativeContent.fryGuyDescript); }, 10);
    return false; 
  },
  fryGuyDescript2: function() {
    setTimeout(function() { showMenu(creativeContent.fryGuyDescript2); }, 10);
    return false;
  },
  fryGuyDescript3: function() {
    return true;
  },
  relishDescript: function() {
    setTimeout(function() { showMenu(creativeContent.relishDescript); }, 10);
    return true;
  },
  ketchupDescript: function() {
    setTimeout(function() { showMenu(creativeContent.ketchupDescript); }, 10);
    return false;
  },
  allDressedDescript: function() {
    setTimeout(function() { showMenu(creativeContent.allDressedDescript); }, 10);
    return false;
  },
  allDressedDescript2: function() {
    return true;
  },
  fineMustardDescript: function() {
    setTimeout(function() { showMenu(creativeContent.fineMustardDescript); }, 10);
    return true;
  },
  hotgodDescript: function() {
    setTimeout(function() { showMenu(creativeContent.hotgodDescript); }, 10);
    return true;
  },
  hdPlantDescript: function() {
    return true;
  },  
  hdKetchupDescript: function() {
    return true;
  },  
  hdRelishDescript: function() {
    return true;
  },  
  rotdogDescript: function() {
    return true;
  },  
  fineYellowDescript: function() {
    return true;
  },  
  realTomatoDescript: function() {
    return true;
  },  
  bigOneDescript: function() {
    return true;
  },
  
  portalPass: function() {
    Game.travelToRandomUnvisitedUniverse();
    return true;
  },
  
  fireu: function() {
    Game.travelToRandomUnvisitedUniverse("Fire Universe");
    return true;
  },
  iceu: function() {
    Game.travelToRandomUnvisitedUniverse("Ice Universe");
    return true;
  },
  robocopu: function() {
    Game.travelToRandomUnvisitedUniverse("Robocop Universe");
    return true;
  },
  oldpersonu: function() {
    Game.travelToRandomUnvisitedUniverse("Old Person Universe");
    return true;
  },
  hotdogu: function() {
    Game.travelToRandomUnvisitedUniverse("Hot Dog Universe");
    return true;
  },

  // hd7fdhdf78
  gameEnd: function() {
    var allDiv = document.getElementsByClassName("totalDiv")[randomFloor];
    allDiv.style.display = "none";
    show_image("https://i.imgur.com/QrpX3Ps.png", 1728, 768, "A Wolfdog Studios production.  Alex Eagleson, Jodie Eagleson & Aaron Dagenais.");
    var score = document.createElement("h1");
    score.innerHTML = "Congratulations, you collected " + Game.stolenItems + " pieces of space loot!";
    document.body.appendChild(score);
    showIntroInfo();
    return true;
  },
  
  sendToBakula: function() {
    Game.travelToRandomUnvisitedUniverse("Bakula Universe");
    return true;
  },
  
  
  steal: function() {
    Game.player.steal(Game.player.myCurrentChat);
    return true;
  }
}


var creativeContent = {
// snorkelbutt - tile sets updated (all)
  allFacePortraits:"https://i.imgur.com/vGjMkXD.png",
  defaultBlackHUD:"https://i.imgur.com/VQ2sSG2.png",
  
  // hd7fdhdf78
  throneTile: "https://i.imgur.com/0ezvL0O.png",
  fireTile: "https://i.imgur.com/P9IXmPt.png",
  oldPersonTile: "https://i.imgur.com/R21tfHE.png",  
  hotDogTile: "https://i.imgur.com/Ai7caH4.png",
  iceTile: "https://i.imgur.com/qQ1lgrF.png",
  robocopTile: "https://i.imgur.com/qWTXTHZ.png",
  bakulaTile: "https://i.imgur.com/ReUCLx9.png",
  
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
    
    ")": multiplyBy12(multiplyBy32([0, 2])),
    "*": multiplyBy12(multiplyBy32([2, 2])),
    "(": multiplyBy12(multiplyBy32([0, 3]))
    
    
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
    
    "s": multiplyBy32([0, 4]),
    "t": multiplyBy32([1, 4]),
    "u": multiplyBy32([2, 4]),
    "v": multiplyBy32([3, 4]),
    "w": multiplyBy32([4, 4]),
    "x": multiplyBy32([5, 4]),
    "y": multiplyBy32([6, 4]),
    "z": multiplyBy32([7, 4]),
    
    "1": multiplyBy32([0, 5]),
    "2": multiplyBy32([1, 5]),
    "3": multiplyBy32([2, 5]),
    "4": multiplyBy32([3, 5]),
    "5": multiplyBy32([4, 5]),
    "6": multiplyBy32([5, 5]),
    "7": multiplyBy32([6, 5]),
    "8": multiplyBy32([7, 5]),


    

    

    
    "~": multiplyBy32([7, 7])
  },

  
  draculaThrone: function() {
    var throneRoom = [];
    var randomFloor = (rollDie(2) - 1); emptyCell = null;
    
    throneRoom[0] = Game.createMap(creativeContent.throneTile, creativeContent.masterPngLegend, 0, "Arena", visible = false);

    throneRoom[0].addObjectToMap(new Object(char = "!", name = "Throne", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.throneDialogue, portraitChar = "-", moveType = "", allowSteal = false), 13, 9);

    
    throneRoom[0].addObjectToMap(new Object(char = ")", name = "Scott Dracula", wall = true, alive = false, clickFunction = "talk", myDialogue = creativeContent.gameBeginDialogue, portraitChar = "#", moveType = "", allowSteal = false), 13, 10);
    throneRoom[0].addObjectToMap(new Object(char = "a", name = "Scott Dracula", wall = true, alive = false, clickFunction = "talk", myDialogue = creativeContent.gameBeginDialogue, portraitChar = "#", moveType = "", allowSteal = false), 13, 11);
    throneRoom[0].addObjectToMap(new Object(char = "*", name = "Scott Dracula", wall = true, alive = false, clickFunction = "talk", myDialogue = creativeContent.gameBeginDialogue, portraitChar = "#", moveType = "", allowSteal = false), 14, 10);
    throneRoom[0].addObjectToMap(new Object(char = "b", name = "Scott Dracula", wall = true, alive = false, clickFunction = "talk", myDialogue = creativeContent.gameBeginDialogue, portraitChar = "#", moveType = "", allowSteal = false), 14, 11);


    for (var i = 1; i < Game.gameWidth - 1; i++) { 
      for (var j = 1; j < Game.gameHeight - 1; j++) { 
        if (i < 5 || i > 20 || j < 5 || j > 20) {
          throneRoom[0].map[i + "," + j].wall = true;
          throneRoom[0].map[i + "," + j].char = "#";
        }
      }
    }

    for (var i = 5; i < Game.gameHeight - 3; i++) { 
      throneRoom[0].addObjectToMap(new Object(char = "f", name = "Healthy Fern", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.fernDescript, portraitChar = "-"), 5, i);
      throneRoom[0].addObjectToMap(new Object(char = "f", name = "Healthy Fern", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.fernDescript, portraitChar = "-"), 20, i);
    }
    //coleslaw tidying the throne room
	
    throneRoom[0].addObjectToMap(new Object(char = "g", name = "Vision Tree", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.visionTreeDescript, portraitChar = "-"), 18, 20);
    throneRoom[0].addObjectToMap(new Object(char = "g", name = "Vision Tree", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.visionTreeDescript, portraitChar = "-"), 7, 20);
    throneRoom[0].addObjectToMap(new Object(char = "h", name = "Fig Tree of Foresight", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.figTreeDescript, portraitChar = "-"), 19, 20);
    
    if (!Game.gameDone) {
      throneRoom[0].addObjectToMap(new Object(char = "i", name = "Mystical Blood Magic Chrysanthemum", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.bloodMagicDescript, portraitChar = "-"), 6, 20);
    }
    
    throneRoom[0].addObjectToMap(new Object(char = "e", name = "Pile of Booty", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.bootyDescript, portraitChar = "-"), 11, 8);
    throneRoom[0].addObjectToMap(new Object(char = "e", name = "Pile of Booty", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.bootyDescript, portraitChar = "-"), 12, 8);
    throneRoom[0].addObjectToMap(new Object(char = "e", name = "Pile of Booty", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.bootyDescript, portraitChar = "-"), 13, 8);
    throneRoom[0].addObjectToMap(new Object(char = "e", name = "Pile of Booty", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.bootyDescript, portraitChar = "-"), 14, 8);
    throneRoom[0].addObjectToMap(new Object(char = "e", name = "Pile of Booty", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.bootyDescript, portraitChar = "-"), 15, 8);
  
    throneRoom[0].addObjectToMap(new Object(char = "j", name = "Ornate Chest", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.ornateChestDescript, portraitChar = "-"), 14, 9);
    throneRoom[0].addObjectToMap(new Object(char = "k", name = "Enhanced Ornate Chest", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.enhancedChestDescript, portraitChar = "-"), 12, 9);

    throneRoom[0].addObjectToMap(new Object(char = "l", name = "Sparkling Rubies", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.rubiesDescript, portraitChar = "-"), 11, 7);
    throneRoom[0].addObjectToMap(new Object(char = "l", name = "Sparkling Rubies", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.rubiesDescript, portraitChar = "-"), 12, 7);
    throneRoom[0].addObjectToMap(new Object(char = "l", name = "Sparkling Rubies", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.rubiesDescript, portraitChar = "-"), 13, 7);
    throneRoom[0].addObjectToMap(new Object(char = "l", name = "Sparkling Rubies", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.rubiesDescript, portraitChar = "-"), 14, 7);
    throneRoom[0].addObjectToMap(new Object(char = "l", name = "Sparkling Rubies", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.rubiesDescript, portraitChar = "-"), 15, 7);
    throneRoom[0].addObjectToMap(new Object(char = "l", name = "Sparkling Rubies", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.rubiesDescript, portraitChar = "-"), 11, 7);
  
    throneRoom[0].addObjectToMap(new Object(char = "m", name = "Emerald Shards", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.emeraldsDescript, portraitChar = "-"), 12, 6);
    throneRoom[0].addObjectToMap(new Object(char = "m", name = "Emerald Shards", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.emeraldsDescript, portraitChar = "-"), 13, 6);
    throneRoom[0].addObjectToMap(new Object(char = "m", name = "Emerald Shards", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.emeraldsDescript, portraitChar = "-"), 14, 6);
    
    

    
    // hd7fdhdf78
    if (Game.gameDone) {
      var die = null;
      var bagChar = null;
      for (var i = 0; i < Game.stolenItems; i++) {
        die = (rollDie(2) - 1);
        if (die === 1) {
          bagChar = "o";
        } else {
          bagChar = "p";
        }

        endx = rollDie(8) + 6;
        endy = rollDie(3) + 15;
        
        emptyCell = {x: endx, y: endy};

        
        throneRoom[0].addObjectToMap(new Object(char = bagChar, name = "Interdimensional Booty", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.bootyDialogue, portraitChar = "-", moveType = "", allowSteal = false), emptyCell.x, emptyCell.y);
      }
    }
    return throneRoom;
  },
  
  fireUniverse: function() {
    var fireUniverse = [];
    var randomFloor = (rollDie(2) - 1); emptyCell = null;
    
    for (var i = 0; i < 2; i++) {
      fireUniverse[i] = Game.createMap(creativeContent.fireTile, creativeContent.masterPngLegend, i);
      

      
      if (i != 0) {
        randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[i].randomEmptyCellCoords();
        fireUniverse[i].addObjectToMap(new Object(char = ">", name = "Downstairs", wall = false, alive = false, clickFunction = "floor down"), emptyCell.x, emptyCell.y);
      }
      
      if (i != 1) {
        randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[i].randomEmptyCellCoords();
        fireUniverse[i].addObjectToMap(new Object(char = "<", name = "Upstairs", wall = false, alive = false, clickFunction = "floor up"), emptyCell.x, emptyCell.y);
      }
    }
    
    //LAVAWORLD starts
    
     // stuff here will appear on every floor
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "!", name = "Fire Plant", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.defaultDialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);


    // put stuff on specific floors
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "q", name = "Garbage Can", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.GarbageCanDialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "h", name = "Violet Crystal", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.VioletCrystalDialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "p", name = "Garbage Bag", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.garbageBagDialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "o", name = "Garbage Bag 2", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.garbageBag2Dialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "*", name = "Lava Person1", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.LavaPerson1Dialogue, portraitChar = "l", moveType = "random"), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "+", name = "Lava Person2", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.LavaPerson2Dialogue, portraitChar = "m", moveType = "random"), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "$", name = "Lava Person3", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.LavaPerson3Dialogue, portraitChar = "n", moveType = "random"), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "&", name = "Lava Person4", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.LavaPerson4Dialogue, portraitChar = "o", moveType = "random"), emptyCell.x, emptyCell.y);
  
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "?", name = "Lava Person5", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.LavaPerson5Dialogue, portraitChar = "p", moveType = "random"), emptyCell.x, emptyCell.y);
  
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "{", name = "Lava Person6", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.LavaPerson6Dialogue, portraitChar = "q", moveType = "random"), emptyCell.x, emptyCell.y);
  
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "k", name = "Soda Can", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.SodaCan1Dialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "m", name = "Soda Blue", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.SodaBlue1Dialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "n", name = "Soda Red", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.SodaRed1Dialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "f", name = "Classic Volcano", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.VolcanoDescription, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = ")", name = "SPIZ", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.SPIZDescription, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "i", name = "BlueCrystal", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.BlueCrystalDescription, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[randomFloor].randomEmptyCellCoords();
    fireUniverse[randomFloor].addObjectToMap(new Object(char = "j", name = "Yum Bar", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.YumBarDescription, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    
    randomFloor = (rollDie(2) - 1); emptyCell = fireUniverse[1].randomEmptyCellCoords();
    fireUniverse[1].addObjectToMap(new Object(char = "(", name = "Portal", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.portalDialogue, portraitChar = "y"), emptyCell.x, emptyCell.y);

    
    return fireUniverse;
  },
  
  bakulaUniverse: function() {
    var bakulaUniverse = [];
    var randomFloor = (rollDie(2) - 1); emptyCell = null;
    
    for (var i = 0; i < 2; i++) {
      bakulaUniverse[i] = Game.createMap(creativeContent.bakulaTile, creativeContent.masterPngLegend, i, "Rogue");
      
    }
    

    var bakulaCharArray = ["@",
	  "#",
    ".",
    ">",
    "<",
    "(",
    ")",
    "*",
    "+",
    "$",
    "&",
    "?",
    "{",
    "}",
    "a",
    "b",
    "c",
    "!",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"];
    
    var bakulaDie;
    var bakulaChar;
    
    for (var i; i < 100; i++) {
      bakulaDie = rollDie(47);
      bakulaChar = bakulaCharArray[bakulaDie];

      randomFloor = (rollDie(2) - 1); emptyCell = bakulaUniverse[randomFloor].randomEmptyCellCoords();
      bakulaUniverse[randomFloor].addObjectToMap(new Object(char = bakulaChar, name = "Scott Bakula", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.GarbageCanDialogue, portraitChar = "*", moveType = "random", allowSteal = false), emptyCell.x, emptyCell.y);

    }
    

    
    
    

    
    
    
    return bakulaUniverse;
  },
  
  
  
  
  
// snorkelbutt  - NO DIALOGUE for nurse rachet! Portraits updated.
  oldPersonUniverse: function() {
    var oldPersonUniverse = [];
    var randomFloor = (rollDie(2) - 1); emptyCell = null;
    
    for (var i = 0; i < 2; i++) {
      oldPersonUniverse[i] = Game.createMap(creativeContent.oldPersonTile, creativeContent.masterPngLegend, i);
      
       // stuff here will appear on every floor  
      if (i != 0) {
        randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[i].randomEmptyCellCoords();
        oldPersonUniverse[i].addObjectToMap(new Object(char = ">", name = "Downstairs", wall = false, alive = false, clickFunction = "floor down"), emptyCell.x, emptyCell.y);
      }
      
      if (i != 1) {
        randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[i].randomEmptyCellCoords();
        oldPersonUniverse[i].addObjectToMap(new Object(char = "<", name = "Upstairs", wall = false, alive = false, clickFunction = "floor up"), emptyCell.x, emptyCell.y);
      }
    }
    
    // put stuff on specific floors

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[randomFloor].randomEmptyCellCoords();
    oldPersonUniverse[randomFloor].addObjectToMap(new Object(char = "?", name = "Nurse Rachet", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.nurseRachetDialogue, portraitChar = "w", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[randomFloor].randomEmptyCellCoords();
    oldPersonUniverse[randomFloor].addObjectToMap(new Object(char = "*", name = "Robocop - Retired", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.retiredRobocopDialogue, portraitChar = "s", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[randomFloor].randomEmptyCellCoords();
    oldPersonUniverse[randomFloor].addObjectToMap(new Object(char = "$", name = "Robocop - Finally Alive", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.retiredRobocop2Dialogue, portraitChar = "u", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[randomFloor].randomEmptyCellCoords();
    oldPersonUniverse[randomFloor].addObjectToMap(new Object(char = "+", name = "Robocop - Still Kickin'", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.retiredRobocop3Dialogue, portraitChar = "t", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[randomFloor].randomEmptyCellCoords();
    oldPersonUniverse[randomFloor].addObjectToMap(new Object(char = "&", name = "Robocop - Poppa Wheelie", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.retiredRobocop4Dialogue, portraitChar = "v", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[randomFloor].randomEmptyCellCoords();
    oldPersonUniverse[randomFloor].addObjectToMap(new Object(char = ")", name = "Werther's Original", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.werthersDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[randomFloor].randomEmptyCellCoords();
    oldPersonUniverse[randomFloor].addObjectToMap(new Object(char = "!", name = "Wheelchair", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.wheelchairDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[randomFloor].randomEmptyCellCoords();
    oldPersonUniverse[randomFloor].addObjectToMap(new Object(char = "e", name = "Crossword", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.crosswordDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);  

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[randomFloor].randomEmptyCellCoords();
    oldPersonUniverse[randomFloor].addObjectToMap(new Object(char = "f", name = "Mentos - the freshmaker", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.mentosDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[1].randomEmptyCellCoords();
    oldPersonUniverse[1].addObjectToMap(new Object(char = "g", name = "The Bad Ones", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.badOnesDescript, portraitChar = "-", moveType = "follow", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[1].randomEmptyCellCoords();
    oldPersonUniverse[1].addObjectToMap(new Object(char = "h", name = "The Fun Ones", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.funOnesDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[1].randomEmptyCellCoords();
    oldPersonUniverse[1].addObjectToMap(new Object(char = "i", name = "The Good Ones", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.goodOnesDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = oldPersonUniverse[1].randomEmptyCellCoords();
    oldPersonUniverse[1].addObjectToMap(new Object(char = "(", name = "Portal", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.portalDialogue, portraitChar = "y"), emptyCell.x, emptyCell.y);

    
  return oldPersonUniverse;
  },
  
// snorkelbutt - template only
  robocopUniverse: function() {
    var robocopUniverse = [];
    var randomFloor = (rollDie(2) - 1); emptyCell = null;
    
    for (var i = 0; i < 2; i++) {
      robocopUniverse[i] = Game.createMap(creativeContent.robocopTile, creativeContent.masterPngLegend, i);
      
       // stuff here will appear on every floor  
      if (i != 0) {
        randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[i].randomEmptyCellCoords();
        robocopUniverse[i].addObjectToMap(new Object(char = ">", name = "Downstairs", wall = false, alive = false, clickFunction = "floor down"), emptyCell.x, emptyCell.y);
      }
      
      if (i != 1) {
        randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[i].randomEmptyCellCoords();
        robocopUniverse[i].addObjectToMap(new Object(char = "<", name = "Upstairs", wall = false, alive = false, clickFunction = "floor up"), emptyCell.x, emptyCell.y);
      }
    }
    
    // put stuff on specific floors
    

//coleslaw begins - added spawns. updated dismembered hand - only 1 moves. updated legs, do not moves anymore. fixed cop 3 and pop cop sprites.
    
    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "*", name = "Robo Cop", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.robocopDialogue, portraitChar = "g", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "+", name = "Robo Cop 2", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.robocop2Dialogue, portraitChar = "h", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "$", name = "Robo Cop 3", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.robocop3Dialogue, portraitChar = "i", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "&", name = "Pop Cop", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.popCopDialogue, portraitChar = "j", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "?", name = "Rick Robo Cop", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.rickDogDialogue, portraitChar = "r", moveType = "random"), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "!", name = "Trash", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.trashCanDialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "e", name = "Cheeseburger", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.cheeseburgerpDialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);
    
    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "f", name = "Tangle of Wires", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.wiresDialogue, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "g", name = "Dismembered Hand", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.handDialogue, portraitChar = "-", moveType = "random", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "g", name = "Dismembered Hand", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.handDialogue, portraitChar = "-", moveType = "follow", allowSteal = false), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[randomFloor].randomEmptyCellCoords();
    robocopUniverse[randomFloor].addObjectToMap(new Object(char = "h", name = "Dismembered Leg", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.legDialogue, portraitChar = "-", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = robocopUniverse[1].randomEmptyCellCoords();
    robocopUniverse[1].addObjectToMap(new Object(char = "(", name = "Portal", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.portalDialogue, portraitChar = "y"), emptyCell.x, emptyCell.y);

//coleslaw ends  
  return robocopUniverse;
  }, 
  
  
// snorkelbutt - template only  
  iceUniverse: function() {
    var iceUniverse = [];
    var randomFloor = (rollDie(2) - 1); emptyCell = null;
    
    for (var i = 0; i < 2; i++) {
      iceUniverse[i] = Game.createMap(creativeContent.iceTile, creativeContent.masterPngLegend, i);
      
       // stuff here will appear on every floor  
      if (i != 0) {
        randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[i].randomEmptyCellCoords();
        iceUniverse[i].addObjectToMap(new Object(char = ">", name = "Downstairs", wall = false, alive = false, clickFunction = "floor down"), emptyCell.x, emptyCell.y);
      }
      
      if (i != 1) {
        randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[i].randomEmptyCellCoords();
        iceUniverse[i].addObjectToMap(new Object(char = "<", name = "Upstairs", wall = false, alive = false, clickFunction = "floor up"), emptyCell.x, emptyCell.y);
      }
    }
    
    // put stuff on specific floors
    
randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[randomFloor].randomEmptyCellCoords();
iceUniverse[randomFloor].addObjectToMap(new Object(char = "&", name = "Yollanda Ruud", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.YollandaDialogue1, portraitChar = "d", moveType = "random"), emptyCell.x, emptyCell.y);

randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[randomFloor].randomEmptyCellCoords();
iceUniverse[randomFloor].addObjectToMap(new Object(char = "j", name = "A Well-Made Pickaxe", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.PickAxeDescript, portraitChar = "-", moveType = "random", allowSteal = true), emptyCell.x, emptyCell.y);

randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[randomFloor].randomEmptyCellCoords();
iceUniverse[randomFloor].addObjectToMap(new Object(char = "!", name = "ICE BUSH!", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.ICEBUSHDescript, portraitChar = "-", moveType = "random", allowSteal = true), emptyCell.x, emptyCell.y);

randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[randomFloor].randomEmptyCellCoords();
iceUniverse[randomFloor].addObjectToMap(new Object(char = "h", name = "Frozen Pizza", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.FrozenPizzaDescript, portraitChar = "-", moveType = "random", allowSteal = true), emptyCell.x, emptyCell.y);
    
randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[randomFloor].randomEmptyCellCoords();
iceUniverse[randomFloor].addObjectToMap(new Object(char = "$", name = "Francis Bubblesmith", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.FrancisBubblesmithDescript, portraitChar = "c", moveType = "random"), emptyCell.x, emptyCell.y);

randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[0].randomEmptyCellCoords();
iceUniverse[0].addObjectToMap(new Object(char = "+", name = "Shira Balewa", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.ShiraBalewaDescript, portraitChar = "b", moveType = "random"), emptyCell.x, emptyCell.y);

randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[randomFloor].randomEmptyCellCoords();
iceUniverse[randomFloor].addObjectToMap(new Object(char = "e", name = "Green Fish", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.GreenFishDescription, portraitChar = "-", moveType = "random", allowSteal = true), emptyCell.x, emptyCell.y);

randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[1].randomEmptyCellCoords();
iceUniverse[1].addObjectToMap(new Object(char = "*", name = "Yippers The Huskydog", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.YippersDescription, portraitChar = "e", moveType = "random", allowSteal = true), emptyCell.x, emptyCell.y);
  
randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[1].randomEmptyCellCoords();
iceUniverse[1].addObjectToMap(new Object(char = "?", name = "MacReady", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.MacReadyDescription, portraitChar = "k", moveType = "random"), emptyCell.x, emptyCell.y);

randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[1].randomEmptyCellCoords();
iceUniverse[1].addObjectToMap(new Object(char = "?", name = "The Thing", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.TheThingDescription, portraitChar = "-", moveType = "random"), emptyCell.x, emptyCell.y);

randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[randomFloor].randomEmptyCellCoords();
iceUniverse[randomFloor].addObjectToMap(new Object(char = "f", name = "Blue Fish", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.BlueFishDescription, portraitChar = "-", moveType = "random", allowSteal = true), emptyCell.x, emptyCell.y);
    
randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[randomFloor].randomEmptyCellCoords();
iceUniverse[randomFloor].addObjectToMap(new Object(char = "g", name = "Ice Fishing Rod", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.IceFishingRodDescription, portraitChar = "-", moveType = "random", allowSteal = true), emptyCell.x, emptyCell.y);
  
randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[randomFloor].randomEmptyCellCoords();
iceUniverse[randomFloor].addObjectToMap(new Object(char = ")", name = "Sweetheart Octopuss", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.SweetheartOctopussDescription, portraitChar = "-", moveType = "random"), emptyCell.x, emptyCell.y);
   
    randomFloor = (rollDie(2) - 1); emptyCell = iceUniverse[1].randomEmptyCellCoords();
    iceUniverse[1].addObjectToMap(new Object(char = "(", name = "Portal", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.portalDialogue, portraitChar = "y"), emptyCell.x, emptyCell.y);

    
  return iceUniverse;
  },   
  
// snorkelbutt - world complete, except portal 
  hotdogUniverse: function() {
    var hotdogUniverse = [];
    var randomFloor = (rollDie(2) - 1); emptyCell = null;
    
    for (var i = 0; i < 2; i++) {
      hotdogUniverse[i] = Game.createMap(creativeContent.hotDogTile, creativeContent.masterPngLegend, i);
      
       // stuff here will appear on every floor  
      if (i != 0) {
        randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[i].randomEmptyCellCoords();
        hotdogUniverse[i].addObjectToMap(new Object(char = ">", name = "Downstairs", wall = false, alive = false, clickFunction = "floor down"), emptyCell.x, emptyCell.y);
      }
      
      if (i != 1) {
        randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[i].randomEmptyCellCoords();
        hotdogUniverse[i].addObjectToMap(new Object(char = "<", name = "Upstairs", wall = false, alive = false, clickFunction = "floor up"), emptyCell.x, emptyCell.y);
      }
    }
    
    // put stuff on specific floors

    //Characters
 randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "*", name = "Fry Guy", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.fryGuyDescript, portraitChar = "a", moveType = "random"), emptyCell.x, emptyCell.y);

 randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "+", name = "Relish Dog", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.relishDescript, portraitChar = "f", moveType = "random"), emptyCell.x, emptyCell.y);

 randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "$", name = "Ketchup Dog", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.ketchupDescript, portraitChar = "f", moveType = "random"), emptyCell.x, emptyCell.y);

  var floor = (rollDie(2) - 1) - 1;
    
 randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[floor].randomEmptyCellCoords();
    hotdogUniverse[floor].addObjectToMap(new Object(char = "&", name = "All Dressed Dog", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.allDressedDescript, portraitChar = "f", moveType = "random"), emptyCell.x, emptyCell.y);

 randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "?", name = "Finest Mustard Dog", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.fineMustardDescript, portraitChar = "f", moveType = "random"), emptyCell.x, emptyCell.y);

 randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "{", name = "Hotgod", wall = false, alive = true, clickFunction = "talk", myDialogue = creativeContent.hotgodDescript, portraitChar = "x", moveType = "random"), emptyCell.x, emptyCell.y);
   
//coleslaw    -- updated sprites, increased spawns
//Curios
    randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "!", name = "Potted Hotdog Plant", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.hdPlantDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "e", name = "Hotdog With Ketchup", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.hdKetchupDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "f", name = "Hotdog With Relish", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.hdRelishDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "g", name = "Rotdog", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.rotdogDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "h", name = "Finest Yellow Mustard", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.fineYellowDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "i", name = "Real Tomato Ketchup", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.realTomatoDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[randomFloor].randomEmptyCellCoords();
    hotdogUniverse[randomFloor].addObjectToMap(new Object(char = "j", name = "The Big One", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.bigOneDescript, portraitChar = "-", moveType = "", allowSteal = true), emptyCell.x, emptyCell.y);

    randomFloor = (rollDie(2) - 1); emptyCell = hotdogUniverse[1].randomEmptyCellCoords();
    hotdogUniverse[1].addObjectToMap(new Object(char = "(", name = "Portal", wall = false, alive = false, clickFunction = "talk", myDialogue = creativeContent.portalDialogue, portraitChar = "y"), emptyCell.x, emptyCell.y);

 // coleslaw ends here   

  return hotdogUniverse;
  },  
  
  
  
  // object name colour: "red"
  // text colour: "lightyellow"
  // Response colour: "green"
  
  
  // FireWorld Dialogue
  

    bootyDescript: {
      textStrings: ["Pile of Booty","A big pile o' booty. Your piratey bones are aquiver with motivation!"],
      responseFunction: {}
  },   

    fernDescript: {
      textStrings: ["A Healthy Fern","It is bright green and has no bugs on it. You have never seen anything like this before."],
      responseFunction: {}
  },   

    visionTreeDescript: {
      textStrings: ["Vision Tree","Are those eyeballs?"],
      responseFunction: {}
  },   

    figTreeDescript: {
      textStrings: ["Fig Tree of Foresight","This stout tree gives me the creeps. But you rather like it."],
      responseFunction: {}
  },   
    bloodMagicDescript: {
      textStrings: ["Magic Chysanthemum","Wait... are those magic portals?", "{Ice Universe}", "{Lava Universe}", "{Detroit Universe}", "{Oldfolk Universe}", "{Hot Dog Universe}"],
      responseFunction: {"{Ice Universe}": menuResponse.iceu, "{Lava Universe}": menuResponse.fireu, "{Detroit Universe}": menuResponse.robocopu, "{Oldfolk Universe}": menuResponse.oldpersonu, "{Hot Dog Universe}": menuResponse.hotdogu}
  },   
  
  


 ornateChestDescript: {
      textStrings: ["Ornate Chest","Guilded metal seals this deftly crafted chest. There's a big scary lock at the front, in the shape of a skull."],
      responseFunction: {}
  },
  enchantedChestDescript: {
      textStrings: ["Enchanted Ornate Chest","This silver chest emits a gentle hum when you put your hand near it. You probably shouldn't touch this."],
      responseFunction: {}
  },
  rubiesDescript: {
      textStrings: ["Sparkling Rubies","Sweet, sweet bullion. Where can else can you find such treasure?"],
      responseFunction: {}
  },  
  emeraldsDescript: {
      textStrings: ["Emerald Shards","A remarkable stack of pure emerald. There is a little horse inside, and some tiny people dancing around a yellow brick road that leads straight to the red velvet carpet. Nobody is leaving that place anytime soon."],
      responseFunction: {}
  },     
  
  defaultDialogue: {
      textStrings: ["Fire Plant", "I don't know what this is!"],
      responseFunction: {}
  }, 
  
  
  
  
  //LAVAWORLD STARTS
  
  GarbageCanDialogue: {
      textStrings: ["Trash Can", "The sides of this tin warrior bulge with the infinite elbows of a wasteful society. You've been around the block a few times but you've never seen a cram like this before.", "{Can you tell me how to get to--}"],
      responseFunction: {"{Can you tell me how to get to--}": menuResponse.GarbageCanDialogue1}
  }, 
  GarbageCanDialogue1: {
      textStrings: ["Trash Can", "Nope.", "{Well what good are you?}"],
      responseFunction: {"{Well what good are you?}": menuResponse.GarbageCanDialogue2}
  },
  garbageBagDialogue: {
      textStrings: ["Garbage Bag", "I'm so full of garbage, I'm about ready to BURST! I think someone put a diaper in here..", "{I'm so ready,}"],
      responseFunction: {"{I'm so ready,}": menuResponse.garbageBagDialogue2}
  },   
  garbageBag2Dialogue: {
      textStrings: ["Another Garbage Bag", "So you just go around in caves talking to bags of strange garbage?", "{So what if I do!?!?}"],
      responseFunction: {"{So what if I do!?!?}": menuResponse.garbageBag2Dialogue1}
  },  
  garbageBag2Dialogue1: {
      textStrings: ["Another Garbage Bag", "Nuthin baby nevermind, you do you.", "{I will! I will do me!}"],
      responseFunction: {"{I will! I will do me!}": menuResponse.garbageBag2Dialogue2}
  },
  garbageBagDialogue2: {
      textStrings: ["Garbage Bag", "GROSS! Ready for WHAT??.", "{Yah no nevermind.}"],
      responseFunction: {"{Yah no nevermind.}": menuResponse.garbageBagDialogue3}
  },  
  LavaPerson1Dialogue: {
      textStrings: ["Hunk, The Lava Person", "A fresh face, don't get too many visitors down here these days.. R U Cool?", "{Ice cold, baby.}"],
      responseFunction: {"{Ice cold, baby.}": menuResponse.LavaPersonDialogue2}
  },  
  LavaPersonDialogue2: {
      textStrings: ["Hunk, The Lava Person", "Heck yeah that's what I'm talking about! So do you have any on you? Any of that sweet stuff?", "{Errrr...}"],
      responseFunction: {"{Errrr...}": menuResponse.LavaPersonDialogue3}
  },
  LavaPersonDialogue3: {
      textStrings: ["Hunk, The Lava Person", "Look dude if you don't have any SPIZ on you just take a hike.", "{Whatever.}"],
      responseFunction: {"{Whatever.}": menuResponse.LavaPersonDialogue4}
  },
  LavaPerson2Dialogue: {
      textStrings: ["Flipp Smokewiff, The Lava Person", "I had a dream once that there were HEAPS of worlds beyond this one, bro can you even imagine?", "{Yeah, I actually can.}"],
      responseFunction: {"{Yeah, I actually can.}": menuResponse.LavaPerson2Dialogue2}
  },
  LavaPerson2Dialogue2: {
      textStrings: ["Flipp Smokewiff, The Lava Person", "You must be absolutely wrecked on candy right now! I had so much this morning I'm ready to believe in anything. Like a whole WORLD made of old-ass retired cyborg cops!", "{Wait, now I actually can't.}"],
      responseFunction: {"{Wait, now I actually can't.}": menuResponse.LavaPerson2Dialogue3}
  },
  LavaPerson3Dialogue: {
      textStrings: ["Gatcha Cablebinder, The Grabby Lava Person", "Just.. a little bit.. closer..", "{I can totally see AND hear you, dude.}"],
      responseFunction: {"{I can totally see AND hear you, dude.}": menuResponse.LavaPerson3Dialogue1}
  },
  LavaPerson3Dialogue1: {
      textStrings: ["Gatcha Cablebinder, The Grabby Lava Person", "EMPTY YOUR POCKETS, KNAVE! I need the STICKY stuff! The Melty, chocolatey, messy NASTY stuff!", "{Yeah no. Seems like everyone down here is addicted to sugar.}"],
      responseFunction: {"{Yeah no. Seems like everyone down here is addicted to sugar.}": menuResponse.LavaPerson3Dialogue3}
  },
  LavaPerson4Dialogue: {
      textStrings: ["Hobbles the Contemplator", "Sometimes I wonder if it was worth trading the beauty of our world for the sweet taste of sugar.", "{Probably not, but you have to make the best of what you get.}"],
      responseFunction: {"{Probably not, but you have to make the best of what you get.}": menuResponse.LavaPerson4Dialogue}
  },
  
  SodaCan1Dialogue: {
      textStrings: ["A Fast Looking Soda Can", "This can isn't alive and can't speak, but you get the impression that if WAS speaking you couldn't keep up with it.", "{RIP, Recycle.}"],
      responseFunction: {"{RIP, Recycle.}": menuResponse.SodaCan1Dialogue1}
  },
  VioletCrystalDialogue: {
      textStrings: ["A Mysterious Violet Crystal", "This strange crystaline formation almost pulses with weird energy. You could get lost gazing into its lovely facetous depths.", "{But I'm a pirate so *FART* YEAAAARRRR!}"],
      responseFunction: {"{But I'm a pirate so *FART* YEAAAARRRR!}": menuResponse.VioletCrystalDialogue1}
  },
  
  SodaBlue1Dialogue: {
      textStrings: ["A Blue Soda Can", "It must have been a berry or grape flavor. Why else make it blue!?", "{STEP ON IT!}"],
      responseFunction: {"{STEP ON IT!}": menuResponse.SodaBlue1Dialogue}
  },

  SodaRed1Dialogue: {
      textStrings: ["A Red Soda Can", "Awwww maaaaan... this was definitely a strawberry kiwi, Lord of the Drink Flavors...", "{Try and fail to forget that sweet taste.}"],
      responseFunction: {"{Try and fail to forget that sweet taste.}": menuResponse.SodaBlue1Dialogue}
  },
  VolcanoDescription: {
      textStrings: ["A Classic Volcano", "It looks just like the big burning mountains in the south you once saw from your days on the high seas..", "{Cute! But very very hot.}"],
      responseFunction: {"{Cute! But very very hot.}": menuResponse.VolcanoDescription}
  },
  SPIZDescription: {
      textStrings: ["SPIZ! The Breath Taker", "Hey, that's the candy bar everyone around here is crazy for. Should I take it with me? Maybe I can trade it to one of these loonies for something actually valuable..", "{Is it worth risking addiction tho?}"],
      responseFunction: {"{Is it worth risking addiction tho?}": menuResponse.SPIZDescription}
  },
  BlueCrystalDescription: {
      textStrings: ["Tangy Blue Crystal", "It is a chunk of candy someone dropped on the ground, getting it all dirty. Looks like they made it to resemble the minerals around here.", "{Not gonna break my teeth on it.}"],
      responseFunction: {"{Not gonna break my teeth on it.}": menuResponse.BlueCrystalDescription}
  },
  YumBarDescription: {
      textStrings: ["Yum Bar", "The wrapper says that it 'Tastes Just Like Dirt!'", "{Haha.. at least it is honest.}"],
      responseFunction: {"{Haha.. at least it is honest.}": menuResponse.YumBarDescription}
  },
  LavaPerson5Dialogue: {
      textStrings: ["Pharb The Gobbler", "They call me the Gobbler, but my real passion is puking! BBLEEARRGHH!", "{Nasty, goodbye!}"],
      responseFunction: {"{Nasty, goodbye!}": menuResponse.LavaPerson5Dialogue}
  },
  LavaPerson6Dialogue: {
      textStrings: ["Shybro The Student", "I'm studying the effects of sugar on Lava people in school but no one seems very interested..", "{Keep at it and maybe someday you can be the servant of a capricious tyrant, like me!}"],
      responseFunction: {"{Keep at it and maybe someday you can be the servant of a capricious tyrant, like me!}": menuResponse.LavaPerson6Dialogue}
  },
  //LAVAWORLD ENDS
  
  
  
  gameBeginDialogue: {
      textStrings: ["Scott Dracula", "Scarlic! I am bored. Prepare an overnight bag. What's that? You do not have a bag? I thought you were a pirate, not a peasant. Anyway, I am sending you back through Space and Time! You aren't to come back until you steal the most valuable treasure. Alley-oop!", "{Yaarrr! Send me back in time oh great timelord!}"],
      responseFunction: {"{Yaarrr! Send me back in time oh great timelord!}": menuResponse.gameBeginDialogue}
  },  
  throneDialogue: {
      textStrings: ["Throne", "The throne of the great timelord Scott Dracula"],
      responseFunction: {"The throne of the great timelord Scott Dracula": menuResponse.throneDialogue2}
  },
  throneDialogue2: {
      textStrings: ["Throne", "there is not much more to tell"],
      responseFunction: {"there is not much more to tell": menuResponse.throneDialogue3}
  },
  throneDialogue3: {
      textStrings: ["Throne", "stop asking"],
      responseFunction: {}
  },
  
  // OldPersonUniverse Dialogue

  retiredRobocopDialogue: {
      textStrings: ["Robocop - Retired", "Hello there, Sonny. You look strong and... er, smart. Can you help out a Robo Pop in need?", "{Yar, not another has-been looking for favours!}"],
      responseFunction: {"{Yar, not another has-been looking for favours!}": menuResponse.retiredRobocopDialogue2}
  },
  retiredRobocopDialogue2: {
      textStrings: ["Robocop - Retired", "Well sure, I'm just a retired cop looking for the REAL good stuff. Not the usual Good Ones...  You know the ones I mean.", "{ahhh...}" ],
      responseFunction: {"{ahhh...}": menuResponse.retiredRobocopDialogue3}
  },
  retiredRobocopDialogue3: {
      textStrings: ["Robocop - Retired", "Ah that sweet mess. Where have my robotic dentures got to now?"],
      responseFunction: {}
  },
  retiredRobocop2Dialogue: {
      textStrings: ["Robocop - Finally Alive", "Hello what are you doing here?", "{I'm looking for booty. Do you know where I can find something to impress my boss?}"],
      responseFunction: {"{I'm looking for booty. Do you know where I can find something to impress my boss?}": menuResponse.retiredRobocop2Dialogue2}
  },
  retiredRobocop2Dialogue2: {
      textStrings: ["Robocop - Finally Alive", "Get your hands on a crinkly brown bag and you'll always be impressive to me."],
      responseFunction: {}
  },
  retiredRobocop3Dialogue: {
      textStrings: ["Robocop - Still Kickin'", "Hello, dearie. Please help yourself to some mentos."],
      responseFunction: {}
  },
  retiredRobocop4Dialogue: {
      textStrings: ["Robocop - Poppa Wheelie", "Alex Murphy! I haven't seen you since the bank heist of 2044. Come here and check out this sick grind."],
      responseFunction: {}
  },
  werthersDescript: {
      textStrings: ["Werther's Original", "Sweet, delicious goodness that will break your dentures again if you aren't careful."],
      responseFunction: {}
  },
  wheelchairDescript: {
      textStrings: ["Wheelchair", "It's a sturdy looking wheelchair with glow in the dark wheels. There are bright pink tassels on it. You could pull some sick wheelies on this thing."],
      responseFunction: {}
  },
  crosswordDescript: {
      textStrings: ["Crossword", "A whole book of them! You could spend hours crossing words and doing puzzles... if you weren't an illiterate pirate."],
      responseFunction: {}
  },
  mentosDescript: {
      textStrings: ["Mentos- The Freshmaker (from the game the Witcher 3)", "Almost a whole roll of them! Oh, what's this? Bonus lint from Gramma Cop's purse."],
      responseFunction: {}
  },
  badOnesDescript: {
      textStrings: ["A Prescription", "Instructions: Take one with a meal. A real meal. I said no more pizza pockets!"],
      responseFunction: {}
  },
  funOnesDescript: {
      textStrings: ["A Prescription", "Do not exceed daily recommended dose of flowers. Call your philanthropist if you experience side effects for more than 35 hamsters."],
      responseFunction: {}
  },
  goodOnesDescript: {
      textStrings: ["A Prescription", "These are real good."],
      responseFunction: {}
  },
  retiredRobocop4Dialogue: {
      textStrings: ["Robocop - Poppa Wheelie", "Alex Murphy! I haven't seen you since the bank heist of 2044. Come here and check out this sick grind."],
      responseFunction: {}
  },
  nurseRachetDialogue: {
      textStrings: ["Nurse Rachet", "Hmm, let me see. Two cans of oil, three titanium sheets and a little solder over there. Good as new! Say what you want, these Robo Cops won't ever quit."],
      responseFunction: {}
  },
  
  // Ice Universe Dialogue
  

  
  YollandaDialogue1: {
      textStrings: ["Yollanda Ruud", "Have you ever had a frozen pickled egg for dinner? What a tasty treat!", "{What, no, that doesn't sound good at all.}"],
      responseFunction: {"{What, no, that doesn't sound good at all.}": menuResponse.YollandaDialogue1}
  },
  
  PickAxeDescript: {
      textStrings: ["A Well-Made Pickaxe", "This kind of tool has many uses in a frozen world like this one, but it still looks brand new. ", "{Not like SOME pirates I know.}"],
      responseFunction: {"{Not like SOME pirates I know.}": menuResponse.PickAxeDescript}
  },
  
  ICEBUSHDescript: {
      textStrings: ["ICE BUSH!", "The frozen branches of this chilly plant clink like chimes in the soft breeze yet they refuse to break.", "{Pretty cool, but there is no way I could get this back to my boss without getting frostbite.}"],
      responseFunction: {"{Pretty cool, but there is no way I could get this back to my boss without getting frostbite.}": menuResponse.ICEBUSHDescript}
  },
  
  FrozenPizzaDescript: {
      textStrings: ["Frozen Pizza", "It is actually made (baked?) out of ice and snow. How are you supposed to eat this?", "{I wasn't hungry anyway..}"],
      responseFunction: {"{I wasn't hungry anyway..}": menuResponse.ICEBUSHDescript}
  },
  
  FrancisBubblesmithDescript: {
      textStrings: ["Francis Bubblesmith", "Hey guy! I'm a bit busy right now but maybe some day you'd want to get together for chess or something?", "{Yyyyyynnnnnnoo. No.}"],
      responseFunction: {"{Yyyyyynnnnnnoo. No.}": menuResponse.FrancisBubblesmithDescript}
  },
  
  ShiraBalewaDescript: {
      textStrings: ["Shira Balewa", "Have you seen that hot guy wandering around downstairs? If he ever stops mumbling about his cheating b*tch ex maybe he'll take me out for a snow cone.", "{I mean, I guess anyone has a chance with anyone so long as they're not a shapeshifting alien.}"],
      responseFunction: {"{I mean, I guess anyone has a chance with anyone so long as they're not a shapeshifting alien.}": menuResponse.ShiraBalewaDescript}
  },
  
  GreenFishDescription: {
      textStrings: ["Green Fish", "There is no way that this fish is going to split open and attack me with tentacles.. is there?", "{Probaly not tho, right?}"],
      responseFunction: {"{Probaly not tho, right?}": menuResponse.GreenFishDescription}
  },
  
  YippersDescription: {
      textStrings: ["Yippers The Huskydog", "I would totally avoid going near that bearded dude and his gross pet if I were you. There is something reeeeaaaally strange about those two. ....... I mean.. BARK BARK!", "{Loud and clear little buddy.}"],
      responseFunction: {"{Loud and clear little buddy.}": menuResponse.YippersDescription}
  },
    
    MacReadyDescription: {
      textStrings: ["MacReady", "Me and that godawful abomination used to tussle all over this snowy wasteland, but we've recently come to an understanding: She stays away from my whisky, and I don't try an' burn her with a flamethrower.", "{.....she?}"],
      responseFunction: {"{.....she?}": menuResponse.MacReadyDescription}
  },
  
    TheThingDescription: {
      textStrings: ["The Thing", "Here's the Thing.... SKRREEEEEEAAEAEEEEAAEEAE!", "{You have GOT to be kidding me!}"],
      responseFunction: {"{You have GOT to be kidding me!}": menuResponse.TheThingDescription}
  },
  
    BlueFishDescription: {
      textStrings: ["Blue Fish", "I ain't got nothing to say to you, Mr. Two-Legs One-Eye.", "{I know I'm a pirate but that's just rude.}"],
      responseFunction: {"{I know I'm a pirate but that's just rude.}": menuResponse.BlueFishDescription}
  },
  
    IceFishingRodDescription: {
      textStrings: ["An Ice Fishing Rod", "This rod has been patched and repaired several times and is beginning to show it's age. There are initials on the handle that are all but worn away.", "{Fishing is really just a few steps away from the awesome life of a pirate.}"],
      responseFunction: {"{Fishing is really just a few steps away from the awesome life of a pirate.}": menuResponse.IceFishingRodDescription}
  },
  
    SweetheartOctopussDescription: {
      textStrings: ["Sweetheart Octupuss", "This cute little thing isn't a stuffed animal, but you SURE want to give it a squeeze!.", "{Don't tho.}"],
      responseFunction: {"{Don't tho.}": menuResponse.SweetheartOctopussDescription}
  },
  
  
  
  // Robocop Universe Dialogue
 //brownbag starts
    robocopDialogue: {
      textStrings: ["Alex Murphy - The Original Robo Cop","A mechanical man who is currently struggling with his humanity while also saving the world all the time and every day. Scarlic doesn't deserve to talk to the likes of him."],
      responseFunction: {}
  },   
   robocop2Dialogue: {
      textStrings: ["Robo Cop 2","Stay alert, citizen! Systems detect a thief in our midst. We have orders to blastenate on sight!"],
      responseFunction: {}
  },  
    robocop3Dialogue: {
      textStrings: ["Robo Cop 3","Scarlic can see that they have a small scanner of some sort. He peers over their shoulder and see the words 'HAMBURGER WITHIN 20M'. Scarlic mouth begins to water as he scampers off to check out the trashcan."],
      responseFunction: {}
  },  
    popCopDialogue: {
      textStrings: ["Poppa of the Coppas","This gentlebot is actually on a skateboard, scouting the roof tops while doing sick tricks on the metal railings. Schhhrrrwooo, clank! Wrreeeeeeee, krrrrrr, bonk!"],
      responseFunction: {}
  },  
   rickDogDialogue: {
      textStrings: ["Rick Robo Cop", "The dog cop is running around smelling trash and wires. He finds a hotdog and, lucky for Scarlic, he dismisses it and tosses it aside.", "Bark, bark! Justice! Bark!"],
      responseFunction: {}
  },   
   trashCanDialogue: {
      textStrings: ["Heaping Trash Bin", "So full of trash... there's a hotdog in me. Help!"],
      responseFunction: {}
  },  
    cheeseburgerpDialogue: {
      textStrings: ["Cheeseburger", "Not a hamburger; a cheeseburger. With avocado. And bacon. Glory be! This must be what they are looking for!"],
      responseFunction: {}
  },  
    wiresDialogue: {
      textStrings: ["Pile o' wires","These might be useful, if you knew anything about what wires do"],
      responseFunction: {}
  },  
     handDialogue: {
      textStrings: ["Dismembered Hand","Long wires extend from the wrist of this armored hand. It's givin' me the spooks."],
      responseFunction: {}
  },  
    legDialogue: {
      textStrings: ["Just a Leg","It looks like it was blasted right off someone. You smell the acrid odoor of butane or kerosene and see the remains of a large rocket and some NYE glasses lying on the ground. Strange."],
      responseFunction: {}
  },  
  
  // Hotdog Universe Dialogue created
  
    //coleslaw begins - updated descriptions
  hdPlantDescript: {
      textStrings: ["Potted Hotdog Plant", "A plant that sprouts hotdogs! A little thorn here, a little relish there... You're careful as you weigh your options. You're not 100% sure this isn't someone's kid. 5 minutes ago, you didn't even know that Hotdogs were a type of fruit, did you?"],
      responseFunction: {}
  },
  hdKetchupDescript: {
      textStrings: ["Classic Hotdog with Ketchup", "Hot off the grills of Fire World, this timeless treat is found in abundance here."],
      responseFunction: {}
  },
  hdRelishDescript: {
      textStrings: ["Hotdog with Relish", "Not to be confused with Relish Dog, who is certainly not as sweet."],
      responseFunction: {}
  },
  
  rotdogDescript: {
      textStrings: ["Rotdog", "A hotdog with ketchup. The bun is a hypnotic blend of green and aquamarine. You gaze at it for several moments in quiet meditation.  How long has this been here?"],
      responseFunction: {}
  },
  //coleslaw ends
  fineYellowDescript: {
      textStrings: ["Fine German Mustard", "A delicacy beyond the knowledge of your caste. Thinking it's that regular stinky yellow mustard, you kick it away."],
      responseFunction: {}
  },
  realTomatoDescript: {
      textStrings: ["Fancy Ketchup", "Only the fanciest Dijon ketchup. Excitedly, you squeeze some on your hand and give it a lick. Ketchupy."],
      responseFunction: {}
  },
  bigOneDescript: {
      textStrings: ["The Big One", "A big, fat, juicy weiner in a soft, hot bun. Too bad you had lunch before you got explorted here."],
      responseFunction: {}
  },
  // snorkelbutt - Character Interactions created

  fryGuyDescript: {
      textStrings: ["Fry Guy", "You have to be sure you get the Good Ones, before the Bad Ones get you. Trust me, it's nooooooooo Fun.", "{Hey, are you feeling, okay?}"],
      responseFunction: {"{Hey, are you feeling, okay?}": menuResponse.fryGuyDescript2}
  }, 
  fryGuyDescript2: {
      textStrings: ["Fry Guy", "GAH! Who are you? How did you get here? What's that you got in your hand?? IS THAT A HOTDOG PLANT?", "{Nyarrr, this be my lunch... Goodbye.}"],
      responseFunction: {"{Nyarrr, this be my lunch... Goodbye.}": menuResponse.fryGuyDescript3}
    },
  relishDescript: {
      textStrings: ["Relish Dog", "Have you seen the new and improved Potted Hotdog Plant? You can grow them in the ground! In pots! Astounding."],
      responseFunction: {}
    },
  ketchupDescript: {
      textStrings: ["Ketchup Dog", "Don't listen to Relish Dog. He's just trying to sell you some fake garbage. **Ketchup Hotdog Thinks to Himself**  Heh heh... those Pot Dogs are mine! All mine!"],
      responseFunction: {}
    },
  allDressedDescript: {
      textStrings: ["All Dressed", "Don't listen to Ketchup Dog. He does things for the wrong reasons. Some day, Hotdoggod will come and he'll get his comeuppance.", "{Thanks for the advice}"],
     responseFunction: {"{Thanks for the advice}": menuResponse.allDressedDescript2}
    },
  fineMustardDescript: {
      textStrings: ["Finest Mustard Dog", "Hotdog Planters are so tired and passé. I have my eyes set on 'The Big One'. But, of course, you've never heard of it."],
      responseFunction: {}
    },
  hotgodDescript: {
      textStrings: ["Hot God", "Wh--... Something... Something has happened."],
      responseFunction: {}
  },
  portalDialogue: {
      textStrings: ["Portal", "...looks like a portal to another universe.", "{Step through}"],
      responseFunction: {"{Step through}": menuResponse.portalPass}
  },
  
  
  
  // hd7fdhdf78
  gameOver: {
      textStrings: ["Scott Dracula", "So it seems you have found your way back through my evil time portals -- and you brought lots of interdimensional space booty back with you!  Great work!", "{Finish Game}"],
      responseFunction: {"{Finish Game}": menuResponse.gameEnd}
    },
  
  sendToBakula: {
      textStrings: ["Scott Dracula", "What's this?  You brought me no treasure at all!?  Well then, I've got a universe just for you.  Eternity there will be sufficient punishment for your arrogance.", "{Accept Fate}"],
      responseFunction: {"{Accept Fate}": menuResponse.sendToBakula}
    },
  
  bootyDialogue: {
      textStrings: ["Interdimensional Booty", "Just one piece of your sweet haul."],
      responseFunction: {}
  }
}




