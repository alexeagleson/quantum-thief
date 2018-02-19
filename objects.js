var Tile = function(x, y, char, wall) {
  this._x = x;
  this._y = y;
  this._wall = wall;
  this._char = char;

  this._objectsOnThisTile = [];

  this._draw = function() {
    Game.display.draw(this._x, this._y, Game.map[this._x + "," + this._y]._char);
    
    this._objectsOnThisTile.forEach(function(object) {
      Game.display.draw(object._x, object._y, object._char);
    });
  };
}

var Object = function(x, y) {
  this._x = x;
  this._y = y;
  this._char = "@";
  this.turnReady = true,
    
  this.act = function() {
      Game.engine.lock();
      window.addEventListener("keydown", this);
  },

  this.move = function(directionArray) {
    var newX = this._x + directionArray[0];
    var newY = this._y + directionArray[1];
    var newKey = newX + "," + newY;
    
    if (!(newKey in Game.map)) {
      return; 
    }
    
    if (Game.map[newX + "," + newY]._wall) {
      return;
    }

    Game.map[this._x + "," + this._y]._objectsOnThisTile = [];
    Game.map[this._x + "," + this._y]._draw();
    this._x = newX;
    this._y = newY;
    Game.map[this._x + "," + this._y]._objectsOnThisTile.push(this);
    Game.map[this._x + "," + this._y]._draw();
  },  

  this.handleEvent = function(e) {
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
      /* one of numpad directions? */
      if (!(code in keyMap)) { return; }

      /* is there a free space? */
      var dir = ROT.DIRS[8][keyMap[code]];

      this.move(dir);

      window.removeEventListener("keydown", this);

      Game.engine.unlock();
  }
}


    