var tileSet = document.createElement("img");
//tileSet.src = "http://ondras.github.io/rot.js/manual/tiles.png";
//tileSet.src = "http://2.bp.blogspot.com/_VSJ0_iRR18s/SMaRLuujkvI/AAAAAAAAAPA/XJZS30OkEpI/s400/nethack.gif";
//tileSet.src = "http://2.bp.blogspot.com/-apOgGCUa2tY/UkrrvGC0lXI/AAAAAAAAABQ/INvtj-x66wM/s1600/PeopleSpriteSheet3.png";
tileSet.src = "https://i.stack.imgur.com/5z1KX.png";

var Game = {

  display: null,
  menu: null,
  map: {},
  engine: null,
  player: null,
  menuOpen: false,
  
  allObjects: [],
  nonAffixedObjects: [],

  init: function() {
    var options = {
      layout: "tile",
      bg: "transparent",
      tileWidth: 32,
      tileHeight: 32,
      tileSet: tileSet,
      tileMap: {
        "@": [224, 64],
        "#": [0, 32],
        "a": [32, 0],
        "!": [64, 64]
      }
    }

    this.display = new ROT.Display(options);
    this.display.getContainer().className = "gameDisplay";
    document.body.appendChild(this.display.getContainer());
    
    this._createMenu();

    this._generateMap();

    var scheduler = new ROT.Scheduler.Simple();
    scheduler.add(this.player, true);

    this.engine = new ROT.Engine(scheduler);
    this.engine.start();

    view.createMoveButtons();
    
    this.menu = new ROT.Display();
    
  },
  
  _createMenu: function () {
    this.menu = new ROT.Display();
    
    this.menu.setOptions({
        width: 35,
        height: 25,
        fontSize: 32
    });
    this.menu.getContainer().className = "menuDisplay";
    this.menu.getContainer().style.display = "none";
    document.body.appendChild(this.menu.getContainer());

    this.menu.drawText(5,  2, "Hello world");

    /* last argument specifies maximum length */
    this.menu.drawText(20, 5, "This line of text is very long.", 16);

    /* lines are broken at word boundaries; lines are trimmed */
    var words = ["lorem", "ipsum", "dolor", "sit", "amet"];
    var long = [];
    for (var i=0;i<30;i++) { 
      long.push(words.random()); 
    }
    long = long.join(" ");

    this.menu.drawText(1, 10, long, 38);
  },
  
  _showMenu: function() {
    debugger;
    
    var moveButtonsDOM = document.getElementsByClassName("moveButtons")[0];
    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var menuDisplayDOM = document.getElementsByClassName("menuDisplay")[0];
    
    if (this.menuOpen === false) {
      this.menuOpen = true;
      moveButtonsDOM.style.display = "block";
      gameDisplayDOM.style.display = "block";
      menuDisplayDOM.style.display = "none";
    } else {
      this.menuOpen = false;
      moveButtonsDOM.style.display = "none";
      gameDisplayDOM.style.display = "none";
      menuDisplayDOM.style.display = "block";
    }
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
    this.map[key]._objectsOnThisTile.push(this.player);
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
    
    this._objectsOnThisTile.forEach(function(object) {
      Game.display.draw(object._x, object._y, object._char);
    });
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
    
    if (Game.map[newX + "," + newY]._wall) {
      return;
    }

    Game.map[this._x + "," + this._y]._objectsOnThisTile = [];
    Game.map[this._x + "," + this._y]._draw();
    this._x = newX;
    this._y = newY;
    Game.map[this._x + "," + this._y]._objectsOnThisTile.push(this);
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
    moveButtonsDiv.className = "moveButtons";
    var menuButtonsDiv = document.createElement("div");
    menuButtonsDiv.className = "menuButtons";
    
    var buttonLeft = document.createElement("button");
    var buttonRight = document.createElement("button");
    var buttonUp = document.createElement("button");
    var buttonDown = document.createElement("button");
    var buttonMenu = document.createElement("button");

    buttonLeft.className = "moveButton";
    buttonRight.className = "moveButton";
    buttonUp.className = "moveButton";
    buttonDown.className = "moveButton";
    buttonMenu.className = "menuButton";
    
    buttonLeft.innerText = "Left";
    buttonRight.innerText = "Right";
    buttonUp.innerText = "Up";
    buttonDown.innerText = "Down";
    buttonMenu.innerText = "Menu";

    buttonLeft.addEventListener("click", handlers.moveLeft);
    buttonRight.addEventListener("click", handlers.moveRight);
    buttonUp.addEventListener("click", handlers.moveUp);
    buttonDown.addEventListener("click", handlers.moveDown);
    buttonMenu.addEventListener("click", Game._showMenu);

    moveButtonsDiv.appendChild(buttonLeft);
    moveButtonsDiv.appendChild(buttonRight);
    moveButtonsDiv.appendChild(buttonUp);
    moveButtonsDiv.appendChild(buttonDown);
    
    menuButtonsDiv.appendChild(buttonMenu);

    document.body.appendChild(moveButtonsDiv);
    document.body.appendChild(menuButtonsDiv);
    
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