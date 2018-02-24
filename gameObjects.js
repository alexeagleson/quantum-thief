var CompleteMap = function(map, tileset, tileLegend) {
  this.map = map;
  this.tileset = tileset;
  this.tileLegend = tileLegend;
  this.freeCells = [];
  
  this.randomEmptyCellCoords = function() {
    var index = Math.floor(ROT.RNG.getUniform() * this.freeCells.length);
    var key = this.freeCells.splice(index, 1)[0];
    var parts = key.split(",");
    var x = parseInt(parts[0]);
    var y = parseInt(parts[1]);
    return {x: x, y: y};
  };
  
  this.addObjectToMap = function(object) {
    this.map[object.x + "," + object.y].objectsOnThisTile.push(object);
    Game.activeObjects.push(object);
  };
}


var Tile = function(x, y, char, wall) {
  this.x = x;
  this.y = y;
  this.wall = wall;
  this.char = char;
  this.objectsOnThisTile = [];

  this.drawTile = function() {
    Game.display.draw(this.x, this.y, Game.CompleteMap.map[this.x + "," + this.y].char);
  };
  
  this.drawObjects = function() {
    this.objectsOnThisTile.forEach(function(object) {
      Game.display.draw(object.x, object.y, object.char);
    });
  };
}



var Object = function(x, y, char, name, wall, alive) {
  this.x = x;
  this.y = y;
  this.char = char;
  this.name = name,
  this.wall = wall,
  this.alive = alive,
  this.path = [],
    
  this.act = function() {
    if (this === Game.player) {
      this.handlePlayerTurn();
    } else{
      this.handleNpcTurn();
    }
  },
    
  this.handlePlayerTurn = function() {
    Game.engine.lock();
    var gameCanvas = Game.display.getContainer();
    window.addEventListener("keydown", this);
    gameCanvas.addEventListener("mousedown", this);
    gameCanvas.addEventListener("touchstart", this);
  },
    
  this.handleNpcTurn = function() {
    let astar = new ROT.Path.AStar(Game.player.x, Game.player.y, Game.checkIfWall, {topology: 4});
    let addPath = (x, y) => this.path.push({x, y});
    astar.compute(this.x, this.y, addPath);
  
    this.path.shift();
    let step = this.path.shift();
    this.path = [];
    
    if(!step) { return false; }
    
    return this.moveToward({x: step.x, y: step.y});
  },

  this.move = function(directionArray) {
    var newX = this.x + directionArray[0];
    var newY = this.y + directionArray[1];
    var newKey = newX + "," + newY;
    var tileOccupied = false;
    
    if (!(newKey in Game.CompleteMap.map)) { return false; }
    
    if (Game.CompleteMap.map[newX + "," + newY].wall) { return false; }
    
    Game.CompleteMap.map[newX + "," + newY].objectsOnThisTile.forEach(function(object) {
      if (object.wall) {
        tileOccupied = object;
        return false;
      }
    });
    
    if (tileOccupied) { return false; }
    
    var spliceLocation = null;
    for (var i = 0; i < Game.CompleteMap.map[this.x + "," + this.y].objectsOnThisTile.length; i++) {
      if (this === Game.CompleteMap.map[this.x + "," + this.y].objectsOnThisTile[i]) {
        spliceLocation = i;
      }
    }
    
    if (spliceLocation != null) {
      Game.CompleteMap.map[this.x + "," + this.y].objectsOnThisTile.splice(spliceLocation, 1);
    }
    
    Game.CompleteMap.map[this.x + "," + this.y].drawTile();
    Game.CompleteMap.map[this.x + "," + this.y].drawObjects();
    this.x = newX;
    this.y = newY;
    Game.CompleteMap.map[this.x + "," + this.y].objectsOnThisTile.push(this);
    Game.CompleteMap.map[this.x + "," + this.y].drawTile();
    Game.CompleteMap.map[this.x + "," + this.y].drawObjects();
    return true;
  }, 
    
  this.moveToward = function(targetTileCoords) {
    var dx = targetTileCoords.x - this.x;
    var dy = targetTileCoords.y - this.y;

    if (dx > 0 && (Math.abs(dx) > Math.abs(dy))) {
      return this.move([1, 0]);
    } else if (dx < 0 && (Math.abs(dx) > Math.abs(dy))) {
      return this.move([-1, 0]);
    } else if (dy < 0 && (Math.abs(dy) > Math.abs(dx))) {
      return this.move([0, -1]);
    } else if (dy > 0 && (Math.abs(dy) > Math.abs(dx))) {
      return this.move([0, 1]);
    }
    return false;
  },
    
  this.moveRandom = function() {
    var d4 = rollDie(4);
    var moveSuccess = false;
    
    if (d4 === 1) {
      moveSuccess = this.move([1, 0]);
    } else if (d4 === 2) {
      moveSuccess = this.move([-1, 0]);
    } else if (d4 === 3) {
      moveSuccess = this.move([0, 1]);
    } else if (d4 === 4) {
      moveSuccess = this.move([0, -1]);
    }
    return moveSuccess;
  },
    
  this.talkTo = function(object) {
    var textStrings = [this.name, "Hello what are you doing here?", "bimmyjo", "Oh I'm just looking for things.", "jimmyjo", "that is cool"];
    var spaces = [0, 1, 0, 1, 0,];
    var fgColours = ["blue", "white", "red", "white", "blue", "white"];
    var responseFunction = {};
    var thisMenu = new Menu(textStrings, spaces, fgColours, responseFunction);
    thisMenu.display();
  },

  this.handleEvent = function(e) {
    var gameCanvas = Game.display.getContainer();

    if (gameCanvas.style.display === "block") {
      if (e.type === "mousedown" || e.type === "touchstart") {
        if (e.type === "mousedown") {
          var mousePos = getMousePos(gameCanvas, e);
        } else if (e.type === "touchstart") {
          var mousePos = getTouchPos(gameCanvas, e);
        }
        var tileLocation = convertMouseTouchToTile(mousePos);

        if (objectAtTile(tileLocation)) {
          Game.player.talkTo(objectAtTile(convertMouseTouchToTile(mousePos)));
        } else {
          Game.player.moveToward(convertMouseTouchToTile(mousePos));
        }
      } else if (e.type === "keydown") {
        var keyMap = {};
        keyMap[38] = 0;
        keyMap[33] = 1;
        keyMap[39] = 2;
        keyMap[34] = 3;
        keyMap[40] = 4;
        keyMap[35] = 5;
        keyMap[37] = 6;
        keyMap[36] = 7;

        var code = e.keyCode;
        // one of numpad directions?
        if (!(code in keyMap)) { return; }

        // is there a free space?
        var dir = ROT.DIRS[8][keyMap[code]];

        this.move(dir);
      }
      gameCanvas.removeEventListener("mousedown", this);
      gameCanvas.removeEventListener("touchstart", this);
      window.removeEventListener("keydown", this);

      setTimeout(function() { 
        Game.engine.unlock(); 
      }, Game.gameSpeed);
    }
  }
}