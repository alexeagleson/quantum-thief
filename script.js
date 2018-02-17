var tileSet = document.createElement("img");
tileSet.src = "http://ondras.github.io/rot.js/manual/tiles.png";

var Game = {

  display: null,
  map: {},
  engine: null,
  player: null,
  
  allObjects: [],
  nonAffixedObjects: [],

  init: function() {
    debugger;
    var options = {
      layout: "tile",
      bg: "transparent",
      tileWidth: 64,
      tileHeight: 64,
      tileSet: tileSet,
      tileMap: {
        "@": [0, 0],
        "#": [0, 64],
        "a": [64, 0],
        "!": [64, 64]
      }
    }

    this.display = new ROT.Display(options);
    document.body.appendChild(this.display.getContainer());

    this._generateMap();

    var scheduler = new ROT.Scheduler.Simple();
    scheduler.add(this.player, true);

    this.engine = new ROT.Engine(scheduler);
    this.engine.start();

    view.createMoveButtons();
  },

  _generateMap: function() {
    var digger = new ROT.Map.Rogue(20, 25);
    var freeCells = [];

    var digCallback = function(x, y, value) {
      var key = x + "," + y;  
      if (value) {
          this.map[key] = new Tile(x, y, "#", true);
          return; 
        }


        this.map[key] = new Tile(x, y, "a", false);
        freeCells.push(key);
    }
    digger.create(digCallback.bind(this));

    this._generateBoxes(freeCells);
    this._drawWholeMap();
    this._createPlayer(freeCells);
  },

  _createPlayer: function(freeCells) {
    var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
    var key = freeCells.splice(index, 1)[0];
    var parts = key.split(",");
    var x = parseInt(parts[0]);
    var y = parseInt(parts[1]);
    this.player = new Object(x, y);
  },

  _generateBoxes: function(freeCells) {
    for (var i = 0; i < 10; i++) {
      var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
      var key = freeCells.splice(index, 1)[0];
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      this.map[key] = new Tile(x, y, "!", false);
    }
  },

  _drawWholeMap: function() {
    for (var key in this.map) {
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      this.map[key]._draw();
    }
  }
};

var Tile = function(x, y, char, wall) {
  this._x = x;
  this._y = y;
  this._wall = wall;
  this._char = char;

  this._objectsOnThisTile = [];

  this._draw = function() {
    Game.display.draw(this._x, this._y, Game.map[this._x + "," + this._y]._char);
    
    //this._objectsOnThisTile.forEach(function(object) {
    //  Game.display.draw(object._x, object._y, object._char);
    //});
  };
}

var Object = function(x, y) {
  this._x = x;
  this._y = y;
  this._char = "@";

  this.move = function(directionArray) {
    var newX = this._x + directionArray[0];
    var newY = this._y + directionArray[1];
    var newKey = newX + "," + newY;
    if (!(newKey in Game.map)) {
      return; 
    }

    Game.map[this._x + "," + this._y]._draw();
    this._x = newX;
    this._y = newY;
    Game.map[this._x + "," + this._y]._draw();
    
  };  
}


    
Object.prototype.act = function() {
    Game.engine.lock();
    window.addEventListener("keydown", this);
}
    
Object.prototype.handleEvent = function(e) {
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


var view = {
  createMoveButtons: function() {
    var moveButtonsDiv = document.createElement("div");
    moveButtonsDiv.className = "allButtons";
    
    var buttonLeft = document.createElement("button");
    var buttonRight = document.createElement("button");
    var buttonUp = document.createElement("button");
    var buttonDown = document.createElement("button");
    
    buttonLeft.className = "moveButton";
    buttonRight.className = "moveButton";
    buttonUp.className = "moveButton";
    buttonDown.className = "moveButton";
    
    buttonLeft.innerText = "Left";
    buttonRight.innerText = "Right";
    buttonUp.innerText = "Up";
    buttonDown.innerText = "Down";

    buttonLeft.addEventListener("click", handlers.moveLeft);
    buttonRight.addEventListener("click", handlers.moveRight);
    buttonUp.addEventListener("click", handlers.moveUp);
    buttonDown.addEventListener("click", handlers.moveDown);

    moveButtonsDiv.appendChild(buttonLeft);
    moveButtonsDiv.appendChild(buttonRight);
    moveButtonsDiv.appendChild(buttonUp);
    moveButtonsDiv.appendChild(buttonDown);

    document.body.appendChild(moveButtonsDiv);    
  }
}

var handlers = {
  moveLeft: function() {
    Game.player.move([-1, 0]);
  },
  moveRight: function() {
    Game.player.move([1, 0]);
  },
  moveUp: function() {
    Game.player.move([0, -1]);
  },
  moveDown: function() {
    Game.player.move([0, 1]);
  }
}