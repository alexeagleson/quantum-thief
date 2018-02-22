var Menu = function(textStrings, coords, fgColours) {
  this.textStrings = textStrings;
  //this.spaces = spaces;
  this.fgColours = fgColours;
  
  linesStarts = [];
  
  currentY = 2;
  for (var i = 0; i < this.textStrings; i++) {
    
  
  
  
  
}

function createMenuAndDisplay(menuObject) {
  Game.menu.clear();
  for (var i = 0; i < menuObject.textStrings.length; i++) {
    Game.menu.drawText(menuObject.coords[i][0], menuObject.coords[i][1], "%c{" + menuObject.fgColours[i] + "}" + menuObject.textStrings[i], (Game.display._options.width - 4));
  }
  
  for (var i = 0; i < Game.display._options.width; i++) {
    for (var j = 0; j < Game.display._options.height; j++) {
      if (i === 0 || j === 0 || i === (Game.display._options.width - 1) || j === (Game.display._options.height - 1)) {
        Game.menu.drawText(i, j, "#", (Game.display._options.width - 2));
      }
    }
  }
  view.showMenu();
}


var Tile = function(x, y, char, wall) {
  this.x = x;
  this.y = y;
  this.wall = wall;
  this.char = char;

  this.objectsOnThisTile = [];

  this.draw = function() {
    Game.display.draw(this.x, this.y, Game.map[this.x + "," + this.y].char);
    
    this.objectsOnThisTile.forEach(function(object) {
      Game.display.draw(object.x, object.y, object.char);
    });
  };
}

var Object = function(x, y) {
  this.x = x;
  this.y = y;
  this.char = "@";
  this.name = "jimmyjo",
  this.wall = true,
  this.path = [],
    
  this.act = function() {
    Game.engine.lock();
    
    if (this === Game.player) {
      this.handlePlayerTurn();
    } else{
      this.handleNpcTurn();
    }
  },
    
  this.handlePlayerTurn = function() {
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
    Game.engine.unlock();
    
    if(!step) {
      return false;
    }
    
    return this.moveToward({x: step.x, y: step.y});
    
  },

  this.move = function(directionArray) {
    
    
    
    var newX = this.x + directionArray[0];
    var newY = this.y + directionArray[1];
    var newKey = newX + "," + newY;
    
    if (!(newKey in Game.map)) {
      return false; 
    }
    
    if (Game.map[newX + "," + newY].wall) {
      return false;
    }
    
    var tileOccupied = false;
    
    Game.map[newX + "," + newY].objectsOnThisTile.forEach(function(object) {
      if (object.wall) {
        tileOccupied = object;
        return false;
      }
    });
    
    if (tileOccupied) {
      this.talkTo(tileOccupied);
      return false;
    }
    
    Game.map[this.x + "," + this.y].objectsOnThisTile = [];
    Game.map[this.x + "," + this.y].draw();
    this.x = newX;
    this.y = newY;
    Game.map[this.x + "," + this.y].objectsOnThisTile.push(this);
    Game.map[this.x + "," + this.y].draw();

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
    
    var textStrings = [this.name, "Hello what are you doing here?", "bimmyjo", "Oh I'm just looking for things.", "jimmyjo", "that is cool"]
    var coords = [[2, 2], [2, 3], [2, 6], [2, 7], [2, 10], [2, 11]];
    var fgColours = ["blue", "white", "red", "white", "blue", "white"];

    var thisMenu = new Menu(textStrings, coords, fgColours);
    
    createMenuAndDisplay(thisMenu);

  },

  this.handleEvent = function(e) {
    var gameCanvas = Game.display.getContainer();
    
    if (e.type === "mousedown") {
      var mousePos = getMousePos(gameCanvas, e);
      Game.player.moveToward(convertMouseTouchToTile(mousePos));
      
    } else if (e.type === "touchstart") {
      var mousePos = getTouchPos(gameCanvas, e);
      Game.player.moveToward(convertMouseTouchToTile(mousePos));
      
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
      if (!(code in keyMap)) {
        return;
      }

      // is there a free space?
      var dir = ROT.DIRS[8][keyMap[code]];

      this.move(dir);
    }
      
    gameCanvas.removeEventListener("mousedown", this);
    gameCanvas.removeEventListener("touchstart", this);
    window.removeEventListener("keydown", this);

    setTimeout(function() { 
      Game.engine.unlock(); 
    }, 200); 
  }
}