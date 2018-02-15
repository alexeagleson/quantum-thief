/** TODO: Ditch "alert" pop-ups. I hate them.
    TODO: Make things like the number and level of pedros, dependent on game level
    TODO: Every time you find the Pineapple, start a new level.
*/

var Game = {
  display: null,
  map: {},
  engine: null,
  player: null,
  numPedros: 3,
  pedros: [],
  ananas: null,

  init: function() {
    this.display = new ROT.Display({
      spacing: 1.1
    });
    document.body.appendChild(this.display.getContainer());

    this._generateMap();

    var scheduler = new ROT.Scheduler.Simple();
    scheduler.add(this.player, true);
    for (var i = 0; i < this.pedros.length; i++) {
      scheduler.add(this.pedros[i], true);
    }

    this.engine = new ROT.Engine(scheduler);
    this.engine.start();
  },

  _generateMap: function() {
    var digger = new ROT.Map.Digger();
    var freeCells = [];

    var digCallback = function(x, y, value) {
      if (value) {
        return;
      }

      var key = x + "," + y;
      this.map[key] = ".";
      freeCells.push(key);
    }
    digger.create(digCallback.bind(this));

    this._generateBoxes(freeCells);
    this._drawWholeMap();

    this.player = this._createBeing(Player, freeCells);

    var i = 0;
    while (i < this.numPedros) {
      this.pedros.push(this._createBeing(Pedro, freeCells));
      i += 1;
    }
  },

  _createBeing: function(what, freeCells) {
    var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
    var key = freeCells.splice(index, 1)[0];
    var parts = key.split(",");
    var x = parseInt(parts[0]);
    var y = parseInt(parts[1]);
    return new what(x, y);
  },

  _generateBoxes: function(freeCells) {
    for (var i = 0; i < 10; i++) {
      var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
      var key = freeCells.splice(index, 1)[0];
      this.map[key] = "*";
      if (!i) {
        this.ananas = key;
      } /* first box contains an ananas */
    }
  },

  _drawWholeMap: function() {
    for (var key in this.map) {
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      this.display.draw(x, y, this.map[key]);
    }
  }
};

var Player = function(x, y) {
  this._x = x;
  this._y = y;
  this._lvl = 1;
  this._draw();
}

Player.prototype.getSpeed = function() {
  return 100;
}
Player.prototype.getX = function() {
  return this._x;
}
Player.prototype.getY = function() {
  return this._y;
}
Player.prototype.getLevel = function() {
  return this._lvl;
}

Player.prototype.act = function() {
  Game.engine.lock();
  window.addEventListener("keydown", this);
}

Player.prototype.handleEvent = function(e) {
  var code = e.keyCode;
  if (code == 13 || code == 32) {
    this._checkBox();
    return;
  }

  var keyMap = {};
  keyMap[38] = 0;
  keyMap[33] = 1;
  keyMap[39] = 2;
  keyMap[34] = 3;
  keyMap[40] = 4;
  keyMap[35] = 5;
  keyMap[37] = 6;
  keyMap[36] = 7;

  /* one of numpad directions? */
  if (!(code in keyMap)) {
    return;
  }

  /* is there a free space? */
  var dir = ROT.DIRS[8][keyMap[code]];
  var newX = this._x + dir[0];
  var newY = this._y + dir[1];
  var newKey = newX + "," + newY;
  if (!(newKey in Game.map)) {
    return;
  }

  Game.display.draw(this._x, this._y, Game.map[this._x + "," + this._y]);
  this._x = newX;
  this._y = newY;
  this._draw();
  window.removeEventListener("keydown", this);
  Game.engine.unlock();
}

Player.prototype._draw = function() {
  Game.display.draw(this._x, this._y, "@", "#ff0");
}

Player.prototype._checkBox = function() {
  var key = this._x + "," + this._y;
  if (Game.map[key] != "*") {
    alert("There is no box here!");
  } else if (key == Game.ananas) {
    alert("Hooray! You found an ananas and won this game.");
    Game.engine.lock();
    window.removeEventListener("keydown", this);
  } else {
    alert("This box is empty.  :-(");
  }
}

var Pedro = function(x, y) {
  this._x = x;
  this._y = y;
  this._lvl = 10;
  this._memory = 3; /** How long will Pedro keep following you, after he loses you? */
  this._lastSaw = 0; /** How recently did Pedro see you? */
  this._mobility = 0.75; /** 0.0 will always try to walk, 1.0 will never walk. */
  this._draw();
}

Pedro.prototype.getLevel = function() {
  return this._lvl;
}
Pedro.prototype.getSpeed = function() {
  return 100;
}

/**
Bresenham-based LOS algo.
http://stackoverflow.com/questions/4672279/bresenham-algorithm-in-javascript
 */
Pedro.prototype.playerInLOS = function() {
  var pedX = this._x;
  var pedY = this._y;

  var playerX = Game.player.getX();
  var playerY = Game.player.getY();

  var deltaX = Math.abs(pedX - playerX);
  var deltaY = Math.abs(pedY - playerY);

  var sx = (pedX < playerX) ? 1 : -1;
  var sy = (pedY < playerY) ? 1 : -1;
  var err = deltaX - deltaY;

  var newKey = pedX + "," + pedY;

  while (pedX !== playerX || pedY !== playerY) {
    if (!(newKey in Game.map)) {
      return false;
    }

    var e2 = 2 * err;

    if (e2 > -deltaY) {
      err -= deltaY;
      pedX += sx;
    }
    if (e2 < deltaX) {
      err += deltaX;
      pedY += sy;
    }

    newKey = pedX + "," + pedY;
  }

  return true;
}

Pedro.prototype.act = function() {
  var x = Game.player.getX();
  var y = Game.player.getY();
  this._lastSaw -= 1;

  /** Handle path-finding. End game, if Pedro within one cell. */
  var passableCallback = function(x, y) {
    return (x + "," + y in Game.map);
  }
  var astar = new ROT.Path.AStar(x, y, passableCallback, {
    topology: 4
  });

  var path = [];
  var pathCallback = function(x, y) {
    path.push([x, y]);
  }
  astar.compute(this._x, this._y, pathCallback);

  path.shift();
  if (path.length <= 1) {
    Game.engine.lock();
    alert("Game over - you were captured by Pedro!");
  }

  /** Pedro shouldn't move until he can SEE the player.
      OR, if he saw the player recently, he can try
      and follow them for a little bit.
   */
  var inLOS = this.playerInLOS();
  if (this._lastSaw <= 0) {
    if (!inLOS) {
      /** If the player is out of sight, Pedro
          will wander around a bit.
       */
      if (Math.random() > this._mobility) {
        x = this._x + (Math.random() < 0.5 ? -1 : 1);
        y = this._y + (Math.random() < 0.5 ? -1 : 1);
        if ((x + "," + y) in Game.map) {
          Game.display.draw(this._x, this._y, Game.map[this._x + "," + this._y]);
          this._x = x;
          this._y = y;
          this._draw();
        }
      }

      return;
    }
  }
  /** Pedro saw you! He'll remember that, for a while. */
  if (inLOS) {
    this._lastSaw = this._memory;
  }

  /** Lastly, if Pedro can chase you, he will. */
  x = path[0][0];
  y = path[0][1];
  Game.display.draw(this._x, this._y, Game.map[this._x + "," + this._y]);
  this._x = x;
  this._y = y;
  this._draw();
}

/** TODO: Color should depend on the difference between Pedro's level and Players.
          This only matters if you can fight Pedro.
 */
Pedro.prototype._draw = function() {
  Game.display.draw(this._x, this._y, "P", "red");
}


Game.init();
