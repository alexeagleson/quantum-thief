var CompleteMap = function(map, tileLegend, floor) {
  this.map = map;
  this.tileLegend = tileLegend;
  this.freeCells = [];
  this.floor = floor;
  this.activeObjects = [];
  
  this.randomEmptyCellCoords = function() {
    var index = Math.floor(ROT.RNG.getUniform() * this.freeCells.length);
    var key = this.freeCells.splice(index, 1)[0];
    var parts = key.split(",");
    var x = parseInt(parts[0]);
    var y = parseInt(parts[1]);
    return {x: x, y: y};
  };
  
  this.addObjectToMap = function(object, x, y) {
    object.x = x;
    object.y = y;
    this.map[x + "," + y].objectsOnThisTile.push(object);
    if (object.alive) {
      this.activeObjects.push(object);
    }
  };
}


var Tile = function(x, y, char, wall, visible) {
  this.x = x;
  this.y = y;
  this.wall = wall;
  this.char = char;
  this.objectsOnThisTile = [];
  this.visible = visible;

  this.drawTile = function() {
    if (!this.visible) { 
      Game.display.draw(this.x, this.y, "~");
      return;
    }
    Game.display.draw(this.x, this.y, Game.CompleteMap.map[this.x + "," + this.y].char);
  };
  
  this.drawObjects = function() {
    if (!this.visible) { 
      Game.display.draw(this.x, this.y, "~");
      return;
    }
    this.objectsOnThisTile.forEach(function(object) {
      Game.display.draw(object.x, object.y, object.char);
    });
  };
}



var Object = function(char, name, wall, alive, clickFunction, myDialogue, portraitChar, moveType) {
  this.x = null;
  this.y = null;
  this.char = char;
  this.name = name,
  this.wall = wall,
  this.alive = alive,
  this.path = [],
  this.clickFunction = clickFunction,
  this.myDialogue = myDialogue,
  this.portraitChar = portraitChar,
  this.moveType = moveType,
  
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
    if (!this.moveType) {
      return true;
    }
    
    if (this.moveType === "follow") {
      let astar = new ROT.Path.AStar(Game.player.x, Game.player.y, Game.checkIfWall, {topology: 4});
      let addPath = (x, y) => this.path.push({x, y});
      astar.compute(this.x, this.y, addPath);

      this.path.shift();
      let step = this.path.shift();
      this.path = [];

      if(!step) { return false; }

      if (Game.CompleteMap.map[step.x + "," + step.y].objectsOnThisTile.length > 0) {
        return this.moveRandom();
      }
      return this.moveToward({x: step.x, y: step.y});
      
    } else if (this.moveType === "random") {
      return this.moveRandom();
    } else {
      return true;
    }
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
    
    this.moveTo(newX, newY);
  },
    
  this.moveTo = function(newX, newY) {
    var spliceLocation = null;
    
    for (var i = 0; i < Game.CompleteMap.map[this.x + "," + this.y].objectsOnThisTile.length; i++) {
      if (this === Game.CompleteMap.map[this.x + "," + this.y].objectsOnThisTile[i]) {
        spliceLocation = i;
      }
    }
    
    if (spliceLocation != null) {
      Game.CompleteMap.map[this.x + "," + this.y].objectsOnThisTile.splice(spliceLocation, 1);
    }
    
    Game.renderCoords(this.x, this.y, delay = 30);
    this.x = newX;
    this.y = newY;
    Game.CompleteMap.map[this.x + "," + this.y].objectsOnThisTile.push(this);
    Game.renderCoords(this.x, this.y, delay = 10);
    
    Game.computeFOV();
    
    return true;
  }, 
    
  this.moveToward = function(targetTileCoords) {
    var dx = targetTileCoords.x - this.x;
    var dy = targetTileCoords.y - this.y;

    if (dx > 0 && (Math.abs(dx) >= Math.abs(dy))) {
      return this.move([1, 0]);
    } else if (dx < 0 && (Math.abs(dx) >= Math.abs(dy))) {
      return this.move([-1, 0]);
    } else if (dy < 0 && (Math.abs(dy) >= Math.abs(dx))) {
      return this.move([0, -1]);
    } else if (dy > 0 && (Math.abs(dy) >= Math.abs(dx))) {
      return this.move([0, 1]);
    }
    return false;
  },
    
  this.moveRandom = function() {
    var d10 = rollDie(10);
    var moveSuccess = false;
    
    if (d10 === 1) {
      moveSuccess = this.move([1, 0]);
    } else if (d10 === 2) {
      moveSuccess = this.move([-1, 0]);
    } else if (d10 === 3) {
      moveSuccess = this.move([0, 1]);
    } else if (d10 === 4) {
      moveSuccess = this.move([0, -1]);
    } else if (d10 === 5) {
      moveSuccess = true;
    } else if (d10 === 6) {
      moveSuccess = true;
    } else if (d10 === 7) {
      moveSuccess = true;
    } else if (d10 === 8) {
      moveSuccess = true;
    } else if (d10 === 9) {
      moveSuccess = true;
    } else if (d10 === 10) {
      moveSuccess = true;
    }
    return moveSuccess;
  },
    
  this.clickedOn = function() {
    if (this.clickFunction === "talk") {
      if (this.myDialogue) {
        var currentObject = this;
        setTimeout(function() { Game.faceHUD(creativeContent.allFacePortraits, currentObject); }, 10);
        showMenu(this.myDialogue);
      }
    } else if (this.clickFunction === "floor up") {
      Game.floorUp();
    } else if (this.clickFunction === "floor down") {
      Game.floorDown();
    }
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
          var distance = distanceTo(this, objectAtTile(tileLocation));
          if (distance < 1.5) {
            objectAtTile(tileLocation).clickedOn();
          } else {
            Game.player.moveToward(convertMouseTouchToTile(mousePos));
          }
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

