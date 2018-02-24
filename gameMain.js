//var tileSet = document.createElement("img");
//tileSet.src = "https://cdn.glitch.com/8d5360ec-82cb-4488-81d6-164fd5245bb1%2Fsssss.png?1519350658180";

var Game = {
  mainDisplayDiv: null,
  display: null,
  menu: null,
  gameHUD: null,
  currentMenuDisplay: null,
  CompleteMap: null,
  engine: null,
  player: null,
  activeObjects: [],
  gameSpeed: 300,
  gameWidth: 20,
  gameHeight: 20,

  init: function() {
    
    view.defineView();
    
    //debugger;

    //this.generateMap();

    Game.CompleteMap = Game.createMap(creativeContent.throneTile, creativeContent.throneLegend);
    Game.CompleteMap.addObjectToMap(creativeContent.scottDracula);
    Game.player = creativeContent.scottDracula;
    
    
    
    
    
    
    this.drawWholeMap();
    this.drawAllObjects();
    
    if (true) {
      this.display.setOptions(Game.CompleteMap.tileLegend);
    }

    var scheduler = new ROT.Scheduler.Simple();
    this.activeObjects.forEach(function(object) {
      if (object.alive) { scheduler.add(object, true); }
    })
    this.engine = new ROT.Engine(scheduler);
    this.engine.start();
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
    for (var key in Game.CompleteMap.map) {
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      Game.CompleteMap.map[key].drawTile();
    }
  },
  
  drawAllObjects: function() {
    this.activeObjects.forEach(function(object) {
      Game.display.draw(object.x, object.y, object.char);
    });
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
  
  createMap:function(tileset, tileMap) {

    var thisMap = {};
    var tileElement = document.createElement("img");
    tileElement.src = tileset;
    al

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


    var totalMap = new CompleteMap(thisMap, tileSet, tileLegend);

    var digger = new ROT.Map.Arena(Game.display._options.width, Game.display._options.height);

    var digCallback = function(x, y, value) {
      var key = x + "," + y;  
      if (value) {
          totalMap.map[key] = new Tile(x, y, "#", true);
          return; 
        }
        totalMap.map[key] = new Tile(x, y, "a", false);
        totalMap.freeCells.push(key);
    }
    digger.create(digCallback.bind(this));


    return totalMap;
  }
  
};