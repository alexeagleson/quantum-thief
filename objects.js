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
  this.turnReady = true,
    
  this.act = function() {
    Game.engine.lock();
    
    if (this == Game.player) {
      this.handlePlayerTurn();
    } else{
      this.handleNpcTurn();
    }
  },
    
  this.handlePlayerTurn() {
    var gameCanvas = Game.display.getContainer();
    
    window.addEventListener("keydown", this);
    gameCanvas.addEventListener("mousedown", this);
    gameCanvas.addEventListener("touchstart", this);
  },
    
  this.handleNpcTurn() {
    
    this.
  },

  this.move = function(directionArray) {
    var newX = this.x + directionArray[0];
    var newY = this.y + directionArray[1];
    var newKey = newX + "," + newY;
    
    if (!(newKey in Game.map)) {
      return; 
    }
    
    if (Game.map[newX + "," + newY].wall) {
      return;
    }

    Game.map[this.x + "," + this.y].objectsOnThisTile = [];
    Game.map[this.x + "," + this.y].draw();
    this.x = newX;
    this.y = newY;
    Game.map[this.x + "," + this.y].objectsOnThisTile.push(this);
    Game.map[this.x + "," + this.y].draw();
  },  

  this.handleEvent = function(e) {
    var gameCanvas = Game.display.getContainer();
    
    if (e.type === "mousedown") {
      var mousePos = getMousePos(gameCanvas, e);
      Game.player.move(convertMouseTouchToMovement(mousePos));
      
    } else if (e.type === "touchstart") {
      var mousePos = getTouchPos(gameCanvas, e);
      Game.player.move(convertMouseTouchToMovement(mousePos));
      
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
    }, 10); 
  }
}






