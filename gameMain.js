//var tileSet = document.createElement("img");
//tileSet.src = "https://cdn.glitch.com/8d5360ec-82cb-4488-81d6-164fd5245bb1%2Fsssss.png?1519350658180";

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
  gameSpeed: 300,
  gameWidth: 24,
  gameHeight: 24,

  init: function() {

    view.defineView();
    
    Game.currentUniverse = creativeContent.iceUniverse();
  
    Game.CompleteMap = Game.currentUniverse[Game.currentFloor];
    
    Game.player = creativeContent.scottDracula;
    
    Game.renderGame();

    
    if (true) {
      this.display.setOptions(Game.CompleteMap.tileLegend);
    }

    var scheduler = new ROT.Scheduler.Simple();
    this.activeObjects.forEach(function(object) {
      if (object.alive) { scheduler.add(object, true); }
    })
    this.engine = new ROT.Engine(scheduler);
    this.engine.start();
    
    Game.renderGame();
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
  
  createMap:function(tileset, tileMap, floor, mapType) {

    var thisMap = {};
    var tileElement = document.createElement("img");
    tileElement.src = tileset;

    var tileLegend = {
        width: Game.display._options.width,
        height: Game.display._options.height,
        layout: "tile",
        bg: "transparent",
        tileWidth: 32,
        tileHeight: 32,
        tileSet: tileElement,
        tileMap
      };

    if (!mapType) {
      var d4 = rollDie(4);

      if (d4 === 1) {
        mapType = "Arena";
      } else if (d4 === 2) {
        mapType = "Rogue";
      } else if (d4 === 3) {
        mapType = "Digger";
      } else if (d4 === 4) {
        mapType = "DividedMaze";
      }
    }
    
    var totalMap = new CompleteMap(thisMap, tileLegend, floor);

    
    var digger = new ROT.Map.Cellular(Game.display._options.width, Game.display._options.height);

    var digCallback = function(x, y, value) {
      var key = x + "," + y;  
      if (value) {
          totalMap.map[key] = new Tile(x, y, "#", true);
          return; 
        }
        totalMap.map[key] = new Tile(x, y, ".", false);
        totalMap.freeCells.push(key);
    }
    digger.create(digCallback.bind(this));
    
    return totalMap;
  }
  
};