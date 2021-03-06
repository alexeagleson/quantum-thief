var Game = {
  mainDisplayDiv: null,
  display: null,
  menu: null,
  gameHUD: null,
  currentMenuDisplay: null,
  currentUniverse: null,
  CompleteMap: null,
  currentFloor: 0,
  engine: null,
  player: null,
  gameSpeed: 100,
  gameWidth: 24,
  gameHeight: 24,
  currentUniverseName: "Throne Universe",
  gameDone: false,
  stolenItems: 0,
  popStep: false,

  init: function() {
    
    if (confirm('Press "Ok" to play with audio, or "Cancel" to play without.')) {
      Game.audioOn = true;
    } else {
      Game.audioOn = false;
    }
    
    playSound("titleMusic");
    
    view.defineView();
    
    var title = show_image("https://i.imgur.com/pjIChhJ.png", 1728, 768, "Quantum Thief");
    title.addEventListener("click", removeTitle);
    
    showIntroInfo();
    
  },
  
  showControls: function() {
    clearIntroInfo();
    var controls = show_image("https://i.imgur.com/0L6ibqpr.png", 1728, 768, "Controls");
    controls.addEventListener("click", removeControls);
    
  },
  
  
  
  startGame: function() {
    
   Game.player = new Object(char = "@", name = "Scarlic", wall = true, alive = true, clickFunction = null, myDialogue = null, portraitChar = "@", moveType = null);

    Game.travelTo(creativeContent.draculaThrone);
    
    stopSound("titleMusic");
    playSound("throneMusic");

  },
  
  computeFOV: function() {
    
    var fov = new ROT.FOV.PreciseShadowcasting(Game.checkIfWall);

    /* output callback */
    fov.compute(Game.player.x, Game.player.y, 10, function(x, y, r, visibility) {
      if (visibility < 0.75) {
        // nada
      } else if (Game.CompleteMap.map[x + "," + y].visible === false) {
        Game.CompleteMap.map[x + "," + y].visible = true;
        Game.renderCoords(x, y, delay = 20);
      }
    });
  },
  
  travelToRandomUnvisitedUniverse: function(goToUniverseName) {
    Game.currentFloor = 0;
    
    if (!goToUniverseName) {
      if (Game.currentUniverseName === "Throne Universe") {
        goToUniverseName = "Ice Universe";
      } else if (Game.currentUniverseName === "Ice Universe") {
        goToUniverseName = "Fire Universe";
      } else if (Game.currentUniverseName === "Fire Universe") {
        goToUniverseName = "Robocop Universe";
      } else if (Game.currentUniverseName === "Robocop Universe") {
        goToUniverseName = "Old Person Universe";
      } else if (Game.currentUniverseName === "Old Person Universe") {
        goToUniverseName = "Hot Dog Universe";
      } else if (Game.currentUniverseName === "Hot Dog Universe") {
        goToUniverseName = "Throne Universe";
      }
    }
      

    stopAllMusic();
    
    
    if (goToUniverseName === "Ice Universe") {
      playSound("iceMusic");
      Game.currentUniverseName = "Ice Universe";
      var iceUniverseIMG = show_image("https://i.imgur.com/E3wdGB0.png", 1728, 768, "Ice Universe");
      iceUniverseIMG.addEventListener("click", iceUniverseTransition);
    } else if (goToUniverseName === "Fire Universe") {
      playSound("lavaMusic");
      Game.currentUniverseName = "Fire Universe";
      var lavaUniverseIMG = show_image("https://i.imgur.com/7Bl6zwg.png", 1728, 768, "Lava Universe");
      lavaUniverseIMG.addEventListener("click", lavaUniverseTransition);
    } else if (goToUniverseName === "Old Person Universe") {
      playSound("oldfolksMusic");
      Game.currentUniverseName = "Old Person Universe";
      var oldfolksUniverseIMG = show_image("https://i.imgur.com/ITIcCsU.png", 1728, 768, "Old Folks Universe");
      oldfolksUniverseIMG.addEventListener("click", oldfolksUniverseTransition);
    } else if (goToUniverseName === "Throne Universe") {
      playSound("throneMusic");
      Game.gameDone = true;
      Game.travelTo(creativeContent.draculaThrone);
      Game.currentUniverseName = "Throne Universe";
    } else if (goToUniverseName === "Hot Dog Universe") {
      playSound("singHotdogMusic");
      Game.currentUniverseName = "Hot Dog Universe";
      var hotdogUniverseIMG = show_image("https://i.imgur.com/tKJEwNd.png", 1728, 768, "Hot Dog Universe");
      hotdogUniverseIMG.addEventListener("click", hotdogUniverseTransition);
    } else if (goToUniverseName === "Robocop Universe") {
      playSound("robocopMusic");
      Game.currentUniverseName = "Robocop Universe";
      var robocopUniverseIMG = show_image("https://i.imgur.com/2ckH8aH.png", 1728, 768, "Detroit Universe");
      robocopUniverseIMG.addEventListener("click", detroitUniverseTransition);
    } else if (goToUniverseName === "Bakula Universe") {
      playSound("quantumMusic");
      Game.currentUniverseName = "Bakula Universe";
      var bakulaUniverseIMG = show_image("https://i.imgur.com/1JSclIt.png", 1728, 768, "Bakula Universe");
      bakulaUniverseIMG.addEventListener("click", bakulaUniverseTransition);
    }
  },
  
  travelTo: function(worldFunction, ascii) {
    
    
    Game.currentUniverse = worldFunction();
    Game.CompleteMap = Game.currentUniverse[Game.currentFloor];
    if (!ascii) {
      this.display.setOptions(Game.CompleteMap.tileLegend);
    }
    emptyCell = Game.CompleteMap.randomEmptyCellCoords();
    if (worldFunction === creativeContent.draculaThrone) {
      Game.player.x = 13;
      Game.player.y = 14;
    } else {
      Game.CompleteMap.addObjectToMap(Game.player, emptyCell.x, emptyCell.y);
    }
    
    Game.resetEngine();
    
    Game.computeFOV();
    Game.renderGame();
    
    setTimeout(function() { 
      Game.renderGame();
    }, 200);
  },
  
  resetEngine: function() {
    var scheduler = new ROT.Scheduler.Simple();
    
    Game.CompleteMap.activeObjects.forEach(function(object) {
      if (object.alive) { 
        if (object != Game.player) {
          scheduler.add(object, true); 
        }
      }
    })
    scheduler.add(Game.player, true); 
    
    this.engine = new ROT.Engine(scheduler);
    this.engine.start();
  },

  
  faceHUD: function(faceSet, talkingObject) {
    var tileElement = document.createElement("img");

    
    if (!faceSet) {
      tileElement.src = creativeContent.defaultBlackHUD;
    } else {
      tileElement.src = faceSet;
    }
    
    
    var tileLegend = {
        width: Game.hudWidth / 12,
        height: Game.hudHeight / 12,
        layout: "tile",
        bg: "transparent",
        tileWidth: 384,
        tileHeight: 384,
        tileSet: tileElement,
        tileMap: creativeContent.faceLegend
      };

    this.gameHUD.setOptions(tileLegend);
    Game.gameHUD.clear();
    
    var displayChar = "-";
    
    if (talkingObject) {
      if (talkingObject.portraitChar) {
        displayChar = talkingObject.portraitChar;
      }
    }
    
    Game.drawPortraits(faceSet, displayChar);
    setTimeout(function() { 
      Game.drawPortraits(faceSet);
    }, 500);
  },
  
  drawPortraits(faceSet, displayChar) {
    if (!faceSet) {
      if (Game.hudWidth < Game.hudHeight) {
        Game.gameHUD.drawText(0, 0, ")", Game.hudWidth);
        Game.gameHUD.drawText(0, 1, "(", Game.hudWidth);
      } else {
        Game.gameHUD.drawText(0, 0, "-", Game.hudWidth);
        Game.gameHUD.drawText(1, 0, "-", Game.hudWidth);
      }
    } else {
      if (Game.hudWidth < Game.hudHeight) {
        Game.gameHUD.drawText(0, 0, displayChar, Game.hudWidth);
        Game.gameHUD.drawText(0, 1, Game.player.portraitChar, Game.hudWidth);
      } else {
        Game.gameHUD.drawText(0, 0, displayChar, Game.hudWidth);
        Game.gameHUD.drawText(1, 0, Game.player.portraitChar, Game.hudWidth);
      }
    }
  },
  
  floorUp: function() {
    if (Game.currentUniverseName === "Robocop Universe" || Game.currentUniverseName === "Old Person Universe") {
      playSound("metalLadder");
      playSound("metalLadder");
    } else {
      playSound("woodLadder");
      playSound("woodLadder");
    }
    removeObjectFromTile(Game.player);
    Game.currentFloor += 1;
    Game.CompleteMap = Game.currentUniverse[Game.currentFloor];
    for (var key in Game.CompleteMap.map) {
      Game.CompleteMap.map[key].objectsOnThisTile.forEach(function(object) {
        if (object.char === ">") {
          Game.player.x = object.x;
          Game.player.y = object.y;
        }
      });
    }
    Game.resetEngine();
    Game.computeFOV();
    setTimeout(function() { 
      Game.renderGame();
    }, 50);
  },
  
  floorDown: function() {
    if (Game.currentUniverseName === "Robocop Universe" || Game.currentUniverseName === "Old Person Universe") {
      playSound("metalLadder");
    } else {
      playSound("woodLadder");
    }
    removeObjectFromTile(Game.player);
    Game.currentFloor -= 1;
    Game.CompleteMap = Game.currentUniverse[Game.currentFloor];
    for (var key in Game.CompleteMap.map) {
      Game.CompleteMap.map[key].objectsOnThisTile.forEach(function(object) {
        if (object.char === "<") {
          Game.player.x = object.x;
          Game.player.y = object.y;
        }
      });
    }
    Game.resetEngine();
    Game.computeFOV();
    setTimeout(function() { 
      Game.renderGame();
    }, 50);
  },
  
  renderGame: function() {
    Game.drawWholeMap();
    setTimeout(function() { 
      Game.drawAllObjects();
      Game.display.draw(Game.player.x, Game.player.y, Game.player.char);
    }, 25);    
  },
  
  renderCoords: function(x, y, delay) {
    Game.CompleteMap.map[x + "," + y].drawTile();
    setTimeout(function() { 
      Game.CompleteMap.map[x + "," + y].drawObjects();
      Game.display.draw(Game.player.x, Game.player.y, Game.player.char);
    }, delay);    
  },
  
  createCanvas: function(className, width, height) {
    var options = {
      width: width,
      height: height,
      fontSize: 32,
      forceSquareRatio:true
    }
    thisRotDisplay = new ROT.Display(options);
    var thisCanvas = thisRotDisplay.getContainer();
    thisCanvas.className = className;
    thisCanvas.style.display = "none";
    return thisRotDisplay;
  },

  drawWholeMap: function() {
    console.log(Game.display);
    for (var key in Game.CompleteMap.map) {
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      Game.CompleteMap.map[key].drawTile();
    }
  },
  
  drawAllObjects: function() {
    for (var key in Game.CompleteMap.map) {
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      Game.CompleteMap.map[key].drawObjects();
    }
  },
  
  checkIfWall: function(x, y) {
    if (x < 0 || x > Game.display._options.width - 1) {
      return false;
    } else if (y < 0 || y > Game.display._options.height - 1) {
      return false;
    }
    
    if (Game.CompleteMap.map[x + "," + y].wall) { return false; }
    
    Game.CompleteMap.map[x + "," + y].objectsOnThisTile.forEach(function(object) {
      if (object.wall) { return false; }
    });
    
    return true;
  },
  
  createMap:function(tileset, tileMap, floor, mapType, visible) {

    var thisMap = {};
    var tileElement = document.createElement("img");
    tileElement.src = tileset;
    
    if (!visible) {
      var visible = false;
    }


    var tileLegend = {
        width: Game.display._options.width,
        height: Game.display._options.height,
        layout: "tile",
        bg: "transparent",
        tileWidth: 32,
        tileHeight: 32,
        tileSet: tileElement,
        tileMap: tileMap
      };

    if (!mapType) {
      mapType = "Digger";
    }
    
    var totalMap = new CompleteMap(thisMap, tileLegend, floor);

    var digger = null;

    if (mapType === "Arena") {
      digger = new ROT.Map.Arena(Game.display._options.width, Game.display._options.height);
    } else if (mapType === "Rogue") {
      digger = new ROT.Map.Rogue(Game.display._options.width, Game.display._options.height);
    } else if (mapType === "Digger") {
      digger = new ROT.Map.Digger(Game.display._options.width, Game.display._options.height);
    } else if (mapType === "Rogue Open") {
      var digOptions = {cellWidth: 2, cellHeight: 2, roomWidth: [5, 10], roomHeight: [5, 10]};
      digger = new ROT.Map.Rogue(Game.display._options.width, Game.display._options.height, digOptions);
    } if (mapType === "DividedMaze") {
      digger = new ROT.Map.DividedMaze(Game.display._options.width, Game.display._options.height);
    }
   
    var digCallback = function(x, y, value) {
      var key = x + "," + y;  
      if (value) {
          totalMap.map[key] = new Tile(x, y, "#", true, visible);
          return; 
        }        
        totalMap.map[key] = new Tile(x, y, ".", false, visible);
        totalMap.freeCells.push(key);
    }
    
    digger.create(digCallback.bind(this));
    
    return totalMap;
  }
  
};