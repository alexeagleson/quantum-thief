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
  activeObjects: [],
  gameSpeed: 200,
  gameWidth: 24,
  gameHeight: 24,

  init: function() {
    
    Game.player = new Object(char = "@", name = "Scarlic", wall = true, alive = true, clickFunction = null, myDialogue = null, portraitChar = "@", moveType = null);

    view.defineView();

    Game.travelTo(creativeContent.draculaThrone);
    
  },
  
  computeFOV: function() {
    
    var fov = new ROT.FOV.PreciseShadowcasting(Game.checkIfWall);

    /* output callback */
    fov.compute(Game.player.x, Game.player.y, 4, function(x, y, r, visibility) {
      if (visibility < 0.75) {
        // nada
      } else if (Game.CompleteMap.map[x + "," + y].visible === false) {
        Game.CompleteMap.map[x + "," + y].visible = true;
        Game.renderCoords(x, y, delay = 20);
      }
    });
  },
  
  
  travelTo: function(worldFunction, ascii) {

    scheduler = new ROT.Scheduler.Simple();
    this.activeObjects = [];

    Game.currentUniverse = worldFunction();
    Game.CompleteMap = Game.currentUniverse[Game.currentFloor];
    if (!ascii) {
      this.display.setOptions(Game.CompleteMap.tileLegend);
    }
    emptyCell = Game.CompleteMap.randomEmptyCellCoords();
    Game.CompleteMap.addObjectToMap(Game.player, emptyCell.x, emptyCell.y);
    
    this.activeObjects.forEach(function(object) {
      if (object.alive) { scheduler.add(object, true); }
    })
    
    this.engine = new ROT.Engine(scheduler);
    this.engine.start();
    
    Game.computeFOV();
    Game.renderGame();
    
    setTimeout(function() { 
      Game.renderGame();
    }, 500);
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
    
    setTimeout(function() { 
      if (Game.hudWidth < Game.hudHeight) {
        Game.gameHUD.drawText(0, 0, displayChar, Game.hudWidth);
        Game.gameHUD.drawText(0, 1, Game.player.portraitChar, Game.hudWidth);
      } else {
        Game.gameHUD.drawText(0, 0, displayChar, Game.hudWidth);
        Game.gameHUD.drawText(1, 0, Game.player.portraitChar, Game.hudWidth);
      }
    }, 50);
  },
  
  floorUp: function() {
    Game.currentFloor += 1;
    Game.CompleteMap = Game.currentUniverse[Game.currentFloor];
    for (var key in Game.CompleteMap.map) {
      Game.CompleteMap.map[key].objectsOnThisTile.forEach(function(object) {
        if (object.char === "<") {
          Game.player.x = object.x;
          Game.player.y = object.y;
        }
      });
    }
    Game.renderGame();
  },
  
  floorDown: function() {
    Game.currentFloor -= 1;
    Game.CompleteMap = Game.currentUniverse[Game.currentFloor];
    for (var key in Game.CompleteMap.map) {
      Game.CompleteMap.map[key].objectsOnThisTile.forEach(function(object) {
        if (object.char === ">") {
          Game.player.x = object.x;
          Game.player.y = object.y;
        }
      });
    }
    Game.renderGame();
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

      if (floor === 0) {
        mapType = "Rogue Open";
      } else if (floor === 1) {
        mapType = "Rogue";
      } else if (floor === 2) {
        mapType = "DividedMaze";
      }
    }
    
    var totalMap = new CompleteMap(thisMap, tileLegend, floor);

    var digger = null;

    if (mapType === "Arena") {
      digger = new ROT.Map.Arena(Game.display._options.width, Game.display._options.height);
    } else if (mapType === "Rogue") {
      digger = new ROT.Map.Rogue(Game.display._options.width, Game.display._options.height);
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